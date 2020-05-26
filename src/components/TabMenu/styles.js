import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const Wrapper = styled.View`
  flex-direction: row;
  background-color: ${colors.secondary};
  height: 72px;
  padding-vertical: 20px;
  justify-content: center;
  align-items: center;
`;

export const MenuActive = styled.View`
  width: 100%;
  height: 7px;
  background-color: ${colors.orange};
  z-index: 9;
  margin-top: -10px;
`;

export const Item = styled.TouchableOpacity`
  flex: 1;
  height: 52px;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const Label = styled.Text``;
