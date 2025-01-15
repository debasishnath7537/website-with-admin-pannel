import Contact from "../models/contact-models.js";

const getAllContacts = async (req, res) => {
  try {
    const contact = await Contact.find({});
    console.log(contact);
    if (!contact || contact.length === 0) {
      return res.status(404).json({ message: "No Contacts Found" });
    }
    return res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
};

export default getAllContacts;
