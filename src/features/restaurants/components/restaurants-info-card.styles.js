import styled from "styled-components/native";
import { View } from "react-native";
import { Card } from "react-native-paper";
import { Text } from "../../../components/typography/text.components";

export const RestaurantCard = styled(Card)`
  background-color: white;
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space.s16};
  background-color: white;
`;

export const Info = styled(View)`
  padding: ${(props) => props.theme.space.s16};
`;

export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space.s4};
  padding-bottom: ${(props) => props.theme.space.s4};
`;

export const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const OpenStatusView = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;