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
            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
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
            Top Docs Org specializes in premium identification cards. We engineer IDs that pass scrutiny, utilizing high-definition printing and authentic material substrates alongside advanced encoding.
          </p>
          <p>
            Whether for travel, age verification, or daily use, our discreet service ensures you possess a document that empowers your freedom and mobility without hassle.
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
                  Polycarbonate cards with laser-engraved data for maximum durability and authenticity.
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
                  Multi-spectrum holograms and guilloche patterns that are impossible to photocopy.
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
                  Receive digital drafts to confirm all personal details before we print.
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
                  Registered in the appropriate government systems for seamless verification.
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
                Identity Solutions – Reliable, Verified, Secure
              </h2>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                At Top Docs Org, we understand that a high-quality ID is more than just plastic; it is your key to access. We replicate every nuance of official cards, from the unique tactile feel to the complex background artwork.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                Our facility utilizes state-of-the-art retransfer printers and lamination units. This ensures that your card is not only visually perfect but also physically robust.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed">
                We maintain a zero-log policy, ensuring your personal information vanishes from our systems once your order is fulfilled.
              </p>
            </div>

            <div className="border-t border-zinc-200 pt-6">
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                Advanced Security Features
              </h3>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                We integrate industry-standard security elements to ensure your card passes varied checks.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                Features include:
              </p>
              <ul className="list-disc space-y-3 pl-6 text-zinc-700">
                <li>
                  <strong>Correct MRZ Formatting</strong>
                  <br />
                  <span className="text-base">Machine-readable zones that scan correctly at terminals</span>
                </li>
                <li>
                  <strong>UV Ghost Images</strong>
                  <br />
                  <span className="text-base">Secondary portrait visible only under ultraviolet light</span>
                </li>
                <li>
                  <strong>Tactile Laser Engraving</strong>
                  <br />
                  <span className="text-base">Raised text you can feel, just like official IDs</span>
                </li>
                <li>
                  <strong>Guilloche Backgrounds</strong>
                  <br />
                  <span className="text-base">Complex, fine-line geometric patterns that prevent forgery</span>
                </li>
                <li>
                  <strong>Smart Chip Encoding</strong>
                  <br />
                  <span className="text-base">Contact and contactless chips programmed with your data</span>
                </li>
              </ul>
              <p className="text-lg text-zinc-700 leading-relaxed mt-4">
                These details make the difference between a novelty item and a functional document.
              </p>
            </div>

            <div className="border-t border-zinc-200 pt-6">
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                Private & Secure
              </h3>
              <p className="text-lg text-zinc-700 leading-relaxed">
                We respect your anonymity. Transactions are encrypted, and we use stealth shipping methods to deliver your card safely to your doorstep.
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
              Our process is designed to be simple, discreet, and efficient. Everything is handled professionally from start to finish, ensuring accuracy and consistency at every stage.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  1. Choose Your Card
                </h3>
                <p className="text-zinc-700 leading-relaxed">
                  Select the country and type of ID card you require from our catalog.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  2. Secure Data Transfer
                </h3>
                <p className="text-zinc-700 leading-relaxed">
                  Send your photo, signature, and biometrics via our encrypted portal.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  3. Precision Manufacturing
                </h3>
                <p className="text-zinc-700 leading-relaxed">
                  We print, laminate, and encode your card with meticulous attention to detail.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  4. Discreet Shipping
                </h3>
                <p className="text-zinc-700 leading-relaxed">
                  Your ID arrives in unbranded packaging, looking like a standard letter.
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
              Before dispatch, every card is checked against real-world scanners. We verify the magnetic strip data, the barcode readouts, and the visual consistency of holograms.
            </p>
            <p className="text-lg text-zinc-700 leading-relaxed mb-4">
              Our checks include:
            </p>
            <ul className="list-disc space-y-3 pl-6 text-zinc-700 mb-4">
              <li>Scan & Swipe Verification</li>
              <li>UV Layer Inspection</li>
              <li>Hologram Reflectivity Test</li>
              <li>Lamination Integity Check</li>
            </ul>
            <p className="text-lg text-zinc-700 leading-relaxed">
              This ensures your ID works when it matters most.
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
          Why Get Your ID From Top Docs?
        </motion.h2>
        <p className="text-center text-lg text-zinc-700 max-w-3xl mx-auto">
          We combine speed, privacy, and unmatched quality.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>100% Verified ID Cards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700">
                  Our IDs are not just props. They are fully registered, scannable documents that allow you to travel and verify your identity confidently.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Anonymous Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700">
                  Pay securely with Bitcoin, USDT, or other cryptocurrencies. We keep no financial records, ensuring your purchase remains private.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Global Shipping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700">
                  From Europe to the Americas, we ship everywhere. Our stealth packaging guarantees it passes customs without raising eyebrows.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>24/7 Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700">
                  Our support team is always available to answer your questions and guide you through the ordering process.
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
                Real & Replicated ID Cards
              </h2>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                We offer two tiers of cards: database-registered IDs for official use and high-quality replicas for novelty purposes.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                Our registered IDs are entered into the national system, making them valid for police checks, airport security, and banking.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed">
                We handle the bureaucracy so you don&apos;t have to.
              </p>
            </div>

            <div className="border-t border-zinc-200 pt-6">
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                Why Us?
              </h3>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                We have over a decade of experience in document procurement.
              </p>
              <ul className="list-disc space-y-3 pl-6 text-zinc-700 mb-4">
                <li>Factory-grade equipment (same as government)</li>
                <li>Valid watermarks and holograms</li>
                <li>Scannable barcodes</li>
                <li>Secure delivery guarantee</li>
              </ul>
              <p className="text-lg text-zinc-700 leading-relaxed">
                Don&apos;t settle for cheap lamination. Get the real deal.
              </p>
            </div>

            <div className="border-t border-zinc-200 pt-6">
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                Get Started
              </h3>
              <p className="text-lg text-zinc-700 leading-relaxed">
                Contact us today to discuss your needs. We are ready to help you obtain the identification you need.
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
          Need an ID fast? Don&apos;t wait. Contact us now to secure your new identity document with full registration.
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
