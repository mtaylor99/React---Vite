import { Box, Container, Typography } from '@mui/material';
import pageNotFoundLogo from './../../../assets/404.svg';

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

export function Status404() {
  return (
    <>
      <MainContent>
        <Container maxWidth="md">
          <Box textAlign="center">
            <img alt="404" height={180} src={pageNotFoundLogo} />
            <Typography variant="h2" sx={{ my: 2 }}>
              The page you were looking for doesn't exist.
            </Typography>
            <Typography
              variant="h4"
              color="text.secondary"
              fontWeight="normal"
              sx={{ mb: 4 }}
            >
              It's on us, we moved the content to a different page. The search
              below should help!
            </Typography>
          </Box>
        </Container>
      </MainContent>
    </>
  );
}
