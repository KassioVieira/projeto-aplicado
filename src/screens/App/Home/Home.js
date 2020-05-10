import React from 'react';
import {View, StatusBar, FlatList, Text} from 'react-native';
import ItemCourses from '../../../components/ItemCourses';
import {Container, Header, H1} from './styles';

export default function Home({navigation}) {
  return (
    <Container>
      <StatusBar backgroundColor="#f7ba5e" barStyle="dark-content" />
      <Header>
        <H1>
          Olá, Buscando aprender{'\n'}uma nova tecnologia{'\n'}hoje?
        </H1>
      </Header>
      <FlatList
        contentContainerStyle={{
          paddingHorizontal: 16,
        }}
        numColumns={2}
        data={[
          {id: '1', img: '', title: 'RoadMap React-Native'},
          {id: '2', img: '', title: 'Vue Js na Prática'},
          {id: '3', img: '', title: 'Angular para iniciantes'},
          {id: '4', img: '', title: 'Vue Js na Prática'},
          {id: '5', img: '', title: 'Vue Js na Prática'},
          {id: '6', img: '', title: 'Vue Js na Prática'},
          {id: '7', img: '', title: 'Vue Js na Prática'},
          {id: '8', img: '', title: 'Vue Js na Prática'},
          {id: '9', img: '', title: 'Vue Js na Prática'},
          {id: '10', img: '', title: 'Vue Js na Prática'},
        ]}
        renderItem={({item}) => {
          return (
            <ItemCourses
              {...item}
              onPress={() => navigation.navigate('Course')}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}
