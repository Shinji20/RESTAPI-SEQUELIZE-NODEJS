import express from "express";

const app = express();

// Import routes
import projectsRoutes from "./routes/projects.routes.js";
import taskRoutes from "./routes/tasks.routes.js";


//middlewares
app.use(express.json());

app.use(projectsRoutes);
app.use(taskRoutes);

export default app;
