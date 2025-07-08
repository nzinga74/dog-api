import express from "express";
import SwaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";
import "reflect-metadata";
import "./shared/container";
import { routes } from "routes";
import cors from "cors";
import { NextFunction, Request, Response } from "express";
import multer from "multer";

const app = express();

app.use(express.json());

app.use("/static", express.static(__dirname + "/tmp"));

app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true,
  })
);

app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerFile));
app.use(routes);

app.listen(3333, "0.0.0.0", () => {
  console.log("Server started on port 3333");
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({
      message: err.message,
      code: err.code,
    });
  }
  console.error(err);
  return res.status(500).json({
    message: "Internal server error",
  });
});
