import React from 'react';
import {View, SafeAreaView} from 'react-native';
import styled from 'styled-components';
import BookCarousel from "../components/BookCarousel";
import LastNotesList from "../components/LastNotesList";

const MainFeed = () => {
  return <SafeAreaView>
    <Container>
      <BookCarousel />
      <LastNotesList />
    </Container>
  </SafeAreaView>
}

const Container = styled(View)`
  padding: 30px;
`;

export default MainFeed;
