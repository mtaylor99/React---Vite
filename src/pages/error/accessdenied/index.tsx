import { Box, Button, Container, Typography } from '@mui/material';
import accessDeniedLogo from './../../../assets/AccessDenied.jpg';

import { styled } from '@mui/material/styles';

const MainContent = styled(Box)(
  () => `
    height: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
);

export function AccessDeniedPage() {
  return (
    <>
      <MainContent>
        <Container maxWidth="md">
          <Box textAlign="center">
            <img alt="404" height={180} src={accessDeniedLogo} />
            <Typography variant="h2" sx={{ my: 2 }}>
              Access Denied
            </Typography>
            <Typography
              variant="h4"
              color="text.secondary"
              fontWeight="normal"
              sx={{ mb: 4 }}
            >
              You do not have the permission to view this content
            </Typography>
            <Button href="/overview" variant="contained" sx={{ ml: 1 }}>
              Go back to 'Overview'
            </Button>
          </Box>
        </Container>
      </MainContent>
    </>
  );
}
