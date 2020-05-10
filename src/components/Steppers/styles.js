import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const Wrapper = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  margin-top: 10px;
`;

export const Count = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background-color: ${colors.orange};
  justify-content: center;
  align-items: center;
`;

export const CountText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Col = styled.View`
  width: 100%;
  margin-left: 20px;
  border-bottom-width: 1px;
  border-color: #0000000d;
  padding-bottom: 5px;
`;

export const Title = styled.Text`
  margin-bottom: 4px;
`;

export const Description = styled.Text`
  font-size: 13px;
  color: #717171;
`;
