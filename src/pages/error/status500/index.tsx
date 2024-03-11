import { Box, Button, Container, Typography } from '@mui/material';
import errorLogo from './../../../assets/500.svg';

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

export function Status500() {
  return (
    <>
      <MainContent>
        <Container maxWidth="md">
          <Box textAlign="center">
            <img alt="500" height={180} src={errorLogo} />
            <Typography variant="h2" sx={{ my: 2 }}>
              There was an error, please try again later
            </Typography>
            <Typography
              variant="h4"
              color="text.secondary"
              fontWeight="normal"
              sx={{ mb: 4 }}
            >
              The server encountered an internal error and was not able to
              complete your request
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
