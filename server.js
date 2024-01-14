import app from "./src/app.js";

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.rainbow);
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log(`>>> Server:::exited <<<`.cyan);
  });
});
