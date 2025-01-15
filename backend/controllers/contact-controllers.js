import Contact from "../models/contact-models.js";

const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    return res.status(200).json({ message: "message sent successfully" });
  } catch (error) {
    // console.error("Error saving contact form:", error); // Log the error
    return res
      .status(500)
      .json({ message: "message not delivered", error: error.message });
  }
};

export default contactForm;
