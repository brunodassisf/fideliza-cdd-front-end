import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { Title } from './SignIn.styles';
import { validations } from './SignIn.validations';

const SignIn = () => {
    const history = useHistory();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validations),
    });
    const onSubmit = handleSubmit((data) => history.push('/home'));

    return (
        <>
            <Title>Login</Title>
            <form onSubmit={onSubmit}>
                <Input
                    label="E-mail"
                    placeholder="E-mail"
                    {...register('email')}
                    error={errors.email?.message}
                />
                <Input
                    label="Senha"
                    placeholder="Senha"
                    {...register('password')}
                    type="password"
                    error={errors.password?.message}
                />
                <Button type="submit">Entrar</Button>
            </form>
        </>
    );
};

export default SignIn;
