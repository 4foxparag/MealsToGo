import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import styled from "styled-components";
import { ActivityIndicator } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.components";
import { RestaurantInfoCard } from "../components/restaurants-info-card.components";
import { Spacer } from "../../../components/spacer/spacer.components";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

const RestaurentList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestaurantsScreen = () => {
  const { isLoading, restaurants } = useContext(RestaurantContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color="tomato" />
        </LoadingContainer>
      )}
      <Search />
      <RestaurentList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" space="medium">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
