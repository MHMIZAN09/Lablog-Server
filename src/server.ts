import app from "./app";
import { config } from "./config";

const startServer = async () => {
  try {
    // Start the server
    app.listen(config.port, () => {
      console.log(`Server is running on http://localhost:${config.port}`);
    });
  } catch (error: any) {
    console.error("Error starting the server:", error.message);
    process.exit(1); // Exit the process with an error code
  }
};

startServer();
