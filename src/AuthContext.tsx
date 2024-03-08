import { Box } from '@mui/material';
import { useAuth } from 'oidc-react';
import { getDecodedToken } from './utils/tokenUtils';

export function AppContext() {
  const authContext = useAuth();

  const decodedAccessToken = getDecodedToken(
    authContext.userData?.access_token ?? null
  );

  console.log('Decoded Access Token', decodedAccessToken);

  return (
    <>
      <h3>Access Token</h3>
      <Box component="div" sx={{ wordWrap: 'break-word' }}>
        {authContext.userData?.access_token}
      </Box>
      <h3>Given Name</h3>
      <Box component="div" sx={{ wordWrap: 'break-word' }}>
        {authContext.userData?.profile.given_name}
      </Box>
      <h3>Family Name</h3>
      <Box component="div" sx={{ wordWrap: 'break-word' }}>
        {authContext.userData?.profile.family_name}
      </Box>
    </>
  );
}
