import React from 'react';
import {Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated from 'react-native-reanimated';

import {Wrapper, Item, Label, MenuActive, Content} from './styles';
import colors from '../../utils/colors';

export default function BottomMenu({state, descriptors, navigation, position}) {
  return (
    <Wrapper>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = Animated.interpolate(position, {
          inputRange,
          outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
        });
        const isFocused = state.index === index;

        return (
          <Item
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Content>
              {isFocused && <MenuActive />}
              {label === 'Home' ? (
                <Icon
                  name="menu"
                  color={isFocused ? colors.orange : colors.light}
                  size={35}
                  style={{marginTop: 10}}
                />
              ) : label === 'MyRoadmap' ? (
                <Icon
                  name="file-document-edit-outline"
                  color={isFocused ? colors.orange : colors.light}
                  size={35}
                  style={{marginTop: 10}}
                />
              ) : (
                <Icon
                  name="account-circle"
                  color={isFocused ? colors.orange : colors.light}
                  size={35}
                  style={{marginTop: 10}}
                />
              )}
            </Content>
          </Item>
        );
      })}
    </Wrapper>
  );
}
