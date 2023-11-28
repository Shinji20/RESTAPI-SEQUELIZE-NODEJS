import Sequelize from "sequelize";

export const sequelize = new Sequelize("projectdb", "postgres", "12345678", {
  host: "localhost",
  dialect: "postgres",
});
