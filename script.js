/**
 * Code Timer Tracker — Core Application Engine
 * Developed by Mohammad Abu Khashreef • Code Elta6ur
 * Local-First Developer Productivity Engine
 */

const I18N = {
    en: {
        app_title: "Code Timer Tracker",
        app_sub: "by Mohammad Abu Khashreef",
        search_actions: "Search / Actions",
        focus: "Focus",
        log_time: "Log Time",
        toggle_theme: "Toggle Theme",
        lang_btn: "AR",
        lang_title: "تبديل إلى العربية",
        nav_dashboard: "Dashboard",
        nav_timer: "Timer Console",
        nav_projects: "Projects & Tasks",
        nav_sessions: "Session Logs",
        nav_reports: "Analytics",
        nav_settings: "Settings & Backup",
        nav_about: "About",
        mob_nav_dashboard: "Dashboard",
        mob_nav_timer: "Timer",
        mob_nav_projects: "Projects",
        mob_nav_sessions: "Sessions",
        no_project: "No Project",
        dash_welcome_title: "Developer Overview",
        dash_welcome_sub: "Tracked coding activity, active commitments, and focus consistency.",
        start_timer: "Start Timer",
        new_project: "New Project",
        today_coding_time: "Today's Coding Time",
        this_week_total: "This Week's Total",
        billable_earnings: "Billable Earnings",
        focus_consistency: "Focus Consistency",
        active_session: "Active Session",
        open_console: "Open Console",
        none_selected: "None selected",
        general_development: "General development",
        start_tracking: "Start Tracking",
        pause: "Pause",
        resume: "Resume",
        stop: "Stop",
        stop_and_save: "Stop & Save",
        in_progress: "In Progress",
        idle: "Idle",
        running: "Running",
        paused: "Paused",
        ready: "Ready",
        active: "Active",
        quick_presets: "Quick Workflow Presets",
        presets_hint: "Sets task context & starts accurate timer",
        preset_feat_title: "Feature Implementation",
        preset_feat_sub: "New module or component",
        preset_bug_title: "Bug Investigation & Fix",
        preset_bug_sub: "Debugging & error resolution",
        preset_review_title: "Code Review & Refactor",
        preset_review_sub: "PR review, cleanup, docs",
        preset_arch_title: "Tech Spike / Research",
        preset_arch_sub: "Architecture planning & tests",
        time_by_project_today: "Time by Project (Today)",
        no_sessions_today: "No sessions recorded today.",
        recent_sessions: "Recent Sessions",
        view_all: "View All",
        no_sessions_logged_yet: "No sessions logged yet.",
        goal_suffix: "Goal",
        goal_prefix: "Goal:",
        billable_tracked: "billable tracked",
        day: "Day",
        days: "Days",
        active_projects: "Active Projects",
        timer_console_title: "Session Control Console",
        timer_console_sub: "Dedicated cockpit for precision interval measurement, billing attribution, and task notes.",
        non_billable: "Non-Billable",
        billable_work: "Billable Work",
        development: "Development",
        clock_started: "Started:",
        clock_paused: "Paused:",
        clock_elapsed: "Elapsed Session Time",
        start_session: "Start Session",
        project_label: "Project",
        select_project_option: "-- Select Project --",
        no_project_option: "-- No Project --",
        task_ticket_label: "Task / Ticket",
        general_coding_option: "General Coding (No specific task)",
        tags_label: "Tags (comma separated)",
        tags_placeholder: "e.g. backend, auth, api",
        billable_work_label: "Billable Coding Work",
        session_notes_label: "Session Notes & Commit Reference",
        session_notes_placeholder: "Describe progress, blocker resolved, PR link, or Git branch...",
        focus_interval_companion: "Focus Interval Companion",
        companion_hint: "Non-blocking interval alerts",
        work_interval: "Work Interval",
        rest_break: "Rest Break",
        start_interval: "Start Interval",
        pause_interval: "Pause Interval",
        reset_interval: "Reset",
        work_m_label: "Work (m)",
        break_m_label: "Break (m)",
        project_snapshot_title: "Project Snapshot",
        project_snapshot_empty: "Select a project to inspect rates, total tracked time, and open tasks.",
        snapshot_category: "Category",
        snapshot_rate: "Hourly Rate",
        snapshot_tracked: "Total Time Logged",
        snapshot_total_billable: "Total Billable",
        snapshot_open_tasks: "Open Tasks",
        snapshot_pending: "pending",
        projects_page_title: "Projects & Tasks",
        projects_page_sub: "Organize development repositories, track estimates against actual time, and launch sessions.",
        filter_active: "Active Projects",
        filter_archived: "Archived Projects",
        filter_all: "All Projects",
        no_projects_found: "No projects found",
        no_projects_hint: "Create your first repository or project to organize coding sessions.",
        total_time: "Total Time",
        billable: "Billable",
        tasks_done: "Tasks Done",
        tasks_word: "Tasks",
        no_tasks_yet: "No tasks yet",
        add_task: "Add Task",
        track: "Track",
        archive: "Archive",
        unarchive: "Unarchive",
        delete: "Delete",
        edit: "Edit",
        no_desc_provided: "No description provided.",
        general: "General",
        sessions_page_title: "Session History",
        sessions_page_sub: "Audit, filter, edit, or export recorded developer sessions.",
        log_past_session: "Log Past Session",
        export_csv: "Export CSV",
        export_json: "Export JSON",
        export_pdf: "Export PDF Timesheet",
        search_sessions_placeholder: "Search notes, task title, tags...",
        all_projects: "All Projects",
        all_dates: "All Dates",
        today: "Today",
        yesterday: "Yesterday",
        this_week: "This Week",
        last_week: "Last Week",
        this_month: "This Month",
        last_30_days: "Last 30 Days",
        all_time: "All Time",
        all_billable_types: "All Billable Types",
        billable_only: "Billable Only",
        non_billable_only: "Non-Billable Only",
        reset_filters: "Reset",
        th_datetime: "Date & Time",
        th_project: "Project",
        th_task: "Task",
        th_duration: "Duration",
        th_tags: "Tags",
        th_billable: "Billable",
        th_notes: "Notes",
        th_actions: "Actions",
        no_sessions_match: "No recorded sessions matching your filter criteria.",
        btn_prev: "Prev",
        btn_next: "Next",
        general_coding: "General Coding",
        analytics_page_title: "Productivity Analytics",
        analytics_page_sub: "Verified metrics calculated from your real tracked coding sessions.",
        period_this_week: "This Week",
        period_this_month: "This Month",
        period_last_30_days: "Last 30 Days",
        period_all_time: "All Time",
        period_coding_time: "Period Coding Time",
        calc_actual_sessions: "Calculated from actual sessions",
        avg_session_length: "Average Session Length",
        billable_value: "Billable Value",
        top_active_tech: "Top Active Tech/Project",
        chart_proj_dist: "Time Distribution by Project",
        chart_hint_selected_period: "Selected Period",
        chart_daily_vol: "Daily Coding Volume (Hours)",
        chart_hint_day_by_day: "Day-by-day distribution",
        chart_cumul: "Cumulative Focus Trend",
        chart_hint_timeline: "Timeline progress",
        chart_category: "Time by Category / Tech Stack",
        chart_hint_skill: "Skill distribution",
        unassigned: "Unassigned",
        no_data: "No Data",
        general_work: "General Work",
        settings_page_title: "Settings & Data Management",
        settings_page_sub: "Configure productivity targets, audio cues, and export or restore local backups.",
        settings_targets_title: "Productivity Targets & Schedule",
        settings_daily_goal: "Daily Coding Target (Hours)",
        settings_daily_goal_hint: "Used to calculate progress bars and daily completion.",
        settings_weekly_goal: "Weekly Coding Target (Hours)",
        settings_weekly_goal_hint: "Weekly productivity objective across all repositories.",
        settings_week_start: "Week Starts On",
        day_sunday: "Sunday",
        day_monday: "Monday",
        day_saturday: "Saturday",
        settings_time_format: "Time Display Format",
        opt_24h: "24-Hour (14:30)",
        opt_12h: "12-Hour (2:30 PM)",
        settings_language: "Interface Language / لغة الواجهة",
        opt_en: "English (EN)",
        opt_ar: "العربية (AR)",
        settings_sound: "Enable procedural synthesizer audio cues (Web Audio API)",
        settings_sound_preset: "Sound Tone Preset",
        settings_sound_volume: "Volume Level",
        settings_sound_preview: "Test Chime",
        opt_preset_chime: "Bell / Chime (Harmonic Sine)",
        opt_preset_digital: "Digital Pulse (Classic Beep)",
        opt_preset_marimba: "Marimba / Wooden Tap",
        settings_notif: "Request browser desktop notifications for intervals",
        settings_save_btn: "Save Preferences",
        storage_title: "Storage & Data Portability",
        storage_model_label: "Persistence Model:",
        storage_model_val: "Local-first (Browser Storage)",
        storage_sessions_label: "Recorded Sessions:",
        storage_projects_label: "Configured Projects:",
        storage_disclaimer: "All session records and project details are stored exclusively inside your browser's private local storage. No code, keystrokes, or telemetry are ever sent to remote servers. Make regular JSON backups to preserve your data across computers.",
        storage_backup_title: "Data Backup & Restore",
        backup_download: "Download JSON Backup",
        backup_restore: "Restore from JSON",
        reset_workspace: "Reset Workspace",
        reset_workspace_hint: "Clear all locally recorded sessions, projects, and tasks after saving a backup.",
        clear_data_btn: "Clear All Stored Data",
        about_title: "Code Timer Tracker",
        about_tagline: "High-Precision Time Tracking & Productivity Intelligence for Software Engineers",
        about_architect: "Lead Architect & Developer",
        about_org: "Parent Organization",
        about_arch_type: "Software Architecture",
        about_arch_val: "Local-First Client Engine",
        about_license: "Licensing",
        about_license_val: "MIT License",
        about_eco_title: "Code Elta6ur Ecosystem",
        about_eco_sub: "Verified platforms, engineering tools, and development properties.",
        eco_edu: "Educational Platform",
        eco_software: "Software Company",
        eco_portfolio: "Developer Showcase Platform",
        eco_tools: "Platform & Tools",
        eco_hardware: "Hardware & System Directory",
        eco_syria: "Regional Platform",
        eco_engineer: "Engineer Portfolio",
        eco_github: "Open-Source & Repositories",
        about_shortcuts_title: "Built-in Keyboard Shortcuts",
        shortcut_timer: "Start / Pause / Resume Active Timer",
        shortcut_stop: "Stop & Save Running Session",
        shortcut_palette: "Open Command Palette",
        shortcut_focus: "Toggle Distraction-Free Focus Mode",
        shortcut_nav: "Navigate to Views (1 to 5)",
        footer_dev_by: "Developed by",
        footer_part_of: "Part of",
        footer_repo: "Repository",
        footer_shortcuts: "Shortcuts",
        cmd_palette_placeholder: "Type a command, jump to page, or search actions...",
        cmd_navigate: "to navigate",
        cmd_select: "to select",
        cmd_close: "to close",
        cmd_use: "Use",
        cmd_no_results: "No matching commands found.",
        focus_console: "Focus Console",
        focus_exit: "Exit Focus (ESC)",
        focus_general_session: "General Session",
        focus_coding: "Focused Coding",
        focus_in_progress: "Tracking in progress...",
        focus_paused: "Session Paused",
        modal_new_project: "New Project",
        modal_edit_project: "Edit Project",
        lbl_project_name: "Project Name *",
        placeholder_project_name: "e.g. Code Timer Tracker Rebuild",
        lbl_description: "Description",
        placeholder_description: "Summary of project scope and tech goals...",
        lbl_category: "Category",
        lbl_color_badge: "Color Badge",
        lbl_hourly_rate: "Hourly Billing Rate ($/hr)",
        placeholder_hourly_rate: "e.g. 60",
        lbl_estimated_hours: "Estimated Hours",
        placeholder_estimated_hours: "e.g. 20",
        lbl_tech_stack: "Tech Stack (comma separated)",
        placeholder_tech_stack: "e.g. JavaScript, Chart.js, HTML5, CSS3",
        btn_cancel: "Cancel",
        btn_save_project: "Save Project",
        modal_new_task: "New Task",
        modal_edit_task: "Edit Task",
        lbl_assoc_project: "Associated Project *",
        lbl_task_title: "Task Title *",
        placeholder_task_title: "e.g. Implement RFC 4180 CSV export",
        lbl_priority: "Priority",
        priority_low: "Low",
        priority_medium: "Medium",
        priority_high: "High",
        priority_urgent: "Urgent",
        lbl_status: "Status",
        status_todo: "To Do",
        status_in_progress: "In Progress",
        status_done: "Completed",
        lbl_estimated_time: "Estimated Time (Minutes)",
        placeholder_estimated_mins: "e.g. 60",
        lbl_deadline: "Deadline (Optional)",
        btn_save_task: "Save Task",
        modal_manual_session: "Log Past Coding Session",
        lbl_date: "Date *",
        lbl_duration_mins: "Duration (Minutes) *",
        placeholder_duration_mins: "e.g. 90",
        placeholder_manual_task: "e.g. Database schema migration",
        placeholder_manual_notes: "What did you complete during this session?",
        btn_save_manual_session: "Save Recorded Session",
        modal_edit_session: "Edit Session Record",
        btn_update_session: "Update Record",
        modal_confirm: "Confirm Action",
        msg_confirm_default: "Are you sure you want to proceed?",
        btn_confirm: "Confirm",
        cat_frontend: "Frontend",
        cat_backend: "Backend",
        cat_fullstack: "Full-Stack",
        cat_mobile: "Mobile",
        cat_devops: "DevOps",
        cat_architecture: "Architecture",
        cat_opensource: "Open Source",
        cat_other: "Other",
        toast_project_saved: "Project saved successfully",
        toast_project_deleted: "Project deleted",
        toast_project_archived: "Project archived",
        toast_project_unarchived: "Project restored from archive",
        toast_task_saved: "Task saved successfully",
        toast_task_deleted: "Task deleted",
        toast_session_saved: "Session recorded successfully",
        toast_session_deleted: "Session record deleted",
        toast_backup_downloaded: "JSON backup downloaded successfully",
        toast_backup_restored: "Backup successfully restored",
        toast_data_cleared: "Workspace data cleared successfully",
        toast_preferences_saved: "Preferences saved successfully",
        toast_session_started: "Coding session started",
        toast_session_paused: "Session paused",
        toast_session_resumed: "Session resumed",
        toast_session_stopped: "Session stopped & logged",
        confirm_switch_session_title: "Switch Session",
        confirm_switch_session_msg: "Save current active session and track this project?",
        confirm_delete_project_title: "Delete Project",
        confirm_delete_project_msg: "Are you sure you want to delete this project? Historical sessions will remain in your log.",
        confirm_delete_session_title: "Delete Session",
        confirm_delete_session_msg: "Are you sure you want to delete this session record? This cannot be undone.",
        confirm_reset_title: "Reset All Data",
        confirm_reset_msg: "Are you sure you want to delete all stored projects and sessions? Make sure you have exported a backup.",
        mobile_nav_more: "More",
        mobile_more_title: "Explore & Tools",
        mobile_sheet_analytics_sub: "Charts, focus trends & rates",
        mobile_sheet_settings_sub: "Goals, sound & data exports",
        mobile_sheet_about_sub: "Architecture & Code Elta6ur",
        mobile_sheet_focus_sub: "Distraction-free timer",
        mobile_sheet_manual_sub: "Add offline work interval",
        download_apk_title: "Download Android APK",
        download_apk_sub: "100% Offline Standalone App (1.7MB)",
        about_apk_title: "Android Offline Application",
        about_apk_sub: "Standalone native APK with zero internet requirement.",
        about_apk_badge: "v2.4.3 • 100% Offline",
        about_apk_desc: "Standalone native Android application with zero internet required. Bundles full timer console, projects, sessions history, audio synthesizers, offline SVG icons, and charts inside a lightweight 1.7 MB package.",
        btn_download_apk: "Download Android APK (1.7 MB)",
        btn_github_mirror: "GitHub Direct Mirror",
    },
    ar: {
        app_title: "متتبع وقت البرمجة",
        app_sub: "بواسطة محمد أبو خشريف",
        search_actions: "البحث والإجراءات",
        focus: "تركيز",
        log_time: "تسجيل وقت",
        toggle_theme: "تبديل المظهر",
        lang_btn: "EN",
        lang_title: "Switch to English",
        nav_dashboard: "لوحة المؤشرات",
        nav_timer: "منصة المؤقت",
        nav_projects: "المشاريع والمهام",
        nav_sessions: "سجل الجلسات",
        nav_reports: "التحليلات",
        nav_settings: "الإعدادات والحفظ",
        nav_about: "عن الأداة",
        mob_nav_dashboard: "الرئيسية",
        mob_nav_timer: "المؤقت",
        mob_nav_projects: "المشاريع",
        mob_nav_sessions: "الجلسات",
        no_project: "بدون مشروع",
        dash_welcome_title: "نظرة عامة للمطور",
        dash_welcome_sub: "تتبع فوري، استمرارية الأيام النشطة، ومقاييس الإنتاجية البرمجية.",
        start_timer: "بدء المؤقت",
        new_project: "مشروع جديد",
        today_coding_time: "وقت البرمجة اليوم",
        this_week_total: "إجمالي هذا الأسبوع",
        billable_earnings: "المستحقات المدفوعة",
        focus_consistency: "استمرارية التركيز",
        active_session: "الجلسة النشطة",
        open_console: "فتح المنصة",
        none_selected: "لم يتم تحديد مشروع",
        general_development: "تطوير وبرمجة عامة",
        start_tracking: "بدء التتبع",
        pause: "إيقاف مؤقت",
        resume: "استئناف",
        stop: "إنهاء",
        stop_and_save: "إنهاء وحفظ",
        in_progress: "قيد التنفيذ",
        idle: "في وضع الانتظار",
        running: "قيد التشغيل",
        paused: "متوقف مؤقتاً",
        ready: "جاهز",
        active: "نشط",
        quick_presets: "قوالب العمل السريعة",
        presets_hint: "تحديد سياق المهمة وبدء العداد الدقيق",
        preset_feat_title: "تطبيق ميزة برمجية",
        preset_feat_sub: "وحدة جديدة أو مكون برمجي",
        preset_bug_title: "فحص وإصلاح الأخطاء",
        preset_bug_sub: "تصحيح وتحري ومعالجة الأخطاء",
        preset_review_title: "مراجعة وإعادة هيكلة",
        preset_review_sub: "مراجعة PR، تنظيف، وتوثيق",
        preset_arch_title: "بحث ومعمارية برمجية",
        preset_arch_sub: "تخطيط معماري واختبارات تقنية",
        time_by_project_today: "توزيع مشاريع اليوم",
        no_sessions_today: "لم تسجل أي جلسات اليوم بعد.",
        recent_sessions: "الجلسات الأخيرة",
        view_all: "عرض الكل",
        no_sessions_logged_yet: "لم تسجل أي جلسات حتى الآن.",
        goal_suffix: "من الهدف",
        goal_prefix: "الهدف:",
        billable_tracked: "مدفوعة مسجلة",
        day: "يوم",
        days: "أيام",
        active_projects: "مشاريع نشطة",
        timer_console_title: "منصة التحكم بالمؤقت",
        timer_console_sub: "مقصورة مخصصة للقياس الدقيق لفترات العمل، احتساب الفواتير، وتدوين الملاحظات البرمجية.",
        non_billable: "غير مدفوع",
        billable_work: "عمل مدفوع (مفوتر)",
        development: "تطوير وبرمجة",
        clock_started: "بدأ:",
        clock_paused: "متوقف:",
        clock_elapsed: "وقت الجلسة المنقضي",
        start_session: "بدء الجلسة",
        project_label: "المشروع",
        select_project_option: "-- اختر المشروع --",
        no_project_option: "-- بدون مشروع --",
        task_ticket_label: "المهمة / التذكرة",
        general_coding_option: "برمجة عامة (بدون مهمة محددة)",
        tags_label: "الوسوم (مفصولة بفواصل)",
        tags_placeholder: "مثال: backend, auth, api",
        billable_work_label: "عمل برمجي مدفوع (قابل للفوترة)",
        session_notes_label: "ملاحظات الجلسة وإشارة الـ Commit",
        session_notes_placeholder: "صف الإنجاز، المشكلة المحلولة، رابط PR، أو فرع Git...",
        focus_interval_companion: "مساعد فترات التركيز",
        companion_hint: "تنبيهات فترات غير معطلة",
        work_interval: "فترة العمل",
        rest_break: "استراحة قصيرة",
        start_interval: "بدء الفترة",
        pause_interval: "إيقاف مؤقت",
        reset_interval: "إعادة تعيين",
        work_m_label: "العمل (د)",
        break_m_label: "الراحة (د)",
        project_snapshot_title: "لمحة سريعة عن المشروع",
        project_snapshot_empty: "اختر مشروعاً لمعاينة الأسعار، الوقت المسجل، والمهام المفتوحة.",
        snapshot_category: "التصنيف",
        snapshot_rate: "السعر بالساعة",
        snapshot_tracked: "الوقت المسجل",
        snapshot_total_billable: "إجمالي المستحقات",
        snapshot_open_tasks: "المهام المفتوحة",
        snapshot_pending: "معلقة",
        projects_page_title: "المشاريع والمهام",
        projects_page_sub: "تنظيم تسليمات العملاء، المستودعات الداخلية، وربط المهام البرمجية بها.",
        filter_active: "المشاريع النشطة",
        filter_archived: "المشاريع المؤرشفة",
        filter_all: "جميع المشاريع",
        no_projects_found: "لم يتم العثور على مشاريع",
        no_projects_hint: "أنشئ أول مستودع أو مشروع لتنظيم جلساتك البرمجية.",
        total_time: "الوقت الإجمالي",
        billable: "المدفوع",
        tasks_done: "المهام المنجزة",
        tasks_word: "المهام",
        no_tasks_yet: "لا توجد مهام بعد",
        add_task: "إضافة مهمة",
        track: "تتبع",
        archive: "أرشفة",
        unarchive: "استعادة",
        delete: "حذف",
        edit: "تعديل",
        no_desc_provided: "لا يوجد وصف مدخل.",
        general: "عام",
        sessions_page_title: "سجل الجلسات المسجلة",
        sessions_page_sub: "سجل كامل لجميع جلسات العمل مع إمكانيات الفلترة، التصدير، والتعديل.",
        log_past_session: "تسجيل جلسة سابقة",
        export_csv: "تصدير CSV",
        export_json: "تصدير JSON",
        export_pdf: "تصدير تقرير PDF",
        search_sessions_placeholder: "ابحث في الملاحظات، عنوان المهمة، الوسوم...",
        all_projects: "جميع المشاريع",
        all_dates: "كافة التواريخ",
        today: "اليوم",
        yesterday: "الأمس",
        this_week: "هذا الأسبوع",
        last_week: "الأسبوع الماضي",
        this_month: "هذا الشهر",
        last_30_days: "آخر 30 يوماً",
        all_time: "كل الأوقات",
        all_billable_types: "كافة أنواع الفوترة",
        billable_only: "المدفوعة فقط",
        non_billable_only: "غير المدفوعة فقط",
        reset_filters: "إعادة ضبط",
        th_datetime: "التاريخ والوقت",
        th_project: "المشروع",
        th_task: "المهمة",
        th_duration: "المدة",
        th_tags: "الوسوم",
        th_billable: "مدفوع",
        th_notes: "الملاحظات",
        th_actions: "إجراءات",
        no_sessions_match: "لا توجد جلسات تطابق معايير البحث والفلترة.",
        btn_prev: "السابق",
        btn_next: "التالي",
        general_coding: "برمجة عامة",
        analytics_page_title: "تحليلات الإنتاجية البرمجية",
        analytics_page_sub: "تحليل معمق لتوزيع الوقت، الإنتاج التراكمي، وتوجهات مجالات العمل.",
        period_this_week: "هذا الأسبوع",
        period_this_month: "هذا الشهر",
        period_last_30_days: "آخر 30 يوماً",
        period_all_time: "كل الأوقات",
        period_coding_time: "وقت البرمجة في الفترة",
        calc_actual_sessions: "محسوب من الجلسات الفعلية",
        avg_session_length: "متوسط مدة الجلسة",
        billable_value: "إجمالي المستحقات",
        top_active_tech: "المشروع الأكثر تركيزاً",
        chart_proj_dist: "توزيع الوقت حسب المشروع",
        chart_hint_selected_period: "الفترة المحددة",
        chart_daily_vol: "حجم الوقت اليومي (ساعات)",
        chart_hint_day_by_day: "توزيع يومي",
        chart_cumul: "منحنى الساعات التراكمي",
        chart_hint_timeline: "المسار الزمني",
        chart_category: "توزيع المجالات والتصنيفات",
        chart_hint_skill: "توزيع المهارات",
        unassigned: "غير محدد",
        no_data: "لا توجد بيانات",
        general_work: "عمل عام",
        settings_page_title: "الإعدادات وإدارة البيانات",
        settings_page_sub: "تخصيص أهداف الإنتاجية، التنبيهات الصوتية، ونقل البيانات.",
        settings_targets_title: "أهداف وجدول الإنتاجية",
        settings_daily_goal: "الهدف اليومي للبرمجة (ساعات)",
        settings_daily_goal_hint: "يُستخدم لاحتساب شريط التقدم ونسبة الإنجاز اليومي.",
        settings_weekly_goal: "الهدف الأسبوعي للبرمجة (ساعات)",
        settings_weekly_goal_hint: "هدف الإنتاجية الأسبوعي عبر كافة المستودعات.",
        settings_week_start: "بداية الأسبوع",
        day_sunday: "الأحد",
        day_monday: "الاثنين",
        day_saturday: "السبت",
        settings_time_format: "تنسيق عرض الوقت",
        opt_24h: "نظام 24 ساعة (14:30)",
        opt_12h: "نظام 12 ساعة (2:30 م)",
        settings_language: "Interface Language / لغة الواجهة",
        opt_en: "English (EN)",
        opt_ar: "العربية (AR)",
        settings_sound: "تفعيل المؤثرات الصوتية الاصطناعية (Web Audio API)",
        settings_sound_preset: "نغمة التنبيه",
        settings_sound_volume: "مستوى الصوت",
        settings_sound_preview: "تجربة النغمة",
        opt_preset_chime: "جرس متناغم (Harmonic Sine)",
        opt_preset_digital: "نبض رقمي (Classic Beep)",
        opt_preset_marimba: "ماريمبا خشبية (Wooden Tap)",
        settings_notif: "طلب إشعارات المتصفح لانتهاء فترات العمل والاستراحة",
        settings_save_btn: "حفظ التفضيلات",
        storage_title: "التخزين والنسخ الاحتياطي",
        storage_model_label: "نموذج الحفظ:",
        storage_model_val: "محلي أولاً (تخزين المتصفح)",
        storage_sessions_label: "الجلسات المسجلة:",
        storage_projects_label: "المشاريع المجهزة:",
        storage_disclaimer: "تُحفظ كافة سجلات الجلسات وتفاصيل المشاريع حصرياً داخل التخزين المحلي لمتصفحك. لا يُرسل أي كود أو ضربات مفاتيح أو بيانات تتبع إلى خوادم بعيدة. احرص على أخذ نسخ احتياطية بانتظام.",
        storage_backup_title: "النسخ الاحتياطي واستعادة البيانات",
        backup_download: "تنزيل نسخة احتياطية (JSON)",
        backup_restore: "استعادة من ملف (JSON)",
        reset_workspace: "إعادة ضبط مساحة العمل",
        reset_workspace_hint: "حذف جميع الجلسات والمشاريع والمهام المحفوظة محلياً بعد التأكد من حفظ نسخة احتياطية.",
        clear_data_btn: "مسح كافة البيانات المخزنة",
        about_title: "متتبع وقت البرمجة (Code Timer Tracker)",
        about_tagline: "أداة دقيقة لإدارة الوقت وتحليلات الإنتاجية مخصصة لمهندسي البرمجيات",
        about_architect: "المصمم المعماري والمطور الرئيسي",
        about_org: "المؤسسة الأم",
        about_arch_type: "المعمارية البرمجية",
        about_arch_val: "محرك عميل محلي أولاً",
        about_license: "الترخيص",
        about_license_val: "ترخيص MIT",
        about_eco_title: "منظومة كود التطور (Code Elta6ur)",
        about_eco_sub: "المنصات والأدوات الهندسية والمستودعات البرمجية المعتمدة.",
        eco_edu: "منصة تعليمية",
        eco_software: "شركة برمجيات",
        eco_portfolio: "منصة استعراض أعمال المطورين",
        eco_tools: "منصة وأدوات",
        eco_hardware: "دليل العتاد والأنظمة",
        eco_syria: "منصة إقليمية",
        eco_engineer: "الملف الشخصي للمهندس",
        eco_github: "برمجيات حرة ومستودعات",
        about_shortcuts_title: "اختصارات لوحة المفاتيح المدمجة",
        shortcut_timer: "تشغيل / إيقاف مؤقت / استئناف العداد",
        shortcut_stop: "إنهاء وحفظ الجلسة النشطة",
        shortcut_palette: "فتح لوحة الأوامر السريعة",
        shortcut_focus: "تفعيل وضع التركيز الكامل",
        shortcut_nav: "الانتقال بين الصفحات (1 إلى 5)",
        footer_dev_by: "تطوير:",
        footer_part_of: "جزء من:",
        footer_repo: "المستودع البرمجي",
        footer_shortcuts: "الاختصارات",
        cmd_palette_placeholder: "اكتب أمراً، انتقل لصفحة، أو ابحث في الإجراءات...",
        cmd_navigate: "للتنقل",
        cmd_select: "للاختيار",
        cmd_close: "للإغلاق",
        cmd_use: "استخدم",
        cmd_no_results: "لم يتم العثور على أوامر مطابقة.",
        focus_console: "منصة التركيز",
        focus_exit: "الخروج من التركيز (ESC)",
        focus_general_session: "جلسة عامة",
        focus_coding: "برمجة مركزة",
        focus_in_progress: "جاري تتبع الوقت...",
        focus_paused: "الجلسة متوقفة مؤقتاً",
        modal_new_project: "مشروع جديد",
        modal_edit_project: "تعديل المشروع",
        lbl_project_name: "اسم المشروع *",
        placeholder_project_name: "مثال: Code Timer Tracker Rebuild",
        lbl_description: "الوصف",
        placeholder_description: "ملخص نطاق المشروع والأهداف التقنية...",
        lbl_category: "التصنيف",
        lbl_color_badge: "لون التمييز",
        lbl_hourly_rate: "سعر الفوترة بالساعة ($/ساعة)",
        placeholder_hourly_rate: "مثال: 60",
        lbl_estimated_hours: "الساعات المقدرة",
        placeholder_estimated_hours: "مثال: 20",
        lbl_tech_stack: "مجموعة التقنيات (مفصولة بفواصل)",
        placeholder_tech_stack: "مثال: JavaScript, Chart.js, HTML5, CSS3",
        btn_cancel: "إلغاء",
        btn_save_project: "حفظ المشروع",
        modal_new_task: "مهمة جديدة",
        modal_edit_task: "تعديل المهمة",
        lbl_assoc_project: "المشروع المرتبط *",
        lbl_task_title: "عنوان المهمة *",
        placeholder_task_title: "مثال: Implement RFC 4180 CSV export",
        lbl_priority: "الأولوية",
        priority_low: "منخفضة",
        priority_medium: "متوسطة",
        priority_high: "عالية",
        priority_urgent: "عاجلة",
        lbl_status: "الحالة",
        status_todo: "قيد الانتظار",
        status_in_progress: "قيد التنفيذ",
        status_done: "مكتملة",
        lbl_estimated_time: "الوقت المقدر (دقائق)",
        placeholder_estimated_mins: "مثال: 60",
        lbl_deadline: "الموعد النهائي (اختياري)",
        btn_save_task: "حفظ المهمة",
        modal_manual_session: "تسجيل جلسة عمل سابقة",
        lbl_date: "التاريخ *",
        lbl_duration_mins: "المدة (دقائق) *",
        placeholder_duration_mins: "مثال: 90",
        placeholder_manual_task: "مثال: Database schema migration",
        placeholder_manual_notes: "ما الذي أنجزته خلال هذه الجلسة؟",
        btn_save_manual_session: "حفظ الجلسة المسجلة",
        modal_edit_session: "تعديل سجل الجلسة",
        btn_update_session: "تحديث السجل",
        modal_confirm: "تأكيد الإجراء",
        msg_confirm_default: "هل أنت متأكد من المتابعة؟",
        btn_confirm: "تأكيد",
        cat_frontend: "واجهة أمامية",
        cat_backend: "خوادم وخلفية",
        cat_fullstack: "فل ستاك متكامل",
        cat_mobile: "تطبيقات الهاتف",
        cat_devops: "عمليات وديف أوبس",
        cat_architecture: "بنية ومعمارية",
        cat_opensource: "برمجيات حرة",
        cat_other: "تصنيف آخر",
        toast_project_saved: "تم حفظ المشروع بنجاح",
        toast_project_deleted: "تم حذف المشروع",
        toast_project_archived: "تمت أرشفة المشروع",
        toast_project_unarchived: "تمت استعادة المشروع من الأرشيف",
        toast_task_saved: "تم حفظ المهمة بنجاح",
        toast_task_deleted: "تم حذف المهمة",
        toast_session_saved: "تم تسجيل الجلسة بنجاح",
        toast_session_deleted: "تم حذف سجل الجلسة",
        toast_backup_downloaded: "تم تنزيل النسخة الاحتياطية بنجاح",
        toast_backup_restored: "تمت استعادة النسخة الاحتياطية بنجاح",
        toast_data_cleared: "تم مسح كافة البيانات وإعادة ضبط مساحة العمل",
        toast_preferences_saved: "تم حفظ التفضيلات بنجاح",
        toast_session_started: "بدأت جلسة البرمجة",
        toast_session_paused: "تم إيقاف الجلسة مؤقتاً",
        toast_session_resumed: "تم استئناف الجلسة",
        toast_session_stopped: "تم إنهاء وحفظ الجلسة",
        confirm_switch_session_title: "تبديل الجلسة",
        confirm_switch_session_msg: "هل تريد حفظ الجلسة النشطة الحالية وتتبع هذا المشروع؟",
        confirm_delete_project_title: "حذف المشروع",
        confirm_delete_project_msg: "هل أنت متأكد من حذف هذا المشروع؟ ستبقى الجلسات المسجلة محفوظة.",
        confirm_delete_session_title: "حذف الجلسة",
        confirm_delete_session_msg: "هل أنت متأكد من حذف سجل هذه الجلسة؟ لا يمكن التراجع عن هذا الإجراء.",
        confirm_reset_title: "إعادة تعيين كافة البيانات",
        confirm_reset_msg: "هل أنت متأكد من حذف كافة المشاريع والجلسات المخزنة؟ تأكد من تصدير نسخة احتياطية أولاً.",
        mobile_nav_more: "المزيد",
        mobile_more_title: "الأدوات والمزيد",
        mobile_sheet_analytics_sub: "المخططات، معدلات التركيز والإنتاجية",
        mobile_sheet_settings_sub: "الأهداف، الأصوات والنسخ الاحتياطي",
        mobile_sheet_about_sub: "المعمارية ومنظومة كود التطور",
        mobile_sheet_focus_sub: "مؤقت كامل بدون مشتتات",
        mobile_sheet_manual_sub: "إضافة فترة عمل يدوياً",
        download_apk_title: "تحميل تطبيق أندرويد (APK)",
        download_apk_sub: "تطبيق أصيل 100% بدون إنترنت (1.7 م.ب)",
        about_apk_title: "تطبيق الأندرويد المستقل (بدون إنترنت)",
        about_apk_sub: "تطبيق أندرويد أصيل ومستقل لا يحتاج لأي اتصال بالإنترنت.",
        about_apk_badge: "v2.4.3 • يعمل 100% بدون إنترنت",
        about_apk_desc: "تطبيق أندرويد كامل ومستقل لا يحتاج إلى أي اتصال بالإنترنت. يحتوي على منصة المؤقت، المشاريع، سجل الجلسات، الرسوم البيانية، ومحرك المتجهات بحجم خفيف 1.7 ميجابايت فقط.",
        btn_download_apk: "تحميل تطبيق أندرويد APK (1.7 م.ب)",
        btn_github_mirror: "رابط تحميل مباشر من GitHub",
    }
};

