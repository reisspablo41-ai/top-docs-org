'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 space-y-16">
      {/* Hero Section */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
          Our Services
        </h1>
        <p className="text-lg md:text-xl text-zinc-700 max-w-3xl mx-auto leading-relaxed">
          We specialize in both fully registered database documents and high-fidelity replica
          versions tailored to your requirements. Bypass the bureaucracy—get
          secure, verified results delivered properly and privately.
        </p>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        <motion.div
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
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
                    Passport Services
                  </h3>
                  <p className="text-white/90 text-sm">
                    Secure, registered passports utilizing advanced
                    production methods for maximum authenticity.
                  </p>
                </div>
                {/* Hover Overlay - Teal600 with additional text */}
                <div className="absolute inset-0 bg-teal-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-white">
                  <h3 className="text-3xl font-semibold mb-4 text-center">
                    Passport Assistance
                  </h3>
                  <p className="text-lg mb-4 text-center">
                    Request premium, database-verified passports crafted with
                    cutting-edge printing techniques. We ensure discreet,
                    rapid, and top-tier documentation compliant with standard
                    security protocols. Whether for a new start or a
                    replacement, we manage the entire process smoothly.
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
                    Driver&apos;s Licence
                  </h3>
                  <p className="text-white/90 text-sm">
                    Acquire professionally crafted driver&apos;s licenses designed to
                    withstand detailed inspection.
                  </p>
                </div>
                {/* Hover Overlay - Teal600 with additional text */}
                <div className="absolute inset-0 bg-teal-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-white">
                  <h3 className="text-3xl font-semibold mb-4 text-center">
                    Driver&apos;s Licence
                  </h3>
                  <p className="text-lg mb-4 text-center">
                    Get highly realistic driver&apos;s licenses equipped for scanning
                    and verification. Our cards include accurate holograms,
                    barcodes, and UV elements indistinguishable from the original. We
                    cover all jurisdictions, meeting official specifications.
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
                    ID Card Solutions
                  </h3>
                  <p className="text-white/90 text-sm">
                    Secure top-grade national ID cards with complete security layering
                    and custom biographical data.
                  </p>
                </div>
                {/* Hover Overlay - Teal600 with additional text */}
                <div className="absolute inset-0 bg-teal-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-white">
                  <h3 className="text-3xl font-semibold mb-4 text-center">
                    ID Card Solutions
                  </h3>
                  <p className="text-lg mb-4 text-center">
                    Procure high-fidelity ID cards featuring magnetic strips,
                    chip encoding, and signature panels. We
                    promise exceptional accuracy, rapid delivery, and
                    constant support. Your personal privacy is our
                    absolute priority.
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

        {/* Residence Permit Cards - Below the main 3 */}
        <div className="grid gap-6 lg:grid-cols-2 mt-6">
          <motion.div variants={fadeInUp}>
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
                    Residence Permit Assistance
                  </h3>
                  <p className="text-white/90 text-sm">
                    Request authentic Resident Cards with comprehensive security
                    integration and backend registration.
                  </p>
                </div>
                {/* Hover Overlay - Teal600 with additional text */}
                <div className="absolute inset-0 bg-teal-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-white">
                  <h3 className="text-3xl font-semibold mb-4 text-center">
                    Residence Permit Assistance
                  </h3>
                  <p className="text-lg mb-4 text-center">
                    Request authentic Resident Cards with comprehensive security
                    integration and backend registration. We handle permits for
                    various countries including biometric data, chips,
                    and machine-readable zones. Skip the bureaucracy — your
                    card is crafted and shipped discreetly with guaranteed validity.
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
          <motion.div variants={fadeInUp}>
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
                    Clean Australian Driving History
                  </h3>
                  <p className="text-white/90 text-sm">
                    Need a fresh Australian driving record? We offer confidential
                    and rapid record correction.
                  </p>
                </div>
                {/* Hover Overlay - Teal600 with additional text */}
                <div className="absolute inset-0 bg-teal-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-white">
                  <h3 className="text-3xl font-semibold mb-4 text-center">
                    Clean Australian Driving History
                  </h3>
                  <p className="text-lg mb-4 text-center">
                    Need a fresh Australian driving record? We offer confidential
                    and rapid record correction. Points, suspensions,
                    and violations can be cleared from your file via our
                    secure network. Your updated record will appear flawless
                    in all standard checks.
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

        {/* Production & Delivery and Security Cards */}
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
                  Production normally takes 1–3 business days. Our workflow is
                  fast, private, and location-specific. Most orders are finalized
                  within 72 hours, with shipping duration depending on your
                  region. We offer consistent updates to keep your
                  order on schedule.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>
                    Customized document requirements based on your country
                  </li>
                  <li>Submission schedules aligned to official processing</li>
                  <li>Real-time progress updates and delivery notifications</li>
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
                  Your privacy is our top priority. All orders are handled using
                  secure communication channels, encrypted workflows, and strict
                  confidentiality protocols. We only request the minimum
                  information required to process your file.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Zero data retention policy</li>
                  <li>Encrypted messaging and secure payment</li>
                  <li>Stealth shipping methods</li>
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
                  DOCUMENT SOLUTIONS FOR EVERY NEED?
                </h3>
              </div>
              <p className="text-xl text-zinc-700 leading-relaxed">
                Since 2013, we&apos;ve dedicated ourselves to providing top-tier
                documentation with unmatched precision. A decade of
                experience has established us as a premier provider in the
                industry, delivering fast, verified, and expert solutions
                for clients globally.
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
                We possess deep expertise in crafting American, European,
                Australian, UK, and Asian passports. Our professional
                services are accessible globally, guaranteeing quality and
                validity in every item we create.
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
    </main>
  );
}
