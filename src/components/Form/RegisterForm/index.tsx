import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { UserContext } from '../../../provider/UserContext';
import { IRegisterFormValues } from '../../../provider/@Types';

const RegisterForm = () => {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<IRegisterFormValues>({ mode: 'onBlur' });

  const submit: SubmitHandler<IRegisterFormValues> = (formdata) => {
    console.log(formdata);

    // registerUser(formdata);
  };
  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='Nome'
        placeholder='Digite seu nome aqui'
        register={register('name')}
        type='text'
      />

      <Input
        label='Email'
        placeholder='Digite seu email aqui'
        register={register('email')}
        type='email'
      />

      <Input
        label='Senha'
        placeholder='Digite sua senha aqui'
        register={register('password')}
        type='password'
      />

      <Input
        label='Confirme sua senha'
        placeholder='Digite sua senha novamente'
        register={register('confirmPassword')}
        type='password'
      />

      <StyledButton type='submit' $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
