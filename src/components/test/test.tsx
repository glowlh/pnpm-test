import React from 'react';
import { Box } from './tests.styles';

interface Props {
    value: string;
}

export const Test: React.FC<Props> = ({ value }: Props) => {
    return (
        <Box>{value}</Box>
    );
};
