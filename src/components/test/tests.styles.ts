import { styled } from '@linaria/react';

export const Box = styled.div<{ color?: 'red' | 'blue'; }>`
  color: ${({color}) => `${color}`};
`;
