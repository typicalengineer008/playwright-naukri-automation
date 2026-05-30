# Playwright Naukri Automation

Automation framework built using Playwright and JavaScript.

## Features
- Login Automation
- Page Object Model (POM)
- Environment Variable Support
- Playwright Test Framework

## Tech Stack
- Playwright
- JavaScript
- Node.js

📌 Project Objective

Build a real-world Playwright automation framework that:

Logs into Naukri
Searches jobs
Extracts job information
Exports data into CSV
Supports multiple job searches
Demonstrates Playwright + POM + JavaScript skills
📅 Day Wise Progress
Day 1 – Framework Setup & Login Automation
Tasks Completed
Created Playwright project
Installed Playwright
Installed dotenv
Created folder structure
Configured .env
Configured .gitignore
Implemented Login Page Object Model
Automated Naukri Login
Added GitHub repository
Concepts Learned
Node.js project initialization
npm vs npx
Environment Variables
Playwright Test Runner
Page Object Model (POM)
Git & GitHub basics
Files Created
pages/login.js
tests/login.spec.js
.env
.gitignore
README.md
Day 2 – Search Job Automation
Tasks Completed
Created HomePage POM
Added job search functionality
Added experience selection
Added location selection
Implemented search method
Created JobSearch test
Concepts Learned
Multi-page POM
Locators
Reusable methods
Assertions
Search workflows
Files Created
pages/homepage.js
tests/JobSearch.spec.js
Day 3 – Data Extraction
Tasks Completed
Created JobPage POM
Captured Job Titles
Captured Company Names
Captured Experience
Captured Locations
Printed extracted data
Concepts Learned
Multiple element locators
allTextContents()
Arrays
Collection handling
Dynamic data extraction
Files Created
pages/jobpage.js
Sample Output
Software Development Engineer in Test (SDET)
Amagi Media Labs
3-4 Yrs
Bengaluru
Day 4 – CSV Export
Tasks Completed
Installed csv-writer package
Created CSV utility
Converted arrays into objects
Exported jobs into CSV
Generated report file
Concepts Learned
Objects
Loops
Data transformation
CSV generation
Utility classes
Files Created
utils/csvWriter.js

data/jobs.csv
Sample CSV
TITLE,COMPANY,EXPERIENCE,LOCATION
SDET,Amagi Media Labs,3-4 Yrs,Bengaluru
QA Engineer,Cashfree Payments,3-6 Yrs,Bengaluru
Day 5 – Multiple Search Keywords (Planned)
Tasks
Search multiple job roles
Loop through search keywords
Aggregate job data
Export consolidated CSV
Add search keyword column
Example
const searchKeywords = [
    "SDET",
    "Playwright",
    "QA Automation"
];
Concepts
Data-driven testing
Loops
Aggregation
Dynamic automation
🏗️ Framework Structure
playwright-naukri-automation/
│
├── pages/
│   ├── login.js
│   ├── homepage.js
│   └── jobpage.js
│
├── tests/
│   ├── login.spec.js
│   └── JobSearch.spec.js
│
├── utils/
│   └── csvWriter.js
│
├── data/
│   └── jobs.csv
│
├── .env
├── .gitignore
├── package.json
└── README.md
🛠️ Tech Stack
Playwright
JavaScript
Node.js
CSV Writer
Git
GitHub
🎯 Key Features
Login Automation
Search Automation
Dynamic Data Extraction
CSV Reporting
Page Object Model (POM)
Environment Variable Support
Reusable Framework Design
