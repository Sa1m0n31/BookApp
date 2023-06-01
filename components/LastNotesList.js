import React from "react";
import styled from "styled-components";
import { Text, View } from "react-native";

const LastNotesList = () => {
  return <Container>
    <LastNotesHeader>
      Ostatnie notatki
    </LastNotesHeader>
  </Container>
}

const Container = styled(View)`

`;


const LastNotesHeader = styled(Text)`
  font-size: 19px;
  font-weight: 700;
  padding-bottom: 30px;
`;

export default LastNotesList;
