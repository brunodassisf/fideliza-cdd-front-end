import * as yup from 'yup';

export const validations = yup.object().shape({
    email: yup.string().required('Email obrigatório'),
    password: yup.string().required('Senha obrigatório'),
});
