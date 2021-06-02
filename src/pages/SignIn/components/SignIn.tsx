import React from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { Title } from './SignIn.styles';

const SignIn = () => {
    return (
        <>
            <Title>Login</Title>
            <Input label="E-mail" placeholder="E-mail" />
            <Input label="Senha" placeholder="Senha" type="password" />
            <Button type="button">Entrar</Button>
        </>
    );
};

export default SignIn;
