import { UseFormRegisterReturn } from 'react-hook-form';
import { StyledTextField } from '../../../styles/form';

import { StyledParagraph } from '../../../styles/typography';

interface IInput {
  placeholder: string;
  label: string;
  type: 'text' | 'password' | 'email';
  register: UseFormRegisterReturn<string>;

  // error?: FieldError;
}

export const Input = ({ placeholder, label, type, register }: IInput) => (
  <fieldset>
    <StyledTextField
      placeholder={placeholder}
      label={label}
      type={type}
      {...register}
    />
    <StyledParagraph fontColor='red'>Erro</StyledParagraph>
  </fieldset>
);
