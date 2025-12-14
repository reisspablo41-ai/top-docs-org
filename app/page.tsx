'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CircularProgress } from '@/components/ui/circular-progress';
import { TestimonialsSlider } from '@/components/testimonials-slider';
import { BlogSlider } from '@/components/blog-slider';

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

// Counter component with animation
function AnimatedCounter({
  value,
  label,
  icon,
}: {
  value: number;
  label: string;
  icon: React.ReactNode;
}) {
  const [count, setCount] = useState(value); // Start with actual value
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = counterRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) {
      return; // Keep showing the actual value until animation starts
    }

    // Animate from 0 to target value
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    let timer: NodeJS.Timeout | null = null;

    // Use setTimeout to avoid synchronous setState
    const timeout = setTimeout(() => {
      setCount(0); // Start from 0 for animation
      let current = 0;
      timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          if (timer) clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);
    }, 0);

    return () => {
      clearTimeout(timeout);
      if (timer) clearInterval(timer);
    };
  }, [hasAnimated, value]);

  return (
    <div ref={counterRef} className="flex flex-col items-center text-center">
      <div className="mb-4 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
        {icon}
      </div>
      <div className="text-5xl md:text-6xl font-bold text-white mb-2">
        {count}
      </div>
      <div className="text-lg md:text-xl text-white/90">{label}</div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="space-y-0">
      {/* Hero Section - Simplified */}
      <motion.section
        className="relative overflow-hidden min-h-screen flex items-center justify-center w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Passport Collage Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/29402986/pexels-photo-29402986.jpeg"
            alt="International Passports Background"
            fill
            className="object-cover"
            unoptimized
            priority
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Content */}
        <motion.div
          className="relative z-20 mx-auto max-w-5xl w-full px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Subtitle */}
          <motion.p
            className="text-sm md:text-base uppercase tracking-widest text-white/90 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Your #1 Source for Real & Fake Documents — Fast, Secure, and
            Discreet
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-teal-600">Excellent Consulting</span>
            <br />
            Services for You
          </motion.h1>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link href="/services/passport">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-6 text-lg uppercase tracking-wide shadow-2xl hover:shadow-3xl transition-all"
              >
                Make an Order Now
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <div className="mx-auto max-w-7xl px-4 py-20">
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900">
              Our Services
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              We produce real database-registered documents and premium replica
              versions depending on your needs. No interviews, no long
              processes, just reliable documents delivered quickly and
              confidentially.
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {/* Passport Service Card */}
            <motion.div variants={fadeInUp} className="group relative">
              <Link href="/services/passport">
                <div className="relative h-[400px] rounded-xl overflow-hidden cursor-pointer">
                  {/* Background Image */}
                  <Image
                    src="https://images.pexels.com/photos/29402986/pexels-photo-29402986.jpeg"
                    alt="Passports"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  {/* Icon Overlay */}
                  <div className="absolute top-6 left-6 z-10">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg
                        className="w-8 h-8 text-teal-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* Content Overlay - Always Visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      Buy Passport
                    </h3>
                    <p className="text-white/90 text-sm">
                      Order premium, database-registered passports produced with
                      advanced printing technology.
                    </p>
                  </div>
                  {/* Hover Overlay - Teal600 with additional text */}
                  <div className="absolute inset-0 bg-teal-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-white">
                    <h3 className="text-3xl font-semibold mb-4 text-center">
                      Buy Passport
                    </h3>
                    <p className="text-lg mb-4 text-center">
                      Order premium, database-registered passports produced with
                      advanced printing technology. Our team delivers discreet,
                      fast, and high-quality documents that pass all standard
                      security checks. Whether you need a new identity or a
                      replacement, we provide hassle-free processing with
                      worldwide delivery
                    </p>
                    <Button
                      variant="outline"
                      size="lg"
                      className="!bg-white !text-teal-600 hover:!bg-zinc-100 border-white"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Driver's License Service Card */}
            <motion.div variants={fadeInUp} className="group relative">
              <Link href="/services/drivers-license">
                <div className="relative h-[400px] rounded-xl overflow-hidden cursor-pointer">
                  {/* Background Image */}
                  <Image
                    src="https://images.pexels.com/photos/45113/pexels-photo-45113.jpeg"
                    alt="Driver's Licenses"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  {/* Icon Overlay */}
                  <div className="absolute top-6 left-6 z-10">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg
                        className="w-8 h-8 text-teal-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* Content Overlay - Always Visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      Buy Driver&apos;s License
                    </h3>
                    <p className="text-white/90 text-sm">
                      Get authentic-looking driver&qpos;s licenses that scan,
                      swipe, and verify.
                    </p>
                  </div>
                  {/* Hover Overlay - Teal600 with additional text */}
                  <div className="absolute inset-0 bg-teal-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-white">
                    <h3 className="text-3xl font-semibold mb-4 text-center">
                      Buy Driver&apos;s License
                    </h3>
                    <p className="text-lg mb-4 text-center">
                      Get authentic-looking driver’s licenses that scan, swipe,
                      and verify. Our licenses come with holograms, barcodes,
                      and UV features identical to the real thing. We work with
                      all regions and states, ensuring your document meets
                      official standards.
                    </p>

                    <Button
                      variant="outline"
                      size="lg"
                      className="!bg-white !text-teal-600 hover:!bg-zinc-100 border-white"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* ID Card Service Card */}
            <motion.div variants={fadeInUp} className="group relative">
              <Link href="/services/id-card">
                <div className="relative h-[400px] rounded-xl overflow-hidden cursor-pointer">
                  {/* Background Image */}
                  <Image
                    src="https://images.pexels.com/photos/842961/pexels-photo-842961.jpeg"
                    alt="ID Cards"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  {/* Icon Overlay */}
                  <div className="absolute top-6 left-6 z-10">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg
                        className="w-8 h-8 text-teal-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* Content Overlay - Always Visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      Buy ID Cards
                    </h3>
                    <p className="text-white/90 text-sm">
                      Order high-quality ID cards with full security elements,
                      magnetic stripes, signatures, and custom details.
                    </p>
                  </div>
                  {/* Hover Overlay - Teal600 with additional text */}
                  <div className="absolute inset-0 bg-teal-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-white">
                    <h3 className="text-3xl font-semibold mb-4 text-center">
                      Buy ID Cards
                    </h3>
                    <p className="text-lg mb-4 text-center">
                      Order high-quality ID cards with full security elements,
                      magnetic stripes, signatures, and custom details. We
                      guarantee unmatched precision, fast turnaround times, and
                      24/7 support. Your privacy and anonymity are fully
                      protected.
                    </p>

                    <Button
                      variant="outline"
                      size="lg"
                      className="!bg-white !text-teal-600 hover:!bg-zinc-100 border-white"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
          {/* Residence Permit Card - Below the main 3 */}
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div variants={fadeInUp} className="mt-6">
              <Link href="/services/residence-permit">
                <div className="relative h-[300px] rounded-xl overflow-hidden cursor-pointer group">
                  {/* Background Image */}
                  <Image
                    src="https://images.pexels.com/photos/4922080/pexels-photo-4922080.jpeg"
                    alt="Residence Permits"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  {/* Icon Overlay */}
                  <div className="absolute top-6 left-6 z-10">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg
                        className="w-8 h-8 text-teal-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* Content Overlay - Always Visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      Buy Residence Permit
                    </h3>
                    <p className="text-white/90 text-sm">
                      Apply for high-quality Resident Cards with full security
                      features and database registration.
                    </p>
                  </div>
                  {/* Hover Overlay - Teal600 with additional text */}
                  <div className="absolute inset-0 bg-teal-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-white">
                    <h3 className="text-3xl font-semibold mb-4 text-center">
                      Buy Residence Permit
                    </h3>
                    <p className="text-lg mb-4 text-center">
                      “Apply for high-quality Resident Cards with full security
                      features and database registration. We process cards for
                      multiple countries with biometric details, signature
                      panels, and machine-readable zones. No interviews, no long
                      waiting periods — your card is created and delivered
                      discreetly with guaranteed authenticity.”
                    </p>

                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white text-teal-600 hover:bg-zinc-100 border-white"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-6">
              <Link href="/services/residence-permit">
                <div className="relative h-[300px] rounded-xl overflow-hidden cursor-pointer group">
                  {/* Background Image */}
                  <Image
                    src="https://australiandocuments.com/wp-content/uploads/2023/01/fd2ec93cfbdef5325da4c19344171d78-768x1024.jpeg"
                    alt="Clear Australian Driving License"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  {/* Icon Overlay */}
                  <div className="absolute top-6 left-6 z-10">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg
                        className="w-8 h-8 text-teal-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* Content Overlay - Always Visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      Clear Australian Driving Record
                    </h3>
                    <p className="text-white/90 text-sm">
                      “Need a clean Australian driving record? We offer fast and
                      confidential record adjustment services. Traffic points,
                      suspensions, fines, and previous violations can be removed
                      from your file through our secure partner network. Your
                      new record will appear clean in all standard checks and
                      verifications.”
                    </p>
                  </div>
                  {/* Hover Overlay - Teal600 with additional text */}
                  <div className="absolute inset-0 bg-teal-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-white">
                    <h3 className="text-3xl font-semibold mb-4 text-center">
                      Clear Australian Driving Record
                    </h3>
                    <p className="text-lg mb-4 text-center">
                      “Need a clean Australian driving record? We offer fast and
                      confidential record adjustment services. Traffic points,
                      suspensions, fines, and previous violations can be removed
                      from your file through our secure partner network. Your
                      new record will appear clean in all standard checks and
                      verifications.”
                    </p>

                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white text-teal-600 hover:bg-zinc-100 border-white"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
          <motion.div
            variants={staggerContainer}
            className="mt-10 grid gap-6 lg:grid-cols-2"
          >
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Production & Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Preparation timelines typically range from 1–3 days, with
                    Our processing timelines are fast, discreet, and tailored to
                    your region. Most documents are prepared within 1–3 days,
                    with delivery times depending on the destination and
                    document category. We provide clear updates at every stage
                    to keep your order fully on track.
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6">
                    <li>
                      Customized document requirements based on your country
                    </li>
                    <li>Submission schedules aligned to official processing</li>
                    <li>
                      Real-time progress updates and delivery notifications
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Security & Confidentiality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Your privacy is our top priority. All orders are handled
                    using secure communication channels, encrypted workflows,
                    and strict confidentiality protocols. We only request the
                    minimum information required to process your file.
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6">
                    <li>No unnecessary data collection</li>
                    <li>Encrypted chats and private contact methods</li>
                    <li>Discreet packaging and secure delivery handling</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Our Service Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="py-20 bg-gradient-to-b from-white to-zinc-50"
        >
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900">
                    Our Service
                  </h2>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-teal-600">
                    DO YOU NEED ANY DOCUMENT?
                  </h3>
                </div>
                <p className="text-xl text-zinc-700 leading-relaxed">
                  Since 2013, we’ve specialized in delivering high-quality
                  documents with unmatched precision and reliability. Over
                  decades of experience has made us a trusted provider in the
                  document industry, offering fast, accurate, and professional
                  solutions for clients worldwide.
                </p>
                <div className="space-y-4 pt-4">
                  <motion.div
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-3 h-3 rounded-full bg-teal-600 flex-shrink-0"></div>
                    <p className="text-zinc-800 font-medium text-lg">
                      Traveler Documents
                    </p>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-3 h-3 rounded-full bg-teal-600 flex-shrink-0"></div>
                    <p className="text-zinc-800 font-medium text-lg">
                      Travel Authorization
                    </p>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-3 h-3 rounded-full bg-teal-600 flex-shrink-0"></div>
                    <p className="text-zinc-800 font-medium text-lg">
                      Driving Records
                    </p>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-3 h-3 rounded-full bg-teal-600 flex-shrink-0"></div>
                    <p className="text-zinc-800 font-medium text-lg">
                      Documents for Verification (KYC, VideoIDdent etc..)
                    </p>
                  </motion.div>
                </div>
                <p className="text-base text-zinc-600 leading-relaxed pt-4">
                  We have extensive experience in creating American, European,
                  Australian, UK, and Asian passports. Our professional document
                  services are available worldwide, ensuring quality and
                  authenticity in every document we produce.
                </p>
                <Link href="/about">
                  <Button className="mt-6 bg-teal-600 hover:bg-teal-700 text-white">
                    More About Us
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <div className="aspect-4/3 relative">
                  <Image
                    src="https://images.pexels.com/photos/4922080/pexels-photo-4922080.jpeg"
                    alt="Professional document services"
                    fill
                    className="object-cover rounded-2xl"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Mission Section with Teal Background */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="w-full bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white py-16 md:py-24 px-4 md:px-6 relative overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-6xl relative z-10">
          <motion.div variants={fadeInUp} className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto leading-tight">
              Our Mission is to Serve you and bring out the right solution at
              every time
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              We are committed to providing exceptional service, ensuring every
              client receives personalized attention and the highest quality
              solutions for their document needs.
            </p>
            <motion.div
              variants={fadeInUp}
              className="flex justify-center pt-4"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="!bg-white !text-teal-700 hover:!bg-zinc-100 font-semibold px-8 py-6 text-lg border-white"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Long Term Service Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="w-full bg-white py-20 md:py-28 px-4"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900">
                  Our Long Term Service
                </h2>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-teal-600">
                  Building Experience & Give High Success Rates
                </h3>
              </div>
              <p className="text-lg md:text-xl text-zinc-700 leading-relaxed">
                Our prompt delivery services always make sure that your document
                will reach to your doorstep in the least time. Serving you in
                the best possible way is our top most priority.
              </p>
              <p className="text-base text-zinc-600 leading-relaxed">
                With decades of experience, we&apos;ve refined our processes to
                deliver exceptional results. Every document is handled with
                precision, care, and attention to detail, ensuring you receive
                exactly what you need, when you need it.
              </p>
              <div className="pt-4">
                <Link href="/how-to-order">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                    Learn More About Our Process
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <div className="aspect-4/3 relative">
                <Image
                  src="https://images.pexels.com/photos/45113/pexels-photo-45113.jpeg"
                  alt="Professional document services"
                  fill
                  className="object-cover rounded-2xl"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <div className="mx-auto max-w-7xl px-4 py-12 space-y-20">
        {/* Statistics Section with Counter Animation */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid gap-12 lg:grid-cols-3 items-start"
        >
          {/* Left Column - Large Image */}
          <motion.div variants={fadeInUp} className="lg:col-span-1 space-y-6">
            <div className="relative overflow-hidden rounded-xl aspect-4/3">
              <Image
                src="https://images.pexels.com/photos/29402986/pexels-photo-29402986.jpeg"
                alt="British passport"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-xl"
                unoptimized
              />
            </div>
            {/* Two Circular Progress Indicators Below Image */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center">
                <CircularProgress
                  value={90}
                  max={100}
                  suffix="%"
                  label="Affordable Cost"
                  size={140}
                />
              </div>
              <div className="flex flex-col items-center">
                <CircularProgress
                  value={99}
                  max={100}
                  suffix="%"
                  label="Quality of Work"
                  size={140}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Three Expandable Sections */}
          <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-6">
            <div className="space-y-6">
              {/* Great Team Section */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="border border-zinc-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-semibold text-zinc-900 mb-3">
                  Great Team.
                </h3>
                <p className="text-zinc-700 leading-relaxed">
                  Our experienced team of professionals brings decades of
                  expertise to every project. We&apos;re committed to delivering
                  exceptional service and building long-term trust with our
                  clients through dedication and excellence.
                </p>
              </motion.div>

              {/* Better Security Section */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="border border-zinc-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-semibold text-zinc-900 mb-3">
                  Better Security.
                </h3>
                <p className="text-zinc-700 leading-relaxed">
                  Your privacy and security are our top priorities. We use
                  industry-standard encryption and follow strict data protection
                  protocols to ensure all your information remains confidential
                  and secure throughout the entire process.
                </p>
              </motion.div>

              {/* Improved Client Service Section */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="border border-zinc-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-semibold text-zinc-900 mb-3">
                  Improved Client Service.
                </h3>
                <p className="text-zinc-700 leading-relaxed">
                  We&apos;re available 24/7 to provide prompt, professional
                  support. Our responsive team ensures you receive timely
                  updates, clear communication, and personalized assistance
                  tailored to your specific needs.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>
      </div>

      {/* Book Consultation Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="w-full bg-gradient-to-r from-teal-600 via-teal-700 to-teal-600 text-white py-16 md:py-20 px-4 md:px-6 relative overflow-hidden"
      >
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-6xl relative z-10">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                We&apos;re Delivering the Best Document & Business Services
              </h2>
              <p className="text-lg text-white/90">
                Experience professional, reliable, and secure document services
                that exceed expectations.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex justify-center md:justify-end"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full md:w-auto !bg-white !text-teal-700 hover:!bg-zinc-100 font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-shadow border-white"
                >
                  Free Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <div className="mx-auto max-w-6xl px-4 py-12 space-y-20">
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-2xl font-semibold">
            Why Choose Us
          </motion.h2>
          <ul className="mt-4 space-y-2 text-zinc-900">
            <li>Proven reliability with clear, accurate guidance.</li>
            <li>Secure and confidential handling of your information.</li>
            <li>Responsive 24/7 support to keep you on track.</li>
          </ul>
          <motion.div
            variants={staggerContainer}
            className="mt-8 grid gap-6 sm:grid-cols-2"
          >
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Quality Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We focus on clarity and completeness. From forms to
                    supporting evidence, our guidance helps you avoid delays and
                    maintain quality throughout the process.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Global Awareness</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Requirements vary widely. We provide general guidance and
                    highlight jurisdiction-specific considerations so you can
                    prepare confidently.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.section>

        <section>
          <h2 className="text-2xl font-semibold">How It Works</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>1. Share Your Goal</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Tell us the exact document you need and the country or region
                  you want it for. Our specialists will explain the
                  requirements, options, and processing timeline so you know
                  exactly what to expect before we begin.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>2. Prepare & Review</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Send us the necessary details using our secure checklist. Our
                  team verifies everything for accuracy, format, and compliance
                  with the document type you selected. Any errors or missing
                  details are corrected before final processing.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>3. Submit & Track</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Once your file is approved, we handle submission through our
                  internal channels and begin production. You’ll receive updates
                  at every stage, including estimated completion and delivery
                  timelines.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our team operates 24/7 to ensure your request moves smoothly
                  from start to finish. We provide instant feedback, answer
                  questions, and guide you through every step of the process.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Document checklist review & confirmation</li>
                  <li>Timeline expectations and progress updates</li>
                  <li>Escalation assistance for urgent cases</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Delivery & Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  When your document is ready, we guide you on how to receive it
                  safely and securely. We also offer tips to ensure successful
                  acceptance, pickup, and future renewals where applicable.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li> Real-time status notifications </li>
                  <li> Secure delivery and handling recommendations</li>
                  <li>Follow-up support and renewal assistance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <div className="rounded-xl border border-zinc-200 p-8 text-center">
            <h2 className="text-2xl font-semibold">Ready to begin?</h2>
            <p className="mt-2 text-zinc-800">
              Start with your document type or contact our 24/7 team for help.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Link href="/services/passport">
                <Button className="bg-teal-600 text-white hover:bg-teal-700">
                  Start Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="text-zinc-900 border-zinc-300 hover:bg-zinc-50"
                >
                  Talk to us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Our Platform Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-xl"
        >
          {/* Left Section - Blue/Teal Background */}
          <motion.div
            variants={fadeInUp}
            className="bg-teal-600 text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center relative"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              We&apos;re trusted by more than 2000 clients
            </h2>
            <div className="relative mt-8 aspect-4/3 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/842961/pexels-photo-842961.jpeg"
                alt="Person putting a passport on bag"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </motion.div>

          {/* Right Section - White Background */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center relative"
          >
            <p className="text-sm text-zinc-600 uppercase tracking-wide mb-2">
              Businesses You Can Back
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-6">
              Why Choose Our Platform
            </h2>
            <p className="text-lg text-zinc-700 mb-8 leading-relaxed">
              Leading place to providing the highest quality documents and
              Services worldwide 24/7.
            </p>

            <div className="space-y-6">
              {/* Global Partnership */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                    Global Partnership
                  </h3>
                  <p className="text-zinc-700">
                    Our platform works with a broad network of independent
                    providers, allowing us to support requests from various
                    countries. This gives users access to multiple document
                    categories without navigating complex procedures themselves.
                  </p>
                </div>
              </div>

              {/* Committed to Quality */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                    Committed to Quality
                  </h3>
                  <p className="text-zinc-700">
                    We focus on delivering crisp, detailed, and professionally
                    crafted results. Every request is handled carefully to
                    ensure accuracy, clarity, and customer satisfaction
                    throughout the entire process.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mt-8 aspect-4/3 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1058959/pexels-photo-1058959.jpeg"
                alt="Brown leather duffel bag"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </motion.div>
        </motion.section>

        <section>
          <h2 className="text-2xl font-semibold">Detailed Overview</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Passports</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our network handles specialized passport-style documents
                  crafted through low-visibility channels. Each request is
                  processed quietly, with tailored formats and discreet
                  coordination. You receive a polished, high-detail output
                  without unnecessary questions or delays. Everything is kept
                  off the spotlight.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Driver’s Licenses</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We operate with access to multiple regional layout structures,
                  delivering driver-license style documents built to mirror the
                  look and feel of official formats. Details are handled
                  silently, with fast turnarounds and encrypted communication.
                  No noise, no interruptions — just the results you asked for.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>ID Cards</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  For clients who require identity-style materials, we prepare
                  clean, high-grade card designs modeled after modern national
                  and state standards. Each piece is assembled through low-trace
                  methods and produced with precision. Your privacy stays intact
                  from start to finish.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Residence Permits</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our permit-style documents cover several categories and
                  formats. Whether temporary, long-term, or specialized layouts,
                  everything is structured discreetly and delivered with exact
                  detailing. Timelines remain quiet, controlled, and fully
                  insulated from outside attention.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Security Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Every exchange is handled on strictly protected channels with
                  minimal trace. We avoid unnecessary data, clear communication
                  logs routinely, and isolate each request in its own encrypted
                  process. Your involvement stays invisible, your information
                  stays contained.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Support & Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Assistance is available around the clock through secured
                  lines. We guide you step by step — quietly, efficiently, and
                  without interruption. Whether it’s updates, revisions, or
                  clarifications, our team remains in the background ensuring
                  everything moves smoothly.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Testimonials</h2>
          <p className="mt-2 text-zinc-600 mb-8">
            What customers say about clarity, timeliness, and support.
          </p>
          <TestimonialsSlider />
        </section>

        {/* Statistics Counters Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="w-full bg-teal-600 py-16 md:py-20 px-4 relative overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.pexels.com/photos/29402986/pexels-photo-29402986.jpeg"
              alt="Background"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="mx-auto max-w-7xl relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
              {/* First Counter - Completed Cases */}
              <motion.div variants={fadeInUp}>
                <AnimatedCounter
                  value={315}
                  label="Completed Cases"
                  icon={
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  }
                />
              </motion.div>

              {/* Second Counter - Satisfied Customers */}
              <motion.div variants={fadeInUp}>
                <AnimatedCounter
                  value={966}
                  label="Satisfied Customers"
                  icon={
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  }
                />
              </motion.div>

              {/* Third Counter - Expert Consultant */}
              <motion.div variants={fadeInUp}>
                <AnimatedCounter
                  value={868}
                  label="Expert Consultant"
                  icon={
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  }
                />
              </motion.div>

              {/* Play Button Icon */}
              <motion.div
                variants={fadeInUp}
                className="flex justify-center md:justify-end"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-sky-400 hover:bg-sky-500 flex items-center justify-center cursor-pointer transition-colors shadow-lg">
                  <svg
                    className="w-10 h-10 md:w-12 md:h-12 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* News & Articles Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-semibold text-center mb-8"
          >
            News & Articles
          </motion.h2>
          <BlogSlider />
        </motion.section>

        <section>
          <h2 className="text-2xl font-semibold">Contact & Support</h2>
          <p className="mt-2 text-zinc-600">
            We’re available around the clock to help you prepare, verify, and
            track your application.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>24/7 assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Email support for detailed questions</li>
                  <li>Prompt replies and practical next steps</li>
                  <li>Links to official resources and forms</li>
                </ul>
                <div className="mt-4">
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="text-zinc-900 border-zinc-300 hover:bg-zinc-50"
                    >
                      Contact us
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Getting started</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Share your document type and location. We’ll respond with a
                  tailored checklist and timeline overview so you can prepare
                  confidently.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Eligibility basics and requirements</li>
                  <li>Supporting evidence guidance</li>
                  <li>Submission tips and tracking</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Savings & Packages</h2>
          <p className="mt-2 text-zinc-600">
            Transparent pricing and multi-applicant support. Ask about group
            assistance for families or teams.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Individual</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Focused guidance and document review tailored to a single
                  application.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Checklist and review</li>
                  <li>Timeline planning</li>
                  <li>Support by email</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Multi-applicant</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Coordinated support for households or teams working through
                  similar processes.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Grouped checklists</li>
                  <li>Consolidated updates</li>
                  <li>Flexible scheduling</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

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
              <h3 className="font-semibold text-zinc-900 mb-3">Passports</h3>
              <ul className="space-y-1 text-sm text-zinc-600">
                <li>• obtener un pasaporte</li>
                <li>• sacar cita para pasaporte</li>
                <li>• cómo sacar el pasaporte</li>
                <li>• requisitos para sacar pasaporte</li>
                <li>• UK passport application</li>
                <li>• British passport renewal</li>
                <li>• Passport UK</li>
                <li>• Apply for UK passport</li>
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 className="font-semibold text-zinc-900 mb-3">
                Driver&apos;s Licenses
              </h3>
              <ul className="space-y-1 text-sm text-zinc-600">
                <li>• UK driving licence</li>
                <li>• DVLA driving licence</li>
                <li>• driving theory test</li>
                <li>• drivers license renewal</li>
                <li>• deutscher führerschein</li>
                <li>• permiso de conducir b</li>
                <li>• renovar permiso de conducir</li>
                <li>• permiso internacional de conducir</li>
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 className="font-semibold text-zinc-900 mb-3">
                Residence Permits
              </h3>
              <ul className="space-y-1 text-sm text-zinc-600">
                <li>• UK residence permit</li>
                <li>• EU residence permit</li>
                <li>• Arbeitserlaubnis Deutschland</li>
                <li>• Niederlassungserlaubnis</li>
                <li>• Permesso di soggiorno</li>
                <li>• Spain residence permit</li>
                <li>• Germany residence permit</li>
                <li>• France residence permit</li>
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 className="font-semibold text-zinc-900 mb-3">ID Cards</h3>
              <ul className="space-y-1 text-sm text-zinc-600">
                <li>• ID card</li>
                <li>• identity card</li>
                <li>• id card UK</li>
                <li>• identity document</li>
                <li>• card application</li>
                <li>• national ID card</li>
                <li>• state ID card</li>
                <li>• identity verification</li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
}
