import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";
import bgImage from "../../assets/backapil2.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  const contactInfo = [
    { icon: Phone, label: " Phone Number", value: "+977 986983456" },
    { icon: Mail, label: "Email", value: "lamsalapil@gmail.com" },
    { icon: MapPin, label: "Address", value: "Shuklagandaki, Tanahun, Nepal" },
  ];

  const socialLinks = [Facebook, Instagram, Twitter];

  return (
    <div className="min-h-screen bg-white ">
      <section
        className="relative h-96 flex items-center justify-center text-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Semi-transparent Black Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Content */}
        <div
          className="relative z-20 max-w-3xl px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
            Connect With Us
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-white mb-2">
            We are a team of innovators and problem-solvers dedicated to
            crafting digital solutions that truly make a difference. By blending
            creativity with technology, we design and develop websites, mobile
            apps, and custom software that help businesses grow, connect, and
            stand out. Collaboration, quality, and passion drive everything we
            do, ensuring every project transforms ideas into impactful user
            experiences.
          </p>
        </div>
      </section>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0B1F3A] mt-15 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600">
            We'd love to hear from you. Fill out the form and we’ll get back
            soon.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-gray-50 p-8 rounded-2xl shadow">
            <h2 className="text-2xl font-semibold text-[#0B1F3A] mb-6">
              Send a Message
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-400 focus:outline-none"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-gray-400 focus:outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-gray-400 focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-gray-400 focus:outline-none"
              />
            </div>

            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              className="w-full mt-6 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:outline-none resize-none"
            ></textarea>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="mt-6 w-full md:w-auto px-6 py-3 bg-[#FFD700] text-[#0B1F3A] font-semibold rounded-lg hover:bg-yellow-500 transition disabled:opacity-50"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send size={18} className="inline mr-2" /> Send Message
                </>
              )}
            </button>

            {submitStatus && (
              <div
                className={`mt-4 p-3 rounded-lg text-sm ${
                  submitStatus === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {submitStatus === "success"
                  ? "Message sent successfully!"
                  : "Please fill all required fields."}
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="bg-[#0B1F3A] text-white p-8 rounded-2xl shadow space-y-7">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center space-x-3">
                  <Icon size={20} className="text-white" />
                  <div>
                    <p className="text-sm opacity-80">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              );
            })}

            <div className="mt-8">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((Icon, i) => (
                  <button
                    key={i}
                    className="p-2 bg-white/10 rounded-lg hover:bg-[#FFD700] hover:text-[#0B1F3A] transition"
                  >
                    <Icon size={20} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Call to Action Section */}
      <div className="bg-blue-50 py-20 mt-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Have a project idea? Whether it’s a website, app, or custom
            solution, we are ready to bring your vision to life. Get in touch
            today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
         
            <button
              onClick={() =>
                (window.location.href =
                  "mailto:support@yourcompany.com?subject=New Project Inquiry")
              }
              className="bg-[#FFD700] text-[#001F3D] font-semibold px-8 py-4 rounded-2xl hover:bg-yellow-400 transition-all duration-200 transform hover:scale-105"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
