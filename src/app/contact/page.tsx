"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const reasons = [
  {
    number: "1",
    title: "Proven Track Record",
    description:
      "Decades of experience delivering complex megaprojects across multiple industries and markets.",
  },
  {
    number: "2",
    title: "Innovation-Driven",
    description:
      "Cutting-edge technology and AI-powered solutions for enhanced project outcomes and efficiency.",
  },
  {
    number: "3",
    title: "Global Expertise",
    description:
      "International presence with deep understanding of local markets and regulatory requirements.",
  },
];

const expectations = [
  "Response within 24 hours",
  "Initial consultation to understand your needs",
  "Tailored proposal and project roadmap",
  "Dedicated project management from start to finish",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you within 24 hours.");
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-crimson-100 text-crimson-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>GET IN TOUCH</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Let&apos;s Create the Intelligent{" "}
            <span className="text-crimson-600">Future Together</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your infrastructure vision into reality? Contact
            our expert team to discuss your complex initiatives and discover how
            we can deliver exceptional results.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <div className="bg-white border border-slate-200 shadow-xl rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-2">
                  <Send className="w-6 h-6 text-crimson-600" />
                  <h2 className="text-2xl font-bold text-slate-900">
                    Send Us a Message
                  </h2>
                </div>
                <p className="text-slate-600 mb-6">
                  Fill out the form below and we&apos;ll get back to you within 24
                  hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-crimson-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@company.com"
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-crimson-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your organization"
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-crimson-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+44 (0) 20 7123 4567"
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-crimson-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-crimson-500"
                    >
                      <option value="">Select a project type</option>
                      <option value="megaproject">
                        Turnkey Megaproject Management
                      </option>
                      <option value="design">
                        Design Coordination & Governance
                      </option>
                      <option value="nextgen">
                        Next Generation Project Management
                      </option>
                      <option value="qa">AI Augmented Quality Assurance</option>
                      <option value="commercial">
                        Commercial & Asset Management
                      </option>
                      <option value="risk">Risk & Security Management</option>
                      <option value="safety">Public Safety Systems</option>
                      <option value="cyber">Cyber Security & Surveillance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Please describe your project requirements, timeline, budget considerations, and any specific challenges you're facing..."
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-crimson-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-crimson-600 hover:bg-crimson-700 text-white py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg font-medium flex items-center justify-center gap-2"
                  >
                    Send Message
                    <span>&rarr;</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  Ready to discuss your next major infrastructure project? Our
                  expert team is here to help you navigate complex initiatives
                  and deliver transformative results.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-crimson-100 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-crimson-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Email Us</h3>
                      <p className="text-slate-600">info@crimson.industries</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-crimson-100 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-crimson-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Call Us</h3>
                      <p className="text-slate-600">+44 7736 11 22 11</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-crimson-100 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-crimson-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Our Location</h3>
                      <p className="text-slate-600">
                        Unit 5, Stroude Farm, Virginia Water, Surrey, GU25 4BY
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-crimson-100 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-crimson-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Office Hours</h3>
                      <p className="text-slate-600">
                        Monday - Friday: 9:00 AM - 6:00 PM GMT
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  What to Expect
                </h3>
                <div className="space-y-3">
                  {expectations.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-crimson-600 mt-2" />
                      <p className="text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Crimson Industries?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our unique approach combines proven methodologies with innovative
              technology to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-crimson-500 to-crimson-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">
                    {reason.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-crimson-600 to-crimson-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Project?
          </h2>
          <p className="text-lg text-crimson-100 mb-8">
            Let&apos;s discuss how our comprehensive service portfolio can drive
            your project to success. Our experts are ready to provide customized
            solutions tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <button className="bg-white text-crimson-700 hover:bg-crimson-50 px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl font-medium">
                Explore Our Services
              </button>
            </Link>
            <Link href="/about">
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-crimson-700 px-8 py-4 rounded-full transition-all duration-200 font-medium">
                Learn More About Crimson Industries
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
