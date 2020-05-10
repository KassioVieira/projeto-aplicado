import React from 'react';
import {
  View,
  StatusBar,
  FlatList,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';

import Steppers from '../../../components/Steppers';
import RoadmapHeader from '../../../components/RoadmapHeader';
import {Container, Header, H1, Back, Title} from './styles';
import colors from '../../../utils/colors';

export default function Course({navigation, route}) {
  const [roadmap, setRoadmap] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [steppers, setSteppers] = React.useState([]);

  const data = route.params.item;

  React.useEffect(() => {
    getSteppers();
  }, []);

  function getSteppers() {
    const myArray = [];
    firestore()
      .collection('roadmap')
      .doc(data.id)
      .onSnapshot((item) => {
        let aux = item.data().steppers ? item.data().steppers : [];
        if (aux.length > 0) {
          aux.forEach((element) => {
            myArray.push({
              stepper: element.title,
              description: element.description,
            });
          });
        }
        setRoadmap({
          url: data.img,
          description: data.description,
        });
        setSteppers(myArray);
        setLoading(false);
      });
  }

  return (
    <Container>
      <StatusBar backgroundColor={colors.orange} barStyle="dark-content" />
      <Header>
        <Back>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" size={22} />
          </TouchableOpacity>
        </Back>
        <Title>
          <H1>{data.title}</H1>
        </Title>
      </Header>

      {loading === true ? (
        <ActivityIndicator
          size={40}
          color={colors.orange}
          style={{marginTop: 90}}
        />
      ) : (
        <FlatList
          ListHeaderComponent={() => (
            <RoadmapHeader url={data.img} description={data.description} />
          )}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingVertical: 10,
          }}
          data={steppers}
          renderItem={({item, index}) => {
            return (
              <Steppers
                {...item}
                onPress={() => navigation.navigate('Course')}
                position={index + 1}
              />
            );
          }}
          keyExtractor={(item, index) => `${index}`}
        />
      )}
    </Container>
  );
}
