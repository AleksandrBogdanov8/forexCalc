import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { THEME } from "../theme";

export const Balance = ({ goTo, val }) => {
  return (
    <View style={styles.content}>
      <Text style={{ ...styles.text, color: "#027502" }}>
        {(val * 20) / 100} $
      </Text>
      <Text style={styles.text}>{val} $</Text>
      <MaterialCommunityIcons.Button
        name='settings-outline'
        size={27}
        backgroundColor={THEME.BG_COLOR}
        color={THEME.MAIN_COLOR}
        onPress={goTo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 15,
    borderWidth: THEME.BORDER_SIZE,
    borderColor: THEME.BORDER_COLOR,
    backgroundColor: THEME.BG_COLOR,
    borderRadius: THEME.BORDER_RADIUS,
    width: "100%",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
