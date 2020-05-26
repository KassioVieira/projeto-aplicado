import React from 'react';

import {ContainerInput, Input, Label, Wrapper} from './styles';

const TextField = ({label, ...props}) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <ContainerInput>
        <Input {...props} />
      </ContainerInput>
    </Wrapper>
  );
};

export default TextField;
