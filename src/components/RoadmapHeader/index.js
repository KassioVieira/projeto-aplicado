import React from 'react';
import {View, Image} from 'react-native';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  width: 100%;
`;

const Description = styled.Text`
  font-size: 16px;
  text-align: justify;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const RoadmapHeader = ({url, description}) => {
  return (
    <Wrapper>
      <Image
        source={{uri: url}}
        style={{
          width: '100%',
          height: 170,
        }}
        borderRadius={12}
        resizeMode="stretch"
      />
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default RoadmapHeader;
