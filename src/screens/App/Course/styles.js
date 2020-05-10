import styled from 'styled-components/native';
import colors from '../../../utils/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.secondary};
`;

export const Header = styled.View`
  background-color: #f7ba5e;
  height: 10%;
  flex-direction: row;
  padding-horizontal: 16px;
`;

export const H1 = styled.Text`
  color: ${colors.primary};
  font-size: 20px;
  text-align: left;
  align-self: flex-start;
  margin-top: 20px;
  font-family: Montserrat-Bold;
`;

export const Back = styled.View`
  flex: 0.5;
  justify-content: center;
`;

export const Title = styled.View`
  flex: 3;
`;
