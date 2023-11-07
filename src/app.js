import express from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "../swaggerConfig";
import usersRoutes from "./routes/users.routes";

const app= express();

//swagger
app.use('/api/users/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Settings
app.set('port',4000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());


//Routes
app.use("/api/users", usersRoutes);


export default app;