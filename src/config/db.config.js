import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Kết nối MongoDB thành công.");
  } catch (error) {
    console.log("Lỗi kết nối MongoDB", error);
    process.exit(1);
  }
};

export default connectDb;
