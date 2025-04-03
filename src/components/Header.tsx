import { useContext, ChangeEvent } from 'react';
import { AppContext } from '../context/AppContext';
import { BankingType, Language } from '../types';

export const Header: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) return null;

  const { bankingType, setBankingType, language, setLanguage } = context;

  const handleBankingTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setBankingType(e.target.value as BankingType);
  };

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as Language);
  };

  return (
    <div className="header">
      <div id="logo-type-container">
        <img src="/src/img/pip.png" id="logo" alt="AIO" title='AIO' />
        <select id="banking-type-selector" value={bankingType} onChange={handleBankingTypeChange}
        >
          <option value="private">Private Banking</option>
          <option value="corporate">Corporate Banking</option>
        </select>
      </div>
      <div className="selectors">
        <select 
          value={language}
          onChange={handleLanguageChange}
          className="language-selector"
        >
          <option value="EN">EN</option>
          <option value="DE">DE</option>
          <option value="FR">FR</option>
        </select>
        <input id="search" type="text" placeholder="" />
      </div>
    </div>
  );
}; 