import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("forex.db");

export class DB {
  static init() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS forex (id INTEGER PRIMARY KEY NOT NULL UNIQUE, name TEXT NOT NULL, minLot DOUBLE  NOT NULL, ATR DOUBLE  NOT NULL, quote DOUBLE NOT NULL, contract INTEGER NOT NULL,  baseQuote DOUBLE  NOT NULL)",
          [],
          resolve,
          (_, error) => reject(error)
        );
      });
    });
  }

  static loadDataDB() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * from forex",
          [],
          (_, result) => resolve(result.rows._array),
          (_, error) => reject(error)
        );
      });
    });
  }

  static addItemDB({ name, minLot, ATR, quote, contract, baseQuote }) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO forex (name, minLot, ATR, quote, contract, baseQuote) VALUES (?, ?, ?, ?, ?, ?)`,
          [name, minLot, ATR, quote, contract, baseQuote],
          (_, result) => resolve(result.insertId),
          (_, error) => reject(error)
        );
      });
    });
  }

  static removeItemDB(id) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `DELETE FROM forex WHERE id = ?`,
          [id],
          resolve,
          (_, error) => reject(error)
        );
      });
    });
  }

  static modifiItemDB({ id, ATR, quote, baseQuote }) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `UPDATE forex SET ATR = ?, quote = ?,  baseQuote = ? WHERE id = ?`,
          [ATR, quote, baseQuote, id],
          resolve,
          (_, error) => reject(error)
        );
      });
    });
  }
}
