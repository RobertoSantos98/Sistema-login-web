import React from 'react';
import { ButtonCustomizado } from './styles'

const Botao = ({
  type,
  text,
  onClick,
  disabled,
}) => {
  return ( 
    <ButtonCustomizado
      type={type}
      text={text}
      onClick={onClick}
      disabled={disabled}
      >
        {text}
    </ButtonCustomizado>
   );
}
 
export default Botao;