import { Box, BoxProps } from '@mui/material';
import React, { ReactNode } from 'react';

interface FlexProps extends BoxProps {
  column?: boolean;
  children: ReactNode;
}

export function Flex({ children, column = false, ...props }: FlexProps) {
  return (
    <Box display='flex' flexDirection={column ? 'column' : 'row'} {...props}>
      {children}
    </Box>
  );
}
