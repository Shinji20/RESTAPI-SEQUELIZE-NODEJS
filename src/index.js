import app from "./app.js";
import { sequelize } from "./database/database.js";

async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(4000);
    console.log("listening on port", 4000);
  } catch (error) {
    console.error("unable to connect to database", error);
  }
}

main();
