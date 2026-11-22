# Code Timer Tracker — Developer Productivity & Session Engine

<div align="center">

### High-Precision Time Tracking, Session Management, and Productivity Analytics Built Specifically for Software Engineers.

**[ 🌐 English (Default) ](README.md) • [ 🌐 النسخة العربية (Arabic) ](README.ar.md)**

[![Version](https://img.shields.io/badge/Version-v2.5.0-10b981?style=flat-square)](https://github.com/mokashreef/Code-Timer-Tracker)
[![CI](https://github.com/mokashreef/Code-Timer-Tracker/actions/workflows/ci.yml/badge.svg)](https://github.com/mokashreef/Code-Timer-Tracker/actions/workflows/ci.yml)
[![Android APK](https://img.shields.io/badge/Android%20APK-100%25%20Offline%20(1.7MB)-success?style=flat-square&logo=android)](release/code-timer-tracker.apk)
[![PWA Ready](https://img.shields.io/badge/PWA-100%25%20Offline%20Cache-blueviolet?style=flat-square)](manifest.json)
[![License](https://img.shields.io/badge/License-MIT-3b82f6?style=flat-square)](LICENSE)
[![Tests](https://img.shields.io/badge/Tests-12%20Passing%20(100%25)-emerald?style=flat-square)](tests/test_engine.js)
[![Privacy](https://img.shields.io/badge/Data-100%25%20Local%20(No%20Telemetry)-06b6d4?style=flat-square)](#)

**Developed by [Mohammad Abu Khashreef](https://mohammad.code-elta6ur.com/) • Part of [Code Elta6ur](https://code-elta6ur.net/)**

**[🚀 Launch Live Web App](https://mokashreef.github.io/Code-Timer-Tracker/) • [📱 Download Android APK (Direct Mirror)](https://github.com/mokashreef/Code-Timer-Tracker/raw/main/release/code-timer-tracker.apk) • [📥 Local GitHub Pages APK](https://mokashreef.github.io/Code-Timer-Tracker/release/code-timer-tracker.apk)**

</div>

---

> **Language Selection / اختيار اللغة:**
> - 🇬🇧 **English**: Default view below.
> - 🇸🇦 **العربية**: [اضغط هنا لفتح الدليل باللغة العربية (README.ar.md)](README.ar.md) أو تصفح القسم العربي أسفل هذه الصفحة.

---

## 🌟 Overview & Product Vision

**Code Timer Tracker** is an engineered developer tool designed to answer real questions about programming time, focus consistency, and project resource allocation:

- *How much focused time did I actually spend coding today vs. interruptions?*
- *Which repositories consumed most of my development hours this week?*
- *Are my initial task time estimates aligning with real recorded session durations?*
- *What is my active coding streak and productivity trend over time?*
- *How can I track billable client work and export clean CSV/JSON reports without invasive monitoring?*

Built with a **local-first client architecture**, all records remain completely private in your browser. No telemetry, keystroke loggers, or source code scraping.

---

## ✨ Key Capabilities & Engineering Features

### 1. High-Precision Time Tracking Engine
- **Timestamp-Accurate Timing**: Calculates elapsed time using delta epoch timestamps (`now - startTime - pausedDuration`), eliminating interval drift and tab sleep inaccuracy.
- **Session Persistence & Crash Recovery**: Active session state is written synchronously to local storage; browser reloads or tab closures resume ticking seamlessly without losing elapsed time.
- **Stateful Pauses**: Accumulates pause spans accurately and reflects live paused duration.
- **Global Header Pill**: Keep track of the active session, elapsed time, and pause/stop controls from any page in the application.
- **Manual Session Logging**: Backfill past offline work with date, duration, billable status, tags, and notes.
- **Full Session Editing**: Correct past session durations, projects, tasks, or notes with instant recalculation.

### 2. Developer Project & Task Management
- **Repository Context**: Associate sessions with projects, tech stack badges (e.g. React, Node, Python, Docker), hourly rates, and categories (Frontend, Backend, DevOps, etc.).
- **Task-Level Tracking**: Assign tasks with priorities (`Low`, `Medium`, `High`, `Urgent`), status (`To Do`, `In Progress`, `Done`), estimated minutes, and deadlines.
- **1-Click Launch**: Launch a live tracking session directly from any project card or task row.
- **Archive System**: Cleanly archive completed repositories while preserving historical session logs.

### 3. Dedicated Mobile App Experience
- **Zero Horizontal Scroll Lock**: Strictly bounded viewport architecture eliminating lateral wobbles and rubber-band bouncing on screens down to 320px.
- **Mobile Bottom Cockpit**: Ergonomic 5-tab bottom navigation with generous touch targets (Dashboard, Timer, Projects, Sessions, More).
- **Smart Floating Timer**: Non-intrusive floating player that shows active tracking when browsing other pages, and automatically tucks away when inside the Timer Console.
- **Mobile Card Feeds**: Touch-friendly card feeds for sessions and projects with dedicated action bars.

### 4. Native Android App & 100% Offline Capability (v2.4.3)
- **Standalone Signed Release APK**: Compiled natively using Android SDK build-tools (`code-timer-tracker.apk`, 1.7 MB).
- **100% Offline**: Zero external network or CDN calls. Bundled local FontAwesome 6 SVG vector engine (guaranteed display on all Android WebViews) and local Chart.js library.
- **Native Hardware Back Button & Orientation Handling**: Native Android WebView wrapper with local storage persistence.
- **Direct Download Links**:
  - [Download code-timer-tracker.apk (GitHub Direct)](https://github.com/mokashreef/Code-Timer-Tracker/raw/main/release/code-timer-tracker.apk)
  - [Download from GitHub Pages Mirror](https://mokashreef.github.io/Code-Timer-Tracker/release/code-timer-tracker.apk)
- **PWA Offline Support**: Standard Progressive Web App manifest (`manifest.json`) and Service Worker (`sw.js`) enabling installability directly from mobile Chrome/Edge with offline caching.

### 5. Genuine Productivity Analytics & Visualizations
Derived 100% from actual recorded sessions (zero fake metrics or hardcoded graphs):
- **Dynamic Period Selector**: Filter by *This Week*, *This Month*, *Last 30 Days*, or *All Time*.
- **Time Distribution by Project**: Doughnut chart showing real project hour breakdown.
- **Daily Coding Volume**: Bar chart of hours logged day-by-day.
- **Cumulative Focus Trend**: Line chart illustrating continuous focus velocity.
- **Category & Tech Breakdown**: Horizontal chart visualizing time investment across domains.
- **Productivity Metrics**: Total hours, average session duration, total session count, billable value, and top active repository.

### 6. Developer Workflows & UX
- **Command Palette (`Ctrl+K` / `Cmd+K`)**: Instant search and trigger for all navigation, timer controls, project launchers, export actions, and ecosystem links.
- **Distraction-Free Focus Mode (`Ctrl+B`)**: Fullscreen, zero-clutter digital timer display showing current task, project, and discreet pause/stop controls.
- **Focus Interval Companion (Pomodoro)**: Non-blocking work and break timer with Web Audio synthesized cues that do not halt active session tracking.
- **RFC 4180 CSV Export**: Standard-compliant CSV export with UTF-8 BOM encoding for seamless display in Microsoft Excel, Google Sheets, or Apple Numbers.
- **JSON Backup & Safe Restore**: Full workspace export and schema-validated JSON import with replace/merge protection.
- **100% Bilingual Arabic & English**: Comprehensive dual-language support with automatic RTL layout and Cairo typography.
- **Dual Technical Theme**: Polished dark mode by default with slate/emerald aesthetics; toggleable high-contrast light mode.

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| `Space` | Start, pause, or resume active session (when outside input fields) |
| `Ctrl + Shift + S` | Stop and save active session to logs |
| `Ctrl + K` / `Cmd + K` | Open Command Palette |
| `Ctrl + B` / `Cmd + B` | Toggle Distraction-Free Focus Mode |
| `Ctrl + 1` | Navigate to Developer Dashboard |
| `Ctrl + 2` | Navigate to Live Timer Console |
| `Ctrl + 3` | Navigate to Projects & Tasks |
| `Ctrl + 4` | Navigate to Session History Logs |
| `Ctrl + 5` | Navigate to Productivity Analytics |
| `Escape` | Close modals, command palette, or exit Focus Mode |

---

## 🛠️ Technology Stack & Architecture

- **Core**: Vanilla HTML5, CSS3, ES2022 JavaScript.
- **Visuals**: Chart.js for data visualization, Font Awesome 6 for iconography.
- **Audio**: Web Audio API procedural sound synthesizer (offline-ready, zero external audio MP3 dependencies).
- **Storage**: Browser LocalStorage with automated schema migration.
- **Testing**: Node.js built-in test runner (`node --test tests/test_engine.js`).

---

## 🚀 Getting Started

The application is completely client-side and requires no build step, backend server, or database installation.

### Local Execution:
1. Clone the repository:
   ```bash
   git clone https://github.com/mokashreef/Code-Timer-Tracker.git
   cd Code-Timer-Tracker
   ```
2. Open `index.html` in any modern web browser, or serve with a lightweight local server:
   ```bash
   npx serve .
   ```

### Running Automated Tests:
Run the unit test suite verifying time engine math, CSV RFC 4180 formatting, streak calculation, and backup schema validation:
```bash
npm test
```

---

## 🌐 Code Elta6ur Ecosystem

Code Timer Tracker is an official project within the **Code Elta6ur** ecosystem:

1. [Code Elta6ur — Educational Platform](https://code-elta6ur.com/)
2. [Code Elta6ur — Software Company](https://code-elta6ur.net/)
3. [Code Elta6ur — Portfolio Builder](https://portfolio.code-elta6ur.net/)
4. [Code Ora](https://code-ora.com/)
5. [HardwareBase](https://hardwarebase.code-elta6ur.com/)
6. [Code Elta6ur — Syria Platform](https://code-elta6ur.sy/)
7. [Mohammad Abu Khashreef — Portfolio](https://mohammad.code-elta6ur.com/)
8. [Code Elta6ur GitHub Organization / Projects](https://github.com/mokashreef)

---

## 📄 License & Attribution

- **Developer**: [Mohammad Abu Khashreef](https://mohammad.code-elta6ur.com/)
- **Organization**: [Code Elta6ur](https://code-elta6ur.net/)
- **License**: Released under the [MIT License](LICENSE). Copyright (c) 2026 Mohammad Abu Khashreef / Code Elta6ur.

---

<details>
<summary><b>🇸🇦 اضغط هنا لقراءة الدليل كاملاً باللغة العربية (Click to expand Arabic Documentation)</b></summary>

<br>

<div dir="rtl">

# متتبع وقت البرمجة — Code Timer Tracker

### أداة هندسية متطورة لإدارة جلسات العمل البرمجي، تتبع دقة الوقت، وتحليلات الإنتاجية للمطورين

**[ 🌐 English Version ](README.md) • [ 🌐 ملف الدليل العربي المستقل (README.ar.md) ](README.ar.md)**

---

### 🌟 نظرة عامة ورؤية المنتج

تم بناء **Code Timer Tracker** ليكون أداة إنتاجية حقيقية ورفيقاً يومياً للمهندسين البرمجيين لتسجيل فترات التركيز، توزيع ساعات العمل على المستودعات البرمجية، وقياس الإنتاجية بدقة متناهية مع الحفاظ المطلق على خصوصية البيانات دون أي تتبع خارجي.

### ✨ أبرز المميزات:
1. **محرك توقيت عالي الدقة:** حساب عبر الفروق الزمنية المباشرة (Epoch Timestamps) مع الحفظ التلقائي والتعافي الفوري بعد إغلاق المتصفح.
2. **إدارة المشاريع والمهام:** تصنيف المشاريع وربطها بحزمة التقنيات والأجر بالساعة مع تتبع المهام بحسب الأولوية والحالة.
3. **تصميم مخصص للهواتف المحمولة (v2.3.0):** قفل التمرير الأفقي تماماً (Zero Horizontal Scroll)، قمرة قيادة سفلية مريحة، ومشغل عائم ذكي.
4. **تحليلات حقيقية ورسوم بيانية دقيقة:** 4 رسوم بيانية تفاعلية لحجم البرمجة اليومي، توزيع الوقت على المشاريع، وتصنيف التقنيات.
5. **لوحة أوامر سريعة (`Ctrl+K`) ووضع تركيز متكامل (`Ctrl+B`):** سهولة التنقل وتنفيذ الإجراءات بأقصى سرعة.
6. **تصدير محاسبي CSV ونسخ احتياطي JSON:** تقارير متوافقة مع معيار RFC 4180 بترميز UTF-8 مع تضمين BOM للعرض باللغة العربية داخل Excel.
7. **واجهة ثنائية اللغة (عربي / إنجليزي):** دعم كامل لاتجاه RTL والخطوط العربية الحديثة.

### ⌨️ أهم الاختصارات:
- `مسافة (Space)`: بدء / إيقاف مؤقت / استئناف التوقيت.
- `Ctrl + Shift + S`: إنهاء وحفظ الجلسة في السجل.
- `Ctrl + K`: فتح لوحة الأوامر السريعة.
- `Ctrl + B`: تفعيل وضع التركيز الكامل.
- `Ctrl + 1-5`: التنقل الفوري بين الشاشات الرئيسية.

### 🌐 منظومة كود التطور:
الأداة تابعة رسمياً لـ **كود التطور (Code Elta6ur)** بقيادة المهندس **محمد أبو خشريف**.
- [منصة كود التطور](https://code-elta6ur.com/) • [شركة كود التطور للبرمجيات](https://code-elta6ur.net/) • [معرض أعمال محمد أبو خشريف](https://mohammad.code-elta6ur.com/)

</div>

</details>
