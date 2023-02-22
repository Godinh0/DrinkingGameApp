import {
  View,
  Text,
  SafeAreaView,
  Image,
  Button,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { sign18 } from "../assets";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-[#ef3537] items-center justify-center">
      <View>
        <Text className="font-bold text-2xl text-center">Drinking Game</Text>
        <Image source={sign18} className="w-20 h-20 object-cover ml-10 mt-5" />
      </View>
      <View className= "absolute bottom-40 w-30 h-25" >
        <TouchableOpacity onPress={()=>navigation.navigate('Game')}>
          <Text className="font-bold text-xl  border-2 rounded-full p-2 bg-white" >New Game</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
