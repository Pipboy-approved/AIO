import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const Stage: React.FC = () => {
  const context = useContext(AppContext);
  if (!context) return null;

  const { selectedMenuItem } = context;

  return (
    <div className="stage">
      {selectedMenuItem ? (
        <>
          <h1>{selectedMenuItem}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </>
      ) : (
        <h1>Welcome to Banking Services</h1>
      )}
    </div>
  );
}; 