import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { removeFromBasket, selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";
import { ScrollView } from "react-native";
import Currency from "react-currency-formatter";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal)
  const dispatch = useDispatch();
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-gray-200 mt-5">
      <View className="flex-1 bg-gary-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs ">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center my-3 space-x-4 px-4 py-3 bg-white">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 50-75 min</Text>
          <TouchableOpacity className="text-[#00CCBB]">
            <Text>Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-100 my-3">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              className="flex-row items-center space-x-3 py-2 px-5 bg-white "
              key={key}
            >
              <Text className="text-[#00CCBB]">{items.length} x</Text>

              <Image
                source={{
                  uri: urlFor(items[0]?.image).url(),
                }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text>
                <Currency quantity={items[0]?.price} currency="GBP" />
              </Text>
              <TouchableOpacity>
                <Text
                  className="text-[#00CCBB] text-xs"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              <Currency quantity={basketTotal} currency="GBP" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">
              <Currency quantity={5.99} currency="GBP" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="font-extrabold">Order Total</Text>
            <Text className="font-extrabold">
              <Currency quantity={basketTotal + 5.99} currency="GBP" />
            </Text>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate("PreparingOrderScreen")} className="rounded-lg bg-[#00CCBB] p-4">
        
              <Text className="text-center text-lg text-white font-bold">Order Now</Text>
            
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
