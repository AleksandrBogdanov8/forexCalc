import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import { THEME } from "../theme";

export const Buttons = ({ send, save }) => {
  return (
    <View style={styles.butContene}>
      <MaterialIcons.Button
        name="cancel"
        size={50}
        color={THEME.DANGER_COLOR}
        backgroundColor="rgba(255, 255, 250, 0)"
        onPress={() => send.navigate("Main")}
      />
      <Ionicons.Button
        name="ios-checkmark-circle"
        size={50}
        color={THEME.SAVE_COLOR_BUTT}
        backgroundColor="rgba(255, 255, 250, 0)"
        onPress={save}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  butContene: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
});
