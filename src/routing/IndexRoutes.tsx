import { AccessDeniedPage } from '@PROJECT/pages/error/accessdenied';
import { Status404 } from '@PROJECT/pages/error/status404';
import { Status500 } from '@PROJECT/pages/error/status500';
import { ManagementUserProfile } from '@PROJECT/pages/users/profile';
import { ManagementUserSettings } from '@PROJECT/pages/users/settings';
import { Route, Routes } from 'react-router-dom';
import { routePaths } from './routePaths';

export function IndexRoutes() {
  return (
    <Routes>
      <Route path={routePaths.home} element={<div>Home</div>} />
      <Route path={routePaths.dashboard} element={<div>Dashboard</div>} />
      <Route
        path={routePaths.userProfile}
        element={<ManagementUserProfile />}
      />
      <Route
        path={routePaths.userSettings}
        element={<ManagementUserSettings />}
      />
      <Route path={routePaths.accessDenied} element={<AccessDeniedPage />} />
      <Route path={routePaths.errorPage} element={<Status500 />} />
      <Route path="*" element={<Status404 />} />
    </Routes>
  );
}
