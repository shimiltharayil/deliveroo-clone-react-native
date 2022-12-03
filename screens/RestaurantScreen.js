import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { urlFor } from "../sanity";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

const RestaurantScreen = () => {
  const navigation = useNavigation()
  const {
    params: {
      id,
      title,
      imgUrl,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();
   useLayoutEffect(() => {
     navigation.setOptions({
       headerShown: false,
     });
   }, []);
  return (
    <ScrollView>
      <View className="relative ">
        <Image 
        source={{
          uri: urlFor(imgUrl).url()
        }}
        className="w-full h-56 bg-gray-300 p-4"
         />
         <TouchableOpacity>
          <ArrowLeftIcon />
         </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
