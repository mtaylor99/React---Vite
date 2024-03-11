import { Box, Container, styled } from '@mui/material';
import { ReactNode } from 'react';

interface IPageTitleWrapperProps {
  children?: ReactNode;
}

const PageTitle = styled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(4)};
`
);

export function PageTitleWrapper({ children }: IPageTitleWrapperProps) {
  return (
    <PageTitle className="MuiPageTitle-wrapper">
      <Container maxWidth="lg">{children}</Container>
    </PageTitle>
  );
}
