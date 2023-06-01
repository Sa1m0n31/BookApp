import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styled from "styled-components";
import { screenHeight } from "../helpers/dimensions";

const AddBook = () => {
  return <SafeAreaView>
    <Container>
      <AddBookHeader>
        Dodaj nową książkę
      </AddBookHeader>
    </Container>
  </SafeAreaView>
}

const Container = styled(View)`
  position: relative;
  height: ${screenHeight}px;
  padding: 30px;
`;

const AddBookHeader = styled(Text)`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 20px;
`;

export default AddBook;
