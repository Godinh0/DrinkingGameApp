import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Game = () => {
  const navigation = useNavigation();

  const cards = [
    require("./carta1.png"),
    require("./carta2.png"),
    require("./carta3.png"),
    require("./carta4.png"),
    require("./carta5.png"),
  ];

  const [RandomCard, setRandomCard] = useState();

  function CardHandle() {
    const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
    setRandomCard(cards[random(0, 5)]);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#ef3537] ">
      <View className="items-center">
        <TouchableOpacity className="  mt-20 w-30" onPress={CardHandle}>
          <Text className="font-bold text-xl  border-2 rounded-full p-2 bg-white">
            New Card
          </Text>
        </TouchableOpacity>
        <Image className="w-80 h-80 mt-20" source={RandomCard} />
      </View>
        <View className="absolute bottom-10  w-30 h-25  ml-36">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text className="font-bold text-xl  border-2 rounded-full p-2 bg-white">
              End Game
            </Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

export default Game;
