import { AuthProvider } from 'oidc-react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './AuthContext';
import reactLogo from './assets/react.svg';
import SidebarLayout from './layout/SidebarLayout';
import { IndexRoutes } from './routing/IndexRoutes';
import { getOidcConfig } from './utils/authUtils';
import { installMuiLicense } from './utils/muiLicenseKeyInstallation';
import viteLogo from '/vite.svg';

installMuiLicense();

export function App() {
  const navigate = useNavigate();

  return (
    <AuthProvider
      {...getOidcConfig()}
      onSignIn={() => {
        navigate('/');
      }}
    >
      <SidebarLayout>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <AppContext />
        <IndexRoutes />
      </SidebarLayout>
    </AuthProvider>
  );
}
