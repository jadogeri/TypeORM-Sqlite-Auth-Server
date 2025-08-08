
import { AppDataSource } from "./src/data-source";
import express, { Response, Request } from "express";
import { corsOptions } from "./src/configs/cors"
import cors from "cors"
import { errorHandler} from "./src/middlewares/errorHandler"
import bodyParser from "body-parser";

AppDataSource.initialize()
    .then(async () => {
        const app = express();
        app.use(express.json());
        app.use(cors(corsOptions)) 

        app.use(bodyParser.json())

        // app.use(errorHandler)

        app.use("/api/users", require("./src/routes/userRoutes"));

        //app.use(errorHandler)


        app.get('/', (req: Request, res : Response) => {
        res.send({message:"Welcome to Server API"});
        });
                app.listen(3500, () => {
            console.log("Server running on port 3500");
        });
    })
    .catch((error) => console.log(error));
    