class StorageManager {
    static STORAGE_KEY = 'code_timer_v2_data';
    static ACTIVE_SESSION_KEY = 'code_timer_v2_active_session';
    static LEGACY_KEY = 'codeTimerData';

    static getDefaultState() {
        return {
            version: '2.0',
            projects: [
                {
                    id: 'proj_default_1',
                    name: 'Code Timer Tracker',
                    description: 'Developer productivity, session tracking, and project analytics suite',
                    category: 'Full-Stack',
                    color: '#10b981',
                    hourlyRate: 65,
                    estimatedHours: 40,
                    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Chart.js', 'Git'],
                    archived: false,
                    createdAt: new Date().toISOString()
                }
            ],
            tasks: [
                {
                    id: 'task_default_1',
                    projectId: 'proj_default_1',
                    title: 'Core time engine and analytics rebuild',
                    priority: 'high',
                    status: 'in_progress',
                    estimatedMinutes: 180,
                    deadline: '',
                    createdAt: new Date().toISOString()
                }
            ],
            sessions: [],
            settings: {
                theme: 'dark',
                language: 'en',
                dailyGoalHours: 4,
                weeklyGoalHours: 25,
                weekStart: 'sunday',
                timeFormat: '24h',
                soundEnabled: true,
                soundVolume: 80,
                soundPreset: 'chime',
                notificationsEnabled: false,
                pomoWorkMinutes: 25,
                pomoBreakMinutes: 5
            }
        };
    }

    static load() {
        const raw = localStorage.getItem(this.STORAGE_KEY);
        if (raw) {
            try {
                const parsed = JSON.parse(raw);
                if (parsed && Array.isArray(parsed.projects) && Array.isArray(parsed.sessions)) {
                    return this.normalizeState(parsed);
                }
            } catch (err) {
                console.error('Failed to parse storage data:', err);
            }
        }

        const legacyRaw = localStorage.getItem(this.LEGACY_KEY);
        if (legacyRaw) {
            try {
                const legacy = JSON.parse(legacyRaw);
                const migrated = this.migrateLegacyData(legacy);
                this.save(migrated);
                return migrated;
            } catch (err) {
                console.error('Failed to migrate legacy data:', err);
            }
        }

        const initial = this.getDefaultState();
        this.save(initial);
        return initial;
    }

    static normalizeState(data) {
        const defaults = this.getDefaultState();
        let audioPrefs = {};
        try {
            const rawAudio = localStorage.getItem('code_timer_audio_settings');
            if (rawAudio) audioPrefs = JSON.parse(rawAudio);
        } catch (_) {}
        return {
            version: '2.0',
            projects: Array.isArray(data.projects) ? data.projects : defaults.projects,
            tasks: Array.isArray(data.tasks) ? data.tasks : defaults.tasks,
            sessions: Array.isArray(data.sessions) ? data.sessions : [],
            settings: { ...defaults.settings, ...audioPrefs, ...(data.settings || {}) }
        };
    }

    static migrateLegacyData(legacy) {
        const base = this.getDefaultState();
        if (Array.isArray(legacy.projects)) {
            base.projects = legacy.projects.map((p, idx) => ({
                id: p.id || `migrated_proj_${idx}`,
                name: p.name || 'Unnamed Project',
                description: p.description || '',
                category: 'General',
                color: p.color || '#10b981',
                hourlyRate: parseFloat(p.rate) || 0,
                estimatedHours: 0,
                techStack: [],
                archived: false,
                createdAt: new Date().toISOString()
            }));
        }
        if (Array.isArray(legacy.sessions)) {
            base.sessions = legacy.sessions.map((s, idx) => {
                const duration = typeof s.duration === 'number' ? s.duration : 0;
                const start = s.startTime ? new Date(s.startTime).toISOString() : new Date().toISOString();
                const end = s.endTime ? new Date(s.endTime).toISOString() : new Date(new Date(start).getTime() + duration).toISOString();
                return {
                    id: s.id || `migrated_sess_${idx}`,
                    projectId: s.projectId || '',
                    taskId: null,
                    taskTitle: s.task || 'General Work',
                    startTime: start,
                    endTime: end,
                    duration: duration,
                    pausedDuration: 0,
                    tags: Array.isArray(s.tags) ? s.tags : [],
                    billable: !!s.billable,
                    hourlyRate: 0,
                    earned: 0,
                    notes: s.notes || '',
                    createdAt: start
                };
            });
        }
        return base;
    }

    static save(data) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
            if (data?.settings) {
                const audioPrefs = {
                    soundVolume: data.settings.soundVolume ?? 80,
                    soundPreset: data.settings.soundPreset ?? 'chime'
                };
                localStorage.setItem('code_timer_audio_settings', JSON.stringify(audioPrefs));
            }
        } catch (err) {
            console.error('Storage write error:', err);
        }
    }

    static saveActiveSession(session) {
        if (!session) {
            localStorage.removeItem(this.ACTIVE_SESSION_KEY);
            return;
        }
        try {
            localStorage.setItem(this.ACTIVE_SESSION_KEY, JSON.stringify(session));
        } catch (err) {
            console.error('Active session write error:', err);
        }
    }

    static loadActiveSession() {
        const raw = localStorage.getItem(this.ACTIVE_SESSION_KEY);
        if (!raw) return null;
        try {
            return JSON.parse(raw);
        } catch (err) {
            console.error('Failed to parse active session:', err);
            return null;
        }
    }
}

class SoundSynthesizer {
    constructor(enabled = true, volume = 80, preset = 'chime') {
        this.enabled = enabled;
        this.volume = Math.max(0, Math.min(100, Number(volume) || 0));
        this.preset = ['chime', 'digital', 'marimba'].includes(preset) ? preset : 'chime';
        this.ctx = null;
    }

