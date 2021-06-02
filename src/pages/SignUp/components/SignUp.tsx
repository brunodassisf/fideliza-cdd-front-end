import React from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { Title } from './SignUp.styles';

const SignUp = () => {
    return (
        <>
            <Title>Cadastro</Title>
            <Input label="Nome" placeholder="Nome" />
            <Input label="E-mail" placeholder="E-mail" />
            <Input label="Senha" placeholder="Senha" type="password" />
            <Input
                label="Confirma senha"
                placeholder="Confirma senha"
                type="password"
            />
            <Button type="button">Cadastrar</Button>
        </>
    );
};

export default SignUp;
