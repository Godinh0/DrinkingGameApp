import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Game = (cards) => {
  const navigation = useNavigation();

  const [RandomCard,setRandomCard] = useState(1);

  function CardHandle(cards) {
    const random = (min,max) => Math.floor(Math.random()* (max- min) +min )
    setRandomCard(random(0,10));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#ef3537] items-center ">
      <View className= "items-center">
        <TouchableOpacity className="  mt-20 w-30" onPress={CardHandle}>
          <Text className="font-bold text-xl  border-2 rounded-full p-2 bg-white">
            New Card
          </Text>
        </TouchableOpacity>
          <Text className="font-bold text-5xl w-30 mt-96" >{RandomCard}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Game;