    initCtx() {
        if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioCtx();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    setVolume(vol) {
        this.volume = Math.max(0, Math.min(100, Number(vol) || 0));
    }

    setPreset(preset) {
        if (['chime', 'digital', 'marimba'].includes(preset)) {
            this.preset = preset;
        }
    }

    playTone(frequency, type, duration, baseGain = 0.08) {
        if (!this.enabled || this.volume <= 0) return;
        try {
            this.initCtx();
            if (!this.ctx) return;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);
            const effectiveGain = baseGain * (this.volume / 100);
            gain.gain.setValueAtTime(effectiveGain, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + duration);
        } catch (e) {
            // Audio context policy fallback
        }
    }

    playStart() {
        if (this.preset === 'digital') {
            this.playTone(880, 'square', 0.08, 0.06);
            setTimeout(() => this.playTone(1760, 'square', 0.12, 0.06), 70);
        } else if (this.preset === 'marimba') {
            this.playTone(440, 'triangle', 0.18, 0.1);
            setTimeout(() => this.playTone(554.37, 'triangle', 0.22, 0.1), 80);
        } else {
            // chime default
            this.playTone(523.25, 'sine', 0.12, 0.08); // C5
            setTimeout(() => this.playTone(659.25, 'sine', 0.18, 0.08), 80); // E5
        }
    }

    playPause() {
        if (this.preset === 'digital') {
            this.playTone(600, 'square', 0.1, 0.05);
        } else if (this.preset === 'marimba') {
            this.playTone(392, 'triangle', 0.16, 0.08);
        } else {
            this.playTone(440, 'triangle', 0.15, 0.06); // A4
        }
    }

    playStop() {
        if (this.preset === 'digital') {
            this.playTone(1760, 'square', 0.08, 0.06);
            setTimeout(() => this.playTone(880, 'square', 0.15, 0.06), 80);
        } else if (this.preset === 'marimba') {
            this.playTone(554.37, 'triangle', 0.15, 0.09);
            setTimeout(() => this.playTone(440, 'triangle', 0.25, 0.09), 90);
        } else {
            this.playTone(659.25, 'sine', 0.12, 0.08); // E5
            setTimeout(() => this.playTone(523.25, 'sine', 0.22, 0.08), 90); // C5
        }
    }

    playBreakChime() {
        if (this.preset === 'digital') {
            this.playTone(1046.5, 'square', 0.1, 0.06);
            setTimeout(() => this.playTone(1318.5, 'square', 0.1, 0.06), 90);
            setTimeout(() => this.playTone(2093.0, 'square', 0.2, 0.06), 180);
        } else if (this.preset === 'marimba') {
            this.playTone(523.25, 'triangle', 0.18, 0.1);
            setTimeout(() => this.playTone(659.25, 'triangle', 0.2, 0.1), 100);
            setTimeout(() => this.playTone(783.99, 'triangle', 0.3, 0.1), 200);
        } else {
            this.playTone(783.99, 'sine', 0.2, 0.09); // G5
            setTimeout(() => this.playTone(987.77, 'sine', 0.3, 0.09), 120); // B5
        }
    }

    previewPreset(preset) {
        const prev = this.preset;
        this.setPreset(preset);
        this.playBreakChime();
        this.setPreset(prev);
    }
}

class AppEngine {
    constructor() {
        window.appEngine = this;
        this.state = StorageManager.load();
        this.synth = new SoundSynthesizer(
            this.state.settings.soundEnabled,
            this.state.settings.soundVolume ?? 80,
            this.state.settings.soundPreset ?? 'chime'
        );
        this.activeSession = null;
        this.timerInterval = null;
        this.currentPage = 'dashboard';

        this.pomodoro = {
            running: false,
            phase: 'work',
            timeLeft: this.state.settings.pomoWorkMinutes * 60,
            interval: null
        };

        this.sessionsPagination = {
            page: 1,
            perPage: 10,
            filtered: []
        };

        this.charts = {
            dashProjects: null,
            projectsDistribution: null,
            dailyVolume: null,
            cumulativeTrend: null,
            categoryBreakdown: null
        };

        this.initDOMReferences();
        this.applyLanguage(this.state.settings.language || 'en');
        this.applyTheme(this.state.settings.theme);
        this.initEventListeners();
        this.initKeyboardShortcuts();
        this.populateProjectSelects();
        this.restoreActiveSession();
        this.renderAll();
    }

    initDOMReferences() {
        this.dom = {
            // Mobile Navigation & Floating Player
            mobileNavBtns: document.querySelectorAll('.mobile-nav-btn'),
            mobNavMoreBtn: document.getElementById('mobNavMoreBtn'),
            mobileMoreSheet: document.getElementById('mobileMoreSheet'),
            mobileFloatingTimer: document.getElementById('mobileFloatingTimer'),
            mobTimerProject: document.getElementById('mobTimerProject'),
            mobTimerTask: document.getElementById('mobTimerTask'),
            mobTimerClock: document.getElementById('mobTimerClock'),
            mobTimerPauseBtn: document.getElementById('mobTimerPauseBtn'),
            mobTimerStopBtn: document.getElementById('mobTimerStopBtn'),
            mobTimerActiveDot: document.getElementById('mobTimerActiveDot'),
            mobileSessionsFeed: document.getElementById('mobileSessionsFeed'),

            app: document.getElementById('app'),
            themeToggle: document.getElementById('themeToggle'),
            langToggleBtn: document.getElementById('langToggleBtn'),
            langLabel: document.getElementById('langLabel'),
            settingLanguage: document.getElementById('settingLanguage'),
            navTabs: document.querySelectorAll('.nav-tab'),
            pageViews: document.querySelectorAll('.page-view'),

            // Header Pill
            headerTimerPill: document.getElementById('headerTimerPill'),
            pillProjectName: document.getElementById('pillProjectName'),
            pillTimerDisplay: document.getElementById('pillTimerDisplay'),
            pillPauseBtn: document.getElementById('pillPauseBtn'),
            pillStopBtn: document.getElementById('pillStopBtn'),

            // Dashboard
            dashStartTimerBtn: document.getElementById('dashStartTimerBtn'),
            dashNewProjectBtn: document.getElementById('dashNewProjectBtn'),
            dashTodayTime: document.getElementById('dashTodayTime'),
            dashWeekTime: document.getElementById('dashWeekTime'),
            dashBillableAmount: document.getElementById('dashBillableAmount'),
            dashBillableTime: document.getElementById('dashBillableTime'),
            dashActiveStreak: document.getElementById('dashActiveStreak'),
            dashActiveProjectsCount: document.getElementById('dashActiveProjectsCount'),
            todayProgressBadge: document.getElementById('todayProgressBadge'),
            weekProgressBadge: document.getElementById('weekProgressBadge'),
            dailyGoalProgress: document.getElementById('dailyGoalProgress'),
            weeklyGoalProgress: document.getElementById('weeklyGoalProgress'),
            dailyGoalText: document.getElementById('dailyGoalText'),
            weeklyGoalText: document.getElementById('weeklyGoalText'),
            dashTimerClock: document.getElementById('dashTimerClock'),
            dashActiveSessionStatus: document.getElementById('dashActiveSessionStatus'),
            dashMetaProject: document.getElementById('dashMetaProject'),
            dashMetaTask: document.getElementById('dashMetaTask'),
            dashTimerToggleBtn: document.getElementById('dashTimerToggleBtn'),
            dashTimerPauseBtn: document.getElementById('dashTimerPauseBtn'),
            dashTimerStopBtn: document.getElementById('dashTimerStopBtn'),
            dashRecentSessionsList: document.getElementById('dashRecentSessionsList'),
            dashProjectsEmpty: document.getElementById('dashProjectsEmpty'),

            // Timer Console
            consoleMainClock: document.getElementById('consoleMainClock'),
            consoleSessionStatusBadge: document.getElementById('consoleSessionStatusBadge'),
            consoleBillableBadge: document.getElementById('consoleBillableBadge'),
            consoleCategoryBadge: document.getElementById('consoleCategoryBadge'),
            consoleStartTimeText: document.getElementById('consoleStartTimeText'),
            consolePausedTimeText: document.getElementById('consolePausedTimeText'),
            consoleStartBtn: document.getElementById('consoleStartBtn'),
            consolePauseBtn: document.getElementById('consolePauseBtn'),
            consoleStopBtn: document.getElementById('consoleStopBtn'),
            timerProjectSelect: document.getElementById('timerProjectSelect'),
            timerTaskSelect: document.getElementById('timerTaskSelect'),
            timerTagsInput: document.getElementById('timerTagsInput'),
            timerBillableCheck: document.getElementById('timerBillableCheck'),
            timerNotesInput: document.getElementById('timerNotesInput'),
            activeProjectDetailsBody: document.getElementById('activeProjectDetailsBody'),

            // Pomodoro Companion
            pomoClock: document.getElementById('pomoClock'),
            pomoPhase: document.getElementById('pomoPhase'),
            pomoToggleBtn: document.getElementById('pomoToggleBtn'),
            pomoResetBtn: document.getElementById('pomoResetBtn'),
            pomoWorkDuration: document.getElementById('pomoWorkDuration'),
            pomoBreakDuration: document.getElementById('pomoBreakDuration'),

            // Projects Page
            projectsContainer: document.getElementById('projectsContainer'),
            projectFilterStatus: document.getElementById('projectFilterStatus'),
            createProjectBtn: document.getElementById('createProjectBtn'),

            // Sessions Table & Filters
            sessionSearchInput: document.getElementById('sessionSearchInput'),
            sessionFilterProject: document.getElementById('sessionFilterProject'),
            sessionFilterPeriod: document.getElementById('sessionFilterPeriod'),
            sessionFilterBillable: document.getElementById('sessionFilterBillable'),
            resetSessionFiltersBtn: document.getElementById('resetSessionFiltersBtn'),
            sessionsTableBody: document.getElementById('sessionsTableBody'),
            sessionTableCount: document.getElementById('sessionTableCount'),
            sessionPrevPageBtn: document.getElementById('sessionPrevPageBtn'),
            sessionNextPageBtn: document.getElementById('sessionNextPageBtn'),
            sessionCurrentPageText: document.getElementById('sessionCurrentPageText'),

            // Analytics
            analyticsTotalTime: document.getElementById('analyticsTotalTime'),
            analyticsAvgSession: document.getElementById('analyticsAvgSession'),
            analyticsTotalSessionsCount: document.getElementById('analyticsTotalSessionsCount'),
            analyticsBillableEarned: document.getElementById('analyticsBillableEarned'),
            analyticsBillableHours: document.getElementById('analyticsBillableHours'),
            analyticsTopProject: document.getElementById('analyticsTopProject'),
            analyticsTopProjectHours: document.getElementById('analyticsTopProjectHours'),
            periodButtons: document.querySelectorAll('.period-btn'),

            // Settings
            settingsForm: document.getElementById('settingsForm'),
            settingDailyGoalHours: document.getElementById('settingDailyGoalHours'),
            settingWeeklyGoalHours: document.getElementById('settingWeeklyGoalHours'),
            settingWeekStart: document.getElementById('settingWeekStart'),
            settingTimeFormat: document.getElementById('settingTimeFormat'),
            settingSoundToggle: document.getElementById('settingSoundToggle'),
            settingSoundPreset: document.getElementById('settingSoundPreset'),
            settingSoundVolume: document.getElementById('settingSoundVolume'),
            soundVolumeLabel: document.getElementById('soundVolumeLabel'),
            btnPreviewSound: document.getElementById('btnPreviewSound'),
            audioSettingsGroup: document.getElementById('audioSettingsGroup'),
            exportPdfBtn: document.getElementById('exportPdfBtn'),
            settingNotificationsToggle: document.getElementById('settingNotificationsToggle'),
            storageSessionsCount: document.getElementById('storageSessionsCount'),
            storageProjectsCount: document.getElementById('storageProjectsCount'),
            btnDownloadBackup: document.getElementById('btnDownloadBackup'),
            importBackupInput: document.getElementById('importBackupInput'),
            btnResetAllData: document.getElementById('btnResetAllData'),

            // Modals
            projectModal: document.getElementById('projectModal'),
            projectForm: document.getElementById('projectForm'),
            taskModal: document.getElementById('taskModal'),
            taskForm: document.getElementById('taskForm'),
            manualSessionModal: document.getElementById('manualSessionModal'),
            manualSessionForm: document.getElementById('manualSessionForm'),
            editSessionModal: document.getElementById('editSessionModal'),
            editSessionForm: document.getElementById('editSessionForm'),
            confirmModal: document.getElementById('confirmModal'),
            commandPaletteModal: document.getElementById('commandPaletteModal'),
            cmdPaletteInput: document.getElementById('cmdPaletteInput'),
            cmdPaletteResults: document.getElementById('cmdPaletteResults'),

            // Focus Overlay
            focusModeOverlay: document.getElementById('focusModeOverlay'),
            focusClock: document.getElementById('focusClock'),
            focusProjectPill: document.getElementById('focusProjectPill'),
            focusTaskTitle: document.getElementById('focusTaskTitle'),
            focusSubStatus: document.getElementById('focusSubStatus'),
            focusTogglePauseBtn: document.getElementById('focusTogglePauseBtn'),
            focusStopBtn: document.getElementById('focusStopBtn'),
            focusExitBtn: document.getElementById('focusExitBtn'),

            // Toast
            toastContainer: document.getElementById('toastContainer'),

            // Dedicated Mobile Cockpit Elements
            mobileBottomNav: document.querySelector('.mobile-bottom-nav'),
            mobileNavBtns: document.querySelectorAll('.mobile-nav-btn'),
            mobileFloatingTimer: document.getElementById('mobileFloatingTimer'),
            mobTimerClock: document.getElementById('mobTimerClock'),
            mobTimerProject: document.getElementById('mobTimerProject'),
            mobTimerTask: document.getElementById('mobTimerTask'),
            mobTimerPauseBtn: document.getElementById('mobTimerPauseBtn'),
            mobTimerStopBtn: document.getElementById('mobTimerStopBtn'),
            mobTimerActiveDot: document.getElementById('mobTimerActiveDot'),
            mobNavMoreBtn: document.getElementById('mobNavMoreBtn'),
            mobileMoreSheet: document.getElementById('mobileMoreSheet'),
            mobileMoreCloseBtn: document.querySelector('.mobile-sheet-close'),
            mobileSessionsFeed: document.getElementById('mobileSessionsFeed')
        };
    }

