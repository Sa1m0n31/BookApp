import React, { useEffect } from "react";
import { View, SafeAreaView, TouchableOpacity, TouchableHighlight } from "react-native";
import styled from 'styled-components';
import BookCarousel from "../components/BookCarousel";
import LastNotesList from "../components/LastNotesList";
import DropShadow from "react-native-drop-shadow";
import { shadow } from "../helpers/shadow";
import { Ionicons } from '@expo/vector-icons';
import { screenHeight, screenWidth } from "../helpers/dimensions";
import TouchableScale from 'react-native-touchable-scale';

const MainFeed = ({navigation}) => {
  const addNewBook = () => {
    navigation.navigate('AddNote');
  }

  return <SafeAreaView>
    <Container>
      <BookCarousel />
      <LastNotesList />

      <DropShadow style={{
        ...shadow,
        position: 'absolute',
        zIndex: 100
      }}>
        <AddBookStickyButton onPress={addNewBook} activeScale={1.2}>
          <Ionicons name="add" color={'#313131'} size={40} />
        </AddBookStickyButton>
      </DropShadow>
    </Container>
  </SafeAreaView>
}

const Container = styled(View)`
  position: relative;
  padding: 30px;
  height: ${screenHeight}px;
`;

const AddBookStickyButton = styled(TouchableScale)`
  width: 70px;
  height: 70px;
  background: #FFD365;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${screenHeight-180}px;
  left: ${screenWidth-100}px;
  border-radius: 35px;
`;

export default MainFeed;
