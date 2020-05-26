import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Wrapper, Label} from './style';
import colors from '../../utils/colors';

export default function Button({label, loading, ...props}) {
  return (
    <Wrapper {...props}>
      {loading ? (
        <ActivityIndicator color={colors.orange} />
      ) : (
        <Label {...props}>{label}</Label>
      )}
    </Wrapper>
  );
}
