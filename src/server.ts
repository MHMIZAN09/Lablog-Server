import app from "./app";

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error: any) {
    console.error("Error starting the server:", error.message);
    process.exit(1); // Exit the process with an error code
  }
};

startServer();
