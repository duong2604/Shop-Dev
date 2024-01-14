import mongoose from "mongoose";

class Database {
  constructor() {
    this.connect();
  }
  connect(type = "mongodb") {
    if (process.env.NODE_ENV === "development") {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    switch (type) {
      case "mongodb":
        mongoose
          .connect(process.env.MONGO_URI)
          .then(() => console.log(`Connected to mongodb`.cyan))
          .catch((err) => console.log(`Failed to connect to mongodb`.red, err));
        break;

      default:
        console.log(`Something went wrong from database connections!`.red);
        break;
    }
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongoDB = Database.getInstance();
export default instanceMongoDB;
