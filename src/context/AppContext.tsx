import { createContext, useState, ReactNode } from 'react';
import { AppContextType, BankingType, Language } from '../types';

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [bankingType, setBankingType] = useState<BankingType>('private');
  const [language, setLanguage] = useState<Language>('EN');
  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null);

  return (
    <AppContext.Provider
      value={{
        bankingType,
        setBankingType,
        language,
        setLanguage,
        selectedMenuItem,
        setSelectedMenuItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}; 