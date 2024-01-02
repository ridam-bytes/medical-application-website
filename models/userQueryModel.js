import mongoose from "mongoose";

const userQuerySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    mail: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    status: {
        type: String,
        required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("userQueries", userQuerySchema);
