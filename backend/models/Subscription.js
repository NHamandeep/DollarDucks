import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String },
  subscribedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Subscription", SubscriptionSchema);
