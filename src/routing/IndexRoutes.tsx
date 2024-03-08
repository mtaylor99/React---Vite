import { Route, Routes } from "react-router-dom";
import { routePaths } from "./routePaths";
import Status404 from "@CAERPHILLY/pages/Status/status404";
import Status500 from "@CAERPHILLY/pages/Status/status500";
import ApplicationsMessenger from "@CAERPHILLY/pages/applications/Messenger";
import ManagementUserProfile from "@CAERPHILLY/pages/applications/Users/profile";
import ManagementUserSettings from "@CAERPHILLY/pages/applications/Users/settings";

export function IndexRoutes() {
  return (
    <Routes>
      <Route path={routePaths.home} element={<div>Home</div>} />
      <Route path={routePaths.dashboard} element={<div>Dashboard</div>} />
      <Route path={routePaths.messenger} element={<ApplicationsMessenger />} />
      <Route path={routePaths.userProfile} element={<ManagementUserProfile />} />
      <Route path={routePaths.userSettings} element={<ManagementUserSettings />} />
      <Route
        path={routePaths.notPermitted}
        element={<div>Not Permitted</div>}
      />
      <Route path={routePaths.errorPage} element={<Status500 />} />
      <Route path="*" element={<Status404 />} />
    </Routes>
  );
}
