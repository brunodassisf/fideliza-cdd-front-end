import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { Title } from './SignIn.styles';
import { validations } from './SignIn.validations';

const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validations),
    });
    const onSubmit = handleSubmit((data) => console.log(data));

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
                <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ message }) => <p>{message}</p>}
                />
            </form>
        </>
    );
};

export default SignIn;
