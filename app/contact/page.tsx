'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Page() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 space-y-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
          Get in Touch with Us
        </h1>
        <p className="text-lg md:text-xl text-zinc-800">
          We&apos;re here to help you every step of the way. Whether you have
          questions about our services, need guidance on documentation
          requirements, or want to place an order, our professional team is
          ready to assist you 24/7. Experience the reliability, speed, and
          professionalism that thousands of satisfied customers trust.
        </p>
        <p className="text-base md:text-lg text-zinc-700">
          Your inquiry matters to us. We respond to all messages within 24–48
          hours, ensuring you receive the support and information you need to
          move forward with confidence.
        </p>
      </motion.section>

      {/* Contact Methods Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
            Contact Methods
          </h2>
          <p className="text-lg text-zinc-800">
            Choose the communication method that works best for you. All
            channels are secure, confidential, and monitored by our expert team
            around the clock.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-teal-600">
                  ✉️ Email Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Send us a detailed message via email for comprehensive
                  responses to complex inquiries. Our team reviews every email
                  carefully and provides thorough, professional guidance
                  tailored to your specific needs.
                </p>
                <div>
                  <p className="font-semibold text-zinc-900">Email Address:</p>
                  <a
                    href="mailto:contact@topdocs.eu"
                    className="text-teal-600"
                  >
                    contact@topdocs.eu
                  </a>
                </div>
                <p className="mt-4 text-sm text-zinc-700">
                  <strong>Response Time:</strong> Within 24–48 hours, often
                  sooner
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-teal-600">💬 Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Get instant answers to your questions through our secure live
                  chat system. Available 24/7, our chat support provides
                  real-time assistance for quick queries and immediate guidance
                  on our services.
                </p>
                <div className="mt-4">
                  <Button variant="outline" className="w-full">
                    Start Live Chat
                  </Button>
                </div>
                <p className="mt-4 text-sm text-zinc-700">
                  <strong>Response Time:</strong> Instant, real-time
                  conversation
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Send Us a Message
          </h2>
          <p className="text-lg text-zinc-800">
            Fill out the form below and our team will get back to you promptly.
            All information you provide is kept strictly confidential and
            secure.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="name" className="text-zinc-900">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Enter your full name"
                      className="mt-2"
                    />
                    <p className="mt-1 text-xs text-zinc-600">
                      Please provide your complete legal name
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-zinc-900">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      className="mt-2"
                    />
                    <p className="mt-1 text-xs text-zinc-600">
                      We&apos;ll use this to respond to your inquiry
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="phone" className="text-zinc-900">
                      Phone Number (Optional)
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="mt-2"
                    />
                    <p className="mt-1 text-xs text-zinc-600">
                      Include country code for international numbers
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-zinc-900">
                      Subject <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      placeholder="What is your inquiry about?"
                      className="mt-2"
                    />
                    <p className="mt-1 text-xs text-zinc-600">
                      Brief description of your question or request
                    </p>
                  </div>
                </div>

                <div>
                  <Label htmlFor="service" className="text-zinc-900">
                    Service of Interest <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="service"
                    name="service"
                    required
                    placeholder="e.g., Passport, Driver's License, ID Card, Residence Permit"
                    className="mt-2"
                  />
                  <p className="mt-1 text-xs text-zinc-600">
                    Help us direct your inquiry to the right specialist
                  </p>
                </div>

                <div>
                  <Label htmlFor="country" className="text-zinc-900">
                    European Country (Optional)
                  </Label>
                  <select
                    id="country"
                    name="country"
                    className="mt-2 flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a country</option>
                    <option value="France">🇫🇷 France</option>
                    <option value="Italy">🇮🇹 Italy</option>
                    <option value="Netherlands">🇳🇱 Netherlands</option>
                    <option value="Belgium">🇧🇪 Belgium</option>
                    <option value="Austria">🇦🇹 Austria</option>
                    <option value="Switzerland">🇨🇭 Switzerland</option>
                    <option value="Portugal">🇵🇹 Portugal</option>
                    <option value="Greece">🇬🇷 Greece</option>
                    <option value="Poland">🇵🇱 Poland</option>
                    <option value="Sweden">🇸🇪 Sweden</option>
                    <option value="Denmark">🇩🇰 Denmark</option>
                    <option value="Norway">🇳🇴 Norway</option>
                    <option value="Finland">🇫🇮 Finland</option>
                    <option value="Ireland">🇮🇪 Ireland</option>
                    <option value="Czech Republic">🇨🇿 Czech Republic</option>
                    <option value="Hungary">🇭🇺 Hungary</option>
                    <option value="Romania">🇷🇴 Romania</option>
                    <option value="Bulgaria">🇧🇬 Bulgaria</option>
                    <option value="Croatia">🇭🇷 Croatia</option>
                    <option value="Slovakia">🇸🇰 Slovakia</option>
                    <option value="Slovenia">🇸🇮 Slovenia</option>
                    <option value="Lithuania">🇱🇹 Lithuania</option>
                    <option value="Latvia">🇱🇻 Latvia</option>
                    <option value="Estonia">🇪🇪 Estonia</option>
                    <option value="Luxembourg">🇱🇺 Luxembourg</option>
                    <option value="Malta">🇲🇹 Malta</option>
                    <option value="Cyprus">🇨🇾 Cyprus</option>
                  </select>
                  <p className="mt-1 text-xs text-zinc-600">
                    Select your European country (excluding Germany, UK, and Spain)
                  </p>
                </div>

                <div>
                  <Label htmlFor="message" className="text-zinc-900">
                    Your Message <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Please provide details about your inquiry, questions, or how we can assist you. Be as specific as possible so we can provide the most helpful response."
                    className="mt-2 min-h-[150px]"
                  />
                  <p className="mt-1 text-xs text-zinc-600">
                    The more details you provide, the better we can assist you
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="mt-1"
                  />
                  <Label htmlFor="privacy" className="text-sm text-zinc-800">
                    I agree to the privacy policy and understand that my
                    information will be kept confidential and used solely for
                    responding to my inquiry.{' '}
                    <span className="text-red-500">*</span>
                  </Label>
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Send Message
                </Button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-teal-50"
                  >
                    <p className="text-sm font-semibold text-teal-900">
                      ✓ Message Sent Successfully!
                    </p>
                    <p className="text-sm text-teal-800">
                      Thank you for contacting us. We&apos;ve received your
                      message and will respond within 24–48 hours. For urgent
                      matters, please call or use WhatsApp for immediate
                      assistance.
                    </p>
                  </motion.div>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Why Contact Us Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Why Contact Us?
          </h2>
          <p className="text-lg text-zinc-800">
            Our team is dedicated to providing exceptional service and support.
            Here&apos;s what you can expect when you reach out to us.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle className="text-teal-600">
                  ⚡ Rapid Communication
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Time is of the essence. We prioritize prompt replies, aiming to address all inquiries
                  within 24–48 hours. For critical needs, use our form for immediate attention.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle className="text-teal-600">
                  🎯 Professional Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Benefit from decades of industry expertise. Our specialists deliver accurate,
                  tailored advice to help you navigate requirements and make confident decisions.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle className="text-teal-600">
                  🔒 Privacy Guaranteed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Your privacy is our priority. All communications are encrypted
                  and confidential. We follow strict data protection protocols
                  and never share your information with third parties without
                  your explicit consent.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle className="text-teal-600">
                  🌍 24/7 Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our support team is available around the clock, seven days a
                  week. No matter your time zone or schedule, we&apos;re here to
                  help whenever you need us.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle className="text-teal-600">
                  💼 Professional Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Every inquiry is handled with professionalism and care. We
                  take your questions seriously and provide detailed, helpful
                  responses that address your specific needs and concerns.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle className="text-teal-600">
                  📋 Comprehensive Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  From initial inquiries to order placement and follow-up
                  questions, we provide end-to-end support throughout your
                  entire journey. Our goal is your complete satisfaction.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Security & Confidentiality Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="space-y-6"
      >
        <Card className="bg-gradient-to-r from-teal-50 to-teal-100/50">
          <CardContent className="pt-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
              Your Privacy & Security Matters
            </h2>
            <div className="space-y-4 text-zinc-800">
              <p>
                <strong>Confidentiality Guaranteed:</strong> All information you
                share with us is treated with the utmost confidentiality. We
                understand the sensitive nature of document services and take
                every precaution to protect your personal information.
              </p>
              <p>
                <strong>Secure Communication:</strong> All our communication
                channels, including email, phone, and online forms, use
                industry-standard encryption to ensure your data remains secure
                during transmission.
              </p>
              <p>
                <strong>Data Protection:</strong> We follow strict data
                protection protocols and comply with international privacy
                standards. Your information is stored securely and accessed only
                by authorized personnel who need it to assist you.
              </p>
              <p>
                <strong>No Third-Party Sharing:</strong> We never sell, rent, or
                share your personal information with third parties without your
                explicit consent. Your data is used solely to provide you with
                the services and support you request.
              </p>
              <p>
                <strong>Right to Privacy:</strong> You have the right to request
                access to, correction of, or deletion of your personal
                information at any time. Simply contact us, and we&apos;ll
                promptly address your request.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="text-center space-y-6"
      >
        <div className="rounded-xl border border-zinc-200">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-zinc-800">
            Don&apos;t hesitate to reach out. Whether you have a quick question
            or need comprehensive guidance, we&apos;re here to help. Contact us
            today and experience the professional, reliable service that sets us
            apart.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:contact@topdocs.eu">
              <Button variant="outline" size="lg">
                Send Email
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg">Contact Form</Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-zinc-600">
            Available 24/7 • Secure & Confidential • Quick Response Guaranteed
          </p>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-zinc-800">
            Quick answers to common questions about contacting us and our
            services.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle>How quickly will I receive a response?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We aim to respond to all inquiries within 24–48 hours. Email
                  inquiries typically receive responses within 24 hours, often
                  sooner.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle>
                  What information should I include in my message?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Please include your name, contact information, the service
                  you&apos;re interested in, and a detailed description of your
                  question or request. The more information you provide, the
                  better we can assist you.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle>
                  Is my information secure when I contact you?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Absolutely. We use industry-standard encryption for all
                  communications and follow strict data protection protocols.
                  Your information is kept confidential and never shared with
                  third parties.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle>Can I contact you about existing orders?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Yes, you can contact us about any aspect of your order,
                  including status updates, modifications, or questions. Please
                  include your order reference number for faster assistance.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle>
                  Do you offer support in multiple languages?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Yes, our multilingual support team can assist you in several
                  languages. Please specify your preferred language when
                  contacting us, and we&apos;ll ensure you&apos;re connected
                  with a team member who can assist you effectively.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle>What if I have an urgent inquiry?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  For urgent matters, please use our contact form and mark your
                  inquiry as urgent. We prioritize urgent requests and aim to
                  respond as quickly as possible, typically within a few hours.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
