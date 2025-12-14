"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

const idCardImages = [
  "https://images.pexels.com/photos/842961/pexels-photo-842961.jpeg",
  "https://images.pexels.com/photos/842961/pexels-photo-842961.jpeg",
  "https://images.pexels.com/photos/842961/pexels-photo-842961.jpeg",
];

function IDCardImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % idCardImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % idCardImages.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + idCardImages.length) % idCardImages.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={idCardImages[currentIndex]}
              alt={`ID card sample ${currentIndex + 1}`}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl"
              unoptimized
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-lg z-10"
        aria-label="Previous image"
      >
        <svg
          className="w-6 h-6 text-zinc-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-lg z-10"
        aria-label="Next image"
      >
        <svg
          className="w-6 h-6 text-zinc-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {idCardImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function IDCardPage() {
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
          Professional ID Card Services
        </h1>
        <div className="text-lg md:text-xl text-zinc-700 max-w-3xl mx-auto leading-relaxed space-y-4">
          <p>
            Top Docs Org serves as a dependable supplier of superior ID card documentation, manufactured with careful attention and exacting precision. We focus on creating identification cards that surpass standard requirements, providing reliable accuracy, consistent quality, and polished results.
          </p>
          <p>
            Our service is designed for individuals who need an ID card solution handled discreetly, efficiently, and without unnecessary delays. With a streamlined process and dedicated support, we make the experience simple and straightforward.
          </p>
        </div>
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

      {/* Image Slider */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <IDCardImageSlider />
      </motion.section>

      {/* Quality Features */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold text-center">
          Top Quality ID Card Services
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={fadeInUp}>
            <Card className="h-full text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto mb-4 text-2xl">
                  ✨
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">Top Quality</h3>
                <p className="text-zinc-700">
                  Premium quality ID cards created with attention to detail and 
                  professional standards.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto mb-4 text-2xl">
                  🔒
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">Holograms</h3>
                <p className="text-zinc-700">
                  Authentic holograms and security features that meet international 
                  standards and requirements.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto mb-4 text-2xl">
                  📋
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">Samples</h3>
                <p className="text-zinc-700">
                  View samples before final production to ensure everything meets 
                  your expectations.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto mb-4 text-2xl">
                  ✅
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">Verified</h3>
                <p className="text-zinc-700">
                  100% verified ID cards with all necessary details and proper 
                  database registration.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-8"
      >
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
                Professional ID Card Services – Secure, Sophisticated, Trusted
              </h2>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                Top Docs Org offers expertly designed identification card documents built with comprehensive focus on accuracy, systematic layout, and state-of-the-art security implementation. Each identification card we manufacture demonstrates the intricate detail and polished quality characteristic of today's international identification standards.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                Our process focuses on accuracy, consistency, and visual integrity. Every ID card is carefully prepared to ensure a clean, balanced layout and a professional finish, delivering a result that meets high expectations for quality and sophistication.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed">
                Discretion and attention to detail remain central throughout the entire process.
              </p>
            </div>

            <div className="border-t border-zinc-200 pt-6">
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                Advanced Security & Document Features
              </h3>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                Our ID cards incorporate multiple layers of document security design commonly associated with official travel documents worldwide. These elements contribute to a refined, credible, and well-structured appearance.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                Key features include:
              </p>
              <ul className="list-disc space-y-3 pl-6 text-zinc-700">
                <li>
                  <strong>Machine-Readable Zone (MRZ)</strong>
                  <br />
                  <span className="text-base">Structured formatting consistent with international ID card layouts</span>
                </li>
                <li>
                  <strong>Security Printing Elements</strong>
                  <br />
                  <span className="text-base">Fine-line patterns, background designs, and layered printing techniques</span>
                </li>
                <li>
                  <strong>Micro-Detail Text & Graphic Elements</strong>
                  <br />
                  <span className="text-base">Precision details integrated into the document design for enhanced complexity</span>
                </li>
                <li>
                  <strong>Photograph Integration</strong>
                  <br />
                  <span className="text-base">Clean image placement aligned with the document&apos;s overall structure</span>
                </li>
                <li>
                  <strong>Advanced Overlay & Background Design</strong>
                  <br />
                  <span className="text-base">Multi-layer visual composition to add depth and sophistication</span>
                </li>
                <li>
                  <strong>Professional Numbering & Data Formatting</strong>
                  <br />
                  <span className="text-base">Consistent alignment and spacing across all personal data fields</span>
                </li>
              </ul>
              <p className="text-lg text-zinc-700 leading-relaxed mt-4">
                Together, these elements create a document that reflects modern ID card design standards and a high level of production quality.
              </p>
            </div>

            <div className="border-t border-zinc-200 pt-6">
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                Confidentiality & Handling
              </h3>
              <p className="text-lg text-zinc-700 leading-relaxed">
                All information is treated with discretion and care. Our internal process prioritizes controlled handling, privacy, and consistency from start to completion.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* How the Process Works Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold">
          How the Process Works
        </motion.h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg text-zinc-700 leading-relaxed mb-6">
              Our methodology is crafted to be user-friendly, private, and effective. Each aspect is managed with skilled professionalism from beginning to end, preserving precision and reliability during all steps.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  Step 1 – Pick Your Jurisdiction
                </h3>
                <p className="text-zinc-700 leading-relaxed">
                  Identify the jurisdiction and ID card type that corresponds with your individual identification requirements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  Step 2 – Enter Your Data
                </h3>
                <p className="text-zinc-700 leading-relaxed">
                  Input your required personal details using protected methods. Our experts scrutinize each entry thoroughly to validate appropriate configuration and correct positioning.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  Step 3 – Creation & Inspection
                </h3>
                <p className="text-zinc-700 leading-relaxed">
                  All identification cards pass through a regulated development procedure including several quality assessments to verify accuracy, template integrity, and complete standards.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  Step 4 – Delivery
                </h3>
                <p className="text-zinc-700 leading-relaxed">
                  After confirmation, your ID card is completed based on your specified preferences and established timeframe.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Quality Control & Security Standards Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold">
          Quality Control & Security Standards
        </motion.h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg text-zinc-700 leading-relaxed mb-6">
              All identification cards are processed with concentration on precision, organized framework, and expert-level display. We maintain a regulated procedure ensuring every ID card embodies current design and safety standards.
            </p>
            <p className="text-lg text-zinc-700 leading-relaxed mb-4">
              Central priority zones consist of:
            </p>
            <ul className="list-disc space-y-3 pl-6 text-zinc-700 mb-4">
              <li>Standardized content formatting and arrangement</li>
              <li>Progressive card architecture and foundation graphics</li>
              <li>Implementation of various safety-centered design features</li>
              <li>Detailed inspection before finalization</li>
            </ul>
            <p className="text-lg text-zinc-700 leading-relaxed">
              This strategy produces a sophisticated and refined product.
            </p>
          </CardContent>
        </Card>
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
          ID Card Requirements
        </motion.h2>
        <Card>
          <CardHeader>
            <CardTitle>Requirements to Obtain an ID Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-700 leading-relaxed mb-4">
              The first step in obtaining an ID card is to verify the requirements. To apply for a new ID card or obtain your first ID card, you must meet the following criteria:
            </p>
            <ul className="list-disc space-y-3 pl-6 text-zinc-700">
              <li>
                <strong>Citizenship:</strong> Be a citizen of the country for which 
                you are applying for an ID card
              </li>
              <li>
                <strong>Age Requirement:</strong> Be at least 16 years old (or have 
                parental consent if younger)
              </li>
              <li>
                <strong>Valid Identification:</strong> Have a valid form of 
                identification, such as a driver&apos;s license or birth certificate
              </li>
            </ul>
          </CardContent>
        </Card>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold text-center">
          Why Choose Us to Buy an ID Card?
        </motion.h2>
        <p className="text-center text-lg text-zinc-700 max-w-3xl mx-auto">
          Top Docs Org is always available to supply them to you!
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>100% Verified ID Cards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700">
                  Here at our agency, we have 100% verified ID cards that are 
                  created with all the necessary details. You can use that ID card 
                  without worry and travel to countries you like.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Secured Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700">
                  Your payment details are completely safe and secured with our agency. 
                  We never disclose our client&apos;s details to anyone and keep all 
                  their data securely.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Worldwide Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700">
                  We are not just committed to delivering the ID cards to a specific 
                  country. No matter where you live, your ID card will be delivered 
                  shortly up there.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Consistent Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700">
                  Our professional team members provide complete support to the clients 
                  and help them with their queries related to ID cards and other documents. 
                  We are now just a call or text away from you!
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Buy ID Card Online Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
                Buy Fake and Real ID Cards Online
              </h2>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                International mobility today requires documents that reflect accuracy, structure, and modern design standards. Our service is built to support individuals seeking professionally prepared ID card documents that align with contemporary expectations.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                We understand that consistency, presentation, and attention to detail matter. That is why every request is handled with a focus on precision, discretion, and quality control, ensuring a refined and reliable outcome.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed">
                Our approach is client-focused and results-driven, providing a smooth and controlled experience from start to completion.
              </p>
            </div>

            <div className="border-t border-zinc-200 pt-6">
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                Why Clients Choose Our Service
              </h3>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                Clients rely on our service because of our commitment to quality, confidentiality, and sophisticated document preparation.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                Key reasons include:
              </p>
              <ul className="list-disc space-y-3 pl-6 text-zinc-700 mb-4">
                <li>Professionally structured ID card layouts</li>
                <li>Advanced security-oriented design elements</li>
                <li>Controlled preparation and review process</li>
                <li>Discreet handling of all client information</li>
                <li>Consistent results across supported countries</li>
              </ul>
              <p className="text-lg text-zinc-700 leading-relaxed">
                Each document is prepared to reflect the level of detail expected of modern international ID cards.
              </p>
            </div>

            <div className="border-t border-zinc-200 pt-6">
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                Next Steps
              </h3>
              <p className="text-lg text-zinc-700 leading-relaxed">
                Getting started is straightforward. Select your country, review the available options, and proceed according to your preferred completion timeline. Our team ensures that every stage is handled professionally and efficiently.
              </p>
            </div>
          </CardContent>
        </Card>
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
          Ready to Get Your ID Card?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Contact our agency today and expect the delivery of your ID card at the 
          soonest. We are here to help you!
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
