import app from "./app";
import { config } from "./config";
import { prisma } from "./lib/prisma";

const startServer = async () => {
  try {
    // Start the server
    await prisma.$connect();
    console.log("Connected to the database successfully.");
    app.listen(config.port, () => {
      console.log(`Server is running on http://localhost:${config.port}`);
    });
  } catch (error: any) {
    console.error("Error starting the server:", error.message);
    await prisma.$disconnect();
    console.log("Disconnected from the database.");
    process.exit(1); // Exit the process with an error code
  }
};

startServer();
