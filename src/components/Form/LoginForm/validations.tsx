import * as yup from 'yup';

export const loginFormSchema = yup.object().shape({
  email: yup.string().required('Email obrigatório').email('email invalido'),
  password: yup
    .string()
    .required('Senha obrigatório')
    .matches(/.{8,}/, 'Deve conter no mínimo 8 caracteres'),
});
