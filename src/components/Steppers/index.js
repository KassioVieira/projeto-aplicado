import React from 'react';
import {View} from 'react-native';

import {Wrapper, Count, CountText, Col, Title, Description} from './styles';

const Steppers = ({position, stepper, description}) => {
  return (
    <Wrapper>
      <Count>
        <CountText>{position}</CountText>
      </Count>
      <Col>
        <Title>{stepper}</Title>
        <Description>{description}</Description>
      </Col>
    </Wrapper>
  );
};

export default Steppers;
