import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurants-info-card.components";

const isAndroid = Platform.OS === "android";

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  searchContainer: {
    padding: 16,
    backgroundColor: "green",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
