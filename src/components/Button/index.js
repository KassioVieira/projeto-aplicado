import React from 'react';
import {View} from 'react-native';

import {Wrapper, Label} from './style';

export default function Button({label, ...props}) {
  return (
    <Wrapper {...props}>
      <Label {...props}>{label}</Label>
    </Wrapper>
  );
}
