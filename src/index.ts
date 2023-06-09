import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
import cors from "cors";
import bodyParser from "body-parser";
import express from 'express';
AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()

    app.use(bodyParser.json())

    app.use(cors({
        origin: "http://localhost:3000",
        optionsSuccessStatus: 200
    }))
    

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next)
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

            } else if (result !== null && result !== undefined) {
                res.json(result)
            }
        })
    })

    // setup express app here
    // ...

    // start express server
    app.listen(3001)

    // insert new users for test
    
    console.log("Express server has started on port 3001. Open http://localhost:3001 to see results")

}).catch(error => console.log(error))
