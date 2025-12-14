"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

export default function HowToOrderPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 space-y-16">
      {/* Header */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
          How to Order
        </h1>
        <p className="text-lg md:text-xl text-zinc-700 max-w-3xl mx-auto">
          Complete guide to ordering any document from Top Docs Org. 
          Understand the full process from submission to delivery.
        </p>
      </motion.section>

      {/* Purpose Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-semibold">Purpose of This Page</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg text-zinc-700 leading-relaxed mb-4">
              This page explains the complete ordering process for any document 
              available on our site, including:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-zinc-700">
              <li>Passports (American, European, Australian, UK, Asian)</li>
              <li>Driver&apos;s Licenses</li>
              <li>ID Cards</li>
              <li>Visas</li>
              <li>Residence Permits</li>
              <li>Work Permits</li>
              <li>And other official documents</li>
            </ul>
            <p className="text-lg text-zinc-700 leading-relaxed mt-4">
              We help you understand step-by-step what is required and how our 
              service works, ensuring a smooth and transparent process from start 
              to finish.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Step 1 */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xl shrink-0">
            1
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold">Submit Order Details</h2>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Provide Your Personal Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-700 mb-4">
              The first step in ordering any document is to provide all required 
              personal information for your chosen document type. This includes:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-zinc-700 mb-4">
              <li><strong>Full Name:</strong> As it should appear on the document</li>
              <li><strong>Date of Birth:</strong> Exact date of birth</li>
              <li><strong>Photo:</strong> Recent passport-style photograph meeting official specifications</li>
              <li><strong>Signature:</strong> Your signature as it should appear on the document</li>
              <li><strong>Address:</strong> Current residential address</li>
              <li><strong>Additional Details:</strong> Any other information specific to your document type</li>
            </ul>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
              <p className="text-amber-900 font-medium">
                ⚠️ Important: Accuracy is crucial. Incorrect information can delay 
                production and may require additional fees for corrections. Please 
                double-check all details before submission.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Step 2 */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xl shrink-0">
            2
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold">Payment / Deposit</h2>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Secure Payment Processing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-700 mb-4">
              After submitting your order details, you&apos;ll proceed to payment. 
              We offer flexible payment options:
            </p>
            <div className="grid gap-4 md:grid-cols-2 mb-4">
              <div className="bg-zinc-50 rounded-lg p-4">
                <h4 className="font-semibold text-zinc-900 mb-2">Full Payment</h4>
                <p className="text-zinc-700 text-sm">
                  Pay the complete amount upfront for faster processing
                </p>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4">
                <h4 className="font-semibold text-zinc-900 mb-2">Partial Deposit</h4>
                <p className="text-zinc-700 text-sm">
                  Pay 50% deposit (common for certain documents) to start production
                </p>
              </div>
            </div>
            <p className="text-zinc-700 mb-2 font-medium">Accepted Payment Methods:</p>
            <ul className="list-disc space-y-2 pl-6 text-zinc-700">
              <li>Credit and Debit Cards</li>
              <li>Online Payment Gateways</li>
              <li>Cryptocurrency (Bitcoin, Ethereum, etc.)</li>
              <li>Bank Transfers (for larger orders)</li>
            </ul>
            <p className="text-zinc-700 mt-4">
              Payment confirmation allows production to begin immediately. All 
              transactions are processed securely and confidentially.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Step 3 */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xl shrink-0">
            3
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold">Document Production</h2>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Professional Document Creation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-700 mb-4">
              Once payment is confirmed, our expert team begins production of your 
              document. This process includes:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-zinc-700 mb-4">
              <li>Data verification and processing</li>
              <li>Document design and formatting according to official specifications</li>
              <li>Quality control and security feature implementation</li>
              <li>Final review and approval</li>
            </ul>
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
              <p className="text-teal-900 font-medium mb-2">⏱️ Production Timeline:</p>
              <p className="text-teal-800">
                Estimated production time is typically <strong>2–5 days</strong> depending 
                on the document type and complexity. We&apos;ll keep you updated throughout 
                the production process.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Step 4 */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xl shrink-0">
            4
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold">Verification / Approval</h2>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Review Before Final Payment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-700 mb-4">
              Before finalizing your order, we send you a preview of your completed 
              document for verification. This ensures everything is correct before 
              delivery.
            </p>
            <div className="grid gap-4 md:grid-cols-2 mb-4">
              <div className="bg-zinc-50 rounded-lg p-4">
                <h4 className="font-semibold text-zinc-900 mb-2">Preview Options</h4>
                <ul className="list-disc space-y-1 pl-5 text-zinc-700 text-sm">
                  <li>High-quality scan of the document</li>
                  <li>Photo preview of the completed document</li>
                  <li>Video preview (for certain document types)</li>
                </ul>
              </div>
              <div className="bg-zinc-50 rounded-lg p-4">
                <h4 className="font-semibold text-zinc-900 mb-2">What to Check</h4>
                <ul className="list-disc space-y-1 pl-5 text-zinc-700 text-sm">
                  <li>All personal information is correct</li>
                  <li>Photo quality and appearance</li>
                  <li>Signature placement and clarity</li>
                  <li>Document formatting and design</li>
                </ul>
              </div>
            </div>
            <p className="text-zinc-700">
              Once you confirm that all details are correct, we proceed to the final 
              payment and delivery stage. If any corrections are needed, we&apos;ll make 
              them promptly before finalizing.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Step 5 */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xl shrink-0">
            5
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold">Final Payment & Delivery</h2>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Complete Payment and Receive Your Document</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-700 mb-4">
              After you&apos;ve verified and approved your document preview, you&apos;ll 
              complete the remaining balance payment (if you paid a deposit initially).
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-zinc-900 mb-2">Delivery Methods:</h4>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  <li><strong>UPS:</strong> Reliable express delivery worldwide</li>
                  <li><strong>FedEx:</strong> Fast and secure international shipping</li>
                  <li><strong>DHL:</strong> Premium express delivery service</li>
                </ul>
              </div>
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <p className="text-teal-900 font-medium">
                  🎁 Free Shipping: Available for high-value orders. Contact us to 
                  see if you qualify for free shipping.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900 mb-2">Delivery Timeline:</h4>
                <p className="text-zinc-700">
                  Delivery times vary by location and shipping method selected. 
                  Typically, express delivery takes 2-5 business days, while 
                  standard delivery may take 5-10 business days. You&apos;ll receive 
                  tracking information once your document ships.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Special Notes */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-semibold">Required Data by Document Type</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Passports</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-zinc-700 text-sm">
                <li>Full name (as on birth certificate)</li>
                <li>Date of birth</li>
                <li>Place of birth</li>
                <li>Passport photo (official specifications)</li>
                <li>Signature</li>
                <li>Nationality</li>
                <li>Previous passport details (if applicable)</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Driver&apos;s Licenses</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-zinc-700 text-sm">
                <li>License class/category</li>
                <li>License number (if renewing)</li>
                <li>Full name</li>
                <li>Date of birth</li>
                <li>Address</li>
                <li>Signature</li>
                <li>Driver&apos;s license photo</li>
                <li>Height, weight, eye color</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>ID Cards</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-zinc-700 text-sm">
                <li>Full name</li>
                <li>Date of birth</li>
                <li>Address</li>
                <li>ID card photo</li>
                <li>Signature</li>
                <li>Optional: Height, weight, eye color</li>
                <li>Social Security number (if required)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <Card className="bg-amber-50 border-amber-200">
          <CardContent className="pt-6">
            <p className="text-amber-900 font-semibold mb-2">
              ⚠️ Critical Reminder:
            </p>
            <p className="text-amber-800">
              Providing correct data is essential to avoid delays. Double-check 
              all information before submission. Incorrect information may require 
              document re-production, which can result in additional fees and 
              extended processing times.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Additional Information */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-semibold">Why Choose Our Service</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Wide Range of Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-700">
                Our service is available for a comprehensive range of documents 
                including passports, licenses, ID cards, visas, permits, and more. 
                Whatever your documentation needs, we can help.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Reliability & Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-700">
                With over 30 years of experience and 10,000+ satisfied clients, 
                we prioritize reliability, security, and confidentiality in every 
                transaction.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>24/7 Customer Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-700">
                Our expert team is available around the clock to assist you with 
                any questions, provide guidance, and ensure a smooth ordering process 
                from start to finish.
              </p>
            </CardContent>
          </Card>
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
          Ready to Place Your Order?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Contact our team today to get started. We&apos;ll guide you through 
          the entire process and answer any questions you may have.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-zinc-100 font-semibold"
            >
              Contact Us Now
            </Button>
          </Link>
        </div>
      </motion.section>
    </main>
  );
}

