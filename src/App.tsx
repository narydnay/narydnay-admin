import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LayoutComponent from './Screens/Layout/Layout';
import Setting from './Screens/Setting/Setting';
import UsersContainer from './Screens/Users/UsersContainer';
import UserProfileContainer from './Screens/UserProfile/UserProfileContainer';
import SettingContainer from './Screens/Setting/SettingContainer';


  const App: React.FC = () => (
    <Routes>
      <Route path="/" element={<LayoutComponent />}>
        <Route path="users" element={<UsersContainer />} />
        <Route path="users/:id" element={<UserProfileContainer />} />
        <Route
          path="setting"
          element={<SettingContainer />}
        />
      </Route>
    </Routes>   

  );
  

export default App;
