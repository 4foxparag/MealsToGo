import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.components";
import { Text } from "../../../components/typography/text.components";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  OpenStatusView,
  Rating,
  Icon,
  Address,
} from "./restaurants-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Hotel Lolipop",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://media-cdn.tripadvisor.com/media/photo-s/09/a6/14/bb/victoria-club-hotel.jpg",
    ],
    address = "Chetna Nagar, Rane nagar, Nashik, 422009",
    isOpenNow = true,
    rating = 4,
    isClostedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <OpenStatusView>
            {isClostedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer space="medium" position="left">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer space="medium" position="left">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </OpenStatusView>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
