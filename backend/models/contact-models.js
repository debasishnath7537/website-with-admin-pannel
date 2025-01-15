import mongoose from "mongoose";

// Define the Contact schema
const contactSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      // simple regex to validate email
    },
    // phone: {
    //   type: String,
    //   required: [true, "Phone number is required"],
    // },
    message: {
      type: String,
      required: [true, "Message is required"],
      minlength: [10, "Message must be at least 10 characters"],
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Export the Contact model
export default mongoose.model("Contact", contactSchema);
