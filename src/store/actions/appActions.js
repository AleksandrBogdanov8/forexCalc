import {
  LOAD_BALANCE,
  CHANGE_BALANCE,
  LOAD_DATA,
  ADD_ITEM,
  REMOVE_ITEM,
  CHANGE_ITEM,
} from "../types";
import { AsyncStorage } from "react-native";
import { saveAsync } from "../../saveStorage";
import { DB } from "../../db";

export const loadBal = () => {
  return async (dispatch) => {
    const balance = await AsyncStorage.getItem("@MyStore:balance");

    dispatch({
      type: LOAD_BALANCE,
      payload: balance,
    });
  };
};

export const chanheBal = (val) => {
  saveAsync(val);

  return {
    type: CHANGE_BALANCE,
    payload: val,
  };
};

export const loadData = () => {
  return async (dispatch) => {
    const dataApp = await DB.loadDataDB();

    dispatch({
      type: LOAD_DATA,
      payload: dataApp,
    });
  };
};

export const addItem = (item) => {
  return async (dispatch) => {
    const id = await DB.addItemDB(item);

    item.id = id;

    dispatch({
      type: ADD_ITEM,
      payload: item,
    });
  };
};

export const removeItem = (id) => {
  return async (dispatch) => {
    await DB.removeItemDB(id);

    dispatch({
      type: REMOVE_ITEM,
      payload: id,
    });
  };
};

export const modifiItem = (modItem) => {
  return async (dispatch) => {
    await DB.modifiItemDB(modItem);

    dispatch({
      type: CHANGE_ITEM,
      payload: modItem,
    });
  };
};
