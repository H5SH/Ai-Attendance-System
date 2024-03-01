import logo from './logo.svg';
import './App.css';
import { SettingContext } from './utilities/SettingContext';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <SettingContext>
      <Outlet />
    </SettingContext>
  );
}

export default App;
