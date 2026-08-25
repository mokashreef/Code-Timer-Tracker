class CodeTimerTracker {
    constructor() {
        this.projects = [];
        this.sessions = [];
        this.currentSession = null;
        this.isPomodoroRunning = false;
        this.pomodoroPhase = 'work';
        this.charts = {};
        this.editingProject = null;
        this.pomodoroTimeLeft = 0;
        this.pomodoroInterval = null;

        this.initializeElements();
        this.loadData();
        this.setupEventListeners();
        this.setupKeyboardShortcuts();
        this.updateDashboard();
        this.initializeCharts();
        this.startIdleDetection();
    }

    initializeElements() {
        this.navButtons = document.querySelectorAll('.nav-btn');
        this.pages = document.querySelectorAll('.page');
        this.currentTimer = document.getElementById('currentTimer');
        this.startTimerBtn = document.getElementById('startTimer');
        this.pauseTimerBtn = document.getElementById('pauseTimer');
        this.stopTimerBtn = document.getElementById('stopTimer');
        this.sessionProjectSelect = document.getElementById('sessionProjectSelect');
        this.sessionTaskSelect = document.getElementById('sessionTaskSelect');
        this.sessionTags = document.getElementById('sessionTags');
        this.sessionBillable = document.getElementById('sessionBillable');
        this.sessionNotes = document.getElementById('sessionNotes');
        this.pomodoroTimerElement = document.getElementById('pomodoroTimer');
        this.pomodoroPhaseElement = document.getElementById('pomodoroPhase');
        this.startPomodoroBtn = document.getElementById('startPomodoro');
        this.resetPomodoroBtn = document.getElementById('resetPomodoro');
        this.workDuration = document.getElementById('workDuration');
        this.breakDuration = document.getElementById('breakDuration');
        this.projectModal = document.getElementById('projectModal');
        this.projectForm = document.getElementById('projectForm');
        this.addProjectBtn = document.getElementById('addProjectBtn');
        this.themeToggle = document.getElementById('themeToggle');
        this.exportBtn = document.getElementById('exportBtn');
        this.syncBtn = document.getElementById('syncBtn');
        this.sessionStartSound = document.getElementById('sessionStartSound');
        this.sessionEndSound = document.getElementById('sessionEndSound');
        this.pomodoroEndSound = document.getElementById('pomodoroEndSound');
    }

    // إعداد المستمعين للأحداث
    setupEventListeners() {
        var self = this;

        this.navButtons.forEach(function(btn) {
            btn.addEventListener('click', function() {
                self.showPage(this.getAttribute('data-page'));
            });
        });

        this.startTimerBtn.addEventListener('click', function() { self.startSession(); });
        this.pauseTimerBtn.addEventListener('click', function() { self.togglePause(); });
        this.stopTimerBtn.addEventListener('click', function() { self.stopSession(); });
        this.startPomodoroBtn.addEventListener('click', function() { self.togglePomodoro(); });
        this.resetPomodoroBtn.addEventListener('click', function() { self.resetPomodoroTimer(); });
        document.querySelectorAll('.template-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                self.startQuickSession(parseInt(this.getAttribute('data-duration')));
            });
        });
        this.addProjectBtn.addEventListener('click', function() { self.showProjectModal(); });
        this.projectForm.addEventListener('submit', function(e) {
            e.preventDefault();
            self.saveProject();
        });
        document.querySelectorAll('.close-btn, .cancel-btn').forEach(function(btn) {
            btn.addEventListener('click', function() { self.hideModals(); });
        });
        this.themeToggle.addEventListener('click', function() { self.toggleTheme(); });
        this.exportBtn.addEventListener('click', function() { self.exportData(); });
        this.syncBtn.addEventListener('click', function() { self.syncData(); });
        this.sessionProjectSelect.addEventListener('change', function() { self.updateTaskSelect(); });
    }

    // إعداد اختصارات لوحة المفاتيح
    setupKeyboardShortcuts() {
        var self = this;
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey || e.metaKey) {
                switch (e.key) {
                    case '1':
                        e.preventDefault();
                        self.showPage('dashboard');
                        break;
                    case '2':
                        e.preventDefault();
                        self.showPage('timer');
                        break;
                    case '3':
                        e.preventDefault();
                        self.showPage('projects');
                        break;
                }
            }

            if (e.key === ' ' && e.target === document.body) {
                e.preventDefault();
                if (self.currentSession) {
                    self.togglePause();
                } else {
                    self.startSession();
                }
            }
        });
    }

    // بدء كشف الخمول
    startIdleDetection() {
        var self = this;
        var idleTime = 0;
        var idleInterval = setInterval(function() {
            idleTime++;
            if (idleTime > 5 && self.currentSession && !self.currentSession.paused) {
                self.showIdleAlert();
            }
        }, 60000);
        var resetIdleTime = function() { idleTime = 0; };
        document.addEventListener('mousemove', resetIdleTime);
        document.addEventListener('keypress', resetIdleTime);
        document.addEventListener('click', resetIdleTime);
    }
    showIdleAlert() {
        if (confirm('يبدو أنك غير نشط. هل تريد إيقاف المؤقت الحالي؟')) {
            this.stopSession();
        }
    }
    startSession() {
        if (this.currentSession) return;

        var projectId = this.sessionProjectSelect.value;
        var task = this.sessionTaskSelect.value;
        var tags = this.sessionTags.value.split(',').map(function(tag) {
            return tag.trim();
        }).filter(function(tag) {
            return tag;
        });
        var billable = this.sessionBillable.checked;
        var notes = this.sessionNotes.value;

        this.currentSession = {
            id: Date.now().toString(),
            projectId: projectId,
            task: task,
            tags: tags,
            billable: billable,
            notes: notes,
            startTime: new Date(),
            paused: false,
            totalPausedTime: 0,
            lastPauseTime: null
        };

        this.updateTimerControls();
        this.playSound(this.sessionStartSound);
        this.updateCurrentSessionDisplay();
        this.updateTimer();
    }

    togglePause() {
        if (!this.currentSession) return;

        if (this.currentSession.paused) {
            this.currentSession.paused = false;
            this.currentSession.totalPausedTime += Date.now() - this.currentSession.lastPauseTime;
            this.currentSession.lastPauseTime = null;
        } else {
            this.currentSession.paused = true;
            this.currentSession.lastPauseTime = Date.now();
        }

        this.updateTimerControls();
    }

    stopSession() {
        if (!this.currentSession) return;

        var endTime = new Date();
        var duration = endTime - this.currentSession.startTime - this.currentSession.totalPausedTime;

        var session = {
            id: this.currentSession.id,
            projectId: this.currentSession.projectId,
            task: this.currentSession.task,
            tags: this.currentSession.tags,
            billable: this.currentSession.billable,
            notes: this.currentSession.notes,
            startTime: this.currentSession.startTime,
            endTime: endTime,
            duration: duration
        };

        this.sessions.unshift(session);
        this.currentSession = null;

        this.saveData();
        this.updateDashboard();
        this.updateTimerControls();
        this.playSound(this.sessionEndSound);
        this.resetSessionForm();

        this.showNotification('تم حفظ الجلسة بنجاح', 'success');
    }

    // جلسة سريعة
    startQuickSession(duration) {
        var quickSession = {
            id: Date.now().toString(),
            projectId: '',
            task: 'جلسة سريعة',
            tags: ['quick'],
            billable: false,
            notes: 'جلسة برمجة سريعة - ' + duration + ' دقيقة',
            startTime: new Date(),
            endTime: new Date(Date.now() + duration * 60000),
            duration: duration * 60000
        };

        this.sessions.unshift(quickSession);
        this.saveData();
        this.updateDashboard();

        this.showNotification('تم بدء جلسة سريعة لمدة ' + duration + ' دقيقة', 'success');
    }

    togglePomodoro() {
        if (this.isPomodoroRunning) {
            this.stopPomodoro();
        } else {
            this.startPomodoro();
        }
    }

    startPomodoro() {
        if (this.isPomodoroRunning) return;

        this.isPomodoroRunning = true;
        this.pomodoroPhase = 'work';
        this.pomodoroTimeLeft = parseInt(this.workDuration.value) * 60;

        var self = this;
        this.updatePomodoroDisplay();
        this.updatePomodoroControls();

        this.pomodoroInterval = setInterval(function() {
            self.pomodoroTimeLeft--;

            if (self.pomodoroTimeLeft <= 0) {
                self.switchPomodoroPhase();
            }

            self.updatePomodoroDisplay();
        }, 1000);
    }

    stopPomodoro() {
        this.isPomodoroRunning = false;
        if (this.pomodoroInterval) {
            clearInterval(this.pomodoroInterval);
        }
        this.updatePomodoroControls();
    }

    resetPomodoroTimer() {
        this.stopPomodoro();
        this.pomodoroPhase = 'work';
        this.pomodoroTimeLeft = parseInt(this.workDuration.value) * 60;
        this.updatePomodoroDisplay();
    }

    switchPomodoroPhase() {
        this.playSound(this.pomodoroEndSound);

        if (this.pomodoroPhase === 'work') {
            this.pomodoroPhase = 'break';
            this.pomodoroTimeLeft = parseInt(this.breakDuration.value) * 60;
            this.showNotification('وقت الراحة! خذ استراحة قصيرة', 'info');
        } else {
            this.pomodoroPhase = 'work';
            this.pomodoroTimeLeft = parseInt(this.workDuration.value) * 60;
            this.showNotification('وقت العمل! عد للتركيز', 'success');
        }
    }

    // إدارة المشاريع
    showProjectModal(project) {
        this.editingProject = project;

        var title = document.getElementById('projectModalTitle');
        var form = document.getElementById('projectForm');

        if (project) {
            title.textContent = 'تعديل المشروع';
            document.getElementById('projectName').value = project.name;
            document.getElementById('projectDescription').value = project.description || '';
            document.getElementById('projectRate').value = project.rate || '';
            document.getElementById('projectColor').value = project.color || '#3498db';
        } else {
            title.textContent = 'مشروع جديد';
            form.reset();
        }

        this.projectModal.classList.add('show');
    }

    saveProject() {
        var name = document.getElementById('projectName').value.trim();
        var description = document.getElementById('projectDescription').value.trim();
        var rate = parseFloat(document.getElementById('projectRate').value) || 0;
        var color = document.getElementById('projectColor').value;

        if (!name) {
            this.showNotification('يرجى إدخال اسم المشروع', 'error');
            return;
        }

        var project = {
            id: this.editingProject ? this.editingProject.id : Date.now().toString(),
            name: name,
            description: description,
            rate: rate,
            color: color,
            createdAt: new Date().toISOString()
        };

        if (this.editingProject) {
            // تحديث المشروع
            var index = this.projects.findIndex(function(p) {
                return p.id === this.editingProject.id;
            }.bind(this));
            if (index !== -1) {
                this.projects[index] = project;
            }
        } else {
            this.projects.unshift(project);
        }

        this.saveData();
        this.updateDashboard();
        this.hideModals();

        var message = this.editingProject ? 'تحديث' : 'إضافة';
        this.showNotification('تم ' + message + ' المشروع بنجاح', 'success');
        this.editingProject = null;
    }

    deleteProject(projectId) {
        if (!confirm('هل أنت متأكد من حذف هذا المشروع؟')) return;

        this.projects = this.projects.filter(function(p) {
            return p.id !== projectId;
        });
        this.sessions = this.sessions.filter(function(s) {
            return s.projectId !== projectId;
        });

        this.saveData();
        this.updateDashboard();

        this.showNotification('تم حذف المشروع بنجاح', 'success');
    }

    // تحديث الواجهة
    updateDashboard() {
        this.updateStats();
        this.updateProjectsList();
        this.updateRecentSessions();
        this.updateProjectSelect();
        this.updateCharts();
    }

    updateStats() {
        var today = new Date().toDateString();
        var weekStart = new Date();
        weekStart.setDate(weekStart.getDate() - weekStart.getDay());

        var todaySessions = this.sessions.filter(function(s) {
            return new Date(s.startTime).toDateString() === today;
        });
        var weekSessions = this.sessions.filter(function(s) {
            return new Date(s.startTime) >= weekStart;
        });

        var todayTime = todaySessions.reduce(function(sum, s) {
            return sum + s.duration;
        }, 0);
        var weekTime = weekSessions.reduce(function(sum, s) {
            return sum + s.duration;
        }, 0);

        var billableSessions = this.sessions.filter(function(s) {
            return s.billable && s.projectId;
        });
        var billableAmount = billableSessions.reduce(function(sum, s) {
            var project = this.projects.find(function(p) {
                return p.id === s.projectId;
            });
            var projectRate = project ? project.rate : 0;
            return sum + (s.duration / 3600000) * projectRate;
        }.bind(this), 0);

        document.getElementById('todayTime').textContent = this.formatDuration(todayTime);
        document.getElementById('weekTime').textContent = this.formatDuration(weekTime);
        document.getElementById('billableAmount').textContent = '$' + billableAmount.toFixed(2);
        document.getElementById('activeProjects').textContent = this.projects.length;
    }

    updateProjectsList() {
        var container = document.getElementById('projectsList');
        var self = this;

        if (this.projects.length === 0) {
            container.innerHTML = '\
                <div class="empty-state">\
                    <i class="fas fa-folder-open"></i>\
                    <p>لا توجد مشاريع</p>\
                    <button class="btn-primary" id="addFirstProject">\
                        <i class="fas fa-plus"></i> إضافة مشروع أول\
                    </button>\
                </div>\
            ';
            // إضافة مستمع حدث للزر الجديد
            document.getElementById('addFirstProject').addEventListener('click', function() {
                self.showProjectModal();
            });
            return;
        }

        container.innerHTML = this.projects.map(function(project) {
            var projectSessions = self.sessions.filter(function(s) {
                return s.projectId === project.id;
            });
            var totalTime = projectSessions.reduce(function(sum, s) {
                return sum + s.duration;
            }, 0);
            var billableTime = projectSessions.filter(function(s) {
                return s.billable;
            }).reduce(function(sum, s) {
                return sum + s.duration;
            }, 0);

            var rateHtml = project.rate ? '<div class="project-rate">$' + project.rate + '/ساعة</div>' : '';
            var descriptionHtml = project.description ? '<div class="project-description">' + project.description + '</div>' : '';
            return '\
                <div class="project-card" style="border-left-color: ' + project.color + '">\
                    <div class="project-header">\
                        <div class="project-name">' + project.name + '</div>\
                        ' + rateHtml + '\
                    </div>\
                    ' + descriptionHtml + '\
                    <div class="project-stats">\
                        <div class="project-stat">\
                            <div class="stat-number">' + projectSessions.length + '</div>\
                            <div class="stat-label">جلسات</div>\
                        </div>\
                        <div class="project-stat">\
                            <div class="stat-number">' + self.formatDuration(totalTime) + '</div>\
                            <div class="stat-label">إجمالي الوقت</div>\
                        </div>\
                        <div class="project-stat">\
                            <div class="stat-number">' + self.formatDuration(billableTime) + '</div>\
                            <div class="stat-label">قابل للفوترة</div>\
                        </div>\
                    </div>\
                    <div class="project-actions">\
                        <button class="btn-primary edit-project" data-project=\'' + JSON.stringify(project) + '\'>\
                            <i class="fas fa-edit"></i> تعديل\
                        </button>\
                        <button class="btn-danger delete-project" data-project-id="' + project.id + '">\
                            <i class="fas fa-trash"></i> حذف\
                        </button>\
                    </div>\
                </div>\
            ';
        }).join('');
        container.querySelectorAll('.edit-project').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var projectData = JSON.parse(this.getAttribute('data-project'));
                self.showProjectModal(projectData);
            });
        });

        container.querySelectorAll('.delete-project').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var projectId = this.getAttribute('data-project-id');
                self.deleteProject(projectId);
            });
        });
    }

    updateRecentSessions() {
        var container = document.getElementById('recentSessionsList');
        var recentSessions = this.sessions.slice(0, 5);
        var self = this;

        if (recentSessions.length === 0) {
            container.innerHTML = '\
                <div class="empty-state">\
                    <i class="fas fa-history"></i>\
                    <p>لا توجد جلسات سابقة</p>\
                </div>\
            ';
            return;
        }

        container.innerHTML = recentSessions.map(function(session) {
            var project = self.projects.find(function(p) {
                return p.id === session.projectId;
            });
            var projectName = project ? project.name : 'بدون مشروع';
            var task = session.task || 'بدون مهمة';

            return '\
                <div class="session-item">\
                    <div class="session-info">\
                        <div class="session-project">' + projectName + '</div>\
                        <div class="session-task">' + task + '</div>\
                    </div>\
                    <div class="session-duration">' + self.formatDuration(session.duration) + '</div>\
                    <div class="session-time">' + new Date(session.startTime).toLocaleTimeString('ar-EG') + '</div>\
                </div>\
            ';
        }).join('');
    }

    updateProjectSelect() {
        var options = this.projects.map(function(project) {
            return '<option value="' + project.id + '">' + project.name + '</option>';
        }).join('');

        this.sessionProjectSelect.innerHTML = '\
            <option value="">اختر مشروع...</option>\
            ' + options + '\
        ';
    }

    updateTaskSelect() {
        this.sessionTaskSelect.innerHTML = '\
            <option value="">اختر مهمة...</option>\
            <option value="تطوير">تطوير</option>\
            <option value="تصحيح أخطاء">تصحيح أخطاء</option>\
            <option value="بحث">بحث</option>\
            <option value="مراجعة كود">مراجعة كود</option>\
            <option value="اختبار">اختبار</option>\
        ';
    }

    updateTimerControls() {
        if (this.currentSession) {
            this.startTimerBtn.disabled = true;
            this.pauseTimerBtn.disabled = false;
            this.stopTimerBtn.disabled = false;

            this.pauseTimerBtn.innerHTML = this.currentSession.paused ?
                '<i class="fas fa-play"></i> استئناف' :
                '<i class="fas fa-pause"></i> إيقاف مؤقت';
        } else {
            this.startTimerBtn.disabled = false;
            this.pauseTimerBtn.disabled = true;
            this.stopTimerBtn.disabled = true;
        }
    }

    updateCurrentSessionDisplay() {
        var container = document.getElementById('currentSession');
        var header = container.querySelector('h3');
        if (!this.currentSession) {
            header.textContent = 'لا توجد جلسة نشطة';
            return;
        }

        var project = this.projects.find(function(p) {
            return p.id === this.currentSession.projectId;
        }.bind(this));
        header.textContent = project ? project.name : 'جلسة بدون مشروع';
    }

    updateTimer() {
        if (!this.currentSession || this.currentSession.paused) return;

        var self = this;
        var now = new Date();
        var elapsed = now - this.currentSession.startTime - this.currentSession.totalPausedTime;
        this.currentTimer.textContent = this.formatTime(elapsed);

        setTimeout(function() {
            self.updateTimer();
        }, 1000);
    }

    updatePomodoroDisplay() {
        var minutes = Math.floor(this.pomodoroTimeLeft / 60);
        var seconds = this.pomodoroTimeLeft % 60;

        this.pomodoroTimerElement.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
        this.pomodoroPhaseElement.textContent = this.pomodoroPhase === 'work' ? 'وقت العمل' : 'وقت الراحة';
    }

    updatePomodoroControls() {
        this.startPomodoroBtn.innerHTML = this.isPomodoroRunning ?
            '<i class="fas fa-pause"></i> إيقاف' :
            '<i class="fas fa-play"></i> بدء';
    }

    // الرسوم البيانية
    initializeCharts() {
        this.createProjectsChart();
    }

    updateCharts() {
        if (this.charts.projectsChart) {
            this.charts.projectsChart.destroy();
            this.charts.projectsChart = null;
        }
        this.initializeCharts();
    }

    createProjectsChart() {
        var ctx = document.getElementById('projectsChart');
        if (!ctx) return;
        var existingChart = Chart.getChart(ctx);
        if (existingChart) {
            existingChart.destroy();
        }

        ctx = ctx.getContext('2d');
        var projectData = {};
        var self = this;

        this.sessions.forEach(function(session) {
            var project = self.projects.find(function(p) {
                return p.id === session.projectId;
            });
            var projectName = project ? project.name : 'بدون مشروع';

            if (!projectData[projectName]) {
                projectData[projectName] = 0;
            }
            projectData[projectName] += session.duration;
        });
        if (Object.keys(projectData).length === 0) {
            return;
        }

        this.charts.projectsChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(projectData),
                datasets: [{
                    data: Object.values(projectData).map(function(duration) {
                        return duration / 3600000;
                    }),
                    backgroundColor: [
                        '#3498db', '#2ecc71', '#e74c3c', '#f39c12',
                        '#9b59b6', '#1abc9c', '#34495e', '#95a5a6'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        rtl: true
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                var hours = context.raw;
                                return hours.toFixed(1) + ' ساعة';
                            }
                        }
                    }
                }
            }
        });
    }

    // إدارة الصفحات
    showPage(pageId) {
        this.pages.forEach(function(page) {
            page.classList.remove('active');
        });
        this.navButtons.forEach(function(btn) {
            btn.classList.remove('active');
        });

        document.getElementById(pageId).classList.add('active');
        document.querySelector('[data-page="' + pageId + '"]').classList.add('active');
    }

    // إدارة البيانات
    saveData() {
        var data = {
            projects: this.projects,
            sessions: this.sessions,
            version: '1.0'
        };
        localStorage.setItem('codeTimerData', JSON.stringify(data));
    }

    loadData() {
        var savedData = localStorage.getItem('codeTimerData');
        if (savedData) {
            try {
                var data = JSON.parse(savedData);
                this.projects = data.projects || [];
                this.sessions = data.sessions || [];
            } catch (e) {
                console.error('Error loading data:', e);
                this.projects = [];
                this.sessions = [];
            }
        }
    }

    exportData() {
        var data = {
            projects: this.projects,
            sessions: this.sessions,
            exportDate: new Date().toISOString()
        };

        var dataStr = JSON.stringify(data, null, 2);
        var dataBlob = new Blob([dataStr], { type: 'application/json' });

        var url = URL.createObjectURL(dataBlob);
        var link = document.createElement('a');
        link.href = url;
        link.download = 'code-timer-data-' + new Date().toISOString().split('T')[0] + '.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        this.showNotification('تم تصدير البيانات بنجاح', 'success');
    }

    syncData() {
        this.showNotification('المزامنة غير متاحة في النسخة المحلية', 'info');
    }

    // أدوات مساعدة
    formatDuration(milliseconds) {
        var hours = Math.floor(milliseconds / 3600000);
        var minutes = Math.floor((milliseconds % 3600000) / 60000);

        if (hours > 0) {
            return hours + 'س ' + minutes + 'د';
        }
        return minutes + 'د';
    }

    formatTime(milliseconds) {
        var hours = Math.floor(milliseconds / 3600000);
        var minutes = Math.floor((milliseconds % 3600000) / 60000);
        var seconds = Math.floor((milliseconds % 60000) / 1000);

        return hours.toString().padStart(2, '0') + ':' +
            minutes.toString().padStart(2, '0') + ':' +
            seconds.toString().padStart(2, '0');
    }

    playSound(audioElement) {
        if (!audioElement) return;
        audioElement.currentTime = 0;
        audioElement.play().catch(function(e) {
            console.log('تعذر تشغيل الصوت:', e);
        });
    }

    resetSessionForm() {
        this.sessionNotes.value = '';
        this.sessionTags.value = '';
        this.sessionBillable.checked = false;
    }

    hideModals() {
        document.querySelectorAll('.modal').forEach(function(modal) {
            modal.classList.remove('show');
        });
        this.editingProject = null;
    }

    toggleTheme() {
        var currentTheme = document.body.getAttribute('data-theme');
        var newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('codeTimerTheme', newTheme);

        var icon = this.themeToggle.querySelector('i');
        if (icon) {
            icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }

        var themeName = newTheme === 'dark' ? 'الليلي' : 'النهاري';
        this.showNotification('تم التبديل إلى الوضع ' + themeName, 'info');
    }

    loadTheme() {
        var savedTheme = localStorage.getItem('codeTimerTheme') || 'light';
        document.body.setAttribute('data-theme', savedTheme);

        var icon = this.themeToggle.querySelector('i');
        if (icon) {
            icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    showNotification(message, type) {
        var existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        var notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        var backgroundColor = type === 'error' ? '#e74c3c' :
            type === 'warning' ? '#f39c12' :
            type === 'success' ? '#2ecc71' : '#3498db';

        notification.style.cssText = '\
            position: fixed;\
            top: 20px;\
            left: 20px;\
            background: ' + backgroundColor + ';\
            color: white;\
            padding: 15px 20px;\
            border-radius: 8px;\
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);\
            z-index: 10000;\
            transform: translateX(-100%);\
            opacity: 0;\
            transition: transform 0.3s, opacity 0.3s;\
            max-width: 400px;\
        ';

        document.body.appendChild(notification);

        var self = this;
        setTimeout(function() {
            notification.style.transform = 'translateX(0)';
            notification.style.opacity = '1';
        }, 100);
        setTimeout(function() {
            notification.style.transform = 'translateX(-100%)';
            notification.style.opacity = '0';
            setTimeout(function() {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    window.codeTimerApp = new CodeTimerTracker();
    window.codeTimerApp.loadTheme();
});
