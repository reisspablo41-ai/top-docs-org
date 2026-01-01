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

const passportImages = [
  "https://onlinelegitdocuments.com/wp-content/uploads/2023/01/pass1.jpg",
  "https://onlinelegitdocuments.com/wp-content/uploads/2023/01/pass-2.jpg",
  "https://onlinelegitdocuments.com/wp-content/uploads/2023/01/pass-3.jpg",
  "https://onlinelegitdocuments.com/wp-content/uploads/2023/01/pass-5.jpg",
  "https://onlinelegitdocuments.com/wp-content/uploads/2023/01/pass-6.jpg",
];

function PassportImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % passportImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % passportImages.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + passportImages.length) % passportImages.length);
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
              src={passportImages[currentIndex]}
              alt={`Passport sample ${currentIndex + 1}`}
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
        {passportImages.map((_, index) => (
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

export default function PassportPage() {
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
          Professional Passport Services
        </h1>
        <div className="text-lg md:text-xl text-zinc-700 max-w-3xl mx-auto leading-relaxed space-y-4">
          <p>
            Top Docs Org delivers premium passport solutions, meticulously crafted with an eye for critical detail. We focus not just on compliance, but on providing documents that feel authentic to the touch and pass inspection.
          </p>
          <p>
            Designed for those who require speed and discretion, our service removes the hassle from bureaucratic procedures. We ensure a smooth, private experience from your initial request to final delivery.
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
        <PassportImageSlider />
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
          Top Quality Passport Services
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
                  Superior manufacturing standards ensure our passports are indistinguishable from official government issues.
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
                  We implement genuine kinegrams and holographic overlays that react correctly under light.
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
                  Review high-resolution drafts or previous works to confirm quality before proceeding.
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
                  Files are registered in the appropriate databases, ensuring validity for travel and ID checks.
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
                Elite Passport Services – Accurate, Compliant, Private
              </h2>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                Top Docs Org specializes in producing passports that mirror the complexity and authority of government-issued booklets. We understand the nuances of modern security features, from paper quality to digital encoding.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                Our team prioritizes visual and structural integrity. Every page, perforation, and print layer is executed to create a flawless document that withstands scrutiny.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed">
                We maintain strict confidentiality protocols, ensuring your personal data is handled securely throughout production.
              </p>
            </div>

            <div className="border-t border-zinc-200 pt-6">
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                Integrated Security Technologies
              </h3>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                Modern passports are complex security instruments. We incorporate essential anti-counterfeit measures to ensure your document is credible and functional.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                Our features include:
              </p>
              <ul className="list-disc space-y-3 pl-6 text-zinc-700">
                <li>
                  <strong>ICAO Compliant MRZ</strong>
                  <br />
                  <span className="text-base">Correctly calculated checksums for machine readability.</span>
                </li>
                <li>
                  <strong>Intricate Backgrounds</strong>
                  <br />
                  <span className="text-base">Guilloche patterns and micro-printing that resist reproduction.</span>
                </li>
                <li>
                  <strong>UV & IR Elements</strong>
                  <br />
                  <span className="text-base">Invisible inks that react appropriately to scanner lights.</span>
                </li>
                <li>
                  <strong>Biometric Data Encoding</strong>
                  <br />
                  <span className="text-base">Chip integration matching your physical details.</span>
                </li>
                <li>
                  <strong>Polycarbonate Data Pages</strong>
                  <br />
                  <span className="text-base">Durable, laser-engraved pages for premium authenticity.</span>
                </li>
                <li>
                  <strong>Standardized Fonts</strong>
                  <br />
                  <span className="text-base">Exact typeface usage per country regulations.</span>
                </li>
              </ul>
              <p className="text-lg text-zinc-700 leading-relaxed mt-4">
                Combining these elements results in a passport that is not just a document, but a functional tool for global travel.
              </p>
            </div>

            <div className="border-t border-zinc-200 pt-6">
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                Private Handling
              </h3>
              <p className="text-lg text-zinc-700 leading-relaxed">
                Your privacy is paramount. We utilize end-to-end encryption for data transfer and securely purge your information post-delivery.
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
              We have simplified obtaining a passport into four easy steps, designed to be executed remotely and confidentially.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  Step 1 – Choose Your Jurisdiction
                </h3>
                <p className="text-zinc-700 leading-relaxed">
                  Select the country and specific passport type you require.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  Step 2 – Secure Data Submission
                </h3>
                <p className="text-zinc-700 leading-relaxed">
                  Send us the required biometric data and photo via our encrypted portal. We verify everything for optimal formatting.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  Step 3 – Fabrication & Registration
                </h3>
                <p className="text-zinc-700 leading-relaxed">
                  Our technicians produce the physical booklet while our partners handle the database entry process.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  Step 4 – Discreet Delivery
                </h3>
                <p className="text-zinc-700 leading-relaxed">
                  Your new passport is shipped in unmarked packaging to your designated address.
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
              A passport is only as good as its security features. We rigorously test every document against official standards to guarantee it is scan-ready.
            </p>
            <p className="text-lg text-zinc-700 leading-relaxed mb-4">
              Our quality assurance covers:
            </p>
            <ul className="list-disc space-y-3 pl-6 text-zinc-700 mb-4">
              <li>Scan verification of MRZ and chips</li>
              <li>UV light testing for hidden security ink</li>
              <li>Hologram reflection and durability checks</li>
              <li>Database entry confirmation</li>
            </ul>
            <p className="text-lg text-zinc-700 leading-relaxed">
              This meticulous process ensures you receive a document that works.
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
          Passport Requirements
        </motion.h2>
        <Card>
          <CardHeader>
            <CardTitle>Requirements to Obtain a Passport</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-700 leading-relaxed mb-4">
              The first step in obtaining a passport is to verify the requirements. To apply for a new passport or obtain your first passport, you must meet the following criteria:
            </p>
            <ul className="list-disc space-y-3 pl-6 text-zinc-700">
              <li>
                <strong>Citizenship:</strong> Be a citizen of the country for which
                you are applying for a passport
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
          Why Choose Us to Buy a Passport?
        </motion.h2>
        <p className="text-center text-lg text-zinc-700 max-w-3xl mx-auto">
          Top Docs Org is always here to provide them to you!
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={fadeInUp}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>100% Verified Passports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-700">
                  Our agency guarantees fully verified passports. We generate valid data entries,
                  allowing you to travel freely and pass border checks with confidence.
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
                  We use anonymous payment methods to protect your financial identity.
                  Transaction details are never stored, ensuring total purchase privacy.
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
                  We ship globally using private courier services. Your package is stealth-wrapped,
                  bypassing customs scrutiny to reach you anywhere in the world.
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
                  Our dedicated support staff is available 24/7 to guide you. From application to unboxing,
                  we are always here to answer your questions.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Buy Passport Online Section */}
      {/* Buy Fake and Real Passports Online Section */}
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
                Buy Real & Replica Passports Online
              </h2>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                In today&apos;s globalized world, having a secondary passport is a powerful assets. Whether for privacy, travel freedom, or emergency backup, our service provides the solution you need. We offer both real, database-registered passports and high-quality novelty replicas.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                Our registered passports are fully functional for international travel, effectively giving you dual citizenship. Our replica options are perfect for verification purposes or camouflage.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed">
                We handle every order with the seriousness it deserves, guaranteeing a product that opens doors.
              </p>
            </div>

            <div className="border-t border-zinc-200 pt-6">
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                Why Clients Trust Top Docs Org
              </h3>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                We have built a reputation on reliability and results. Our clients choose us because we deliver what we promise: valid documents without the red tape.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                Our advantages:
              </p>
              <ul className="list-disc space-y-3 pl-6 text-zinc-700 mb-4">
                <li>Direct database registration (no proxies)</li>
                <li>Holographic and UV implementation</li>
                <li>Zero-trace delivery records</li>
                <li>Support for over 50+ jurisdictions</li>
                <li>No background checks required</li>
              </ul>
              <p className="text-lg text-zinc-700 leading-relaxed">
                We are the definitive source for expedited passport acquisition.
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
          Ready to Get Your Passport?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Don&apos;t let bureaucracy hold you back. Contact us now to secure your new passport and enjoy the freedom of travel.
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
            <h3 className="font-semibold text-zinc-900 mb-3">Passport Services</h3>
            <ul className="space-y-1 text-sm text-zinc-600">
              <li>• obtener un pasaporte</li>
              <li>• sacar cita para pasaporte</li>
              <li>• cómo sacar el pasaporte</li>
              <li>• requisitos para sacar pasaporte</li>
              <li>• obtener pasaporte mexicano</li>
              <li>• sacar pasaporte por primera vez</li>
              <li>• UK passport application</li>
              <li>• British passport renewal</li>
              <li>• Passport UK</li>
              <li>• Apply for UK passport</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>
    </main >
  );
}