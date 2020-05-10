import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import colors from '../../utils/colors';

const {width, height} = Dimensions.get('window');

export const Item = styled.TouchableOpacity`
  width: 45%;
  border-radius: 12px;
  height: 200px;
  background-color: ${colors.secondary};
  border: 1px solid ${colors.secondary};
  shadow-color: #000;
  shadow-opacity: 0.25px;
  shadow-radius: 3.84px;
  elevation: 5;
  margin: 10px;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: Montserrat-Bold;
  font-size: 16px;
  color: ${colors.primary};
  padding-horizontal: 10px;
  text-align: left;
  width: 100%;
`;

export const Author = styled.Text`
  font-family: Montserrat-Italic;
  font-size: 13px;
  color: ${colors.primary};
  text-align: left;
  align-self: flex-start;
  margin-top: 20px;
  padding-horizontal: 10px;
`;
