"use client"

import { ArrowRight, Building2, Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Submit to Netlify Forms
      const formElement = e.target as HTMLFormElement
      const formDataToSubmit = new FormData(formElement)

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(Array.from(formDataToSubmit.entries()) as [string, string][]).toString()
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          projectType: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-slate-200/60 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <Link href="/" className="flex items-center space-x-3 py-2">
              <div className="w-16 h-12 bg-gradient-to-br from-crimson-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">WCcc</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-slate-800">Waterfall Consult</h1>
                <p className="text-sm text-slate-600">Programme Management</p>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-700 hover:text-crimson-600 transition-all duration-200 font-medium px-4 py-2 rounded-full hover:bg-slate-50">Home</Link>
              <Link href="/industries" className="text-slate-700 hover:text-crimson-600 transition-all duration-200 font-medium px-4 py-2 rounded-full hover:bg-slate-50">Industries</Link>
              <Link href="/services" className="text-slate-700 hover:text-crimson-600 transition-all duration-200 font-medium px-4 py-2 rounded-full hover:bg-slate-50">Services</Link>
              <Link href="/governance" className="text-slate-700 hover:text-crimson-600 transition-all duration-200 font-medium px-4 py-2 rounded-full hover:bg-slate-50">Governance</Link>
              <Link href="/about" className="text-slate-700 hover:text-crimson-600 transition-all duration-200 font-medium px-4 py-2 rounded-full hover:bg-slate-50">About Us</Link>
              <span className="text-crimson-600 font-medium px-4 py-2 bg-crimson-50 rounded-full">Contact Us</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-crimson-100 text-crimson-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>GET IN TOUCH</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Let's Create the Intelligent
            <span className="text-crimson-600"> Future Together</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your infrastructure vision into reality? Contact our expert team to discuss your complex initiatives and discover how we can deliver exceptional results.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Contact Form */}
            <div>
              <Card className="p-8 bg-white border-slate-200 shadow-xl rounded-2xl">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold text-slate-900 flex items-center">
                    <Send className="h-6 w-6 mr-3 text-crimson-600" />
                    Send Us a Message
                  </CardTitle>
                  <p className="text-slate-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>

                <CardContent>
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-crimson-50 border border-crimson-200 rounded-lg flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-crimson-600" />
                      <p className="text-crimson-700 font-medium">Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <p className="text-red-700 font-medium">Sorry, there was an error sending your message. Please try again or contact us directly at uk@waterfallconsult.com</p>
                    </div>
                  )}

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    {/* Hidden field for Netlify Forms */}
                    <input type="hidden" name="form-name" value="contact" />

                    {/* Honeypot field for spam protection */}
                    <div style={{ display: 'none' }}>
                      <label htmlFor="bot-field">Don't fill this out if you're human:</label>
                      <input name="bot-field" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-crimson-500 ${
                            errors.name ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-slate-50'
                          }`}
                          placeholder="Your full name"
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-crimson-500 ${
                            errors.email ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-slate-50'
                          }`}
                          placeholder="your.email@company.com"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                          Company/Organization
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-crimson-500"
                          placeholder="Your organization"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-crimson-500"
                          placeholder="+44 (0) 20 7123 4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-crimson-500"
                      >
                        <option value="">Select a project type</option>
                        <option value="megaproject">Turnkey Megaproject Management</option>
                        <option value="design">Design Coordination & Governance</option>
                        <option value="nextgen">Next Generation Project Management</option>
                        <option value="qa">AI Augmented Quality Assurance</option>
                        <option value="commercial">Commercial & Asset Management</option>
                        <option value="risk">Risk & Security Management</option>
                        <option value="safety">Public Safety Systems</option>
                        <option value="cyber">Cyber Security & Surveillance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-crimson-500 resize-vertical ${
                          errors.message ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-slate-50'
                        }`}
                        placeholder="Please describe your project requirements, timeline, budget considerations, and any specific challenges you're facing..."
                      />
                      {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-crimson-600 hover:bg-crimson-700 text-white px-8 py-4 rounded-full text-lg transition-all duration-200 shadow-md hover:shadow-lg font-medium group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span className="group-hover:pr-2 transition-all duration-200">Send Message</span>
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
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
