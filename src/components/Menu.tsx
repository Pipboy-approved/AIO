import { useContext, MouseEvent } from 'react';
import { AppContext } from '../context/AppContext';
import { MENU_STRUCTURE } from '../types';

export const Menu: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) return null;

  const { setSelectedMenuItem } = context;

  const handleSubItemClick = (e: MouseEvent<HTMLLIElement>, subItem: string) => {
    e.stopPropagation();
    setSelectedMenuItem(subItem);
  };

  return (
    <div className="menu">
      <ul>
        {MENU_STRUCTURE.map((menuItem) => (
          <li key={menuItem.title}>
            <span onClick={() => setSelectedMenuItem(menuItem.title)}>
              {menuItem.title}
            </span>
            <ul className="submenu">
              {menuItem.subItems.map((subItem) => (
                <li 
                  key={subItem}
                  onClick={(e) => handleSubItemClick(e, subItem)}
                >
                  {subItem}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}; 