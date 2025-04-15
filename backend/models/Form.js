import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    businessName: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String, required: true },
    service: { type: String, required: true },
  },
  { timestamps: true }
);

const Form = mongoose.model("Form", formSchema);
export default Form;
