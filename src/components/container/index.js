import React from 'react';
import {View} from 'react-native';

import {Wrapper} from './styles';

export default function Container({children}) {
  return <Wrapper>{children}</Wrapper>;
}
