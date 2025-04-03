This is a PRD (Project Description) of SPA (Single Page Application) built with Typescript, React, vanilla CSS and Vite

CSS will be stored in one file that is stored in root directory and called styles.css

The application will feature:
1. A -header- row of DIV tag

In which is

A. Logo

B. Dropdown selector whith two options
- Private banking
- Corporate banking

C. Language selector with three options
- EN
- DE
- FR

Under -header- is a -menu- that is a DIV tag in which are -menu items- as unordered lists with specific products and services in flexbox in horizontal form

- Everyday banking
-- Account
-- Payments
-- Currency exchange
-- Invoices
-- Orders / Alerts
-- User rights and limits
-- Authentication
-- Security

- Cards
-- Debit / Credit cards (Private / Corporate)
-- Digital wallets
-- Internet shopping

- Payments
-- Online payment solutions
-- In-store payments / terminals
-- e-Invoices
-- Cash handling
-- Automated invoices

- Financing
-- Loan
-- Lease
-- Factoring
-- Guarantee / grant
-- Restrictions (AML / Sanctions / Tariffs)

- Insurance
-- Person / Health / Pension
-- Home / Enterprise
-- Car / Item
-- Report damage

- Investments
-- Stocks
-- ETFs
-- Investment Funds
-- Deposits
-- Secure hold
-- News and market analysis
-- Legal and tax information
-- Upcoming IPOs
-- My Portfolio / Watchlist / Reports

Auditing
-- Realestate valuation
-- Property valuation
-- Auditing
-- AML / KYC

Partnerships
-- Vendor relations
-- Tra
-- Offshoring
-- Restrictions / Sanctions
-- Contact us

Crypto and Automation
-- LLM trade
-- Crypto and blockchain
-- Brokerage
-- Book a consultation
-- My Portfolio

Under -menu- is -stage- which is a DIV tag and will contain info that is served on any selection that user makes. In initial phase it should contain the title of the selected menu item and Lorem Ipsum generated text.

Versioning
Solution will be versioned in Github repo:
https://github.com/Pipboy-approved/AIO

Project structure
fi_mp_spa/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── styles.css
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Menu.tsx
│   │   └── Stage.tsx
│   ├── context/
│   │   └── AppContext.tsx
│   └── types/
│       └── index.ts
└── README.md