    initEventListeners() {
        // Navigation Tabs
        this.dom.navTabs?.forEach(tab => {
            tab.addEventListener('click', () => {
                const page = tab.getAttribute('data-page');
                this.navigateTo(page);
            });
        });

        // Theme Toggle
        this.dom.themeToggle?.addEventListener('click', () => {
            const nextTheme = this.state.settings.theme === 'dark' ? 'light' : 'dark';
            this.state.settings.theme = nextTheme;
            this.applyTheme(nextTheme);
            this.saveState();
            this.showToast(`Switched to ${nextTheme} mode`, 'info');
        });

        // Language Switcher
        this.dom.langToggleBtn?.addEventListener('click', () => {
            const current = this.state.settings.language || 'en';
            const next = current === 'en' ? 'ar' : 'en';
            this.setLanguage(next);
        });

        this.dom.settingLanguage?.addEventListener('change', (e) => {
            this.setLanguage(e.target.value);
        });

        // Header Pill Controls
        this.dom.pillPauseBtn?.addEventListener('click', () => this.togglePauseSession());
        this.dom.pillStopBtn?.addEventListener('click', () => this.stopAndSaveSession());

        // Dashboard Controls
        this.dom.dashStartTimerBtn?.addEventListener('click', () => {
            this.navigateTo('timer');
        });
        this.dom.dashNewProjectBtn?.addEventListener('click', () => this.openProjectModal());
        this.dom.dashTimerToggleBtn?.addEventListener('click', () => {
            if (!this.activeSession) {
                this.startSession();
            } else {
                this.navigateTo('timer');
            }
        });
        this.dom.dashTimerPauseBtn?.addEventListener('click', () => this.togglePauseSession());
        this.dom.dashTimerStopBtn?.addEventListener('click', () => this.stopAndSaveSession());
        document.getElementById('dashGoToTimerBtn')?.addEventListener('click', () => this.navigateTo('timer'));
        document.getElementById('viewAllSessionsBtn')?.addEventListener('click', () => this.navigateTo('sessions'));

        // Preset buttons on dashboard
        document.querySelectorAll('.preset-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const task = btn.getAttribute('data-task');
                const tag = btn.getAttribute('data-tag');
                this.startPresetSession(task, tag);
            });
        });

        // Timer Console Controls
        this.dom.consoleStartBtn?.addEventListener('click', () => this.startSession());
        this.dom.consolePauseBtn?.addEventListener('click', () => this.togglePauseSession());
        this.dom.consoleStopBtn?.addEventListener('click', () => this.stopAndSaveSession());

        this.dom.timerProjectSelect?.addEventListener('change', () => {
            this.updateTaskSelectOptions();
            this.updateProjectSnapshot();
            this.syncConsoleMetadataToActiveSession();
        });

        this.dom.timerTaskSelect?.addEventListener('change', () => {
            this.syncConsoleMetadataToActiveSession();
        });
        this.dom.timerTagsInput?.addEventListener('input', () => {
            this.syncConsoleMetadataToActiveSession();
        });
        this.dom.timerBillableCheck?.addEventListener('change', () => {
            this.syncConsoleMetadataToActiveSession();
        });
        this.dom.timerNotesInput?.addEventListener('input', () => {
            this.syncConsoleMetadataToActiveSession();
        });

        document.getElementById('quickAddProjectBtn')?.addEventListener('click', () => this.openProjectModal());
        document.getElementById('quickAddTaskBtn')?.addEventListener('click', () => {
            const currentProjId = this.dom.timerProjectSelect ? this.dom.timerProjectSelect.value : '';
            this.openTaskModal(null, currentProjId);
        });

        // Fullscreen & Focus Mode
        document.getElementById('focusModeBtn')?.addEventListener('click', () => this.openFocusMode());
        document.getElementById('consoleFullscreenBtn')?.addEventListener('click', () => this.openFocusMode());
        this.dom.focusExitBtn?.addEventListener('click', () => this.closeFocusMode());
        this.dom.focusTogglePauseBtn?.addEventListener('click', () => this.togglePauseSession());
        this.dom.focusStopBtn?.addEventListener('click', () => this.stopAndSaveSession());

        // Companion Pomodoro
        this.dom.pomoToggleBtn?.addEventListener('click', () => this.togglePomodoro());
        this.dom.pomoResetBtn?.addEventListener('click', () => this.resetPomodoro());
        this.dom.pomoWorkDuration?.addEventListener('change', () => {
            this.state.settings.pomoWorkMinutes = parseInt(this.dom.pomoWorkDuration.value) || 25;
            this.saveState();
            if (!this.pomodoro.running && this.pomodoro.phase === 'work') {
                this.resetPomodoro();
            }
        });
        this.dom.pomoBreakDuration?.addEventListener('change', () => {
            this.state.settings.pomoBreakMinutes = parseInt(this.dom.pomoBreakDuration.value) || 5;
            this.saveState();
            if (!this.pomodoro.running && this.pomodoro.phase === 'break') {
                this.resetPomodoro();
            }
        });

        // Project Filter & Add
        this.dom.createProjectBtn?.addEventListener('click', () => this.openProjectModal());
        this.dom.projectFilterStatus?.addEventListener('change', () => this.renderProjects());

        // Sessions View
        document.getElementById('openManualSessionModalBtn')?.addEventListener('click', () => this.openManualSessionModal());
        document.getElementById('logManualBtn')?.addEventListener('click', () => this.openManualSessionModal());
        document.getElementById('exportCsvBtn')?.addEventListener('click', () => this.exportCsv());
        document.getElementById('exportJsonBtn')?.addEventListener('click', () => this.exportJsonBackup());
        document.getElementById('exportPdfBtn')?.addEventListener('click', () => this.exportPdfReport());

        this.dom.sessionSearchInput?.addEventListener('input', () => this.applySessionFilters());
        this.dom.sessionFilterProject?.addEventListener('change', () => this.applySessionFilters());
        this.dom.sessionFilterPeriod?.addEventListener('change', () => this.applySessionFilters());
        this.dom.sessionFilterBillable?.addEventListener('change', () => this.applySessionFilters());
        this.dom.resetSessionFiltersBtn?.addEventListener('click', () => {
            if (this.dom.sessionSearchInput) this.dom.sessionSearchInput.value = '';
            if (this.dom.sessionFilterProject) this.dom.sessionFilterProject.value = 'all';
            if (this.dom.sessionFilterPeriod) this.dom.sessionFilterPeriod.value = 'all';
            if (this.dom.sessionFilterBillable) this.dom.sessionFilterBillable.value = 'all';
            this.applySessionFilters();
        });

        this.dom.sessionPrevPageBtn?.addEventListener('click', () => {
            if (this.sessionsPagination.page > 1) {
                this.sessionsPagination.page--;
                this.renderSessionsTable();
            }
        });
        this.dom.sessionNextPageBtn?.addEventListener('click', () => {
            const maxPage = Math.ceil(this.sessionsPagination.filtered.length / this.sessionsPagination.perPage) || 1;
            if (this.sessionsPagination.page < maxPage) {
                this.sessionsPagination.page++;
                this.renderSessionsTable();
            }
        });

        // Analytics Period Buttons
        this.dom.periodButtons?.forEach(btn => {
            btn.addEventListener('click', () => {
                this.dom.periodButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const period = btn.getAttribute('data-period');
                this.renderAnalytics(period);
            });
        });

        // Settings Form
        this.dom.settingsForm?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.state.settings.dailyGoalHours = parseFloat(this.dom.settingDailyGoalHours.value) || 4;
            this.state.settings.weeklyGoalHours = parseFloat(this.dom.settingWeeklyGoalHours.value) || 25;
            this.state.settings.weekStart = this.dom.settingWeekStart.value;
            this.state.settings.timeFormat = this.dom.settingTimeFormat.value;
            if (this.dom.settingLanguage) {
                this.state.settings.language = this.dom.settingLanguage.value;
            }
            this.state.settings.soundEnabled = this.dom.settingSoundToggle.checked;
            this.state.settings.soundVolume = Number(this.dom.settingSoundVolume?.value) || 80;
            this.state.settings.soundPreset = this.dom.settingSoundPreset?.value || 'chime';
            this.state.settings.notificationsEnabled = this.dom.settingNotificationsToggle.checked;
            this.synth.enabled = this.state.settings.soundEnabled;
            this.synth.setVolume(this.state.settings.soundVolume);
            this.synth.setPreset(this.state.settings.soundPreset);

            if (this.state.settings.notificationsEnabled && 'Notification' in window) {
                Notification.requestPermission();
            }

            this.saveState();
            this.renderDashboard();
            this.showToast('Productivity targets and preferences saved.', 'success');
        });

        // Audio controls interactive listeners
        this.dom.settingSoundToggle?.addEventListener('change', (e) => {
            if (this.dom.audioSettingsGroup) {
                this.dom.audioSettingsGroup.style.display = e.target.checked ? 'block' : 'none';
            }
        });

        this.dom.settingSoundVolume?.addEventListener('input', (e) => {
            const val = Number(e.target.value) || 0;
            if (this.dom.soundVolumeLabel) this.dom.soundVolumeLabel.textContent = `${val}%`;
            this.synth.setVolume(val);
            this.state.settings.soundVolume = val;
        });

        this.dom.settingSoundPreset?.addEventListener('change', (e) => {
            this.synth.setPreset(e.target.value);
            this.state.settings.soundPreset = e.target.value;
        });

        this.dom.btnPreviewSound?.addEventListener('click', () => {
            this.synth.previewPreset(this.synth.preset);
        });

        this.dom.btnDownloadBackup?.addEventListener('click', () => this.exportJsonBackup());
        this.dom.importBackupInput?.addEventListener('change', (e) => this.handleBackupImport(e));
        this.dom.btnResetAllData?.addEventListener('click', () => {
            this.openConfirmDialog(
                this.t('confirm_reset_title'),
                this.t('confirm_reset_msg'),
                () => {
                    localStorage.removeItem(StorageManager.STORAGE_KEY);
                    localStorage.removeItem(StorageManager.ACTIVE_SESSION_KEY);
                    this.state = StorageManager.getDefaultState();
                    StorageManager.save(this.state);
                    this.activeSession = null;
                    if (this.timerInterval) clearInterval(this.timerInterval);
                    this.populateProjectSelects();
                    this.renderAll();
                    this.showToast('Workspace reset to clean default state.', 'info');
                }
            );
        });

        // Command Palette Trigger
        document.getElementById('cmdPaletteBtn')?.addEventListener('click', () => this.openCommandPalette());
        this.dom.cmdPaletteInput?.addEventListener('input', () => this.filterCommandPalette());
        this.dom.commandPaletteModal?.addEventListener('click', (e) => {
            if (e.target === this.dom.commandPaletteModal) this.closeCommandPalette();
        });

        // Modal Close Triggers
        document.querySelectorAll('.modal-close-trigger').forEach(btn => {
            btn.addEventListener('click', () => this.closeAllModals());
        });

        // Form Submissions
        this.dom.projectForm?.addEventListener('submit', (e) => this.handleProjectFormSubmit(e));
        this.dom.taskForm?.addEventListener('submit', (e) => this.handleTaskFormSubmit(e));
        this.dom.manualSessionForm?.addEventListener('submit', (e) => this.handleManualSessionSubmit(e));
        this.dom.editSessionForm?.addEventListener('submit', (e) => this.handleEditSessionSubmit(e));

        document.getElementById('footerShortcutsBtn')?.addEventListener('click', () => {
            this.navigateTo('about');
        });
    }

    initKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Modal escape handler
            if (e.key === 'Escape') {
                if (this.dom.commandPaletteModal && !this.dom.commandPaletteModal.classList.contains('hidden')) {
                    this.closeCommandPalette();
                    return;
                }
                if (this.dom.focusModeOverlay && !this.dom.focusModeOverlay.classList.contains('hidden')) {
                    this.closeFocusMode();
                    return;
                }
                this.closeAllModals();
                return;
            }

            // Command palette (Ctrl+K / Cmd+K)
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                this.openCommandPalette();
                return;
            }

            // Focus mode (Ctrl+B)
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
                e.preventDefault();
                this.toggleFocusMode();
                return;
            }

            // Stop session (Ctrl+Shift+S)
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 's') {
                e.preventDefault();
                if (this.activeSession) {
                    this.stopAndSaveSession();
                }
                return;
            }

            // Navigation shortcuts (Ctrl+1 .. Ctrl+5)
            if ((e.ctrlKey || e.metaKey) && !e.shiftKey) {
                switch (e.key) {
                    case '1': e.preventDefault(); this.navigateTo('dashboard'); return;
                    case '2': e.preventDefault(); this.navigateTo('timer'); return;
                    case '3': e.preventDefault(); this.navigateTo('projects'); return;
                    case '4': e.preventDefault(); this.navigateTo('sessions'); return;
                    case '5': e.preventDefault(); this.navigateTo('reports'); return;
                }
            }

            // Space bar: Start / Pause / Resume timer when outside inputs
            const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
            const isEditing = activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select';
            if (e.code === 'Space' && !isEditing && !e.ctrlKey && !e.metaKey) {
                e.preventDefault();
                if (!this.activeSession) {
                    this.startSession();
                } else {
                    this.togglePauseSession();
                }
            }
        });

        // Dedicated Mobile Bottom Navigation Tabs
        this.dom.mobileNavBtns?.forEach(btn => {
            btn.addEventListener('click', () => {
                const page = btn.getAttribute('data-page');
                if (btn.id === 'mobNavMoreBtn') {
                    this.toggleMobileMoreSheet();
                } else if (page) {
                    this.navigateTo(page);
                }
            });
        });

        // Dedicated Mobile Bottom Sheet Actions
        document.querySelectorAll('.sheet-menu-item').forEach(item => {
            item.addEventListener('click', () => {
                const page = item.getAttribute('data-page');
                const action = item.getAttribute('data-action');
                this.closeMobileMoreSheet();
                if (item.id === 'mobSheetManualBtn' || action === 'manual') {
                    this.openManualSessionModal();
                } else if (item.id === 'mobSheetFocusBtn' || action === 'focus') {
                    this.openFocusMode();
                } else if (page) {
                    this.navigateTo(page);
                }
            });
        });

        // Mobile Sheet Close Button & Backdrop Click
        this.dom.mobileMoreCloseBtn?.addEventListener('click', () => this.closeMobileMoreSheet());
        this.dom.mobileMoreSheet?.addEventListener('click', (e) => {
            if (e.target === this.dom.mobileMoreSheet) {
                this.closeMobileMoreSheet();
            }
        });

        // Dedicated Mobile Floating Timer Controls
        this.dom.mobTimerPauseBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.togglePauseSession();
        });
        this.dom.mobTimerStopBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.stopAndSaveSession();
        });
        this.dom.mobileFloatingTimer?.addEventListener('click', (e) => {
            if (e.target.closest('button')) return;
            this.navigateTo('timer');
        });
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        if (this.dom.themeToggle) {
            this.dom.themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        }
    }

    t(key) {
        const lang = (this.state && this.state.settings && this.state.settings.language) ? this.state.settings.language : 'en';
        if (I18N[lang] && I18N[lang][key] !== undefined) {
            return I18N[lang][key];
        }
        if (I18N.en && I18N.en[key] !== undefined) {
            return I18N.en[key];
        }
        return key;
    }

        applyLanguage(lang) {
        if (!I18N[lang]) lang = 'en';
        if (!this.state.settings) this.state.settings = {};
        this.state.settings.language = lang;

        const isRtl = lang === 'ar';
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

        // Header Language Button
        if (this.dom.langLabel) {
            this.dom.langLabel.textContent = isRtl ? 'EN' : 'AR';
        }
        if (this.dom.langToggleBtn) {
            this.dom.langToggleBtn.title = isRtl ? 'Switch to English' : 'تبديل إلى العربية';
        }

        // Settings language selector
        if (this.dom.settingLanguage) {
            this.dom.settingLanguage.value = lang;
        }

        // Translate static elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.t(key);
            if (!translation) return;

            if (el.tagName === 'OPTION') {
                el.textContent = translation;
                return;
            }

            const icon = el.querySelector('i, svg, .svg-inline--fa');
            const kbd = el.querySelector('kbd');
            const badge = el.querySelector('.metric-badge');
            const shortcut = el.querySelector('.nav-shortcut');

            if (!icon && !kbd && !badge && !shortcut) {
                el.textContent = translation;
                return;
            }

            const span = el.querySelector('span:not(.nav-shortcut):not(.metric-badge):not(.kbd-hint)');
            if (span && span !== el) {
                span.textContent = translation;
            } else {
                const textNode = Array.from(el.childNodes).find(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim().length > 0);
                if (textNode) {
                    textNode.textContent = ` ${translation} `;
                }
            }
        });

        // Translate placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const translation = this.t(key);
            if (translation) el.placeholder = translation;
        });

        // Translate titles
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            const translation = this.t(key);
            if (translation) el.title = translation;
        });

        // Re-populate and re-render dynamic views
        this.populateProjectSelects();
        this.updateTimerUIState();
        this.updatePomodoroDisplay();
        this.renderDashboard();
        this.renderProjects();
        this.applySessionFilters();
        this.renderAnalytics(this.currentPeriod || 'week');
        this.renderSettings();
    }

    setLanguage(lang) {
        this.applyLanguage(lang);
        this.saveState();
        this.renderAll();
        const toastMsg = lang === 'ar' ? 'تم تحويل لغة الواجهة إلى العربية' : 'Switched interface language to English';
        this.showToast(toastMsg, 'info');
    }

        openMobileMoreSheet() {
        this.dom.mobileMoreSheet?.classList.remove('hidden');
    }

    closeMobileMoreSheet() {
        this.dom.mobileMoreSheet?.classList.add('hidden');
    }

    toggleMobileMoreSheet() {
        this.dom.mobileMoreSheet?.classList.toggle('hidden');
    }

    navigateTo(rawPageId) {
        this.closeMobileMoreSheet();
        const pageId = (rawPageId || 'dashboard').replace(/Page$/, '');
        this.currentPage = pageId;
        this.dom.pageViews.forEach(view => {
            view.classList.toggle('active', view.id === `${pageId}Page`);
        });
        this.dom.navTabs.forEach(tab => {
            tab.classList.toggle('active', tab.getAttribute('data-page') === pageId);
        });
        if (this.dom.mobileNavBtns) {
            this.dom.mobileNavBtns.forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-page') === pageId);
            });
        }

        if (pageId === 'dashboard') this.renderDashboard();
        if (pageId === 'projects') this.renderProjects();
        if (pageId === 'sessions') this.applySessionFilters();
        if (pageId === 'reports') this.renderAnalytics('week');
        if (pageId === 'settings') this.renderSettings();

        // Update mobile floating player visibility based on active page
        if (this.dom.mobileFloatingTimer) {
            const isRunning = !!this.activeSession;
            const shouldShowFloating = isRunning && this.currentPage !== 'timer';
            this.dom.mobileFloatingTimer.classList.toggle('hidden', !shouldShowFloating);
        }
        window.scrollTo({ top: 0, behavior: 'instant' });
    }

    // Time Tracking Engine Logic
    startSession(overrideProjectId = null, overrideTaskTitle = null, overrideTag = null) {
        if (this.activeSession) {
            this.showToast('A session is already running. Pause or stop it first.', 'warning');
            return;
        }

        const projectId = overrideProjectId || this.dom.timerProjectSelect.value;
        const taskSelectVal = this.dom.timerTaskSelect.value;
        const taskTitle = overrideTaskTitle || taskSelectVal || 'General Development';
        const rawTags = overrideTag || this.dom.timerTagsInput.value;
        const tags = rawTags ? rawTags.split(',').map(t => t.trim()).filter(Boolean) : [];
        const billable = this.dom.timerBillableCheck.checked;
        const notes = this.dom.timerNotesInput.value.trim();

        const project = this.state.projects.find(p => p.id === projectId);
        const hourlyRate = (project && billable) ? (project.hourlyRate || 0) : 0;

        const now = Date.now();
        this.activeSession = {
            id: `sess_${now}_${Math.random().toString(36).substring(2, 7)}`,
            projectId: projectId,
            taskId: null,
            taskTitle: taskTitle,
            startTime: now,
            paused: false,
            lastPauseTime: null,
            pausedDuration: 0,
            pauses: [],
            tags: tags,
            billable: billable,
            hourlyRate: hourlyRate,
            notes: notes
        };

        StorageManager.saveActiveSession(this.activeSession);
        this.synth.playStart();
        this.startTimerTicker();
        this.updateTimerUIState();
        this.showToast('Session started.', 'success');
    }

    startPresetSession(taskTitle, tag) {
        if (this.activeSession) {
            this.openConfirmDialog(
                'Switch Active Session',
                'An active session is currently running. Do you want to save the current session and start this workflow preset?',
                () => {
                    this.stopAndSaveSession(false);
                    this.startSession(null, taskTitle, tag);
                }
            );
            return;
        }
        this.startSession(null, taskTitle, tag);
    }

    togglePauseSession() {
        if (!this.activeSession) return;
        const now = Date.now();
        if (this.activeSession.paused) {
            // Resume
            const pauseSpan = now - (this.activeSession.lastPauseTime || now);
            this.activeSession.pausedDuration += Math.max(0, pauseSpan);
            this.activeSession.pauses.push({
                start: this.activeSession.lastPauseTime || now,
                end: now
            });
            this.activeSession.paused = false;
            this.activeSession.lastPauseTime = null;
            this.synth.playStart();
            this.showToast('Session resumed.', 'info');
        } else {
            // Pause
            this.activeSession.paused = true;
            this.activeSession.lastPauseTime = now;
            this.synth.playPause();
            this.showToast('Session paused.', 'warning');
        }
        StorageManager.saveActiveSession(this.activeSession);
        this.updateTimerUIState();
    }

    stopAndSaveSession(showConfirm = true) {
        if (!this.activeSession) return;

        const action = () => {
            const now = Date.now();
            let finalPaused = this.activeSession.pausedDuration;
            if (this.activeSession.paused && this.activeSession.lastPauseTime) {
                finalPaused += (now - this.activeSession.lastPauseTime);
            }

            const duration = Math.max(0, now - this.activeSession.startTime - finalPaused);

            // Minimum 3-second threshold to save
            if (duration >= 3000) {
                const hours = duration / 3600000;
                const earned = this.activeSession.billable ? Math.round(hours * this.activeSession.hourlyRate * 100) / 100 : 0;

                const recordedSession = {
                    id: this.activeSession.id,
                    projectId: this.activeSession.projectId,
                    taskId: this.activeSession.taskId,
                    taskTitle: this.activeSession.taskTitle || 'General Coding',
                    startTime: new Date(this.activeSession.startTime).toISOString(),
                    endTime: new Date(now).toISOString(),
                    duration: duration,
                    pausedDuration: finalPaused,
                    pauses: this.activeSession.pauses,
                    tags: this.activeSession.tags,
                    billable: this.activeSession.billable,
                    hourlyRate: this.activeSession.hourlyRate,
                    earned: earned,
                    notes: this.dom.timerNotesInput.value.trim() || this.activeSession.notes || '',
                    createdAt: new Date().toISOString()
                };

                this.state.sessions.unshift(recordedSession);
                this.saveState();
                this.showToast(`Saved session: ${this.formatDuration(duration)}`, 'success');
            } else {
                this.showToast('Session was under 3 seconds; discarded.', 'info');
            }

            this.synth.playStop();
            this.activeSession = null;
            StorageManager.saveActiveSession(null);
            if (this.timerInterval) clearInterval(this.timerInterval);

            if (!this.dom.focusModeOverlay.classList.contains('hidden')) {
                this.closeFocusMode();
            }

            this.updateTimerUIState();
            this.renderAll();
        };

        if (showConfirm) {
            const currentElapsed = this.calcElapsed(this.activeSession);
            this.openConfirmDialog(
                'Complete Session',
                `Stop active session (${this.formatDuration(currentElapsed)}) and save to logs?`,
                action
            );
        } else {
            action();
        }
    }

    calcElapsed(session) {
        if (!session) return 0;
        const now = Date.now();
        const currentPause = session.paused && session.lastPauseTime ? (now - session.lastPauseTime) : 0;
        return Math.max(0, now - session.startTime - session.pausedDuration - currentPause);
    }

    startTimerTicker() {
        if (this.timerInterval) clearInterval(this.timerInterval);
        this.timerInterval = setInterval(() => {
            this.tick();
        }, 250);
        this.tick();
    }

    tick() {
        if (!this.activeSession) return;
        const elapsed = this.calcElapsed(this.activeSession);
        const formatted = this.formatTimeDigital(elapsed);

        // Update displays
        if (this.dom.dashTimerClock) this.dom.dashTimerClock.textContent = formatted;
        if (this.dom.consoleMainClock) this.dom.consoleMainClock.textContent = formatted;
        if (this.dom.pillTimerDisplay) this.dom.pillTimerDisplay.textContent = formatted;
        if (this.dom.focusClock) this.dom.focusClock.textContent = formatted;
        if (this.dom.mobTimerClock) this.dom.mobTimerClock.textContent = formatted;

        // Elapsed paused update
        const pausedMs = this.activeSession.pausedDuration +
            (this.activeSession.paused && this.activeSession.lastPauseTime ? (Date.now() - this.activeSession.lastPauseTime) : 0);
        if (this.dom.consolePausedTimeText) this.dom.consolePausedTimeText.textContent = `${Math.floor(pausedMs / 60000)}m`;
    }

    restoreActiveSession() {
        const stored = StorageManager.loadActiveSession();
        if (stored && stored.startTime) {
            this.activeSession = stored;
            if (this.dom.timerProjectSelect) {
                this.dom.timerProjectSelect.value = stored.projectId || '';
            }
            if (this.dom.timerTagsInput) {
                this.dom.timerTagsInput.value = (stored.tags || []).join(', ');
            }
            if (this.dom.timerBillableCheck) {
                this.dom.timerBillableCheck.checked = !!stored.billable;
            }
            if (this.dom.timerNotesInput) {
                this.dom.timerNotesInput.value = stored.notes || '';
            }
            this.startTimerTicker();
            this.updateTimerUIState();
        }
    }

        updateTimerUIState() {
        const isRunning = !!this.activeSession;
        const isPaused = isRunning && this.activeSession.paused;
        const isAr = this.state.settings?.language === 'ar';

        // Mobile Floating Player & Nav Indicator
        if (this.dom.mobileFloatingTimer) {
            const shouldShowFloating = isRunning && this.currentPage !== 'timer';
            this.dom.mobileFloatingTimer.classList.toggle('hidden', !shouldShowFloating);
            if (isRunning) {
                const proj = this.state.projects.find(p => p.id === this.activeSession.projectId);
                if (this.dom.mobTimerProject) this.dom.mobTimerProject.textContent = proj ? proj.name : this.t('general_work');
                if (this.dom.mobTimerTask) this.dom.mobTimerTask.textContent = this.activeSession.taskTitle || this.t('general_coding');
                if (this.dom.mobTimerPauseBtn) {
                    this.dom.mobTimerPauseBtn.innerHTML = isPaused ? '<i class="fas fa-play"></i>' : '<i class="fas fa-pause"></i>';
                }
            }
        }
        if (this.dom.mobTimerActiveDot) {
            this.dom.mobTimerActiveDot.classList.toggle('hidden', !isRunning);
        }

        // Header Pill
        this.dom.headerTimerPill?.classList.toggle('hidden', !isRunning);
        this.dom.headerTimerPill?.classList.toggle('paused', isPaused);
        if (isRunning) {
            const project = this.state.projects.find(p => p.id === this.activeSession.projectId);
            if (this.dom.pillProjectName) this.dom.pillProjectName.textContent = project ? project.name : (this.activeSession.taskTitle || this.t('general_work'));
            if (this.dom.pillPauseBtn) this.dom.pillPauseBtn.innerHTML = isPaused ? '<i class="fas fa-play"></i>' : '<i class="fas fa-pause"></i>';
        }

        // Dashboard Card
        if (this.dom.dashTimerToggleBtn) {
            this.dom.dashTimerToggleBtn.innerHTML = isRunning ?
                (isPaused ? `<i class="fas fa-play"></i> ${this.t('resume')}` : `<i class="fas fa-arrow-right"></i> ${this.t('in_progress')}`) :
                `<i class="fas fa-play"></i> ${this.t('start_tracking')}`;
            this.dom.dashTimerToggleBtn.disabled = isRunning && !isPaused;
        }
        if (this.dom.dashTimerPauseBtn) {
            this.dom.dashTimerPauseBtn.disabled = !isRunning;
            this.dom.dashTimerPauseBtn.innerHTML = isPaused ? `<i class="fas fa-play"></i> ${this.t('resume')}` : `<i class="fas fa-pause"></i> ${this.t('pause')}`;
        }
        if (this.dom.dashTimerStopBtn) {
            this.dom.dashTimerStopBtn.disabled = !isRunning;
            this.dom.dashTimerStopBtn.innerHTML = `<i class="fas fa-stop"></i> ${this.t('stop_and_save')}`;
        }

        if (this.dom.dashActiveSessionStatus) {
            this.dom.dashActiveSessionStatus.className = `status-badge ${isRunning ? (isPaused ? 'paused' : 'running') : 'idle'}`;
            this.dom.dashActiveSessionStatus.textContent = isRunning ? (isPaused ? this.t('paused') : this.t('running')) : this.t('idle');
        }

        if (isRunning) {
            const proj = this.state.projects.find(p => p.id === this.activeSession.projectId);
            if (this.dom.dashMetaProject) this.dom.dashMetaProject.textContent = proj ? proj.name : this.t('none_selected');
            if (this.dom.dashMetaTask) this.dom.dashMetaTask.textContent = this.activeSession.taskTitle || this.t('general_development');
        } else {
            if (this.dom.dashMetaProject) this.dom.dashMetaProject.textContent = this.t('none_selected');
            if (this.dom.dashMetaTask) this.dom.dashMetaTask.textContent = this.t('general_development');
            if (this.dom.dashTimerClock) this.dom.dashTimerClock.textContent = '00:00:00';
            if (this.dom.consoleMainClock) this.dom.consoleMainClock.textContent = '00:00:00';
            if (this.dom.pillTimerDisplay) this.dom.pillTimerDisplay.textContent = '00:00:00';
        }

        // Console Buttons
        if (this.dom.consoleStartBtn) {
            this.dom.consoleStartBtn.disabled = isRunning;
            this.dom.consoleStartBtn.innerHTML = `<i class="fas fa-play"></i> ${this.t('start_session')}`;
        }
        if (this.dom.consolePauseBtn) {
            this.dom.consolePauseBtn.disabled = !isRunning;
            this.dom.consolePauseBtn.innerHTML = isPaused ? `<i class="fas fa-play"></i> ${this.t('resume')}` : `<i class="fas fa-pause"></i> ${this.t('pause')}`;
        }
        if (this.dom.consoleStopBtn) {
            this.dom.consoleStopBtn.disabled = !isRunning;
            this.dom.consoleStopBtn.innerHTML = `<i class="fas fa-stop"></i> ${this.t('stop_and_save')}`;
        }

        if (this.dom.consoleSessionStatusBadge) {
            this.dom.consoleSessionStatusBadge.className = `status-badge ${isRunning ? (isPaused ? 'paused' : 'running') : 'idle'}`;
            this.dom.consoleSessionStatusBadge.textContent = isRunning ? (isPaused ? this.t('paused') : this.t('active')) : this.t('ready');
        }

        if (isRunning) {
            const startTimeDate = new Date(this.activeSession.startTime);
            if (this.dom.consoleStartTimeText) this.dom.consoleStartTimeText.textContent = startTimeDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            if (this.dom.consoleBillableBadge) {
                this.dom.consoleBillableBadge.className = `badge-tag ${this.activeSession.billable ? 'billable' : ''}`;
                this.dom.consoleBillableBadge.textContent = this.activeSession.billable ? this.t('billable_work') : this.t('non_billable');
            }

            const proj = this.state.projects.find(p => p.id === this.activeSession.projectId);
            if (this.dom.consoleCategoryBadge) this.dom.consoleCategoryBadge.textContent = proj ? (proj.category || this.t('development')) : this.t('development');

            // Focus mode
            if (this.dom.focusProjectPill) this.dom.focusProjectPill.textContent = proj ? proj.name : this.t('focus_general_session');
            if (this.dom.focusTaskTitle) this.dom.focusTaskTitle.textContent = this.activeSession.taskTitle || this.t('focus_coding');
            if (this.dom.focusSubStatus) this.dom.focusSubStatus.textContent = isPaused ? this.t('focus_paused') : this.t('focus_in_progress');
            if (this.dom.focusTogglePauseBtn) this.dom.focusTogglePauseBtn.innerHTML = isPaused ? `<i class="fas fa-play"></i> ${this.t('resume')}` : `<i class="fas fa-pause"></i> ${this.t('pause')}`;
            if (this.dom.focusStopBtn) this.dom.focusStopBtn.innerHTML = `<i class="fas fa-stop"></i> ${this.t('stop_and_save')}`;
        } else {
            if (this.dom.consoleStartTimeText) this.dom.consoleStartTimeText.textContent = '--:--';
            if (this.dom.consolePausedTimeText) this.dom.consolePausedTimeText.textContent = this.formatDuration(0);
        }
    }

    syncConsoleMetadataToActiveSession() {
        if (!this.activeSession) return;
        this.activeSession.projectId = this.dom.timerProjectSelect.value;
        const taskVal = this.dom.timerTaskSelect.value;
        if (taskVal) this.activeSession.taskTitle = taskVal;
        const rawTags = this.dom.timerTagsInput.value;
        this.activeSession.tags = rawTags ? rawTags.split(',').map(t => t.trim()).filter(Boolean) : [];
        this.activeSession.billable = this.dom.timerBillableCheck.checked;
        const project = this.state.projects.find(p => p.id === this.activeSession.projectId);
        this.activeSession.hourlyRate = (project && this.activeSession.billable) ? (project.hourlyRate || 0) : 0;
        this.activeSession.notes = this.dom.timerNotesInput.value.trim();

        StorageManager.saveActiveSession(this.activeSession);
        this.updateTimerUIState();
    }

    // Pomodoro Companion Timer
    togglePomodoro() {
        if (this.pomodoro.running) {
            this.pomodoro.running = false;
            if (this.pomodoro.interval) clearInterval(this.pomodoro.interval);
            this.dom.pomoToggleBtn.innerHTML = `<i class="fas fa-play"></i> ${this.t('start_interval')}`;
        } else {
            this.pomodoro.running = true;
            this.dom.pomoToggleBtn.innerHTML = `<i class="fas fa-pause"></i> ${this.t('pause_interval')}`;
            this.pomodoro.interval = setInterval(() => {
                this.pomodoro.timeLeft--;
                if (this.pomodoro.timeLeft <= 0) {
                    this.switchPomodoroPhase();
                }
                this.updatePomodoroDisplay();
            }, 1000);
        }
    }

    resetPomodoro() {
        this.pomodoro.running = false;
        if (this.pomodoro.interval) clearInterval(this.pomodoro.interval);
        this.pomodoro.phase = 'work';
        this.pomodoro.timeLeft = (this.state.settings.pomoWorkMinutes || 25) * 60;
        this.dom.pomoToggleBtn.innerHTML = `<i class="fas fa-play"></i> ${this.t('start_interval')}`;
        this.updatePomodoroDisplay();
    }

    switchPomodoroPhase() {
        this.synth.playBreakChime();
        if (this.pomodoro.phase === 'work') {
            this.pomodoro.phase = 'break';
            this.pomodoro.timeLeft = (this.state.settings.pomoBreakMinutes || 5) * 60;
            this.showToast('Work interval complete! Take a short stretch.', 'info');
            if (this.state.settings.notificationsEnabled && Notification.permission === 'granted') {
                new Notification('Code Timer Tracker', { body: 'Interval finished! Time for a short break.' });
            }
        } else {
            this.pomodoro.phase = 'work';
            this.pomodoro.timeLeft = (this.state.settings.pomoWorkMinutes || 25) * 60;
            this.showToast('Break finished! Ready to code.', 'success');
            if (this.state.settings.notificationsEnabled && Notification.permission === 'granted') {
                new Notification('Code Timer Tracker', { body: 'Break finished! Resume your coding session.' });
            }
        }
    }

    updatePomodoroDisplay() {
        const mins = Math.floor(this.pomodoro.timeLeft / 60);
        const secs = this.pomodoro.timeLeft % 60;
        if (this.dom.pomoClock) this.dom.pomoClock.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        if (this.dom.pomoPhase) {
            this.dom.pomoPhase.textContent = this.pomodoro.phase === 'work' ? this.t('work_interval') : this.t('rest_break');
            this.dom.pomoPhase.style.color = this.pomodoro.phase === 'work' ? 'var(--accent-cyan)' : 'var(--accent-amber)';
        }
    }

    // Distraction-Free Focus Mode
    openFocusMode() {
        this.dom.focusModeOverlay.classList.remove('hidden');
        if (document.documentElement.requestFullscreen && !document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
        }
        this.updateTimerUIState();
    }

    closeFocusMode() {
        this.dom.focusModeOverlay.classList.add('hidden');
        if (document.exitFullscreen && document.fullscreenElement) {
            document.exitFullscreen().catch(() => {});
        }
    }

    toggleFocusMode() {
        if (this.dom.focusModeOverlay.classList.contains('hidden')) {
            this.openFocusMode();
        } else {
            this.closeFocusMode();
        }
    }

    // Projects & Tasks Logic
    populateProjectSelects() {
        const activeProjects = this.state.projects.filter(p => !p.archived);
        const optionsHtml = activeProjects.map(p => `<option value="${p.id}">${this.escapeHtml(p.name)}</option>`).join('');

        this.dom.timerProjectSelect.innerHTML = `<option value="">${this.t("select_project_option")}</option>${optionsHtml}`;
        this.dom.sessionFilterProject.innerHTML = `<option value="all">${this.t("all_projects")}</option>${this.state.projects.map(p => `<option value="${p.id}">${this.escapeHtml(p.name)}</option>`).join('')}`;

        const taskProjSelect = document.getElementById('taskProjectSelect');
        if (taskProjSelect) taskProjSelect.innerHTML = optionsHtml;

        const manualProjSelect = document.getElementById('manualProjectSelect');
        if (manualProjSelect) manualProjSelect.innerHTML = optionsHtml;

        const editProjSelect = document.getElementById('editSessionProjectSelect');
        if (editProjSelect) editProjSelect.innerHTML = `<option value="">${this.t("no_project_option")}</option>${optionsHtml}`;

        this.updateTaskSelectOptions();
        this.updateProjectSnapshot();
    }

    updateTaskSelectOptions() {
        const selectedProjId = this.dom.timerProjectSelect.value;
        const projectTasks = this.state.tasks.filter(t => t.projectId === selectedProjId && t.status !== 'done');
        const tasksHtml = projectTasks.map(t => `<option value="${this.escapeHtml(t.title)}">${this.escapeHtml(t.title)} (${t.priority})</option>`).join('');
        this.dom.timerTaskSelect.innerHTML = `<option value="">${this.t("general_coding_option")}</option>${tasksHtml}`;
    }

        updateProjectSnapshot() {
        const selectedProjId = this.dom.timerProjectSelect.value;
        const project = this.state.projects.find(p => p.id === selectedProjId);
        const isAr = this.state.settings?.language === 'ar';
        if (!project) {
            this.dom.activeProjectDetailsBody.innerHTML = `<p class="text-muted">${this.t('project_snapshot_empty')}</p>`;
            return;
        }

        const projectSessions = this.state.sessions.filter(s => s.projectId === project.id);
        const totalDuration = projectSessions.reduce((sum, s) => sum + s.duration, 0);
        const billableEarned = projectSessions.filter(s => s.billable).reduce((sum, s) => sum + (s.earned || 0), 0);
        const openTasks = this.state.tasks.filter(t => t.projectId === project.id && t.status !== 'done');

        this.dom.activeProjectDetailsBody.innerHTML = `
            <div class="snapshot-detail-row">
                <span class="text-muted">${this.t('snapshot_category')}:</span>
                <strong>${this.escapeHtml(project.category || this.t('general'))}</strong>
            </div>
            <div class="snapshot-detail-row">
                <span class="text-muted">${this.t('snapshot_rate')}:</span>
                <strong>${project.hourlyRate || 0}/${isAr ? 'س' : 'hr'}</strong>
            </div>
            <div class="snapshot-detail-row">
                <span class="text-muted">${this.t('snapshot_tracked')}:</span>
                <strong class="text-primary font-mono">${this.formatDuration(totalDuration)}</strong>
            </div>
            <div class="snapshot-detail-row">
                <span class="text-muted">${this.t('snapshot_total_billable')}:</span>
                <strong class="text-primary font-mono">${billableEarned.toFixed(2)}</strong>
            </div>
            <div class="snapshot-detail-row">
                <span class="text-muted">${this.t('snapshot_open_tasks')}:</span>
                <strong>${openTasks.length} ${this.t('snapshot_pending')}</strong>
            </div>
        `;
    }

    renderProjects() {
        const filter = this.dom.projectFilterStatus.value;
        const isAr = this.state.settings?.language === 'ar';
        let projects = this.state.projects;
        if (filter === 'active') projects = projects.filter(p => !p.archived);
        if (filter === 'archived') projects = projects.filter(p => p.archived);

        if (projects.length === 0) {
            this.dom.projectsContainer.innerHTML = `
                <div class="card" style="grid-column: 1 / -1; text-align: center; padding: 40px 20px;">
                    <i class="fas fa-folder-open" style="font-size: 32px; color: var(--text-muted); margin-bottom: 12px;"></i>
                    <h3 style="font-size: 16px; margin-bottom: 6px;">${this.t('no_projects_found')}</h3>
                    <p class="text-muted text-sm">${this.t('no_projects_hint')}</p>
                    <button class="btn-primary mt-3" onclick="window.appEngine?.openProjectModal()">
                        <i class="fas fa-plus"></i> ${this.t('new_project')}
                    </button>
                </div>
            `;
            return;
        }

        this.dom.projectsContainer.innerHTML = projects.map(proj => {
            const projectSessions = this.state.sessions.filter(s => s.projectId === proj.id);
            const totalDuration = projectSessions.reduce((sum, s) => sum + s.duration, 0);
            const billableDuration = projectSessions.filter(s => s.billable).reduce((sum, s) => sum + s.duration, 0);
            const tasks = this.state.tasks.filter(t => t.projectId === proj.id);
            const doneTasks = tasks.filter(t => t.status === 'done');

            const techChips = (proj.techStack || []).map(t => `<span class="tech-chip">${this.escapeHtml(t)}</span>`).join('');

            const tasksListHtml = tasks.length === 0 ?
                `<div class="text-muted text-sm" style="padding: 6px 0;">${isAr ? 'لا توجد مهام بعد' : 'No tasks yet'}</div>` :
                tasks.map(t => `
                    <div class="task-item-row">
                        <span class="task-priority-dot ${t.priority || 'medium'}" title="Priority: ${t.priority}"></span>
                        <span class="task-item-title ${t.status === 'done' ? 'done' : ''}">${this.escapeHtml(t.title)}</span>
                        <button class="btn-ghost btn-sm" onclick="window.appEngine?.trackTask('${proj.id}', '${this.escapeHtml(t.title)}')" title="Start timer on this task">
                            <i class="fas fa-play"></i>
                        </button>
                        <button class="btn-icon-subtle" onclick="window.appEngine?.toggleTaskDone('${t.id}')" title="Toggle status">
                            <i class="fas ${t.status === 'done' ? 'fa-check-circle text-primary' : 'fa-circle'}"></i>
                        </button>
                    </div>
                `).join('');

            return `
                <div class="project-card-item">
                    <div class="project-card-top" style="border-left-color: ${proj.color || '#10b981'}; border-right-color: ${proj.color || '#10b981'}">
                        <div class="project-card-header">
                            <h3 class="project-card-title">${this.escapeHtml(proj.name)}</h3>
                            <span class="project-card-category">${this.escapeHtml(proj.category || (isAr ? 'عام' : 'General'))}</span>
                        </div>
                        <p class="project-card-desc">${this.escapeHtml(proj.description || (isAr ? 'لا يوجد وصف للمشروع.' : 'No description provided.'))}</p>
                        <div class="tech-stack-row">${techChips}</div>
                        <div class="project-stats-bar">
                            <div class="pstat-item">
                                <div class="pstat-val">${this.formatDuration(totalDuration)}</div>
                                <div class="pstat-label">${this.t('total_time')}</div>
                            </div>
                            <div class="pstat-item">
                                <div class="pstat-val">${this.formatDuration(billableDuration)}</div>
                                <div class="pstat-label">${this.t('billable')}</div>
                            </div>
                            <div class="pstat-item">
                                <div class="pstat-val">${doneTasks.length}/${tasks.length}</div>
                                <div class="pstat-label">${this.t('tasks_done')}</div>
                            </div>
                        </div>
                    </div>
                    <div class="project-tasks-section">
                        <div class="project-tasks-header">
                            <span>${isAr ? 'المهام' : 'Tasks'} (${tasks.length})</span>
                            <button class="btn-text btn-sm" onclick="window.appEngine?.openTaskModal(null, '${proj.id}')">
                                <i class="fas fa-plus"></i> ${this.t('add_task')}
                            </button>
                        </div>
                        <div class="tasks-list-mini">${tasksListHtml}</div>
                    </div>
                    <div class="project-card-footer">
                        <div class="btn-group-row">
                            <button class="btn-primary btn-sm" onclick="window.appEngine?.trackProject('${proj.id}')">
                                <i class="fas fa-play"></i> ${this.t('track')}
                            </button>
                            <button class="btn-ghost btn-sm" onclick="window.appEngine?.openProjectModal('${proj.id}')">
                                <i class="fas fa-pencil"></i>
                            </button>
                            <button class="btn-ghost btn-sm" onclick="window.appEngine?.toggleArchiveProject('${proj.id}')" title="${proj.archived ? this.t('unarchive') : this.t('archive')}">
                                <i class="fas ${proj.archived ? 'fa-box-open' : 'fa-box-archive'}"></i>
                            </button>
                            <button class="btn-danger-outline btn-sm" onclick="window.appEngine?.deleteProject('${proj.id}')" title="${this.t('delete')}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                        <span class="text-muted text-sm font-mono">$${proj.hourlyRate || 0}/${isAr ? 'س' : 'h'}</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    trackProject(projectId) {
        if (this.activeSession) {
            this.openConfirmDialog(
                this.t('confirm_switch_session_title'),
                this.t('confirm_switch_session_msg'),
                () => {
                    this.stopAndSaveSession(false);
                    this.dom.timerProjectSelect.value = projectId;
                    this.updateTaskSelectOptions();
                    this.startSession(projectId);
                    this.navigateTo('timer');
                }
            );
            return;
        }
        this.dom.timerProjectSelect.value = projectId;
        this.updateTaskSelectOptions();
        this.startSession(projectId);
        this.navigateTo('timer');
    }

    trackTask(projectId, taskTitle) {
        if (this.activeSession) {
            this.openConfirmDialog(
                this.t('confirm_switch_session_title'),
                this.t('confirm_switch_session_msg'),
                () => {
                    this.stopAndSaveSession(false);
                    this.dom.timerProjectSelect.value = projectId;
                    this.updateTaskSelectOptions();
                    this.startSession(projectId, taskTitle);
                    this.navigateTo('timer');
                }
            );
            return;
        }
        this.dom.timerProjectSelect.value = projectId;
        this.updateTaskSelectOptions();
        this.startSession(projectId, taskTitle);
        this.navigateTo('timer');
    }

    toggleTaskDone(taskId) {
        const task = this.state.tasks.find(t => t.id === taskId);
        if (!task) return;
        task.status = task.status === 'done' ? 'todo' : 'done';
        task.updatedAt = new Date().toISOString();
        this.saveState();
        this.renderProjects();
        this.updateTaskSelectOptions();
    }

    toggleArchiveProject(projectId) {
        const proj = this.state.projects.find(p => p.id === projectId);
        if (!proj) return;
        proj.archived = !proj.archived;
        this.saveState();
        this.populateProjectSelects();
        this.renderProjects();
        this.showToast(`Project ${proj.archived ? 'archived' : 'restored'}.`, 'info');
    }

    deleteProject(projectId) {
        const proj = this.state.projects.find(p => p.id === projectId);
        if (!proj) return;
        this.openConfirmDialog(
            this.t('confirm_delete_project_title'),
            `${this.t('confirm_delete_project_msg')} (${proj.name})`,
            () => {
                this.state.projects = this.state.projects.filter(p => p.id !== projectId);
                this.state.tasks = this.state.tasks.filter(t => t.projectId !== projectId);
                this.saveState();
                this.populateProjectSelects();
                this.renderProjects();
                this.showToast('Project deleted.', 'info');
            }
        );
    }

    openProjectModal(editId = null) {
        const modal = this.dom.projectModal;
        const titleEl = document.getElementById('projectModalTitle');
        const idInput = document.getElementById('editProjectId');
        const nameInput = document.getElementById('projectNameInput');
        const descInput = document.getElementById('projectDescInput');
        const catSelect = document.getElementById('projectCategorySelect');
        const colorInput = document.getElementById('projectColorInput');
        const rateInput = document.getElementById('projectRateInput');
        const estInput = document.getElementById('projectEstimateInput');
        const techInput = document.getElementById('projectTechStackInput');

        if (editId) {
            const proj = this.state.projects.find(p => p.id === editId);
            if (!proj) return;
            titleEl.textContent = this.t('modal_edit_project');
            idInput.value = proj.id;
            nameInput.value = proj.name;
            descInput.value = proj.description || '';
            catSelect.value = proj.category || 'General';
            colorInput.value = proj.color || '#10b981';
            rateInput.value = proj.hourlyRate || '';
            estInput.value = proj.estimatedHours || '';
            techInput.value = (proj.techStack || []).join(', ');
        } else {
            titleEl.textContent = this.t('modal_new_project');
            idInput.value = '';
            this.dom.projectForm.reset();
            colorInput.value = '#10b981';
        }
        modal.classList.remove('hidden');
        nameInput.focus();
    }

    handleProjectFormSubmit(e) {
        e.preventDefault();
        const id = document.getElementById('editProjectId').value;
        const name = document.getElementById('projectNameInput').value.trim();
        const desc = document.getElementById('projectDescInput').value.trim();
        const cat = document.getElementById('projectCategorySelect').value;
        const color = document.getElementById('projectColorInput').value;
        const rate = parseFloat(document.getElementById('projectRateInput').value) || 0;
        const est = parseFloat(document.getElementById('projectEstimateInput').value) || 0;
        const rawTech = document.getElementById('projectTechStackInput').value;
        const techStack = rawTech ? rawTech.split(',').map(t => t.trim()).filter(Boolean) : [];

        if (id) {
            const proj = this.state.projects.find(p => p.id === id);
            if (proj) {
                proj.name = name;
                proj.description = desc;
                proj.category = cat;
                proj.color = color;
                proj.hourlyRate = rate;
                proj.estimatedHours = est;
                proj.techStack = techStack;
                proj.updatedAt = new Date().toISOString();
            }
        } else {
            const newProj = {
                id: `proj_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
                name: name,
                description: desc,
                category: cat,
                color: color,
                hourlyRate: rate,
                estimatedHours: est,
                techStack: techStack,
                archived: false,
                createdAt: new Date().toISOString()
            };
            this.state.projects.push(newProj);
        }

        this.saveState();
        this.populateProjectSelects();
        this.renderProjects();
        this.closeAllModals();
        this.showToast('Project saved successfully.', 'success');
    }

    openTaskModal(editId = null, defaultProjectId = null) {
        const modal = this.dom.taskModal;
        const titleEl = document.getElementById('taskModalTitle');
        const idInput = document.getElementById('editTaskId');
        const projSelect = document.getElementById('taskProjectSelect');
        const titleInput = document.getElementById('taskTitleInput');
        const prioSelect = document.getElementById('taskPrioritySelect');
        const statusSelect = document.getElementById('taskStatusSelect');
        const estInput = document.getElementById('taskEstimatedMins');
        const deadInput = document.getElementById('taskDeadlineInput');

        if (editId) {
            const task = this.state.tasks.find(t => t.id === editId);
            if (!task) return;
            titleEl.textContent = this.t('modal_edit_task');
            idInput.value = task.id;
            projSelect.value = task.projectId;
            titleInput.value = task.title;
            prioSelect.value = task.priority || 'medium';
            statusSelect.value = task.status || 'todo';
            estInput.value = task.estimatedMinutes || '';
            deadInput.value = task.deadline || '';
        } else {
            titleEl.textContent = this.t('modal_new_task');
            idInput.value = '';
            this.dom.taskForm.reset();
            if (defaultProjectId) projSelect.value = defaultProjectId;
        }

        modal.classList.remove('hidden');
        titleInput.focus();
    }

    handleTaskFormSubmit(e) {
        e.preventDefault();
        const id = document.getElementById('editTaskId').value;
        const projId = document.getElementById('taskProjectSelect').value;
        const title = document.getElementById('taskTitleInput').value.trim();
        const prio = document.getElementById('taskPrioritySelect').value;
        const status = document.getElementById('taskStatusSelect').value;
        const est = parseInt(document.getElementById('taskEstimatedMins').value) || 0;
        const deadline = document.getElementById('taskDeadlineInput').value;

        if (id) {
            const task = this.state.tasks.find(t => t.id === id);
            if (task) {
                task.projectId = projId;
                task.title = title;
                task.priority = prio;
                task.status = status;
                task.estimatedMinutes = est;
                task.deadline = deadline;
                task.updatedAt = new Date().toISOString();
            }
        } else {
            const newTask = {
                id: `task_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
                projectId: projId,
                title: title,
                priority: prio,
                status: status,
                estimatedMinutes: est,
                deadline: deadline,
                createdAt: new Date().toISOString()
            };
            this.state.tasks.push(newTask);
        }

        this.saveState();
        this.renderProjects();
        this.updateTaskSelectOptions();
        this.closeAllModals();
        this.showToast('Task saved successfully.', 'success');
    }

    // Manual Session & Edit Sessions
    openManualSessionModal() {
        this.dom.manualSessionForm.reset();
        document.getElementById('manualDateInput').value = new Date().toISOString().split('T')[0];
        this.dom.manualSessionModal.classList.remove('hidden');
    }

    handleManualSessionSubmit(e) {
        e.preventDefault();
        const projId = document.getElementById('manualProjectSelect').value;
        const taskTitle = document.getElementById('manualTaskInput').value.trim() || 'General Work';
        const dateStr = document.getElementById('manualDateInput').value;
        const durationMins = parseInt(document.getElementById('manualDurationMins').value) || 0;
        const rawTags = document.getElementById('manualTagsInput').value;
        const tags = rawTags ? rawTags.split(',').map(t => t.trim()).filter(Boolean) : [];
        const billable = document.getElementById('manualBillableCheck').checked;
        const notes = document.getElementById('manualNotesInput').value.trim();

        if (durationMins <= 0) {
            this.showToast('Duration must be greater than 0 minutes.', 'error');
            return;
        }

        const project = this.state.projects.find(p => p.id === projId);
        const hourlyRate = (project && billable) ? (project.hourlyRate || 0) : 0;
        const durationMs = durationMins * 60000;
        const hours = durationMs / 3600000;
        const earned = billable ? Math.round(hours * hourlyRate * 100) / 100 : 0;

        const startTime = new Date(`${dateStr}T09:00:00`).toISOString();
        const endTime = new Date(new Date(startTime).getTime() + durationMs).toISOString();

        const session = {
            id: `sess_manual_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
            projectId: projId,
            taskId: null,
            taskTitle: taskTitle,
            startTime: startTime,
            endTime: endTime,
            duration: durationMs,
            pausedDuration: 0,
            pauses: [],
            tags: tags,
            billable: billable,
            hourlyRate: hourlyRate,
            earned: earned,
            notes: notes,
            createdAt: new Date().toISOString()
        };

        this.state.sessions.unshift(session);
        this.saveState();
        this.closeAllModals();
        this.renderAll();
        this.showToast('Past session recorded successfully.', 'success');
    }

    openEditSessionModal(sessionId) {
        const sess = this.state.sessions.find(s => s.id === sessionId);
        if (!sess) return;

        document.getElementById('editSessionId').value = sess.id;
        document.getElementById('editSessionProjectSelect').value = sess.projectId || '';
        document.getElementById('editSessionTaskInput').value = sess.taskTitle || '';
        document.getElementById('editSessionDurationMins').value = Math.round(sess.duration / 60000);
        document.getElementById('editSessionBillableCheck').checked = !!sess.billable;
        document.getElementById('editSessionTagsInput').value = (sess.tags || []).join(', ');
        document.getElementById('editSessionNotesInput').value = sess.notes || '';

        this.dom.editSessionModal.classList.remove('hidden');
    }

    handleEditSessionSubmit(e) {
        e.preventDefault();
        const id = document.getElementById('editSessionId').value;
        const sess = this.state.sessions.find(s => s.id === id);
        if (!sess) return;

        const projId = document.getElementById('editSessionProjectSelect').value;
        const taskTitle = document.getElementById('editSessionTaskInput').value.trim() || 'General Work';
        const durationMins = parseInt(document.getElementById('editSessionDurationMins').value) || 1;
        const billable = document.getElementById('editSessionBillableCheck').checked;
        const rawTags = document.getElementById('editSessionTagsInput').value;
        const tags = rawTags ? rawTags.split(',').map(t => t.trim()).filter(Boolean) : [];
        const notes = document.getElementById('editSessionNotesInput').value.trim();

        const project = this.state.projects.find(p => p.id === projId);
        const durationMs = durationMins * 60000;
        const hourlyRate = (project && billable) ? (project.hourlyRate || 0) : 0;
        const hours = durationMs / 3600000;
        const earned = billable ? Math.round(hours * hourlyRate * 100) / 100 : 0;

        sess.projectId = projId;
        sess.taskTitle = taskTitle;
        sess.duration = durationMs;
        sess.billable = billable;
        sess.hourlyRate = hourlyRate;
        sess.earned = earned;
        sess.tags = tags;
        sess.notes = notes;

        // Recalculate end time preserving start time
        const startMs = new Date(sess.startTime).getTime();
        sess.endTime = new Date(startMs + durationMs).toISOString();

        this.saveState();
        this.closeAllModals();
        this.renderAll();
        this.showToast('Session record updated.', 'success');
    }

    deleteSession(sessionId) {
        this.openConfirmDialog(
            this.t('confirm_delete_session_title'),
            this.t('confirm_delete_session_msg'),
            () => {
                this.state.sessions = this.state.sessions.filter(s => s.id !== sessionId);
                this.saveState();
                this.renderAll();
                this.showToast('Session record deleted.', 'info');
            }
        );
    }

    // Sessions View Filter & Render
    applySessionFilters() {
        const searchQuery = this.dom.sessionSearchInput.value.toLowerCase().trim();
        const projFilter = this.dom.sessionFilterProject.value;
        const periodFilter = this.dom.sessionFilterPeriod.value;
        const billFilter = this.dom.sessionFilterBillable.value;

        const now = new Date();
        const todayStr = now.toISOString().split('T')[0];

        const yesterday = new Date(now);
        yesterday.setDate(now.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        const startOfWeek = this.getStartOfWeek(now, this.state.settings.weekStart);
        const startOfLastWeek = new Date(startOfWeek);
        startOfLastWeek.setDate(startOfWeek.getDate() - 7);
        const endOfLastWeek = new Date(startOfWeek);
        endOfLastWeek.setDate(startOfWeek.getDate() - 1);

        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

        this.sessionsPagination.filtered = this.state.sessions.filter(s => {
            // Search query
            if (searchQuery) {
                const proj = this.state.projects.find(p => p.id === s.projectId);
                const projName = proj ? proj.name.toLowerCase() : '';
                const taskName = (s.taskTitle || '').toLowerCase();
                const notes = (s.notes || '').toLowerCase();
                const tags = (s.tags || []).join(' ').toLowerCase();
                const matches = projName.includes(searchQuery) || taskName.includes(searchQuery) || notes.includes(searchQuery) || tags.includes(searchQuery);
                if (!matches) return false;
            }

            // Project filter
            if (projFilter !== 'all' && s.projectId !== projFilter) {
                return false;
            }

            // Billable filter
            if (billFilter === 'billable' && !s.billable) return false;
            if (billFilter === 'non_billable' && s.billable) return false;

            // Period filter
            const sessDate = new Date(s.startTime);
            const sessDateStr = s.startTime.split('T')[0];

            if (periodFilter === 'today' && sessDateStr !== todayStr) return false;
            if (periodFilter === 'yesterday' && sessDateStr !== yesterdayStr) return false;
            if (periodFilter === 'this_week' && sessDate < startOfWeek) return false;
            if (periodFilter === 'last_week' && (sessDate < startOfLastWeek || sessDate > endOfLastWeek)) return false;
            if (periodFilter === 'this_month' && sessDate < startOfMonth) return false;

            return true;
        });

        this.sessionsPagination.page = 1;
        this.renderSessionsTable();
    }

    renderSessionsTable() {
        const { page, perPage, filtered } = this.sessionsPagination;
        const total = filtered.length;
        const maxPage = Math.ceil(total / perPage) || 1;
        const startIdx = (page - 1) * perPage;
        const pagedSessions = filtered.slice(startIdx, startIdx + perPage);
        const isAr = this.state.settings?.language === 'ar';

        const startCount = total > 0 ? startIdx + 1 : 0;
        const endCount = Math.min(startIdx + perPage, total);
        this.dom.sessionTableCount.textContent = isAr ?
            `عرض ${startCount}-${endCount} من أصل ${total} جلسة` :
            `Showing ${startCount}-${endCount} of ${total} sessions`;
        this.dom.sessionCurrentPageText.textContent = isAr ?
            `الصفحة ${page} من ${maxPage}` :
            `Page ${page} of ${maxPage}`;
        this.dom.sessionPrevPageBtn.disabled = page <= 1;
        this.dom.sessionNextPageBtn.disabled = page >= maxPage;

        if (pagedSessions.length === 0) {
            this.dom.sessionsTableBody.innerHTML = `
                <tr>
                    <td colspan="8" style="text-align: center; padding: 40px; color: var(--text-muted);">
                        <i class="fas fa-list-check" style="font-size: 28px; margin-bottom: 8px; display: block;"></i>
                        ${this.t('no_sessions_match')}
                    </td>
                </tr>
            `;
            if (this.dom.mobileSessionsFeed) {
                this.dom.mobileSessionsFeed.innerHTML = `
                    <div class="card" style="text-align: center; padding: 32px 16px; color: var(--text-muted);">
                        <i class="fas fa-list-check" style="font-size: 28px; margin-bottom: 8px; display: block;"></i>
                        ${this.t('no_sessions_match')}
                    </div>
                `;
            }
            return;
        }

        this.dom.sessionsTableBody.innerHTML = pagedSessions.map(s => {
            const project = this.state.projects.find(p => p.id === s.projectId);
            const projectName = project ? project.name : `<span class="text-muted">${this.t('no_project')}</span>`;
            const projectColor = project ? project.color : '#64748b';

            const startObj = new Date(s.startTime);
            const dateStr = startObj.toLocaleDateString();
            const timeStr = startObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            const tagsHtml = (s.tags || []).map(t => `<span class="tech-chip">${this.escapeHtml(t)}</span>`).join('');
            const billableBadge = s.billable ?
                `<span class="badge-tag billable">$${(s.earned || 0).toFixed(2)}</span>` :
                `<span class="badge-tag">${isAr ? 'غير مدفوع' : 'No'}</span>`;

            return `
                <tr>
                    <td>
                        <div class="table-timestamp">${dateStr}</div>
                        <div class="text-muted text-sm">${timeStr}</div>
                    </td>
                    <td>
                        <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: ${projectColor}; margin-right: 6px;"></span>
                        <strong>${projectName}</strong>
                    </td>
                    <td>${this.escapeHtml(s.taskTitle || (isAr ? 'برمجة عامة' : 'General Coding'))}</td>
                    <td class="table-duration">${this.formatDuration(s.duration)}</td>
                    <td>${tagsHtml}</td>
                    <td>${billableBadge}</td>
                    <td>
                        <div class="table-notes-preview" title="${this.escapeHtml(s.notes || '')}">
                            ${this.escapeHtml(s.notes || '--')}
                        </div>
                    </td>
                    <td class="text-right">
                        <button class="btn-ghost btn-sm" onclick="window.appEngine?.openEditSessionModal('${s.id}')" title="${this.t('edit')}">
                            <i class="fas fa-pencil"></i>
                        </button>
                        <button class="btn-ghost btn-sm text-danger" onclick="window.appEngine?.deleteSession('${s.id}')" title="${this.t('delete')}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `;
        }).join('');

        // Render Dedicated Mobile Sessions Feed (Cards Feed instead of Table on Mobile)
        if (this.dom.mobileSessionsFeed) {
            this.dom.mobileSessionsFeed.innerHTML = pagedSessions.map(s => {
                const project = this.state.projects.find(p => p.id === s.projectId);
                const projectName = project ? project.name : this.t('no_project');
                const projectColor = project ? project.color : '#64748b';
                const startObj = new Date(s.startTime);
                const dateStr = startObj.toLocaleDateString();
                const timeStr = startObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                const tagsHtml = (s.tags || []).map(t => `<span class="tech-chip">${this.escapeHtml(t)}</span>`).join('');
                const billableBadge = s.billable ?
                    `<span class="badge-tag billable">$${(s.earned || 0).toFixed(2)}</span>` :
                    `<span class="badge-tag">${isAr ? 'غير مدفوع' : 'Non-Billable'}</span>`;

                return `
                    <div class="mob-session-card">
                        <div class="mob-card-header">
                            <div class="mob-card-proj">
                                <span class="mob-proj-dot" style="background: ${projectColor}"></span>
                                <span>${this.escapeHtml(projectName)}</span>
                            </div>
                            <div class="mob-card-badges">${billableBadge}</div>
                        </div>
                        <div class="mob-card-task">${this.escapeHtml(s.taskTitle || this.t('general_coding'))}</div>
                        <div class="mob-card-meta">
                            <span class="mob-duration-pill font-mono">${this.formatDuration(s.duration)}</span>
                            <span class="mob-datetime-sub">${dateStr} • ${timeStr}</span>
                        </div>
                        ${tagsHtml ? `<div class="mob-card-tags">${tagsHtml}</div>` : ''}
                        ${s.notes ? `<div class="mob-card-notes">${this.escapeHtml(s.notes)}</div>` : ''}
                        <div class="mob-card-footer">
                            <button class="mob-icon-action" onclick="window.appEngine?.openEditSessionModal('${s.id}')">
                                <i class="fas fa-pencil"></i> ${this.t('edit')}
                            </button>
                            <button class="mob-icon-action text-danger" onclick="window.appEngine?.deleteSession('${s.id}')">
                                <i class="fas fa-trash"></i> ${this.t('delete')}
                            </button>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }

    // Dashboard Overview Rendering
    renderDashboard() {
        const now = new Date();
        const todayStr = now.toISOString().split('T')[0];
        const startOfWeek = this.getStartOfWeek(now, this.state.settings.weekStart);

        const todaySessions = this.state.sessions.filter(s => s.startTime.split('T')[0] === todayStr);
        const weekSessions = this.state.sessions.filter(s => new Date(s.startTime) >= startOfWeek);

        const todayDuration = todaySessions.reduce((sum, s) => sum + s.duration, 0);
        const weekDuration = weekSessions.reduce((sum, s) => sum + s.duration, 0);

        const dailyGoalMs = (this.state.settings.dailyGoalHours || 4) * 3600000;
        const weeklyGoalMs = (this.state.settings.weeklyGoalHours || 25) * 3600000;

        const todayPercent = Math.min(100, Math.round((todayDuration / dailyGoalMs) * 100));
        const weekPercent = Math.min(100, Math.round((weekDuration / weeklyGoalMs) * 100));

        if (this.dom.dashTodayTime) this.dom.dashTodayTime.textContent = this.formatDuration(todayDuration);
        if (this.dom.todayProgressBadge) this.dom.todayProgressBadge.textContent = `${todayPercent}% ${this.t('goal_suffix')}`;
        if (this.dom.dailyGoalProgress) this.dom.dailyGoalProgress.style.width = `${todayPercent}%`;
        if (this.dom.dailyGoalText) this.dom.dailyGoalText.textContent = `${this.t('goal_prefix')} ${this.state.settings.dailyGoalHours}${this.state.settings?.language === 'ar' ? ' س 0 د' : 'h 0m'}`;

        if (this.dom.dashWeekTime) this.dom.dashWeekTime.textContent = this.formatDuration(weekDuration);
        if (this.dom.weekProgressBadge) this.dom.weekProgressBadge.textContent = `${weekPercent}% ${this.t('goal_suffix')}`;
        if (this.dom.weeklyGoalProgress) this.dom.weeklyGoalProgress.style.width = `${weekPercent}%`;
        if (this.dom.weeklyGoalText) this.dom.weeklyGoalText.textContent = `${this.t('goal_prefix')} ${this.state.settings.weeklyGoalHours}${this.state.settings?.language === 'ar' ? ' س 0 د' : 'h 0m'}`;

        // Billable Stats (All Time)
        const totalBillableDuration = this.state.sessions.filter(s => s.billable).reduce((sum, s) => sum + s.duration, 0);
        const totalBillableEarned = this.state.sessions.filter(s => s.billable).reduce((sum, s) => sum + (s.earned || 0), 0);
        if (this.dom.dashBillableAmount) this.dom.dashBillableAmount.textContent = `$${totalBillableEarned.toFixed(2)}`;
        if (this.dom.dashBillableTime) this.dom.dashBillableTime.textContent = `${this.formatDuration(totalBillableDuration)} ${this.t('billable_tracked')}`;

        // Streak & Active Projects
        const streak = this.calcActiveDayStreak();
        if (this.dom.dashActiveStreak) this.dom.dashActiveStreak.textContent = `${streak} ${streak === 1 ? this.t('day') : this.t('days')}`;
        const activeProjectsCount = this.state.projects.filter(p => !p.archived).length;
        if (this.dom.dashActiveProjectsCount) this.dom.dashActiveProjectsCount.textContent = `${activeProjectsCount} ${this.t('active_projects')}`;

        // Dashboard Recent Sessions (Last 5)
        const recents = this.state.sessions.slice(0, 5);
        if (recents.length === 0) {
            if (this.dom.dashRecentSessionsList) this.dom.dashRecentSessionsList.innerHTML = `<div class="text-muted text-sm" style="text-align: center; padding: 20px;">${this.t('no_sessions_logged_yet')}</div>`;
        } else {
            if (this.dom.dashRecentSessionsList) {
                this.dom.dashRecentSessionsList.innerHTML = recents.map(s => {
                    const proj = this.state.projects.find(p => p.id === s.projectId);
                    return `
                        <div class="recent-session-row">
                            <div class="recent-session-info">
                                <span class="recent-session-proj">${this.escapeHtml(proj ? proj.name : 'No Project')}</span>
                                <span class="recent-session-task">${this.escapeHtml(s.taskTitle || 'Coding')}</span>
                            </div>
                            <span class="recent-session-duration">${this.formatDuration(s.duration)}</span>
                        </div>
                    `;
                }).join('');
            }
        }

        // Dashboard Today's Projects Chart
        this.renderDashProjectsChart(todaySessions);
    }

    renderDashProjectsChart(todaySessions) {
        const ctx = document.getElementById('dashProjectsChart');
        if (!ctx) return;

        if (this.charts.dashProjects) {
            this.charts.dashProjects.destroy();
            this.charts.dashProjects = null;
        }

        if (todaySessions.length === 0) {
            if (this.dom.dashProjectsEmpty) this.dom.dashProjectsEmpty.style.display = 'flex';
            ctx.style.display = 'none';
            return;
        }

        if (typeof Chart === 'undefined') return;

        if (this.dom.dashProjectsEmpty) this.dom.dashProjectsEmpty.style.display = 'none';
        ctx.style.display = 'block';

        const projTimeMap = {};
        const projColorMap = {};

        todaySessions.forEach(s => {
            const proj = this.state.projects.find(p => p.id === s.projectId);
            const name = proj ? proj.name : 'Other / General';
            projTimeMap[name] = (projTimeMap[name] || 0) + s.duration;
            projColorMap[name] = proj ? proj.color : '#64748b';
        });

        const labels = Object.keys(projTimeMap);
        const dataHours = labels.map(l => (projTimeMap[l] / 3600000).toFixed(2));
        const colors = labels.map(l => projColorMap[l]);

        this.charts.dashProjects = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: dataHours,
                    backgroundColor: colors,
                    borderColor: 'var(--bg-card)',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 11 }, color: 'var(--text-secondary)' } },
                    tooltip: {
                        callbacks: {
                            label: (context) => ` ${context.label}: ${context.raw}h`
                        }
                    }
                },
                cutout: '68%'
            }
        });
    }

    // Analytics View: All 4 Real Data Charts
    renderAnalytics(period = 'week') {
        const now = new Date();
        let periodStart = new Date(0); // all time fallback

        if (period === 'week') {
            periodStart = this.getStartOfWeek(now, this.state.settings.weekStart);
        } else if (period === 'month') {
            periodStart = new Date(now.getFullYear(), now.getMonth(), 1);
        } else if (period === '30days') {
            periodStart = new Date(now.getTime() - (30 * 24 * 3600000));
        }

        const filteredSessions = this.state.sessions.filter(s => new Date(s.startTime) >= periodStart);

        const totalMs = filteredSessions.reduce((sum, s) => sum + s.duration, 0);
        const billableMs = filteredSessions.filter(s => s.billable).reduce((sum, s) => sum + s.duration, 0);
        const billableEarned = filteredSessions.filter(s => s.billable).reduce((sum, s) => sum + (s.earned || 0), 0);
        const avgSessionMs = filteredSessions.length > 0 ? Math.round(totalMs / filteredSessions.length) : 0;

        // Top active project
        const projectTotals = {};
        filteredSessions.forEach(s => {
            projectTotals[s.projectId] = (projectTotals[s.projectId] || 0) + s.duration;
        });

        let topProjId = null;
        let topProjDuration = 0;
        Object.entries(projectTotals).forEach(([pId, dur]) => {
            if (dur > topProjDuration) {
                topProjDuration = dur;
                topProjId = pId;
            }
        });

        const topProjectObj = this.state.projects.find(p => p.id === topProjId);

        this.dom.analyticsTotalTime.textContent = this.formatDuration(totalMs);
        this.dom.analyticsAvgSession.textContent = this.formatDuration(avgSessionMs);
        this.dom.analyticsTotalSessionsCount.textContent = this.state.settings?.language === 'ar' ? `${filteredSessions.length} إجمالي الجلسات` : `${filteredSessions.length} total sessions`;
        this.dom.analyticsBillableEarned.textContent = `$${billableEarned.toFixed(2)}`;
        this.dom.analyticsBillableHours.textContent = this.state.settings?.language === 'ar' ? `${this.formatDuration(billableMs)} مدفوع` : `${this.formatDuration(billableMs)} billable`;
        this.dom.analyticsTopProject.textContent = topProjectObj ? topProjectObj.name : (filteredSessions.length ? 'General Work' : '--');
        this.dom.analyticsTopProjectHours.textContent = this.state.settings?.language === 'ar' ? `${this.formatDuration(topProjDuration)} مسجل` : `${this.formatDuration(topProjDuration)} logged`;

        // Render the 4 Chart.js charts
        this.renderChartProjectsDistribution(filteredSessions);
        this.renderChartDailyVolume(filteredSessions, period);
        this.renderChartCumulativeTrend(filteredSessions, period);
        this.renderChartCategoryBreakdown(filteredSessions);
    }

    renderChartProjectsDistribution(sessions) {
        const ctx = document.getElementById('chartProjectsDistribution');
        if (!ctx || typeof Chart === 'undefined') return;
        if (this.charts.projectsDistribution) this.charts.projectsDistribution.destroy();

        const map = {};
        const colors = {};
        sessions.forEach(s => {
            const p = this.state.projects.find(proj => proj.id === s.projectId);
            const name = p ? p.name : 'Unassigned';
            map[name] = (map[name] || 0) + s.duration;
            colors[name] = p ? p.color : '#64748b';
        });

        const labels = Object.keys(map);
        const data = labels.map(l => (map[l] / 3600000).toFixed(2));

        this.charts.projectsDistribution = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels.length ? labels : ['No Data'],
                datasets: [{
                    data: data.length ? data : [0],
                    backgroundColor: labels.length ? labels.map(l => colors[l]) : ['#334155'],
                    borderColor: 'var(--bg-card)',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 11 }, color: 'var(--text-secondary)' } }
                },
                cutout: '60%'
            }
        });
    }

    renderChartDailyVolume(sessions, period) {
        const ctx = document.getElementById('chartDailyVolume');
        if (!ctx || typeof Chart === 'undefined') return;
        if (this.charts.dailyVolume) this.charts.dailyVolume.destroy();

        // Group into days
        const daysMap = {};
        const daysCount = period === 'week' ? 7 : (period === 'month' ? 30 : 14);
        const now = new Date();

        for (let i = daysCount - 1; i >= 0; i--) {
            const d = new Date(now);
            d.setDate(now.getDate() - i);
            const key = d.toISOString().split('T')[0];
            daysMap[key] = 0;
        }

        sessions.forEach(s => {
            const dayKey = s.startTime.split('T')[0];
            if (daysMap[dayKey] !== undefined) {
                daysMap[dayKey] += s.duration / 3600000;
            }
        });

        const labels = Object.keys(daysMap).map(d => {
            const parts = d.split('-');
            return `${parts[1]}/${parts[2]}`;
        });
        const values = Object.values(daysMap).map(v => v.toFixed(2));

        this.charts.dailyVolume = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Hours',
                    data: values,
                    backgroundColor: 'rgba(16, 185, 129, 0.75)',
                    borderColor: 'var(--accent-primary)',
                    borderWidth: 1,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { color: 'var(--text-muted)', font: { size: 10 } },
                        grid: { color: 'var(--border-subtle)' }
                    },
                    x: {
                        ticks: { color: 'var(--text-muted)', font: { size: 10 } },
                        grid: { display: false }
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    renderChartCumulativeTrend(sessions, period) {
        const ctx = document.getElementById('chartCumulativeTrend');
        if (!ctx || typeof Chart === 'undefined') return;
        if (this.charts.cumulativeTrend) this.charts.cumulativeTrend.destroy();

        const sorted = [...sessions].sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
        const cumulativeMap = {};
        let runningTotal = 0;

        sorted.forEach(s => {
            const day = s.startTime.split('T')[0];
            runningTotal += s.duration / 3600000;
            cumulativeMap[day] = runningTotal;
        });

        const labels = Object.keys(cumulativeMap).map(d => {
            const parts = d.split('-');
            return `${parts[1]}/${parts[2]}`;
        });
        const values = Object.values(cumulativeMap).map(v => v.toFixed(2));

        this.charts.cumulativeTrend = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels.length ? labels : ['No Data'],
                datasets: [{
                    label: 'Cumulative Hours',
                    data: values.length ? values : [0],
                    borderColor: 'var(--accent-cyan)',
                    backgroundColor: 'rgba(6, 182, 212, 0.1)',
                    fill: true,
                    tension: 0.3,
                    borderWidth: 2,
                    pointRadius: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { color: 'var(--text-muted)', font: { size: 10 } },
                        grid: { color: 'var(--border-subtle)' }
                    },
                    x: {
                        ticks: { color: 'var(--text-muted)', font: { size: 10 } },
                        grid: { display: false }
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    renderChartCategoryBreakdown(sessions) {
        const ctx = document.getElementById('chartCategoryBreakdown');
        if (!ctx || typeof Chart === 'undefined') return;
        if (this.charts.categoryBreakdown) this.charts.categoryBreakdown.destroy();

        const catMap = {};
        sessions.forEach(s => {
            const proj = this.state.projects.find(p => p.id === s.projectId);
            const cat = proj ? (proj.category || 'General') : 'General';
            catMap[cat] = (catMap[cat] || 0) + (s.duration / 3600000);
        });

        const labels = Object.keys(catMap);
        const data = labels.map(l => catMap[l].toFixed(2));

        this.charts.categoryBreakdown = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels.length ? labels : ['No Data'],
                datasets: [{
                    axis: 'y',
                    label: 'Hours',
                    data: data.length ? data : [0],
                    backgroundColor: 'rgba(59, 130, 246, 0.75)',
                    borderColor: 'var(--accent-blue)',
                    borderWidth: 1,
                    borderRadius: 4
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: { color: 'var(--text-muted)', font: { size: 10 } },
                        grid: { color: 'var(--border-subtle)' }
                    },
                    y: {
                        ticks: { color: 'var(--text-muted)', font: { size: 10 } },
                        grid: { display: false }
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    // Settings View
    renderSettings() {
        if (this.dom.settingDailyGoalHours) this.dom.settingDailyGoalHours.value = this.state.settings.dailyGoalHours || 4;
        if (this.dom.settingWeeklyGoalHours) this.dom.settingWeeklyGoalHours.value = this.state.settings.weeklyGoalHours || 25;
        if (this.dom.settingWeekStart) this.dom.settingWeekStart.value = this.state.settings.weekStart || 'sunday';
        if (this.dom.settingTimeFormat) this.dom.settingTimeFormat.value = this.state.settings.timeFormat || '24h';
        if (this.dom.settingLanguage) this.dom.settingLanguage.value = this.state.settings.language || 'en';
        if (this.dom.settingSoundToggle) this.dom.settingSoundToggle.checked = !!this.state.settings.soundEnabled;
        if (this.dom.settingSoundPreset) this.dom.settingSoundPreset.value = this.state.settings.soundPreset || 'chime';
        if (this.dom.settingSoundVolume) this.dom.settingSoundVolume.value = this.state.settings.soundVolume ?? 80;
        if (this.dom.soundVolumeLabel) this.dom.soundVolumeLabel.textContent = `${this.state.settings.soundVolume ?? 80}%`;
        if (this.dom.audioSettingsGroup) this.dom.audioSettingsGroup.style.display = this.state.settings.soundEnabled ? 'block' : 'none';
        if (this.dom.settingNotificationsToggle) this.dom.settingNotificationsToggle.checked = !!this.state.settings.notificationsEnabled;

        const isAr = this.state.settings?.language === 'ar';
        if (this.dom.storageSessionsCount) this.dom.storageSessionsCount.textContent = isAr ? `${this.state.sessions.length} جلسة` : `${this.state.sessions.length} sessions`;
        if (this.dom.storageProjectsCount) this.dom.storageProjectsCount.textContent = isAr ? `${this.state.projects.length} مشاريع (${this.state.tasks.length} مهام)` : `${this.state.projects.length} projects (${this.state.tasks.length} tasks)`;
    }

    // Export & Backup
    exportCsv() {
        if (this.state.sessions.length === 0) {
            this.showToast('No recorded sessions to export.', 'warning');
            return;
        }

        const headers = [
            'Session_ID', 'Date', 'Start_Time', 'End_Time',
            'Duration_Minutes', 'Duration_Hours', 'Duration_Formatted',
            'Project_Name', 'Project_Category', 'Task_Title',
            'Tags', 'Billable', 'Hourly_Rate_USD', 'Total_Earned_USD', 'Notes'
        ];

        const escapeCell = (val) => {
            if (val === null || val === undefined) return '""';
            const str = String(val);
            if (str.includes('"') || str.includes(',') || str.includes('\n') || str.includes('\r')) {
                return `"${str.replace(/"/g, '""')}"`;
            }
            return `"${str}"`;
        };

        const rows = this.state.sessions.map(s => {
            const proj = this.state.projects.find(p => p.id === s.projectId);
            const projName = proj ? proj.name : '';
            const projCat = proj ? (proj.category || '') : '';
            const durationMins = Math.round(s.duration / 60000);
            const durationHours = (s.duration / 3600000).toFixed(2);
            const durationFmt = this.formatDuration(s.duration);
            const dateStr = s.startTime.split('T')[0];
            const tagsStr = (s.tags || []).join(', ');

            return [
                escapeCell(s.id),
                escapeCell(dateStr),
                escapeCell(s.startTime),
                escapeCell(s.endTime),
                escapeCell(durationMins),
                escapeCell(durationHours),
                escapeCell(durationFmt),
                escapeCell(projName),
                escapeCell(projCat),
                escapeCell(s.taskTitle),
                escapeCell(tagsStr),
                escapeCell(s.billable ? 'YES' : 'NO'),
                escapeCell(s.hourlyRate || 0),
                escapeCell((s.earned || 0).toFixed(2)),
                escapeCell(s.notes || '')
            ].join(',');
        });

        // Add UTF-8 BOM so Excel opens Arabic and special symbols properly
        const csvContent = '\uFEFF' + [headers.join(','), ...rows].join('\r\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `code-timer-sessions-${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        this.showToast('CSV export downloaded.', 'success');
    }

    exportJsonBackup() {
        const backupData = {
            version: '2.0',
            exportedAt: new Date().toISOString(),
            author: 'Mohammad Abu Khashreef',
            organization: 'Code Elta6ur',
            projects: this.state.projects,
            tasks: this.state.tasks,
            sessions: this.state.sessions,
            settings: this.state.settings
        };

        const jsonStr = JSON.stringify(backupData, null, 2);
        const blob = new Blob([jsonStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `code-timer-backup-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        this.showToast('JSON backup exported.', 'success');
    }

    exportPdfReport() {
        const sessionsToExport = (this.sessionsPagination && this.sessionsPagination.filtered && this.sessionsPagination.filtered.length > 0)
            ? this.sessionsPagination.filtered
            : this.state.sessions;

        if (!sessionsToExport || sessionsToExport.length === 0) {
            this.showToast(this.state.settings?.language === 'ar' ? 'لا توجد جلسات مسجلة لتصديرها.' : 'No recorded sessions to export.', 'warning');
            return;
        }

        const isAr = this.state.settings?.language === 'ar';
        const projectMap = new Map(this.state.projects.map(p => [p.id, p]));

        // Calculate statistics
        let totalDurationMs = 0;
        let billableDurationMs = 0;
        let totalEarningsUSD = 0;
        const projectSummary = {};

        for (const s of sessionsToExport) {
            totalDurationMs += (s.duration || 0);
            const p = projectMap.get(s.projectId);
            const rate = p ? (p.hourlyRate || 0) : 0;
            const hours = (s.duration || 0) / 3600000;

            const projKey = s.projectId || 'unassigned';
            if (!projectSummary[projKey]) {
                projectSummary[projKey] = {
                    name: p ? p.name : (isAr ? 'مشروع غير محدد' : 'Unassigned Project'),
                    category: p ? (p.category || 'General') : 'General',
                    color: p ? (p.color || '#3b82f6') : '#94a3b8',
                    totalMs: 0,
                    billableMs: 0,
                    earnedUSD: 0,
                    hourlyRate: rate
                };
            }

            projectSummary[projKey].totalMs += s.duration;

            if (s.billable) {
                billableDurationMs += s.duration;
                const earned = hours * rate;
                totalEarningsUSD += earned;
                projectSummary[projKey].billableMs += s.duration;
                projectSummary[projKey].earnedUSD += earned;
            }
        }

        const totalHoursFormatted = (totalDurationMs / 3600000).toFixed(2);
        const billableHoursFormatted = (billableDurationMs / 3600000).toFixed(2);
        const totalEarningsFormatted = `$${totalEarningsUSD.toFixed(2)}`;

        // Date range
        const dates = sessionsToExport.map(s => new Date(s.startTime).getTime()).filter(t => !isNaN(t)).sort((a, b) => a - b);
        const minDate = dates.length > 0 ? new Date(dates[0]).toLocaleDateString(isAr ? 'ar-EG' : 'en-US') : 'N/A';
        const maxDate = dates.length > 0 ? new Date(dates[dates.length - 1]).toLocaleDateString(isAr ? 'ar-EG' : 'en-US') : 'N/A';
        const dateRangeStr = `${minDate} — ${maxDate}`;

        // Construct standalone printable HTML
        const printDoc = `<!DOCTYPE html>
<html lang="${isAr ? 'ar' : 'en'}" dir="${isAr ? 'rtl' : 'ltr'}">
<head>
    <meta charset="UTF-8">
    <title>${isAr ? 'تقرير ساعات العمل والفواتير' : 'Timesheet & Invoice Report'} — Code Timer Tracker</title>
    <style>
        body {
            font-family: ${isAr ? "'Cairo', sans-serif" : "'Inter', -apple-system, sans-serif"};
            margin: 0;
            padding: 30px;
            color: #111827;
            background: #ffffff;
            font-size: 13px;
            line-height: 1.5;
        }
        .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            border-bottom: 3px solid #2563eb;
            padding-bottom: 20px;
            margin-bottom: 24px;
        }
        .brand-title {
            font-size: 24px;
            font-weight: 800;
            color: #1e3a8a;
            margin: 0 0 4px 0;
        }
        .brand-sub {
            font-size: 12px;
            color: #6b7280;
            margin: 0;
        }
        .invoice-meta {
            text-align: ${isAr ? 'left' : 'right'};
            font-size: 12px;
            color: #4b5563;
        }
        .meta-tag {
            display: inline-block;
            background: #eff6ff;
            color: #1d4ed8;
            font-weight: 700;
            padding: 4px 10px;
            border-radius: 4px;
            margin-bottom: 6px;
        }
        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
            margin-bottom: 28px;
        }
        .metric-card {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 14px;
            text-align: center;
        }
        .metric-val {
            font-size: 20px;
            font-weight: 800;
            color: #0f172a;
            margin-bottom: 4px;
        }
        .metric-label {
            font-size: 11px;
            color: #64748b;
            text-transform: uppercase;
            font-weight: 600;
        }
        h2 {
            font-size: 16px;
            font-weight: 700;
            color: #1e293b;
            margin: 24px 0 12px 0;
            border-left: ${isAr ? 'none' : '4px solid #2563eb'};
            border-right: ${isAr ? '4px solid #2563eb' : 'none'};
            padding-left: ${isAr ? '0' : '10px'};
            padding-right: ${isAr ? '10px' : '0'};
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 24px;
            font-size: 12px;
        }
        th, td {
            border: 1px solid #cbd5e1;
            padding: 8px 10px;
            text-align: ${isAr ? 'right' : 'left'};
        }
        th {
            background: #f1f5f9;
            font-weight: 700;
            color: #334155;
        }
        tr:nth-child(even) td {
            background: #f8fafc;
        }
        .tag-billable {
            display: inline-block;
            background: #dcfce7;
            color: #15803d;
            font-size: 10px;
            font-weight: 700;
            padding: 2px 6px;
            border-radius: 4px;
        }
        .tag-non-billable {
            display: inline-block;
            background: #f1f5f9;
            color: #64748b;
            font-size: 10px;
            padding: 2px 6px;
            border-radius: 4px;
        }
        .footer {
            margin-top: 40px;
            padding-top: 16px;
            border-top: 1px solid #e2e8f0;
            text-align: center;
            font-size: 11px;
            color: #94a3b8;
        }
        @media print {
            body { padding: 15px; }
            .no-print { display: none !important; }
        }
    </style>
</head>
<body>
    <div class="header">
        <div>
            <div class="brand-title">Code Timer Tracker ⏱️</div>
            <div class="brand-sub">${isAr ? 'منظومة كود التطور للبرمجيات • إشراف م. محمد أبو خشريف' : 'Code Elta6ur Software Ecosystem • Directed by Eng. Mohammad Abu Kashreef'}</div>
        </div>
        <div class="invoice-meta">
            <div class="meta-tag">${isAr ? 'تقرير الفوترة والوقت' : 'OFFICIAL TIMESHEET'}</div>
            <div><strong>${isAr ? 'الفترة:' : 'Date Range:'}</strong> ${dateRangeStr}</div>
            <div><strong>${isAr ? 'تاريخ الاستخراج:' : 'Generated:'}</strong> ${new Date().toLocaleDateString(isAr ? 'ar-EG' : 'en-US')}</div>
        </div>
    </div>

    <div class="metrics-grid">
        <div class="metric-card">
            <div class="metric-val">${sessionsToExport.length}</div>
            <div class="metric-label">${isAr ? 'إجمالي الجلسات' : 'Total Sessions'}</div>
        </div>
        <div class="metric-card">
            <div class="metric-val">${totalHoursFormatted} h</div>
            <div class="metric-label">${isAr ? 'إجمالي الساعات' : 'Total Hours'}</div>
        </div>
        <div class="metric-card">
            <div class="metric-val">${billableHoursFormatted} h</div>
            <div class="metric-label">${isAr ? 'ساعات قابلة للفوترة' : 'Billable Hours'}</div>
        </div>
        <div class="metric-card">
            <div class="metric-val" style="color: #16a34a;">${totalEarningsFormatted}</div>
            <div class="metric-label">${isAr ? 'إجمالي المستحقات (USD)' : 'Total Billed (USD)'}</div>
        </div>
    </div>

    <h2>${isAr ? 'ملخص المشاريع' : 'Project Breakdown'}</h2>
    <table>
        <thead>
            <tr>
                <th>${isAr ? 'المشروع' : 'Project'}</th>
                <th>${isAr ? 'التصنيف' : 'Category'}</th>
                <th>${isAr ? 'سعر الساعة' : 'Rate (USD)'}</th>
                <th>${isAr ? 'إجمالي الساعات' : 'Total Hours'}</th>
                <th>${isAr ? 'ساعات الفوترة' : 'Billable Hours'}</th>
                <th>${isAr ? 'المستحق' : 'Amount (USD)'}</th>
            </tr>
        </thead>
        <tbody>
            ${Object.values(projectSummary).map(p => `
                <tr>
                    <td><strong>${this.escapeHtml(p.name)}</strong></td>
                    <td>${this.escapeHtml(p.category)}</td>
                    <td>$${p.hourlyRate}/h</td>
                    <td>${(p.totalMs / 3600000).toFixed(2)} h</td>
                    <td>${(p.billableMs / 3600000).toFixed(2)} h</td>
                    <td><strong>$${p.earnedUSD.toFixed(2)}</strong></td>
                </tr>
            `).join('')}
        </tbody>
    </table>

    <h2>${isAr ? 'تفاصيل الجلسات' : 'Detailed Session Log'}</h2>
    <table>
        <thead>
            <tr>
                <th>${isAr ? 'التاريخ' : 'Date'}</th>
                <th>${isAr ? 'المشروع' : 'Project'}</th>
                <th>${isAr ? 'المهمة / التفاصيل' : 'Task / Notes'}</th>
                <th>${isAr ? 'المدة' : 'Duration'}</th>
                <th>${isAr ? 'الفوترة' : 'Billable'}</th>
                <th>${isAr ? 'القيمة' : 'Value'}</th>
            </tr>
        </thead>
        <tbody>
            ${sessionsToExport.map(s => {
                const proj = projectMap.get(s.projectId);
                const rate = proj ? (proj.hourlyRate || 0) : 0;
                const hours = (s.duration || 0) / 3600000;
                const earned = s.billable ? hours * rate : 0;
                const dateStr = s.startTime ? new Date(s.startTime).toLocaleDateString(isAr ? 'ar-EG' : 'en-US') : '—';
                return `
                    <tr>
                        <td>${dateStr}</td>
                        <td>${this.escapeHtml(proj ? proj.name : '—')}</td>
                        <td>${this.escapeHtml(s.taskTitle || s.task || '—')}</td>
                        <td>${this.formatDuration(s.duration)}</td>
                        <td>${s.billable ? `<span class="tag-billable">${isAr ? 'مدفوع' : 'Billable'}</span>` : `<span class="tag-non-billable">${isAr ? 'غير مدفوع' : 'Non-billable'}</span>`}</td>
                        <td>${s.billable ? `$${earned.toFixed(2)}` : '—'}</td>
                    </tr>
                `;
            }).join('')}
        </tbody>
    </table>

    <div class="footer">
        100% Client-Side Local Verification • Generated by Code Timer Tracker • https://code-elta6ur.net
    </div>

    <script>
        window.addEventListener('load', () => {
            setTimeout(() => {
                window.print();
            }, 300);
        });
    </script>
</body>
</html>`;

        const printWindow = window.open('', '_blank');
        if (printWindow) {
            printWindow.document.open();
            printWindow.document.write(printDoc);
            printWindow.document.close();
        } else {
            window.print();
        }
        this.showToast(isAr ? 'جاري فتح نافذة طباعة وتصدير PDF...' : 'Opening PDF print preview...', 'info');
    }

    handleBackupImport(e) {
        const file = e.target.files && e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const parsed = JSON.parse(event.target.result);
                if (!parsed || typeof parsed !== 'object' || !Array.isArray(parsed.projects) || !Array.isArray(parsed.sessions)) {
                    throw new Error('Invalid schema: Missing projects or sessions array.');
                }

                this.openConfirmDialog(
                    'Restore JSON Backup',
                    `Found ${parsed.projects.length} projects and ${parsed.sessions.length} sessions. Replace current workspace data with this backup?`,
                    () => {
                        this.state = StorageManager.normalizeState(parsed);
                        this.saveState();
                        this.populateProjectSelects();
                        this.renderAll();
                        this.showToast('Backup restored successfully!', 'success');
                    }
                );
            } catch (err) {
                this.showToast(`Import error: ${err.message}`, 'danger');
            }
        };
        reader.readAsText(file);
        e.target.value = '';
    }

    // Command Palette (Ctrl+K)
    openCommandPalette() {
        this.dom.commandPaletteModal.classList.remove('hidden');
        this.dom.cmdPaletteInput.value = '';
        this.filterCommandPalette();
        this.dom.cmdPaletteInput.focus();
    }

    closeCommandPalette() {
        this.dom.commandPaletteModal.classList.add('hidden');
    }

    filterCommandPalette() {
        const query = this.dom.cmdPaletteInput.value.toLowerCase().trim();
        const isAr = this.state.settings?.language === 'ar';
        const commands = [
            // Language
            {
                group: isAr ? 'اللغة والتفضيلات' : 'Settings & Language',
                icon: 'fa-globe',
                label: isAr ? 'Switch to English (التحويل إلى الإنجليزية)' : 'تبديل إلى العربية (Switch to Arabic)',
                action: () => this.setLanguage(isAr ? 'en' : 'ar')
            },

            // Navigation
            { group: isAr ? 'التنقل' : 'Navigation', icon: 'fa-chart-line', label: isAr ? 'الانتقال إلى لوحة المؤشرات' : 'Go to Developer Dashboard', action: () => this.navigateTo('dashboard') },
            { group: isAr ? 'التنقل' : 'Navigation', icon: 'fa-stopwatch', label: isAr ? 'الانتقال إلى منصة المؤقت' : 'Go to Timer Console', action: () => this.navigateTo('timer') },
            { group: isAr ? 'التنقل' : 'Navigation', icon: 'fa-folder-tree', label: isAr ? 'الانتقال إلى المشاريع والمهام' : 'Go to Projects & Tasks', action: () => this.navigateTo('projects') },
            { group: isAr ? 'التنقل' : 'Navigation', icon: 'fa-list-check', label: isAr ? 'الانتقال إلى سجل الجلسات' : 'Go to Session History Logs', action: () => this.navigateTo('sessions') },
            { group: isAr ? 'التنقل' : 'Navigation', icon: 'fa-chart-pie', label: isAr ? 'الانتقال إلى التحليلات البرمجية' : 'Go to Productivity Analytics', action: () => this.navigateTo('reports') },
            { group: isAr ? 'التنقل' : 'Navigation', icon: 'fa-sliders', label: isAr ? 'الانتقال إلى الإعدادات والحفظ' : 'Go to Settings & Storage', action: () => this.navigateTo('settings') },
            { group: isAr ? 'التنقل' : 'Navigation', icon: 'fa-circle-info', label: isAr ? 'حول الأداة ومنظومة كود التطور' : 'About Code Timer Tracker & Ecosystem', action: () => this.navigateTo('about') },

            // Timer Actions
            { group: isAr ? 'إجراءات المؤقت' : 'Timer Actions', icon: 'fa-play', label: isAr ? 'بدء أو استئناف المؤقت النشط' : 'Start / Resume Active Timer', action: () => { if (!this.activeSession) this.startSession(); else if (this.activeSession.paused) this.togglePauseSession(); } },
            { group: isAr ? 'إجراءات المؤقت' : 'Timer Actions', icon: 'fa-pause', label: isAr ? 'إيقاف المؤقت مؤقتاً' : 'Pause Active Timer', action: () => { if (this.activeSession && !this.activeSession.paused) this.togglePauseSession(); } },
            { group: isAr ? 'إجراءات المؤقت' : 'Timer Actions', icon: 'fa-stop', label: isAr ? 'إنهاء وحفظ الجلسة النشطة' : 'Stop & Save Active Session', action: () => { if (this.activeSession) this.stopAndSaveSession(); } },
            { group: isAr ? 'إجراءات المؤقت' : 'Timer Actions', icon: 'fa-expand', label: isAr ? 'تبديل وضع التركيز الخالي من المشتتات' : 'Toggle Distraction-Free Focus Mode', action: () => this.toggleFocusMode() },
            { group: isAr ? 'إجراءات المؤقت' : 'Timer Actions', icon: 'fa-calendar-plus', label: isAr ? 'تسجيل جلسة برمجة سابقة' : 'Log Past Coding Session', action: () => this.openManualSessionModal() },

            // Projects & Workflows
            { group: isAr ? 'المشاريع والمهام' : 'Projects & Tasks', icon: 'fa-plus', label: isAr ? 'إنشاء مشروع جديد' : 'Create New Project', action: () => this.openProjectModal() },
            { group: isAr ? 'المشاريع والمهام' : 'Projects & Tasks', icon: 'fa-list-check', label: isAr ? 'إنشاء مهمة جديدة' : 'Create New Task', action: () => this.openTaskModal() },

            // Export & Data
            { group: isAr ? 'البيانات والأدوات' : 'Data & Utilities', icon: 'fa-file-csv', label: isAr ? 'تصدير الجلسات إلى CSV' : 'Export Sessions to CSV', action: () => this.exportCsv() },
            { group: isAr ? 'البيانات والأدوات' : 'Data & Utilities', icon: 'fa-file-code', label: isAr ? 'تنزيل نسخة احتياطية كاملة (JSON)' : 'Download JSON Full Backup', action: () => this.exportJsonBackup() },
            { group: isAr ? 'البيانات والأدوات' : 'Data & Utilities', icon: 'fa-moon', label: isAr ? 'تبديل المظهر (داكن / فاتح)' : 'Toggle Theme (Dark / Light)', action: () => {
                const next = this.state.settings.theme === 'dark' ? 'light' : 'dark';
                this.state.settings.theme = next;
                this.applyTheme(next);
                this.saveState();
            }},

            // External Links
            { group: isAr ? 'منظومة كود التطور' : 'Code Elta6ur Ecosystem', icon: 'fa-graduation-cap', label: isAr ? 'منصة كود التطور التعليمية' : 'Code Elta6ur — Educational Platform', action: () => window.open('https://code-elta6ur.com/', '_blank') },
            { group: isAr ? 'منظومة كود التطور' : 'Code Elta6ur Ecosystem', icon: 'fa-building', label: isAr ? 'شركة كود التطور للبرمجيات' : 'Code Elta6ur — Software Company', action: () => window.open('https://code-elta6ur.net/', '_blank') },
            { group: isAr ? 'منظومة كود التطور' : 'Code Elta6ur Ecosystem', icon: 'fa-id-card', label: isAr ? 'منصة بناء البورتفوليو' : 'Code Elta6ur — Portfolio Builder', action: () => window.open('https://portfolio.code-elta6ur.net/', '_blank') },
            { group: isAr ? 'منظومة كود التطور' : 'Code Elta6ur Ecosystem', icon: 'fa-user-tie', label: isAr ? 'معرض أعمال محمد أبو خشريف' : 'Mohammad Abu Khashreef — Portfolio', action: () => window.open('https://mohammad.code-elta6ur.com/', '_blank') }
        ];

        // Also dynamically add quick track commands for each project
        this.state.projects.filter(p => !p.archived).forEach(proj => {
            commands.push({
                group: isAr ? 'تتبع سريع للمشاريع' : 'Quick Track Project',
                icon: 'fa-code-branch',
                label: `${isAr ? 'تتبع مشروع:' : 'Track Project:'} ${proj.name}`,
                action: () => this.trackProject(proj.id)
            });
        });

        const filtered = query ? commands.filter(c => c.label.toLowerCase().includes(query) || c.group.toLowerCase().includes(query)) : commands;

        if (filtered.length === 0) {
            this.dom.cmdPaletteResults.innerHTML = `<div class="text-muted text-sm" style="padding: 16px; text-align: center;">${isAr ? 'لم يتم العثور على أوامر مطابقة.' : 'No matching commands found.'}</div>`;
            return;
        }

        // Group commands
        let lastGroup = '';
        let html = '';
        filtered.forEach((cmd, idx) => {
            if (cmd.group !== lastGroup) {
                lastGroup = cmd.group;
                html += `<div class="cmd-group-label">${lastGroup}</div>`;
            }
            html += `
                <div class="cmd-item" data-cmd-idx="${idx}">
                    <div class="cmd-item-left">
                        <i class="fas ${cmd.icon}"></i>
                        <span>${this.escapeHtml(cmd.label)}</span>
                    </div>
                    <kbd class="kbd-hint">&crarr;</kbd>
                </div>
            `;
        });

        this.dom.cmdPaletteResults.innerHTML = html;

        // Click handlers on items
        this.dom.cmdPaletteResults.querySelectorAll('.cmd-item').forEach((el, index) => {
            el.addEventListener('click', () => {
                const targetCmd = filtered[index];
                if (targetCmd) {
                    this.closeCommandPalette();
                    targetCmd.action();
                }
            });
        });
    }

    // Modal Helpers
    openConfirmDialog(title, message, onConfirm) {
        const modal = this.dom.confirmModal;
        document.getElementById('confirmModalTitle').textContent = title;
        document.getElementById('confirmModalMessage').textContent = message;
        const okBtn = document.getElementById('confirmOkBtn');

        const newOkBtn = okBtn.cloneNode(true);
        okBtn.parentNode.replaceChild(newOkBtn, okBtn);

        newOkBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
            if (typeof onConfirm === 'function') onConfirm();
        });

        modal.classList.remove('hidden');
    }

    closeAllModals() {
        document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.add('hidden'));
    }

    // Notification Toasts
    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        const icons = {
            success: 'fa-check-circle',
            info: 'fa-info-circle',
            warning: 'fa-triangle-exclamation',
            danger: 'fa-circle-xmark'
        };
        toast.innerHTML = `<i class="fas ${icons[type] || 'fa-bell'}"></i> <span>${this.escapeHtml(message)}</span>`;
        this.dom.toastContainer.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(40px)';
            setTimeout(() => toast.remove(), 250);
        }, 3200);
    }

    // Date & Math Utilities
    getStartOfWeek(date, weekStartDay = 'sunday') {
        const d = new Date(date);
        d.setHours(0, 0, 0, 0);
        const day = d.getDay(); // 0 is Sunday
        let diff = 0;

        if (weekStartDay === 'monday') {
            diff = (day === 0 ? -6 : 1) - day;
        } else if (weekStartDay === 'saturday') {
            diff = (day === 6 ? 0 : -(day + 1));
        } else {
            // sunday
            diff = -day;
        }

        d.setDate(d.getDate() + diff);
        return d;
    }

    calcActiveDayStreak() {
        if (!this.state.sessions.length) return 0;
        const activeDays = new Set(this.state.sessions.map(s => s.startTime.split('T')[0]));
        const sortedDays = Array.from(activeDays).sort().reverse();
        if (!sortedDays.length) return 0;

        const todayStr = new Date().toISOString().split('T')[0];
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        // If today or yesterday is not in the set, streak broken
        if (!sortedDays.includes(todayStr) && !sortedDays.includes(yesterdayStr)) {
            return 0;
        }

        let streak = 0;
        let checkDate = new Date();
        if (!sortedDays.includes(todayStr)) {
            checkDate = yesterday;
        }

        while (true) {
            const dateStr = checkDate.toISOString().split('T')[0];
            if (activeDays.has(dateStr)) {
                streak++;
                checkDate.setDate(checkDate.getDate() - 1);
            } else {
                break;
            }
        }
        return streak;
    }

    formatTimeDigital(ms) {
        if (!ms || ms < 0) ms = 0;
        const totalSecs = Math.floor(ms / 1000);
        const hours = Math.floor(totalSecs / 3600);
        const minutes = Math.floor((totalSecs % 3600) / 60);
        const seconds = totalSecs % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    formatDuration(ms) {
        const isAr = this.state?.settings?.language === 'ar';
        if (!ms || ms < 0) return isAr ? '0 د' : '0m';
        const totalSecs = Math.floor(ms / 1000);
        const hours = Math.floor(totalSecs / 3600);
        const minutes = Math.floor((totalSecs % 3600) / 60);
        const seconds = totalSecs % 60;

        if (hours > 0) {
            return isAr ? `${hours} س ${minutes} د` : `${hours}h ${minutes}m`;
        }
        if (minutes > 0) {
            return isAr ? `${minutes} د ${seconds} ث` : `${minutes}m ${seconds}s`;
        }
        return isAr ? `${seconds} ث` : `${seconds}s`;
    }

    escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    saveState() {
        StorageManager.save(this.state);
    }

    renderAll() {
        this.renderDashboard();
        this.renderProjects();
        this.applySessionFilters();
        this.updateProjectSnapshot();
        this.renderSettings();
    }
}

// Bootstrap Application
function initCodeTimerTracker() {
    if (!window.appEngine) {
        window.appEngine = new AppEngine();
    }

    // Automatic Mobile & Standalone App Environment Marker
    function applyMobileEnvironment() {
        const isApp = navigator.userAgent.includes('CodeTimerApp') || window.location.protocol === 'file:';
        const isMobileScreen = window.innerWidth <= 900 || (window.matchMedia && window.matchMedia('(max-width: 900px)').matches);
        const isTouch = (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        if (isApp || isMobileScreen || isTouch) {
            document.documentElement.classList.add('is-mobile-device');
        } else {
            document.documentElement.classList.remove('is-mobile-device');
        }
    }
    applyMobileEnvironment();
    window.addEventListener('resize', applyMobileEnvironment);

    // Show PWA Update Notification Toast
    function showPwaUpdateToast(registration) {
        if (document.getElementById('pwaUpdateToast')) return;

        const lang = window.appEngine?.state?.settings?.language || document.documentElement.lang || 'en';
        const isAr = lang === 'ar';
        const msg = isAr 
            ? 'يتوفر إصدار جديد من تطبيق متتبع وقت البرمجة.' 
            : 'A new version of Code Timer Tracker is ready.';
        const btnText = isAr ? 'تحديث وإعادة التحميل' : 'Update & Reload';

        const toastContainer = document.getElementById('toastContainer') || document.body;
        const toast = document.createElement('div');
        toast.id = 'pwaUpdateToast';
        toast.className = 'toast info pwa-update-toast';
        toast.style.display = 'flex';
        toast.style.alignItems = 'center';
        toast.style.gap = '12px';
        toast.style.padding = '12px 18px';
        toast.style.boxShadow = '0 8px 32px rgba(0,0,0,0.45)';
        toast.style.border = '1px solid rgba(59, 130, 246, 0.4)';
        toast.style.zIndex = '99999';

        toast.innerHTML = `
            <i class="fas fa-arrows-rotate fa-spin" style="color: #60a5fa; font-size: 1.1rem;"></i>
            <div style="flex: 1; font-weight: 500; font-size: 0.9rem;">${msg}</div>
            <button id="pwaUpdateBtn" style="background: #2563eb; color: #fff; border: none; padding: 6px 14px; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 0.85rem; transition: background 0.2s;">
                ${btnText}
            </button>
        `;
        toastContainer.appendChild(toast);

        toast.querySelector('#pwaUpdateBtn')?.addEventListener('click', () => {
            if (registration && registration.waiting) {
                registration.waiting.postMessage({ action: 'skipWaiting' });
            }
        });
    }

    // Register Service Worker for 100% Offline PWA functionality
    if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.hostname === 'localhost')) {
        let refreshing = false;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (!refreshing) {
                refreshing = true;
                window.location.reload();
            }
        });

        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js').then((reg) => {
                if (reg.waiting) {
                    showPwaUpdateToast(reg);
                    return;
                }

                reg.addEventListener('updatefound', () => {
                    const newWorker = reg.installing;
                    if (!newWorker) return;
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            showPwaUpdateToast(reg);
                        }
                    });
                });
            }).catch(() => {});
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCodeTimerTracker);
} else {
    initCodeTimerTracker();
}
