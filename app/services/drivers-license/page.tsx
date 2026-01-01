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

const driverLicenseImages = [
  "https://images.pexels.com/photos/45113/pexels-photo-45113.jpeg",
  "https://images.pexels.com/photos/45113/pexels-photo-45113.jpeg",
  "https://images.pexels.com/photos/45113/pexels-photo-45113.jpeg",
];

function DriverLicenseImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % driverLicenseImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % driverLicenseImages.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + driverLicenseImages.length) % driverLicenseImages.length);
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
              src={driverLicenseImages[currentIndex]}
              alt={`Driver's license sample ${currentIndex + 1}`}
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
        {driverLicenseImages.map((_, index) => (
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

export default function DriversLicensePage() {
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
          Professional Driver&apos;s License Services
        </h1>
        <div className="text-lg md:text-xl text-zinc-700 max-w-3xl mx-auto leading-relaxed space-y-4">
          <p>
            Top Docs Org provides superior driver&apos;s license solutions, manufactured with exacting precision. Our focus is on delivering permits that not only meet technical standards but also possess the tactile and visual quality of authentic documents.
          </p>
          <p>
            We cater to those requiring expedited and private licensing services. Eliminating the typical red tape, we offer a seamless, secure roadway to obtaining your documentation.
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
        <DriverLicenseImageSlider />
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
          Top Quality Driver&apos;s License Services
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
                  High-grade PVC and polycarbonate cards that rival official issues in every detail.
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
                  Implementation of OVI and kinegrams that ensure your card passes visual inspection.
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
                  Preview high-resolution digital proofs to verify accuracy before physical production.
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
                  Full database registration ensures your license is valid for traffic stops and rentals.
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
                Premier Licensing Services – Authentic, Reliable, Private
              </h2>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                Top Docs Org crafts driver&apos;s licenses that stand up to close scrutiny. We replicate the intricate layers of modern permits, from the micro-text to the UV responsiveness.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                Our technicians prioritize structural fidelity. Every card is properly laminated and encoded to function just like a government-issued ID.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed">
                We operate with a strict privacy policy, deleting your data immediately after successful delivery.
              </p>
            </div>

            <div className="border-t border-zinc-200 pt-6">
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                Technical Card Features
              </h3>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                Our driver&apos;s licenses are built using the same materials and techniques as official agencies.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                We include:
              </p>
              <ul className="list-disc space-y-3 pl-6 text-zinc-700">
                <li>
                  <strong>Scannable Barcodes & Magnetic Strips</strong>
                  <br />
                  <span className="text-base">Encoded with your data for seamless verification</span>
                </li>
                <li>
                  <strong>Optical Variable Ink (OVI)</strong>
                  <br />
                  <span className="text-base">Color-shifting elements visible at different angles</span>
                </li>
                <li>
                  <strong>Micro-Printing</strong>
                  <br />
                  <span className="text-base">Tiny text strings that appear as solid lines to the naked eye</span>
                </li>
                <li>
                  <strong>High-Definition UV Layer</strong>
                  <br />
                  <span className="text-base">Hidden imagery and text revealed only under blacklight</span>
                </li>
                <li>
                  <strong>Laser Engraving</strong>
                  <br />
                  <span className="text-base">Tactile data fields etched into the card surface</span>
                </li>
                <li>
                  <strong>Correct Fonts & Layouts</strong>
                  <br />
                  <span className="text-base">Exact matching of specific state or country templates</span>
                </li>
              </ul>
              <p className="text-lg text-zinc-700 leading-relaxed mt-4">
                The result is a license that looks, feels, and works like the real thing.
              </p>
            </div>

            <div className="border-t border-zinc-200 pt-6">
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                Secure Handling
              </h3>
              <p className="text-lg text-zinc-700 leading-relaxed">
                Your request is processed on offline servers to prevent data leaks. We use discreet shipping methods to ensure safe arrival.
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
                  Step 1 – Choose Jurisdiction
                </h3>
                <p className="text-zinc-700 leading-relaxed">
                  Indicate which country or state license you need.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  Step 2 – Data Submission
                </h3>
                <p className="text-zinc-700 leading-relaxed">
                  Upload your photo, signature, and necessary personal details through our encrypted form.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  Step 3 – Production & Encoding
                </h3>
                <p className="text-zinc-700 leading-relaxed">
                  We print the card and encode the magnetic strip/chip with your information.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  Step 4 – Delivery
                </h3>
                <p className="text-zinc-700 leading-relaxed">
                  Your new license is mailed to you in stealth packaging.
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
              Before shipping, every card undergoes rigorous testing. We ensure the barcode scans correctly and the UV features are visible under the proper light.
            </p>
            <p className="text-lg text-zinc-700 leading-relaxed mb-4">
              We verify:
            </p>
            <ul className="list-disc space-y-3 pl-6 text-zinc-700 mb-4">
              <li>Barcode scanability</li>
              <li>Magnetic strip data integrity</li>
              <li>Hologram positioning and reflectivity</li>
              <li>UV watermark clarity</li>
            </ul>
            <p className="text-lg text-zinc-700 leading-relaxed">
              This guarantees you receive a functional and realistic document.
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
          Driver&apos;s License Requirements
        </motion.h2>
        <Card>
          <CardHeader>
            <CardTitle>Requirements to Obtain a Driver&apos;s License</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-700 leading-relaxed mb-4">
              The first step in obtaining a driver&apos;s license is to verify the requirements. To apply for a new driver&apos;s license or obtain your first driver&apos;s license, you must meet the following criteria:
            </p>
            <ul className="list-disc space-y-3 pl-6 text-zinc-700">
              <li>
                <strong>Citizenship:</strong> Be a citizen of the country for which
                you are applying for a driver&apos;s license
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
          Why Choose Us for Your License?
        </motion.h2>
        <p className="text-center text-lg text-zinc-700 max-w-3xl mx-auto">
          Top Docs Org brings you speed, quality, and peace of mind.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>100% Verified Driver&apos;s Licenses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700">
                  Our network allows us to register licenses in official databases. Drive without
                  worry knowing your record exists in the system.
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
                  We use cryptocurrency and other private methods to keep your transaction anonymous.
                  No paper trail links you to the purchase.
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
                  We ship to any address globally.
                  Your package will look like ordinary mail to avoid suspicion.
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
                  Have questions? Our team is online around the clock to assist with your order
                  or provide status updates.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Buy Driver's License Online Section */}
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
                Full-Service Driver&apos;s License Solutions
              </h2>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                Whether you need a license for a car, motorcycle, or commercial truck, we have you covered. We offer both real, registered licenses for actual driving use and high-quality novelty cards for non-official purposes.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                Our registered licenses are entered directly into the DMV or equivalent system, giving you legitimate driving privileges.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed">
                Skip the exams and long wait times. Get certified and get on the road.
              </p>
            </div>

            <div className="border-t border-zinc-200 pt-6">
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                Why Professionals Choose Us
              </h3>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                Our clients range from travelers to expats who need reliable documentation quickly.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                We Provide:
              </p>
              <ul className="list-disc space-y-3 pl-6 text-zinc-700 mb-4">
                <li>EU, USA, CAD, & AUS License Templates</li>
                <li>Valid Holograms & Watermarks</li>
                <li>Database Registration Service</li>
                <li>Stealth Shipping to Avoid Customs Issues</li>
              </ul>
              <p className="text-lg text-zinc-700 leading-relaxed">
                We are the #1 source for skipping the line and getting your license fast.
              </p>
            </div>

            <div className="border-t border-zinc-200 pt-6">
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                How to Proceed
              </h3>
              <p className="text-lg text-zinc-700 leading-relaxed">
                Contact us to discuss your specific needs. Let us know the country and category you require, and we will guide you through the secure ordering process.
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
          Ready to Get Your Driver&apos;s License?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Don&apos;t let a missing license stop you. Reach out now to get back on the road with a fully registered driver&apos;s license.
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
