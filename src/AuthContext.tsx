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
      <h1>Access Token</h1>
      <Box component="div" sx={{ wordWrap: 'break-word' }}>
        {authContext.userData?.access_token}
      </Box>
      <h1>Given Name</h1>
      <Box component="div" sx={{ wordWrap: 'break-word' }}>
        {authContext.userData?.profile.given_name}
      </Box>
      <h1>Family Name</h1>
      <Box component="div" sx={{ wordWrap: 'break-word' }}>
        {authContext.userData?.profile.family_name}
      </Box>
    </>
  );
}
