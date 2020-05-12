import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import { THEME } from "../theme";
import { removeItem } from "../store/actions/appActions";

export const DataItem = ({ data, size, balance, chengeI }) => {
  const dispatch = useDispatch();

  const itemDel = () => {
    dispatch(removeItem(data.id));
  };

  let myAtr = (data.ATR * 80) / 100;

  const margin =
    (data.minLot * data.contract * data.quote) / 100 / data.baseQuote;

  const sizeDigits = data.quote.toString().includes(".")
    ? data.quote.toString().split(".").pop().length
    : 0;
  let priceAtr;
  if (sizeDigits === 5) {
    priceAtr = data.ATR * 1000;
  } else if (data.minLot != 1) {
    priceAtr = data.ATR * 10;
  } else priceAtr = data.ATR;

  const dataSize = size >= 3 ? size : 3;

  const minSum = Math.ceil(margin + priceAtr);
  const maxLotVal = (balance / dataSize / minSum) * data.minLot;
  const maxLot =
    data.minLot == 1 ? Math.floor(maxLotVal) : maxLotVal.toFixed(2);
  return (
    <View style={styles.item}>
      <View style={styles.positionItem}>
        <FontAwesome5.Button
          name='minus'
          color={THEME.DANGER_COLOR}
          backgroundColor='rgba(255, 255, 255, 0)'
          size={30}
          onPress={itemDel}
        />
        <Text style={styles.name}>{data.name}</Text>
        <MaterialCommunityIcons.Button
          name='settings-outline'
          color={THEME.MAIN_COLOR}
          backgroundColor='rgba(255, 255, 255, 0)'
          size={30}
          onPress={chengeI}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.contentItem}>
          <Text style={styles.textHead}>min.sum</Text>
          <Text style={styles.textVal}>{minSum}</Text>
        </View>
        <View style={styles.contentItem}>
          <Text style={styles.textHead}>lot</Text>
          <Text style={styles.textVal}>
            {maxLot >= data.minLot ? maxLot : 0}
          </Text>
        </View>
        <View style={styles.contentItem}>
          <Text style={styles.textHead}>Take size</Text>
          <Text style={styles.textVal}>
            {sizeDigits == 5 ? myAtr.toFixed(4) : myAtr.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginHorizontal: 5,
    marginVertical: 5,
    borderColor: THEME.BORDER_COLOR,
    borderRadius: THEME.BORDER_RADIUS,
    borderWidth: THEME.BORDER_SIZE,
    backgroundColor: THEME.BG_COLOR,
    padding: 5,
    width: "97%",
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginVertical: 5,
  },
  content: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-evenly",
  },
  contentItem: {
    marginVertical: 5,
    alignItems: "center",
  },
  textHead: {
    color: THEME.MAIN_COLOR,
    fontSize: 20,
    fontWeight: "bold",
  },
  textVal: {
    fontSize: 23,
    fontWeight: "bold",
  },

  positionItem: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
