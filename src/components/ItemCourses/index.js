import React from 'react';
import {View, Image} from 'react-native';

import {Item, Title, Author} from './styles';

export default function ItemCourses({title}) {
  return (
    <Item>
      <Image
        source={require('../../assets/img/app.png')}
        style={{width: '90%', height: 100}}
      />
      <Title>{title}</Title>
      <Author>Kássio Luz</Author>
    </Item>
  );
}
