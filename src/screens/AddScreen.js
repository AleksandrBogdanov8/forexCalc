import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";

import { addItem } from "../store/actions/appActions";
import { THEME } from "../theme";
import { Buttons } from "../components/Buttons";

export const AddScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [minLot, setMinLot] = useState("0.01");
  const [atr, setAtr] = useState("");
  const [quote, setQuote] = useState("");
  const [contract, setContract] = useState("100000");
  const [baseQuote, setBaseQuote] = useState("1");

  const dispatch = useDispatch();

  const saveItem = () => {
    const newItem = {
      name: name,
      minLot: +minLot,
      ATR: +atr,
      quote: +quote,
      contract: +contract,
      baseQuote: +baseQuote,
    };

    if (
      !name.length ||
      !minLot.length ||
      !atr.length ||
      !quote.length ||
      !contract.length ||
      !baseQuote.length
    ) {
      Alert.alert("Все пооля должны быть заполнены");
    } else {
      dispatch(addItem(newItem));
      navigation.navigate("Main");
    }
  };

  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={require("../../assets/myImg/bgImg.jpg")}
        style={styles.imgBg}
      >
        <ScrollView style={styles.scrol}>
          <TextInput
            style={styles.inputVal}
            maxLength={16}
            keyboardType="default"
            placeholder="Input Name"
            placeholderTextColor={THEME.PLACE_HOLDER_COLOR}
            backgroundColor={THEME.BG_COLOR}
            onChangeText={setName}
          />
          <TextInput
            style={styles.inputVal}
            maxLength={4}
            defaultValue={minLot}
            keyboardType="numeric"
            placeholder="min. Lot"
            placeholderTextColor={THEME.PLACE_HOLDER_COLOR}
            backgroundColor={THEME.BG_COLOR}
            onChangeText={setMinLot}
          />
          <TextInput
            style={styles.inputVal}
            maxLength={7}
            keyboardType="numeric"
            placeholder="ATR"
            placeholderTextColor={THEME.PLACE_HOLDER_COLOR}
            backgroundColor={THEME.BG_COLOR}
            onChangeText={setAtr}
          />
          <TextInput
            style={styles.inputVal}
            maxLength={10}
            keyboardType="numeric"
            placeholder="quote"
            placeholderTextColor={THEME.PLACE_HOLDER_COLOR}
            backgroundColor={THEME.BG_COLOR}
            onChangeText={setQuote}
          />
          <TextInput
            style={styles.inputVal}
            maxLength={6}
            defaultValue={contract}
            keyboardType="numeric"
            placeholder="contract"
            placeholderTextColor={THEME.PLACE_HOLDER_COLOR}
            backgroundColor={THEME.BG_COLOR}
            onChangeText={setContract}
          />
          <TextInput
            style={styles.inputVal}
            defaultValue={baseQuote}
            maxLength={10}
            keyboardType="numeric"
            placeholder="baseQuote"
            placeholderTextColor={THEME.PLACE_HOLDER_COLOR}
            backgroundColor={THEME.BG_COLOR}
            onChangeText={setBaseQuote}
          />
          <Buttons send={navigation} save={saveItem} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  imgBg: {
    flex: 1,
    resizeMode: "contain",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: "center",
  },
  inputVal: {
    textAlign: "center",
    width: 250,
    fontSize: 25,
    marginVertical: 10,
    paddingVertical: 7,
    borderRadius: THEME.BORDER_RADIUS,
    borderColor: THEME.BORDER_COLOR,
    borderWidth: THEME.BORDER_SIZE,
  },
});
