import React from 'react';
import {View, StatusBar, FlatList, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Steppers from '../../../components/Steppers';
import RoadmapHeader from '../../../components/RoadmapHeader';
import {Container, Header, H1, Back, Title} from './styles';

export default function Course({navigation}) {
  const [roadmap, setRoadmap] = React.useState({
    url: 'https://blog.fellyph.com.br/wp-content/uploads/2016/06/react-js.png',
    description:
      ' React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',
    steppers: [
      {id: '1', stepper: 'Passo 1', description: 'Lorem Ipsum'},
      {id: '2', stepper: 'Passo 2', description: 'Lorem Ipsum'},
      {id: '3', stepper: 'Passo 3', description: 'Lorem Ipsum'},
      {id: '4', stepper: 'Passo 4', description: 'Lorem Ipsum'},
      {id: '5', stepper: 'Passo 5', description: 'Lorem Ipsum'},
      {id: '6', stepper: 'Passo 6', description: 'Lorem Ipsum'},
      {id: '7', stepper: 'Passo 7', description: 'Lorem Ipsum'},
      {id: '8', stepper: 'Passo 8', description: 'Lorem Ipsum'},
      {id: '9', stepper: 'Passo 9', description: 'Lorem Ipsum'},
      {id: '10', stepper: 'Passo 10', description: 'Lorem Ipsum'},
    ],
  });
  return (
    <Container>
      <StatusBar backgroundColor="#f7ba5e" barStyle="dark-content" />
      <Header>
        <Back>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" size={22} />
          </TouchableOpacity>
        </Back>
        <Title>
          <H1>React</H1>
        </Title>
      </Header>
      <FlatList
        ListHeaderComponent={() => (
          <RoadmapHeader url={roadmap.url} description={roadmap.description} />
        )}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 10,
        }}
        data={roadmap.steppers}
        renderItem={({item, index}) => {
          return (
            <Steppers
              {...item}
              onPress={() => navigation.navigate('Course')}
              position={index + 1}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}
