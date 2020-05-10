import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const Wrapper = styled.TouchableOpacity`
  width: 100%;
  height: 52px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: ${({background}) => background || colors.primary};
  border: 1px solid ${({background}) => background};
  shadow-color: #000;
  shadow-opacity: 0.25px;
  shadow-radius: 3.84px;
  elevation: 5;
`;

export const Label = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${({color}) => color || colors.secondary};
`;
