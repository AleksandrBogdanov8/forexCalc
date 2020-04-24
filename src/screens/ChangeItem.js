import React, { useState } from "react";
import { View, TextInput, StyleSheet, ImageBackground } from "react-native";
import { useDispatch } from "react-redux";

import { THEME } from "../theme";
import { Buttons } from "../components/Buttons";
import { modifiItem } from "../store/actions/appActions";

export const ChangeItem = ({ navigation, route }) => {
  const { selItem } = route.params;

  const [atrVal, setAtrVal] = useState(selItem.ATR);
  const [quoteVal, setQuoteVal] = useState(selItem.quote);
  const [basQuoteVal, setBasQuoteVal] = useState(selItem.baseQuote);
  const dispatch = useDispatch();

  const saveItem = () => {
    selItem.ATR = atrVal;
    selItem.quote = quoteVal;
    selItem.baseQuote = basQuoteVal;

    dispatch(modifiItem(selItem));
    navigation.navigate("Main");
  };

  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={require("../../assets/myImg/bgImg.jpg")}
        style={styles.imgBg}
      >
        <TextInput
          style={styles.inputVal}
          defaultValue={atrVal.toString()}
          maxLength={7}
          keyboardType="numeric"
          placeholder="Input new ATR"
          placeholderTextColor={THEME.PLACE_HOLDER_COLOR}
          backgroundColor={THEME.BG_COLOR}
          onChangeText={setAtrVal}
        />
        <TextInput
          style={styles.inputVal}
          maxLength={10}
          defaultValue={quoteVal.toString()}
          keyboardType="numeric"
          placeholder="Input new quote"
          placeholderTextColor={THEME.PLACE_HOLDER_COLOR}
          backgroundColor={THEME.BG_COLOR}
          onChangeText={setQuoteVal}
        />

        <TextInput
          style={styles.inputVal}
          maxLength={10}
          defaultValue={basQuoteVal.toString()}
          keyboardType="numeric"
          placeholder="Input new baseQuote"
          placeholderTextColor={THEME.PLACE_HOLDER_COLOR}
          backgroundColor={THEME.BG_COLOR}
          onChangeText={setBasQuoteVal}
        />

        <Buttons send={navigation} save={saveItem} />
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
    width: 270,
    fontSize: 25,
    marginVertical: 10,
    paddingVertical: 7,
    borderRadius: THEME.BORDER_RADIUS,
    borderColor: THEME.BORDER_COLOR,
    borderWidth: THEME.BORDER_SIZE,
  },
});
