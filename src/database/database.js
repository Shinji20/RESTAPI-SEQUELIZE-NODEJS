import Sequelize from "sequelize";

export const sequelize = new Sequelize("projectsdb", "postgres", "12345678", {
  host: "localhost",
  dialect: "postgres",
});
  