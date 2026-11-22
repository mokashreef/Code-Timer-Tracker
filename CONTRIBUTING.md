# Contributing to Code Timer Tracker

Thank you for your interest in contributing to **Code Timer Tracker**!
مرحباً بك في المساهمة في مشروع **Code Timer Tracker**. نرحب بكافة المقترحات، التحسينات، وبلاغات الأخطاء البرمجية.

---

## 🎯 Guiding Principles

1. **Local-First & 100% Privacy**: All session logs, tasks, and project stats must remain stored on the client side (`localStorage`). Never introduce telemetry, remote analytics tracking, or invasive monitoring.
2. **100% Offline Capability**: The application and native Android wrapper must work flawlessly with zero active internet connection. No external CDN runtime calls.
3. **Bilingual by Design**: Every new user-facing feature should be supported in both English (default) and Arabic (RTL).
4. **Lightweight & High-Performance**: Keep bundle footprint minimal and runtime calculations snappy.

---

## 💻 Local Development Workflow

### 1. Clone the Repository
```bash
git clone https://github.com/mokashreef/Code-Timer-Tracker.git
cd Code-Timer-Tracker
```

### 2. Run the Unit Test Suite
Ensure you have Node.js (v18+) installed:
```bash
npm test
```
All native tests in `tests/test_engine.js` must pass before opening a Pull Request.

### 3. Local Preview
Because Code Timer Tracker is built with vanilla HTML/CSS/JavaScript and a standard service worker, you can serve it with any static web server:
```bash
npx serve .
# or
python -m http.server 8000
```

---

## 📜 Commit Conventions

We strictly follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` A new user-facing feature (e.g., `feat(export): add PDF report generator`)
- `fix:` A bug fix (e.g., `fix(timer): correct paused duration accumulation`)
- `docs:` Documentation changes only (e.g., `docs: update Arabic README`)
- `ci:` Changes to CI/CD workflows and pipelines (e.g., `ci(actions): add node 22 matrix`)
- `refactor:` Code refactoring that neither fixes a bug nor adds a feature
- `test:` Adding or improving tests

---

## 🚀 Submitting a Pull Request

1. Create a feature branch from `main`:
   ```bash
   git checkout -b feat/your-feature-name
   ```
2. Commit your changes with meaningful Conventional Commit messages.
3. Run `npm test` to ensure no regressions.
4. Push your branch to GitHub and submit a Pull Request targeting the `main` branch.
5. Fill out the Pull Request template checklist thoroughly.

---

**Developed & Maintained by [Mohammad Abu Khashreef](https://mohammad.code-elta6ur.com/) • Part of [Code Elta6ur](https://code-elta6ur.net/)**
