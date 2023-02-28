import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { UserContext } from '../../../provider/UserContext';
import { IRegisterFormValues } from '../../../provider/@Types';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormSchema } from './validations';

const LoginForm = () => {
  const { loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>({
    mode: 'onBlur',
    resolver: yupResolver(loginFormSchema),
  });

  const submit: SubmitHandler<IRegisterFormValues> = (formdata) => {
    loginUser(formdata);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='Email'
        placeholder='Digite seu email aqui'
        register={register('email')}
        type='email'
      />
      <span>{errors.email?.message}</span>

      <Input
        label='Senha'
        placeholder='Digite sua senha aqui'
        register={register('password')}
        type='password'
      />
      <span>{errors.password?.message}</span>

      <StyledButton type='submit' $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
