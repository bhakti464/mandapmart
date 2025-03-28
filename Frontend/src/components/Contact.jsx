import { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({}); //Store validation errors

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/; //Ensures exactly 10 digits
    return phoneRegex.test(phone);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    //Validate fields on change
    if (e.target.name === "email" && !validateEmail(e.target.value)) {
      setErrors({ ...errors, email: "Invalid email format (e.g., user@example.com)" });
    } else if (e.target.name === "phone" && !validatePhone(e.target.value)) {
      setErrors({ ...errors, phone: "Phone number must be 10 digits" });
    } else {
      setErrors({ ...errors, [e.target.name]: "" }); //Remove error if valid
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Check validations before sending request
    if (!validateEmail(formData.email)) {
      setErrors({ ...errors, email: "Invalid email format (e.g., user@example.com)" });
      return;
    }

    if (!validatePhone(formData.phone)) {
      setErrors({ ...errors, phone: "Phone number must be 10 digits" });
      return;
    }

    try {
      const response = await fetch("http://localhost:4001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      toast.success("Message sent successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      setErrors({}); //Clear errors after successful submission
    } catch (error) {
      toast.error(`${error.message}`, { position: "top-center" });
    }
  };

  return (
    <section className="w-full min-h-screen dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-7xl w-full mx-auto pt-[90px] md:px-20 px-4 lg:px-16 mb-5 dark:bg-gray-900 dark:text-white">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Contact <span className="text-pink-500"> Us</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
          Have any questions or remarks? Just write us a message!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Left Section - Contact Info */}
          <div className="bg-white p-8 md:col-span-1 dark:bg-gray-900 dark:text-white">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-6">Fill up the form and our team will get back to you within 24 hours.</p>
            <p className="flex items-center mb-4">📞 +0123 4567 8910</p>
            <p className="flex items-center mb-4">📧 hello@yourdomain.com</p>
            <p className="flex items-center">📍 102 Street 2714 Don</p>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white p-6 md:col-span-2 dark:bg-gray-900 dark:text-white">
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md dark:bg-gray-900 text-gray-900 dark:text-white"
                  placeholder="Your first name"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md dark:bg-gray-900 text-gray-900 dark:text-white"
                  placeholder="Your last name"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md dark:bg-gray-900 text-gray-900 dark:text-white ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="Your email"
                  required
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md dark:bg-gray-900 text-gray-900 dark:text-white ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                  placeholder="Your phone number"
                  required
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div className="col-span-2 flex flex-col">
                <label className="text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg mt-1 dark:bg-gray-900 text-gray-900 dark:text-white"
                  placeholder="Write your message..."
                  rows="4"
                  required
                ></textarea>
              </div>

              <div className="col-span-2 text-center">
                <button type="submit" className="bg-pink-500 hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
