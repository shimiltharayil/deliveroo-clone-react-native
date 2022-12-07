import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(()=>{
    setTimeout(()=>{
         navigation.navigate("Delivery")
    },4000)
  },[])

  return (
    <SafeAreaView className="flex-1 bg-[#00CCBB] justify-center items-center">
      <Animatable.Image
        source={require("../assets/pharmacy128-128.gif")}
        animation="slideInUp"
        iterationCount={2}
        className="h-60 w-60"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-md my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
