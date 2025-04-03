export type BankingType = 'private' | 'corporate';
export type Language = 'EN' | 'DE' | 'FR';

export interface MenuItem {
  title: string;
  subItems: string[];
}

export interface AppContextType {
  bankingType: BankingType;
  setBankingType: (type: BankingType) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  selectedMenuItem: string | null;
  setSelectedMenuItem: (item: string | null) => void;
}

export const MENU_STRUCTURE: MenuItem[] = [
  {
    title: 'Everyday banking',
    subItems: [
      'Account',
      'Payments',
      'Currency exchange',
      'Invoices',
      'Orders / Alerts',
      'User rights and limits',
      'Authentication',
      'Security'
    ]
  },
  {
    title: 'Cards',
    subItems: [
      'Debit / Credit cards (Private / Corporate)',
      'Digital wallets',
      'Internet shopping'
    ]
  },
  {
    title: 'Payments',
    subItems: [
      'Online payment solutions',
      'In-store payments / terminals',
      'e-Invoices',
      'Cash handling',
      'Automated invoices'
    ]
  },
  {
    title: 'Financing',
    subItems: [
      'Loan',
      'Lease',
      'Factoring',
      'Guarantee / grant',
      'Restrictions (AML / Sanctions / Tariffs)'
    ]
  },
  {
    title: 'Insurance',
    subItems: [
      'Person / Health / Pension',
      'Home / Enterprise',
      'Car / Item',
      'Report damage'
    ]
  },
  {
    title: 'Investments',
    subItems: [
      'Stocks',
      'ETFs',
      'Investment Funds',
      'Deposits',
      'Secure hold',
      'News and market analysis',
      'Legal and tax information',
      'Upcoming IPOs',
      'My Portfolio / Watchlist / Reports'
    ]
  },
  {
    title: 'Auditing',
    subItems: [
      'Realestate valuation',
      'Property valuation',
      'Auditing',
      'AML / KYC'
    ]
  },
  {
    title: 'Partnerships',
    subItems: [
      'Vendor relations',
      'Offshoring',
      'Restrictions / Sanctions',
      'Contact us'
    ]
  },
  {
    title: 'Crypto and Automation',
    subItems: [
      'LLM trade',
      'Crypto and blockchain',
      'Brokerage',
      'Book a consultation',
      'My Portfolio'
    ]
  }
]; 