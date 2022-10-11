import React from 'react';
import { Button, ButtonProps, styled } from '@mui/material';

const StyledButton = styled(Button)({
    borderRadius: '32px',
    padding: '8px 16px',
    backgroundColor: 'red',
});

export type GivelifyButtonProps = ButtonProps & {
    text: string | number;
};

export const GivelifyButton: React.FC<GivelifyButtonProps> = ({
    text,
    ...props
}) => {
    return <StyledButton {...props}>{text}</StyledButton>;
};
