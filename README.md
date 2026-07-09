# 🚀 Naukri Job Search Automation using Playwright

A Playwright automation framework built using the **Page Object Model (POM)** and **Custom Fixtures**. This project automates the Naukri website by logging in, searching jobs, extracting job details, exporting them to a CSV file, and uploading a resume.

---

## 📌 Features

- 🔐 Login to Naukri using credentials stored in `.env`
- 🔍 Search jobs based on designation, location, and experience
- 📄 Extract job details:
  - Job Title
  - Company Name
  - Experience
  - Location
- 📊 Export job details to CSV
- 👤 Navigate to the profile page
- 📤 Upload resume automatically
- 🏗️ Page Object Model (POM)
- 🧩 Custom Playwright Fixtures
- ⚙️ Environment Configuration using `dotenv`
- 📁 External Test Data Management

---

## 🛠️ Tech Stack

- Playwright
- JavaScript (ES6)
- Node.js
- dotenv
- csv-writer

---

## 📂 Project Structure

```text
Naukri-Automation/
│
├── config/
│   └── env.js
│
├── data/
│   ├── jobs.csv
│   └── testData.js
│
├── fixtures/
│   └── baseFixture.js
│
├── pages/
│   ├── LoginPage.js
│   ├── HomePage.js
│   ├── JobPage.js
│   └── ProfilePage.js
│
├── tests/
│   ├── JobSearch.spec.js
│   └── ResumeUpdate.spec.js
│
├── utils/
│   └── csvWriter.js
│
├── .env
├── playwright.config.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/naukri-automation.git
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## 🔑 Environment Variables

Create a `.env` file in the project root.

```env
EMAIL=your_email@example.com
PASSWORD=your_password
BASE_URL=https://www.naukri.com/
```

---

## ▶️ Run Tests

Run all tests:

```bash
npx playwright test
```

Run in headed mode:

```bash
npx playwright test --headed
```

Run a specific test:

```bash
npx playwright test tests/JobSearch.spec.js
```

Generate and view the HTML report:

```bash
npx playwright show-report
```

---

## 📊 Sample CSV Output

| Job Title | Company | Experience | Location |
|-----------|---------|------------|----------|
| SDET | Clifyx Technology | 1-4 Years | Bengaluru |
| Test Analyst | Hexaware | 2-4 Years | Bengaluru |

---

## 🏗️ Framework Design

This framework follows the **Page Object Model (POM)**.

- **Pages** contain locators and reusable page methods.
- **Fixtures** create reusable page object instances.
- **Tests** contain only business scenarios.
- **Config** manages environment variables.
- **Data** stores test data.
- **Utils** contains reusable helper methods.

---

## 🎯 Implemented Scenarios

- ✅ Login to Naukri
- ✅ Search jobs
- ✅ Apply search filters
- ✅ Fetch job details
- ✅ Export jobs to CSV
- ✅ View Profile
- ✅ Upload Resume

---

## 🚧 Upcoming Enhancements

- Playwright Hooks (`beforeEach`, `afterEach`)
- Advanced Playwright Locators
- Assertions & Auto Waiting
- API Testing
- Data-Driven Testing using JSON & Excel
- GitHub Actions CI/CD
- Cross Browser Execution
- Docker Integration

---

## 👨‍💻 Author

**Bishnu Prasad Rayaguru**

- GitHub: https://github.com/typicalengineer008
- LinkedIn: https://linkedin.com/in/bishnu-prasad-rayaguru

---

## ⭐ If you found this project useful

Give the repository a ⭐ on GitHub.