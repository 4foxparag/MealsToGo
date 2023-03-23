import React from "react";
import styled from "styled-components/native";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 16px;
  color: green;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Hotel Lolipop",
    icon,
    photos = [
      "https://media-cdn.tripadvisor.com/media/photo-s/09/a6/14/bb/victoria-club-hotel.jpg",
    ],
    address = "Chetna Nagar, Rane nagar, Nashik, 422009",
    isOpenNow = true,
    rating = 4,
    isClostedTemporarily,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover style={styles.cover} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    padding: 16,
  },
});
