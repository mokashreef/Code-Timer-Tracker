import assert from 'node:assert';
import test from 'node:test';

test('Timer elapsed calculation with multiple pauses and active pause', () => {
    const startTime = 1000000;
    const now = 1060000;
    const pausedDuration = 10000; // previously accumulated paused time
    const lastPauseTime = 1055000; // paused 5000ms ago, currently paused

    // When paused
    const currentPause = now - lastPauseTime;
    const elapsedPaused = Math.max(0, now - startTime - pausedDuration - currentPause);
    assert.strictEqual(elapsedPaused, 45000);

    // When running
    const elapsedRunning = Math.max(0, now - startTime - pausedDuration);
    assert.strictEqual(elapsedRunning, 50000);
});

test('Digital clock formatting HH:MM:SS', () => {
    function formatTimeDigital(ms) {
        if (!ms || ms < 0) ms = 0;
        const totalSecs = Math.floor(ms / 1000);
        const hours = Math.floor(totalSecs / 3600);
        const minutes = Math.floor((totalSecs % 3600) / 60);
        const seconds = totalSecs % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    assert.strictEqual(formatTimeDigital(0), '00:00:00');
    assert.strictEqual(formatTimeDigital(59000), '00:00:59');
    assert.strictEqual(formatTimeDigital(65000), '00:01:05');
    assert.strictEqual(formatTimeDigital(3665000), '01:01:05');
    assert.strictEqual(formatTimeDigital(86400000), '24:00:00');
});

test('Duration humanized formatting', () => {
    function formatDuration(ms) {
        if (!ms || ms < 0) return '0m';
        const totalSecs = Math.floor(ms / 1000);
        const hours = Math.floor(totalSecs / 3600);
        const minutes = Math.floor((totalSecs % 3600) / 60);
        const seconds = totalSecs % 60;

        if (hours > 0) return `${hours}h ${minutes}m`;
        if (minutes > 0) return `${minutes}m ${seconds}s`;
        return `${seconds}s`;
    }

    assert.strictEqual(formatDuration(0), '0m');
    assert.strictEqual(formatDuration(45000), '45s');
    assert.strictEqual(formatDuration(125000), '2m 5s');
    assert.strictEqual(formatDuration(3665000), '1h 1m');
});

test('RFC 4180 CSV cell escaping and UTF-8 BOM check', () => {
    function escapeCsvCell(val) {
        if (val === null || val === undefined) return '""';
        const str = String(val);
        if (str.includes('"') || str.includes(',') || str.includes('\n') || str.includes('\r')) {
            return `"${str.replace(/"/g, '""')}"`;
        }
        return `"${str}"`;
    }

    assert.strictEqual(escapeCsvCell('Simple'), '"Simple"');
    assert.strictEqual(escapeCsvCell('Bug, fix'), '"Bug, fix"');
    assert.strictEqual(escapeCsvCell('Said "hello" to all'), '"Said ""hello"" to all"');
    assert.strictEqual(escapeCsvCell('Line1\r\nLine2'), '"Line1\r\nLine2"');

    const csvData = '\uFEFF' + ['Col1,Col2', 'Val1,Val2'].join('\r\n');
    assert.strictEqual(csvData.charCodeAt(0), 0xFEFF);
});

test('Legacy data migration to V2.0 schema', () => {
    const legacy = {
        projects: [
            { id: '1', name: 'Legacy Proj', rate: '50', color: '#ff0000', description: 'Desc' }
        ],
        sessions: [
            { id: 's1', projectId: '1', task: 'Legacy task', duration: 3600000, billable: true, startTime: '2026-08-01T10:00:00.000Z' }
        ]
    };

    function migrateLegacyData(data) {
        const projects = (data.projects || []).map((p, idx) => ({
            id: p.id || `migrated_proj_${idx}`,
            name: p.name || 'Unnamed',
            description: p.description || '',
            category: 'General',
            color: p.color || '#10b981',
            hourlyRate: parseFloat(p.rate) || 0,
            estimatedHours: 0,
            techStack: [],
            archived: false
        }));

        const sessions = (data.sessions || []).map((s, idx) => ({
            id: s.id || `migrated_sess_${idx}`,
            projectId: s.projectId || '',
            taskTitle: s.task || 'General',
            duration: s.duration || 0,
            billable: !!s.billable,
            hourlyRate: 0,
            earned: 0
        }));

        return { version: '2.0', projects, sessions, tasks: [], settings: {} };
    }

    const migrated = migrateLegacyData(legacy);
    assert.strictEqual(migrated.version, '2.0');
    assert.strictEqual(migrated.projects.length, 1);
    assert.strictEqual(migrated.projects[0].hourlyRate, 50);
    assert.strictEqual(migrated.projects[0].name, 'Legacy Proj');
    assert.strictEqual(migrated.sessions.length, 1);
    assert.strictEqual(migrated.sessions[0].taskTitle, 'Legacy task');
});

test('Active coding streak calculation', () => {
    function calcStreak(sessions, todayStr, yesterdayStr) {
        if (!sessions.length) return 0;
        const activeDays = new Set(sessions.map(s => s.startTime.split('T')[0]));
        const sortedDays = Array.from(activeDays).sort().reverse();
        if (!sortedDays.length) return 0;

        if (!sortedDays.includes(todayStr) && !sortedDays.includes(yesterdayStr)) {
            return 0;
        }

        let streak = 0;
        let checkDate = new Date(`${sortedDays.includes(todayStr) ? todayStr : yesterdayStr}T00:00:00Z`);

        while (true) {
            const dateStr = checkDate.toISOString().split('T')[0];
            if (activeDays.has(dateStr)) {
                streak++;
                checkDate.setUTCDate(checkDate.getUTCDate() - 1);
            } else {
                break;
            }
        }
        return streak;
    }

    const sessionsConsecutive = [
        { startTime: '2026-10-27T10:00:00Z' },
        { startTime: '2026-10-26T10:00:00Z' },
        { startTime: '2026-10-25T10:00:00Z' },
        { startTime: '2026-10-23T10:00:00Z' } // gap on 24th
    ];

    const streak = calcStreak(sessionsConsecutive, '2026-10-27', '2026-10-26');
    assert.strictEqual(streak, 3);
});

test('Week start calculation for Sunday, Monday, and Saturday', () => {
    function getStartOfWeek(date, weekStartDay) {
        const d = new Date(date);
        d.setHours(0, 0, 0, 0);
        const day = d.getDay(); // 0 is Sunday
        let diff = 0;
        if (weekStartDay === 'monday') {
            diff = (day === 0 ? -6 : 1) - day;
        } else if (weekStartDay === 'saturday') {
            diff = (day === 6 ? 0 : -(day + 1));
        } else {
            diff = -day;
        }
        d.setDate(d.getDate() + diff);
        return d;
    }

    // Wednesday, Oct 28, 2026 (day index 3)
    const testWed = new Date('2026-10-28T12:00:00Z');
    
    // Sunday start -> Oct 25, 2026
    const sunStart = getStartOfWeek(testWed, 'sunday');
    assert.strictEqual(sunStart.getDay(), 0);

    // Monday start -> Oct 26, 2026
    const monStart = getStartOfWeek(testWed, 'monday');
    assert.strictEqual(monStart.getDay(), 1);

    // Saturday start -> Oct 24, 2026
    const satStart = getStartOfWeek(testWed, 'saturday');
    assert.strictEqual(satStart.getDay(), 6);
});

test('Backup validation with invalid payload handling', () => {
    function validateBackup(data) {
        if (!data || typeof data !== 'object') return { valid: false, error: 'Data must be a JSON object' };
        if (!Array.isArray(data.projects)) return { valid: false, error: 'Missing projects array' };
        if (!Array.isArray(data.sessions)) return { valid: false, error: 'Missing sessions array' };
        return { valid: true };
    }

    assert.strictEqual(validateBackup(null).valid, false);
    assert.strictEqual(validateBackup('invalid string').valid, false);
    assert.strictEqual(validateBackup({ projects: 'not array' }).valid, false);
    assert.strictEqual(validateBackup({ projects: [], sessions: [] }).valid, true);
});

test('Duration localized formatting in English and Arabic', () => {
    function formatDuration(ms, lang = 'en') {
        const isAr = lang === 'ar';
        const hUnit = isAr ? ' س' : 'h';
        const mUnit = isAr ? ' د' : 'm';
        const sUnit = isAr ? ' ث' : 's';

        if (!ms || ms < 0) return isAr ? `0${mUnit}` : '0m';
        const totalSecs = Math.floor(ms / 1000);
        const hours = Math.floor(totalSecs / 3600);
        const minutes = Math.floor((totalSecs % 3600) / 60);
        const seconds = totalSecs % 60;

        if (hours > 0) return `${hours}${hUnit} ${minutes}${mUnit}`;
        if (minutes > 0) return `${minutes}${mUnit} ${seconds}${sUnit}`;
        return `${seconds}${sUnit}`;
    }

    // English
    assert.strictEqual(formatDuration(0, 'en'), '0m');
    assert.strictEqual(formatDuration(45000, 'en'), '45s');
    assert.strictEqual(formatDuration(125000, 'en'), '2m 5s');
    assert.strictEqual(formatDuration(3665000, 'en'), '1h 1m');

    // Arabic
    assert.strictEqual(formatDuration(0, 'ar'), '0 د');
    assert.strictEqual(formatDuration(45000, 'ar'), '45 ث');
    assert.strictEqual(formatDuration(125000, 'ar'), '2 د 5 ث');
    assert.strictEqual(formatDuration(3665000, 'ar'), '1 س 1 د');
});

test('PWA Update Detection and Message Payload Validation', () => {
    function createPwaUpdateMessage(action = 'skipWaiting') {
        return { action, timestamp: Date.now() };
    }

    const payload = createPwaUpdateMessage();
    assert.strictEqual(payload.action, 'skipWaiting');
    assert.ok(typeof payload.timestamp === 'number');

    function getPwaUpdateLabels(lang = 'en') {
        const isAr = lang === 'ar';
        return {
            message: isAr
                ? 'يتوفر إصدار جديد من تطبيق متتبع وقت البرمجة.'
                : 'A new version of Code Timer Tracker is ready.',
            btnText: isAr ? 'تحديث وإعادة التحميل' : 'Update & Reload'
        };
    }

    const enLabels = getPwaUpdateLabels('en');
    assert.ok(enLabels.message.includes('Code Timer Tracker'));
    assert.strictEqual(enLabels.btnText, 'Update & Reload');

    const arLabels = getPwaUpdateLabels('ar');
    assert.ok(arLabels.message.includes('متتبع وقت البرمجة'));
    assert.strictEqual(arLabels.btnText, 'تحديث وإعادة التحميل');
});

test('Sound Synthesizer Volume Scaling and Preset Acoustic Profiles', () => {
    function calculateGain(baseGain, volumePercent) {
        const clampedVol = Math.max(0, Math.min(100, Number(volumePercent) || 0));
        return Number((baseGain * (clampedVol / 100)).toFixed(5));
    }

    // Volume 0% -> Muted
    assert.strictEqual(calculateGain(0.08, 0), 0);
    // Volume 100% -> Full base gain
    assert.strictEqual(calculateGain(0.08, 100), 0.08);
    // Volume 50% -> Half gain
    assert.strictEqual(calculateGain(0.08, 50), 0.04);
    // Clamping out-of-bounds
    assert.strictEqual(calculateGain(0.08, 150), 0.08);
    assert.strictEqual(calculateGain(0.08, -20), 0);

    const PRESETS = {
        chime: { wave: 'sine', label: 'Harmonic Sine' },
        digital: { wave: 'square', label: 'Classic Digital Beep' },
        marimba: { wave: 'triangle', label: 'Wooden Tap' }
    };

    assert.ok('chime' in PRESETS);
    assert.ok('digital' in PRESETS);
    assert.ok('marimba' in PRESETS);
    assert.strictEqual(PRESETS.chime.wave, 'sine');
    assert.strictEqual(PRESETS.digital.wave, 'square');
    assert.strictEqual(PRESETS.marimba.wave, 'triangle');
});

test('Weekly Timesheet & PDF Invoice Aggregator', () => {
    const mockSessions = [
        { id: 's1', projectId: 'p1', duration: 3600000, billable: true }, // 1h
        { id: 's2', projectId: 'p1', duration: 1800000, billable: true }, // 0.5h
        { id: 's3', projectId: 'p2', duration: 7200000, billable: false } // 2h non-billable
    ];

    const mockProjects = [
        { id: 'p1', name: 'Client Alpha Web App', hourlyRate: 75 },
        { id: 'p2', name: 'Open Source Tool', hourlyRate: 0 }
    ];

    function aggregateInvoiceReport(sessions, projects) {
        const projMap = new Map(projects.map(p => [p.id, p]));
        let totalDurationMs = 0;
        let billableDurationMs = 0;
        let totalEarningsUSD = 0;

        const projectBreakdowns = {};

        for (const s of sessions) {
            totalDurationMs += s.duration;
            const p = projMap.get(s.projectId);
            const rate = p ? (p.hourlyRate || 0) : 0;
            const hours = s.duration / 3600000;

            if (!projectBreakdowns[s.projectId]) {
                projectBreakdowns[s.projectId] = {
                    name: p ? p.name : 'Unknown',
                    totalMs: 0,
                    billableMs: 0,
                    earnedUSD: 0,
                    hourlyRate: rate
                };
            }

            projectBreakdowns[s.projectId].totalMs += s.duration;

            if (s.billable) {
                billableDurationMs += s.duration;
                const earned = hours * rate;
                totalEarningsUSD += earned;
                projectBreakdowns[s.projectId].billableMs += s.duration;
                projectBreakdowns[s.projectId].earnedUSD += earned;
            }
        }

        return {
            totalDurationMs,
            totalHours: totalDurationMs / 3600000,
            billableDurationMs,
            billableHours: billableDurationMs / 3600000,
            totalEarningsUSD,
            projectBreakdowns
        };
    }

    const report = aggregateInvoiceReport(mockSessions, mockProjects);

    // 1h + 0.5h + 2h = 3.5h
    assert.strictEqual(report.totalHours, 3.5);
    // Billable: 1.5h
    assert.strictEqual(report.billableHours, 1.5);
    // Earnings: 1.5h * $75/h = $112.50
    assert.strictEqual(report.totalEarningsUSD, 112.5);

    // Check project p1 breakdown
    assert.strictEqual(report.projectBreakdowns['p1'].earnedUSD, 112.5);
    assert.strictEqual(report.projectBreakdowns['p1'].billableMs, 5400000);
});

