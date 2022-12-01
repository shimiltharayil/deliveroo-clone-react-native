import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{id}</Text>
        <ArrowRightIcon color="#00CCBB" />
        <Text className="text-xs text-gray-500 px-4">{description}</Text>
      </View>
      <ScrollView
        horizontal
        contantContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCard */}
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title
          rating
          genre
          address
          short_description
          dishes
          long
          lat
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
