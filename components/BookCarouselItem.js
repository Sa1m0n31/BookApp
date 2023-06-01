import React from "react";
import { Image, View } from "react-native";
import styled from "styled-components";
import DropShadow from "react-native-drop-shadow";
import { shadow } from "../helpers/shadow";

const BookCarouselItem = ({item}) => {
  return <DropShadow style={shadow}>
    <Container>
      <Image source={require('../img/book-icon.png')}
             style={{ width: 30, height: 30 }} />

      <BookTitle>
        Tytuł książki
      </BookTitle>
    </Container>
  </DropShadow>
}

const Container = styled(View)`
  background: #FFD365;
  border-radius: 10px;
  padding: 15px;
`;

const BookTitle = styled(Text)`
  font-size: 14px;
  color: #fff;
  padding-top: 30px;
`;

export default BookCarouselItem;
