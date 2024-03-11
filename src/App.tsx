import { AuthProvider } from 'oidc-react';
import { useNavigate } from 'react-router-dom';
import { SidebarLayout } from './layout/SidebarLayout';
import { IndexRoutes } from './routing/IndexRoutes';
import { getOidcConfig } from './utils/authUtils';
import { installMuiLicense } from './utils/muiLicenseKeyInstallation';

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
        <IndexRoutes />
      </SidebarLayout>
    </AuthProvider>
  );
}
