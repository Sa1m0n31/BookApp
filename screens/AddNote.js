import React from 'react';
import { SafeAreaView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { screenHeight } from "../helpers/dimensions";
import TouchableScale from "react-native-touchable-scale";
import DropShadow from "react-native-drop-shadow";
import { shadow } from '../helpers/shadow';

const AddNote = () => {
  const selectNoteType = (n) => {

  }

  return <SafeAreaView>
    <Container>
      <AddNoteHeader>
        Dodaj notatkę
      </AddNoteHeader>

      <NoteTypes>
        <DropShadow style={shadow}>
          <NoteButton onPress={() => { selectNoteType(0); }}>
            <Ionicons name={'mic'} color={'#313131'} size={60} />
          </NoteButton>
        </DropShadow>
        <DropShadow style={shadow}>
          <NoteButton onPress={() => { selectNoteType(1); }}>
            <Ionicons name={'text'} color={'#313131'} size={60} />
          </NoteButton>
        </DropShadow>
        <DropShadow style={shadow}>
          <NoteButton onPress={() => { selectNoteType(2); }}>
            <Ionicons name={'image'} color={'#313131'} size={60} />
          </NoteButton>
        </DropShadow>
      </NoteTypes>
    </Container>
  </SafeAreaView>
}

const Container = styled(View)`
  position: relative;
  height: ${screenHeight}px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -50px;
`;

const AddNoteHeader = styled(Text)`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 20px;
  text-align: center;
`;

const NoteTypes = styled(View)`
  width: 100%;
  margin: 30px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const NoteButton = styled(TouchableScale)`
  width: 140px;
  height: 140px;
  border-radius: 70px;
  background: #FFD365;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export default AddNote;
