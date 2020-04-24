import React, { useState } from "react";
import { View, TextInput, StyleSheet, ImageBackground } from "react-native";
import { useDispatch } from "react-redux";

import { THEME } from "../theme";
import { Buttons } from "../components/Buttons";
import { chanheBal } from "../store/actions/appActions";

export const ChangeBalance = ({ navigation, route }) => {
  const { appBal } = route.params;

  const [balance, setBalance] = useState(appBal);
  const dispatch = useDispatch();

  const saveBalance = () => {
    dispatch(chanheBal(balance));

    navigation.navigate("Main");
  };
  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={require("../../assets/myImg/bgImg.jpg")}
        style={styles.imgBg}
      >
        <TextInput
          defaultValue={appBal.toString()}
          style={styles.input}
          placeholder="input new balance"
          placeholderTextColor={THEME.PLACE_HOLDER_COLOR}
          Value={balance}
          maxLength={6}
          keyboardType="numeric"
          onChangeText={setBalance}
        />
        <Buttons send={navigation} save={saveBalance} />
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
  input: {
    width: "70%",
    padding: 15,
    backgroundColor: THEME.BG_COLOR,
    borderColor: THEME.BORDER_COLOR,
    borderWidth: THEME.BORDER_SIZE,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 25,
  },
});
