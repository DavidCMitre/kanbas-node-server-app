import express from 'express';
import "dotenv/config";
import Hello from "./hello.js"
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./Courses/routes.js";
import ModuleRoutes from "./Modules/routes.js"; 
const app = express()
app.use(cors());
app.use(express.json());


ModuleRoutes(app);
CourseRoutes(app);

Hello(app)
Lab5(app);
app.listen(process.env.PORT || 4000);