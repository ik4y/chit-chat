#!/usr/bin/env node
import { app } from "./src/app";
import http from "http";
import process from "process";
import { config } from "./src/config/config";
import { CONFIG } from "./src/types";

const port = normalizePort(config.PORT || 3000);
app.set("port", port);

const server = http.createServer(app);
validateEnvVariables();
server.listen(port, () =>
  console.log(`Server process ${process.pid} started at port ${port}`)
);

server.on("error", onError);

process.on("unhandledRejection", (err) => {
  console.error("Uncaught Exception Occured: ", err);
  server.close(() => {
    console.log("Http server closed");
    process.exit(1);
  });
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  server.close(() => {
    console.log("Http server closed");
    process.exit(1);
  });
  process.exit(1); // Exit the process with a failure code
});

process.on("SIGINT", () => gracefulShutDown("SIGINT"));
process.on("SIGTERM", () => gracefulShutDown("SIGTERM"));

function normalizePort(serverPort: number | string): number | string {
  if (typeof serverPort === "string") {
    return serverPort;
  }
  return port;
}

// check server is started or not and server permissions
function onError(error: any) {
  console.log(error);
  const bind = typeof port === "string" ? `pipe ${port}` : `port ${port}`;

  switch (error.code) {
    case "EACCESS":
      console.error(`${bind} requires elevated privilleges`);
      closeServer();
    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      closeServer();
  }
}

function gracefulShutDown(signal: string) {
  console.log(`Received ${signal} signal: Closing the server...`);
  closeServer();

  setTimeout(() => {
    server.close(() => {
      console.log("Forcefully shutting down the server...");
      process.exit(1);
    });
  }, 2000);
}

function closeServer() {
  server.close(() => {
    console.log("Server Closed with exit code 1");
  });
}

function validateEnvVariables() {
  Object.keys(config).forEach((key) => {
    const configKey = config[key as keyof CONFIG];
    if (!configKey || configKey === "undefined") {
      console.error(`Missing Env Variable ${key}`);
      process.exit(1);
    }
  });
}
