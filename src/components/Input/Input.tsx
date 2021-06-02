import React from 'react';
import { Container, InputStyle, Error } from './Input.styles';
import { InputProps } from './Input.types';

const Input = ({
    label,
    error,
    type = 'text',
    ...props
}: InputProps): JSX.Element => {
    return (
        <Container>
            <InputStyle id={label} type={type} {...props} />
            {error && <Error>{error}</Error>}
        </Container>
    );
};

export default Input;
