"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CountrySelector } from "@/components/country-selector";

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

export default function WorkPermitPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 space-y-16">
      {/* Hero Section */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
          Buy Work Permit Online
        </h1>
        <p className="text-lg md:text-xl text-zinc-700 max-w-3xl mx-auto leading-relaxed">
          Welcome to our website, where we aim to assist individuals in obtaining 
          a work permit online. We understand that the process can be complex and 
          time-consuming, which is why we have created this resource to guide you 
          through the steps.
        </p>
        <p className="text-base md:text-lg text-zinc-700 max-w-3xl mx-auto">
          Whether you are a student looking for work experience, or a skilled worker 
          seeking employment opportunities, we can help you navigate the process and 
          increase your chances of success.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link href="/contact">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link href="/how-to-order">
            <Button variant="outline" size="lg">
              Learn How to Order
            </Button>
          </Link>
        </div>
        <CountrySelector />
      </motion.section>

      {/* Image Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="max-w-4xl mx-auto"
      >
        <div className="relative rounded-xl overflow-hidden">
          <Image
            src="https://onlinelegitdocuments.com/wp-content/uploads/2022/12/online-22.jpg"
            alt="Work Permit Services"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            unoptimized
          />
        </div>
      </motion.section>

      {/* Eligibility Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold">
          Eligibility
        </motion.h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg text-zinc-700 leading-relaxed mb-6">
              To be eligible for a work permit, you must meet the following requirements:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 mb-1">
                    Valid Job Offer
                  </h4>
                  <p className="text-zinc-700">
                    You must have a valid job offer from an employer.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 mb-1">
                    Current Permit Status
                  </h4>
                  <p className="text-zinc-700">
                    You must have a valid study or work permit, if you are currently 
                    in the country application.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 mb-1">
                    Proof of Departure
                  </h4>
                  <p className="text-zinc-700">
                    You must be able to prove that you will leave the Country at the 
                    end of your work permit.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 mb-1">
                    No Inadmissibility Issues
                  </h4>
                  <p className="text-zinc-700">
                    You must not be inadmissible for any criminal record, security or 
                    health reasons.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-amber-900 font-medium">
                ⚠️ Please note: The eligibility requirements may change based on the 
                type of work permit you are applying for, and the immigration laws and 
                regulations in effect at the time of your application.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Application Process Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold">
          Application Process
        </motion.h2>
        <div className="space-y-6">
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold shrink-0">
                    1
                  </div>
                  <CardTitle>Gather the Required Documents</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 leading-relaxed mb-4">
                  Before starting your application, ensure you have all the necessary 
                  documents ready:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>A valid job offer from an employer</li>
                  <li>
                    A valid study or work permit, if you are currently in the Country
                  </li>
                  <li>
                    Proof of your ability to support yourself during your stay in the 
                    Country
                  </li>
                  <li>Proof of your ties to your home country</li>
                  <li>A police certificate from your home country</li>
                  <li>A medical exam, if required</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold shrink-0">
                    2
                  </div>
                  <CardTitle>Fill Out the Application Form</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 leading-relaxed mb-4">
                  You can find the application form on our website or speak to our 
                  agents for the application process.
                </p>
                <p className="text-zinc-700 leading-relaxed">
                  Make sure to fill out the form completely and accurately. Any errors 
                  or missing information may delay the processing of your application.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold shrink-0">
                    3
                  </div>
                  <CardTitle>Pay the Application Fee</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 leading-relaxed">
                  The fee can be paid online using our payment options. Speak to an 
                  agent for assistance with payment processing or if you have questions 
                  about the fee structure.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold shrink-0">
                    4
                  </div>
                  <CardTitle>Submit the Application</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 leading-relaxed mb-4">
                  You can submit your application through multiple channels:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>Online through our forms</li>
                  <li>By mail</li>
                  <li>Through our contact form</li>
                </ul>
                <p className="text-zinc-700 leading-relaxed mt-4">
                  Choose the method that is most convenient for you. Our team is 
                  available to assist you with the submission process.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold shrink-0">
                    5
                  </div>
                  <CardTitle>Wait for Your Document to be Processed</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 leading-relaxed">
                  You will be notified of the decision by mail or email 
                  number. Please note that processing times may vary depending on the 
                  type of work permit you are applying for and the immigration laws and 
                  regulations in effect at the time of your application.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Processing Time Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold">
          Processing Time
        </motion.h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg text-zinc-700 leading-relaxed mb-4">
              The processing time for a work permit application is typically between 
              <strong> 1 to 2 weeks</strong>. However, it may take longer depending on:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-zinc-700 mb-4">
              <li>The type of work permit you are applying for</li>
              <li>The volume of applications received</li>
              <li>The immigration laws and regulations in effect at the time of your 
                application</li>
            </ul>
            <p className="text-zinc-700 leading-relaxed">
              We recommend submitting your application well in advance of your intended 
              start date to allow for any potential delays in processing. Our team will 
              keep you informed throughout the process and notify you as soon as a 
              decision has been made.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold">
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4">
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle>How do I renew my work permit?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 leading-relaxed">
                  You can renew your work permit by following the same application 
                  process as for the initial permit. Make sure to submit your renewal 
                  application before your current permit expires to avoid any gaps in 
                  your authorization to work. Contact our team for assistance with the 
                  renewal process.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle>
                  What happens if my work permit application is denied?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 leading-relaxed mb-4">
                  If your work permit application is denied, you will receive a notice 
                  explaining the reasons for the denial. Common reasons for denial include:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li>Incomplete or inaccurate application</li>
                  <li>Failure to meet eligibility requirements</li>
                  <li>Missing required documents</li>
                  <li>Inadmissibility issues</li>
                </ul>
                <p className="text-zinc-700 leading-relaxed mt-4">
                  You may be able to appeal the decision or reapply with additional 
                  documentation. Our team can help you understand the denial reasons 
                  and guide you on next steps.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle>
                  Can I work while my work permit application is being processed?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 leading-relaxed">
                  Generally, you cannot work while your work permit application is 
                  being processed unless you have maintained status or are eligible for 
                  a work permit extension. If you are currently in the country on a 
                  valid study or work permit, you may be able to continue working under 
                  the conditions of your current permit. It is important to check the 
                  specific regulations that apply to your situation. Contact our team 
                  for clarification on your work authorization status.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle>How long is a work permit valid for?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700 leading-relaxed">
                  The validity period of a work permit varies depending on the type 
                  of permit and the terms of your employment. Work permits can be valid 
                  for periods ranging from a few months to several years. The duration 
                  is typically determined by:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700 mt-4">
                  <li>The type of work permit you hold</li>
                  <li>The duration of your employment contract</li>
                  <li>The immigration regulations in effect</li>
                  <li>Your specific circumstances</li>
      </ul>
                <p className="text-zinc-700 leading-relaxed mt-4">
                  Your work permit will indicate its expiration date. Make sure to 
                  apply for renewal well before it expires to maintain your work 
                  authorization.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <Card className="bg-amber-50 border-amber-200">
          <CardContent className="pt-6">
            <p className="text-amber-900 font-medium">
              ⚠️ Please note: The Frequently Asked Questions may change based on the 
              type of work permit you are applying for, and the immigration laws and 
              regulations in effect at the time of application.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold text-center">
          Contact Us
        </motion.h2>
        <p className="text-center text-lg text-zinc-700 max-w-3xl mx-auto">
          Have questions about work permit applications? Need assistance with the 
          process? Contact our expert team for personalized guidance and support.
        </p>
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you with your work permit application..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    {submitted ? "Message Sent!" : "Send Message"}
                  </Button>
                  {submitted && (
                    <p className="text-sm text-teal-600 text-center">
                      Thank you! We&apos;ll get back to you soon.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Other Ways to Reach Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-zinc-900 mb-2">📧 Email</h4>
                  <a
                    href="mailto:contact@topdocs.com"
                    className="text-teal-600 hover:text-teal-700 transition-colors"
                  >
                    contact@topdocs.com
                  </a>
                  <p className="text-sm text-zinc-600 mt-1">
                    We respond within 24-48 hours
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 mb-2">📝 Contact Form</h4>
                  <Link
                    href="/contact"
                    className="text-teal-600 hover:text-teal-700 transition-colors"
                  >
                    Fill out our contact form
                  </Link>
                  <p className="text-sm text-zinc-600 mt-1">
                    Quick and easy way to reach us
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 mb-2">📧 Email</h4>
                  <a
                    href="mailto:contact@topdocs.com"
                    className="text-teal-600 hover:text-teal-700 transition-colors"
                  >
                    contact@topdocs.com
                  </a>
                  <p className="text-sm text-zinc-600 mt-1">
                    We respond within 24-48 hours
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-200">
                  <h4 className="font-semibold text-zinc-900 mb-2">🕐 Business Hours</h4>
                  <p className="text-zinc-700">
                    Our support team is available 24/7 to assist you with any 
                    questions about work permit applications, requirements, or the 
                    application process.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="bg-teal-600 text-white rounded-xl p-8 md:p-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Ready to Apply for Your Work Permit?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Get started today with our expert guidance. We&apos;re here to help you 
          navigate the application process and ensure you have all the information 
          you need.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/how-to-order">
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-zinc-100 font-semibold"
            >
              Learn How to Order
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              Contact Support
            </Button>
          </Link>
      </div>
      </motion.section>

      {/* Keywords Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="border-t border-zinc-200 pt-12"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-2xl font-semibold mb-6 text-center"
        >
          Popular Search Terms
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div variants={fadeInUp}>
            <h3 className="font-semibold text-zinc-900 mb-3">Work Permits</h3>
            <ul className="space-y-1 text-sm text-zinc-600">
              <li>• work permit</li>
              <li>• work visa</li>
              <li>• employment authorization</li>
              <li>• work authorization</li>
              <li>• temporary work permit</li>
              <li>• skilled worker permit</li>
              <li>• seasonal work permit</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
}