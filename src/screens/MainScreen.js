import React, { useEffect } from "react";
import { View, StyleSheet, ImageBackground, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Entypo } from "@expo/vector-icons";

import { Balance } from "../components/Balance";
import { loadBal, loadData } from "../store/actions/appActions";
import { THEME } from "../theme";
import { DataItem } from "../components/DataItem";

export const MainScreen = ({ navigation }) => {
  const dicpatch = useDispatch();

  useEffect(() => {
    dicpatch(loadBal()), dicpatch(loadData());
  }, [dicpatch]);

  let bal = useSelector((state) => state.myApp.balance);

  bal = Number(bal) ? Number(bal) : 0;

  const changeBal = () => {
    navigation.navigate("Balance", { appBal: bal });
  };

  const changeItem = (item) => {
    navigation.navigate("Change", { selItem: item });
  };

  const myData = useSelector((state) => state.myApp.appItems);

  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={require("../../assets/myImg/bgImg.jpg")}
        style={styles.imgBg}
      >
        <Balance style={styles.balance} goTo={changeBal} val={bal} />

        <FlatList
          style={styles.flat}
          data={myData}
          keyExtractor={(data) => data.id.toString()}
          renderItem={({ item }) => {
            return (
              <DataItem
                data={item}
                balance={bal}
                size={myData.length}
                chengeI={() => {
                  changeItem(item);
                }}
              />
            );
          }}
        />

        <Entypo
          name="circle-with-plus"
          size={50}
          color={THEME.SAVE_COLOR_BUTT}
          style={styles.butAdd}
          onPress={() => navigation.navigate("Add")}
        />
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
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  butAdd: {
    marginVertical: 8,
  },
  flat: {
    width: "95%",
    flex: 1,
  },
});
