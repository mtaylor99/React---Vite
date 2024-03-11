import { Box, useTheme } from '@mui/material';
import React from 'react';

interface IAccordionProps {
  title: string;
  children: React.ReactNode;
}

export function MyAccordion(props: IAccordionProps) {
  const theme = useTheme();
  const { title, children } = props;

  return (
    <Box
      sx={{
        color: theme.palette.primary.light,
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <h3 className="accordion-title">{title}</h3>
      <div className="accordion-content">{children}</div>
    </Box>
  );
}
