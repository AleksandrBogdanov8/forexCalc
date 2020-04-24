import { AsyncStorage } from "react-native";

export const saveAsync = async (newVal) => {
  try {
    await AsyncStorage.setItem("@MyStore:balance", String(newVal));
  } catch (err) {
    console.log(err);
  }
};
