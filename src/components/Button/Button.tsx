import React from 'react';

import { Container, StyledButton } from './Button.styles';
import { ButtonProps } from './Button.types';

export default function Button({
    bg,
    block,
    children,
    color,
    ...props
}: ButtonProps): JSX.Element {
    const { type } = props;
    return (
        <Container>
            <StyledButton
                type={type || 'button'}
                bg={bg}
                block={block}
                color={color}
                {...props}
            >
                {children}
            </StyledButton>
        </Container>
    );
}
