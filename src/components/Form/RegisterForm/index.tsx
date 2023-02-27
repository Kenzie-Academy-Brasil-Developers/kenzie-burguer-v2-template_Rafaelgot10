import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { UserContext } from '../../../provider/UserContext';
import { IRegisterFormValues } from '../../../provider/@Types';

import { yupResolver } from '@hookform/resolvers/yup';
import { registerFormSchema } from './validations';

const RegisterForm = () => {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>({
    mode: 'onBlur',
    resolver: yupResolver(registerFormSchema),
  });

  const submit: SubmitHandler<IRegisterFormValues> = (formdata) => {
    console.log(formdata);

    registerUser(formdata);
  };
  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='Nome'
        placeholder='Digite seu nome aqui'
        register={register('name')}
        type='text'
      />
      <span>{errors.name?.message}</span>

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

      <Input
        label='Confirme sua senha'
        placeholder='Digite sua senha novamente'
        register={register('confirmPassword')}
        type='password'
      />
      <span>{errors.confirmPassword?.message}</span>

      <StyledButton type='submit' $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
