import React from 'react';
import {View, Image} from 'react-native';

import {Item, Title, Author} from './styles';

export default function ItemCourses({title, img, author, ...props}) {
  return (
    <Item {...props}>
      <Image
        source={{uri: img}}
        style={{width: '100%', height: 100}}
        borderTopLeftRadius={12}
        borderTopRightRadius={12}
      />
      <Title>{title}</Title>
      <Author>{author}</Author>
    </Item>
  );
}
