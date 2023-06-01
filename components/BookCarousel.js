import React from "react";
import styled from 'styled-components';
import { View } from "react-native";
import Carousel from 'react-native-snap-carousel';
import BookCarouselItem from "./BookCarouselItem";

const BookCarousel = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];

  return <Container>
    <CarouselHeader>
      Twoje książki
    </CarouselHeader>

    <Carousel data={data}
              renderItem={({item, index}) => (<BookCarouselItem item={item} />)} />
  </Container>
}

const Container = styled(View)`
  margin: 20px 0;
`;

const CarouselHeader = styled(Text)`
  font-size: 19px;
  font-weight: 700;
  padding-bottom: 30px;
`;

export default BookCarousel;
