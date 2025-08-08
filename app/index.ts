
import { AppDataSource } from "./src/data-source";
import express, { Response, Request } from "express";
import { corsOptions } from "./src/configs/cors"

AppDataSource.initialize()
    .then(async () => {
        const app = express();
        app.use(express.json());
        app.use(cors(corsOptions)) 


        app.listen(3000, () => {
            console.log("Server running on port 3000");
        });
    })
    .catch((error) => console.log(error));
    