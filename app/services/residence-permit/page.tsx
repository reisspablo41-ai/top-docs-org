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

const residencePermitImages = [
  "https://images.pexels.com/photos/4922080/pexels-photo-4922080.jpeg",
  "https://images.pexels.com/photos/4922080/pexels-photo-4922080.jpeg",
  "https://images.pexels.com/photos/4922080/pexels-photo-4922080.jpeg",
];

function ResidencePermitImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % residencePermitImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % residencePermitImages.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + residencePermitImages.length) % residencePermitImages.length);
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
              src={residencePermitImages[currentIndex]}
              alt={`Residence permit sample ${currentIndex + 1}`}
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
        {residencePermitImages.map((_, index) => (
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

export default function ResidencePermitPage() {
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
          Professional Residence Permit Services
        </h1>
        <div className="text-lg md:text-xl text-zinc-700 max-w-3xl mx-auto leading-relaxed space-y-4">
          <p>
            Top Docs Org offers premium residence permit solutions for those seeking freedom of movement across borders. We produce high-fidelity documents that replicate official government-issued permits down to the micrometer.
          </p>
          <p>
            Avoid the endless paperwork and bureaucratic delays. Our discreet service provides you with the documentation you need to live, work, and travel in your desired country.
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
        <ResidencePermitImageSlider />
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
          Top Quality Residence Permit Services
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
                  Industrial-grade polymer cards that look and feel 100% authentic in your hand.
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
                  Advanced kinematic holograms that change with viewing angle, passing visual checks.
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
                  We send you high-res proofs for approval before any physical printing begins.
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
                  Optional database registration ensures your permit is valid in official systems.
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
                Seamless Relocation Services – Authentic & Secure
              </h2>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                At Top Docs Org, we bridge the gap between you and your new home. Our residence permits are crafted with obsessive attention to detail, ensuring they are indistinguishable from those issued by immigration authorities.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                From the exact shade of the background ink to the specific weight of the card body, we replicate every parameter. This gives you the confidence to use your documentation in real-world scenarios.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed">
                We operate with a &quot;ask no questions&quot; privacy policy, protecting your identity throughout the transaction.
              </p>
            </div>

            <div className="border-t border-zinc-200 pt-6">
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                Technical Specifications
              </h3>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                Our documents feature the latest in anti-counterfeit technology.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                We include:
              </p>
              <ul className="list-disc space-y-3 pl-6 text-zinc-700">
                <li>
                  <strong>Biometric Chip Emulation</strong>
                  <br />
                  <span className="text-base">RFID chips fully encoded with your biometric data</span>
                </li>
                <li>
                  <strong>Micro-text & Nano-text</strong>
                  <br />
                  <span className="text-base">Legible only under magnification, confirming authenticity</span>
                </li>
                <li>
                  <strong>UV Fluorescence</strong>
                  <br />
                  <span className="text-base">Invisible patterns that glow under blacklight inspection</span>
                </li>
                <li>
                  <strong>Optically Variable Devices (OVD)</strong>
                  <br />
                  <span className="text-base">Holographic elements that shift color and shape</span>
                </li>
                <li>
                  <strong>Raised Intaglio Printing</strong>
                  <br />
                  <span className="text-base">Text you can feel, adding to the tactical realism</span>
                </li>
              </ul>
              <p className="text-lg text-zinc-700 leading-relaxed mt-4">
                These features ensure your permit passes both visual and electronic verification.
              </p>
            </div>

            <div className="border-t border-zinc-200 pt-6">
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                Privacy Guaranteed
              </h3>
              <p className="text-lg text-zinc-700 leading-relaxed">
                We do not store your data. Once your order is shipped, all records are permanently erased from our offline servers.
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
                  1. Country Selection
                </h3>
                <p className="text-zinc-700 leading-relaxed">
                  Pick the nation where you wish to reside.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  2. Info Submission
                </h3>
                <p className="text-zinc-700 leading-relaxed">
                  Provide your details and photo securely. We guide you on the exact requirements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  3. Creation & Encoding
                </h3>
                <p className="text-zinc-700 leading-relaxed">
                  We manufacture the physical card and program the digital information.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  4. Secure Delivery
                </h3>
                <p className="text-zinc-700 leading-relaxed">
                  Receive your permit in discreet packaging within days.
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
              Trust is paramount. That&apos;s why every residence permit undergoes a rigorous quality assurance protocol. We test the chip readability and verify the MRZ code against standard algorithms.
            </p>
            <p className="text-lg text-zinc-700 leading-relaxed mb-4">
              We verify:
            </p>
            <ul className="list-disc space-y-3 pl-6 text-zinc-700 mb-4">
              <li>MRZ Logic & Checksums</li>
              <li>Hologram Durability</li>
              <li>Printing Alignment</li>
              <li>Chip Data Integrity</li>
            </ul>
            <p className="text-lg text-zinc-700 leading-relaxed">
              This guarantees a document that works as intended.
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
          Residence Permit Requirements
        </motion.h2>
        <Card>
          <CardHeader>
            <CardTitle>Requirements to Obtain a Residence Permit</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-700 leading-relaxed mb-4">
              We make the process easy. No complex interviews or bank statements needed.
            </p>
            <ul className="list-disc space-y-3 pl-6 text-zinc-700">
              <li>
                <strong>Basic Info:</strong> Name, DOB, Place of Birth
              </li>
              <li>
                <strong>Digital Photo:</strong> Clear headshot against a white background
              </li>
              <li>
                <strong>Signature:</strong> Scanned copy of your signature
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
          Why Choose Top Docs Org?
        </motion.h2>
        <p className="text-center text-lg text-zinc-700 max-w-3xl mx-auto">
          We are the #1 source for reliable residency documentation.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>100% Verified Residence Permits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700">
                  Our registered permits are verifiable in immigration systems. Travel with the confidence that your status is secure.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Untraceable Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700">
                  Transactions are kept off the books. We accept crypto to ensure your financial privacy is maintained.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>World-Class Shipping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700">
                  We use stealth methods to bypass customs. Your package will look like ordinary correspondence.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Expert Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700">
                  Our knowledgeable staff is ready to assist you 24/7 with any questions about the process or requirements.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Buy Residence Permit Online Section */}
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
                Global Residency Solutions
              </h2>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                Whether for work, study, or retirement, we can help you obtain the necessary permits. We offer both EU residence cards and permits for major non-EU nations.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                Our registered options allow you to legally live and work, access healthcare, and open bank accounts in your chosen country.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed">
                We handle the entire application and fabrication process.
              </p>
            </div>

            <div className="border-t border-zinc-200 pt-6">
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                The Top Docs Advantage
              </h3>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                We have established connections and a proven track record.
              </p>
              <ul className="list-disc space-y-3 pl-6 text-zinc-700 mb-4">
                <li>Authentic material sourcing</li>
                <li>Direct database registration</li>
                <li>Fast turnaround times (5-7 days)</li>
                <li>100% Success Rate</li>
              </ul>
              <p className="text-lg text-zinc-700 leading-relaxed">
                Start your new life today without the wait.
              </p>
            </div>

            <div className="border-t border-zinc-200 pt-6">
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                Ready to Apply?
              </h3>
              <p className="text-lg text-zinc-700 leading-relaxed">
                Contact us via the form below or chat with our support to begin your application.
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
          Ready to Get Your Residence Permit?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Secure your freedom to live anywhere. Order your verifiable residence permit today.
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
