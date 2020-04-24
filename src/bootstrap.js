import { DB } from "./db";

export async function bootstrap() {
  try {
    await DB.init();
  } catch (err) {
    console.log(err);
  }
}
