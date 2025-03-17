import Contact from "../model/contact.model.js"; // Ensure this path is correct

export const submitContactForm = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    if (!firstName || !lastName || !email || !phone || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const newContact = new Contact({ firstName, lastName, email, phone, message });
    await newContact.save();

    res.status(201).json({ success: true, message: "Message sent successfully!" });

  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};
