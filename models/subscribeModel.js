import mongoose from "mongoose";

const subscribeSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

export default mongoose.model("subscribes", subscribeSchema);