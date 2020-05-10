import React, {useEffect} from 'react';
import {View, StatusBar, FlatList, Text, ActivityIndicator} from 'react-native';
import ItemCourses from '../../../components/ItemCourses';
import {Container, Header, H1} from './styles';
import firestore from '@react-native-firebase/firestore';
import colors from '../../../utils/colors';

export default function Home({navigation}) {
  const [roadmaps, setRoadmaps] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getRoadmaps();
  }, []);

  function getRoadmaps() {
    const data = [];
    firestore()
      .collection('roadmap')
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((item) => {
          data.push({
            id: item.id,
            img: item.data().url,
            title: item.data().title,
            author: item.data().author,
            description: item.data().description,
          });
        });
        setRoadmaps(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }

  return (
    <Container>
      <StatusBar backgroundColor={colors.orange} barStyle="dark-content" />
      <Header>
        <H1>
          Olá, Buscando aprender{'\n'}uma nova tecnologia{'\n'}hoje?
        </H1>
      </Header>

      {loading === true ? (
        <ActivityIndicator
          size={40}
          color={colors.orange}
          style={{marginTop: 90}}
        />
      ) : (
        <FlatList
          contentContainerStyle={{
            paddingHorizontal: 16,
          }}
          numColumns={2}
          data={roadmaps}
          renderItem={({item}) => {
            return (
              <ItemCourses
                {...item}
                onPress={() => navigation.navigate('Course', {item})}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      )}
    </Container>
  );
}
