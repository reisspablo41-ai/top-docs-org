"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 space-y-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
          About Top Docs Org
        </h1>
        <p className="text-lg md:text-xl text-zinc-800">
          Your premier partner for secure identity and permit services, operating globally since 1995
        </p>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Mission</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed text-zinc-900">
                At Top Docs Org, our mission is to deliver the precise solution you need, every time.
                We specialize in consulting for complex documentation, making the process straightforward and stress-free.
                With over three decades of mastery, we are known for our excellence,
                dependability, and absolute dedication to client results.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-zinc-700">
                We know that official requirements can vary and feel confusing. That is why we focus on
                providing crystal-clear advice and top-tier execution to ensure you reach your
                objectives with speed and certainty.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Services & Specialization */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Services & Specialization</h2>
          <p className="text-lg text-zinc-800">
            We offer comprehensive production solutions for passports, driver&apos;s licenses,
            ID cards, resident permits, and various certificates. Our team handles requests across multiple
            international jurisdictions with precision.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Travel Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Expert passport assistance covering American, European, Australian, UK, and Asian regions. We guarantee quality database-registered documents compliant with global travel standards.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Identity Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Authentic-grade driver&apos;s licenses and ID cards featuring all necessary holograms and security protocols. Our items are crafted to pass verification checks seamlessly.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Residence & Work Permits</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Full guidance for residence and work permits. We help you cut through the red tape and secure the papers essential for your relocation or employment.</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Quality, Experience & Trust */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Quality, Experience & Trust</h2>
        </motion.div>

        <motion.div variants={fadeInUp} className="grid gap-6 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-teal-600">Three Decades of Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Operating since 1995, we have successfully assisted thousands of satisfied clients around the globe.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Completed Files</span>
                  <span className="font-semibold text-teal-600">315+</span>
                </div>
                <div className="flex justify-between">
                  <span>Happy Clients</span>
                  <span className="font-semibold text-teal-600">966+</span>
                </div>
                <div className="flex justify-between">
                  <span>Specialists</span>
                  <span className="font-semibold text-teal-600">868+</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-teal-600">Committed to Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We deliver only premium-grade documents. Our rigorous quality control ensures every item meets industry benchmarks, including scannable features, watermarks, and proper UV elements.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-teal-600">Global Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We maintain strong networks with various administrative channels. Our established connections allow us to provide authentic services across numerous countries efficiently.</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Why Choose Top Docs Org</h2>
        </motion.div>

        <motion.div variants={fadeInUp} className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-teal-600">🔒 Enhanced Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Strict confidentiality covers every step. We use encrypted systems and delete client data promptly after completion to protect your privacy.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-teal-600">⚡ Fast Turnaround</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We prioritize speed without sacrificing quality. Our optimized workflow ensures your documents are processed and shipped to meet even the tightest deadlines.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-teal-600">👥 Dedicated Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our support team is online 24/7. Whether you have questions or need updates, our specialists are always ready to assist you instantly.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-teal-600">💯 Client Satisfaction</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Your satisfaction is our metric for success. We go above and beyond to ensure every detail is perfect and your expectations are fully met.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-teal-600">💰 Competitive Rates</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Get premium service at fair prices. We offer clear, upfront costs with zero hidden charges, making professional documentation accessible.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-teal-600">🏆 Proven Success</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our long history of successful cases proves our capability. We deliver consistent results that build lasting trust with our clients.</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Long-term Service */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Building Experience & High Success Rates</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed text-zinc-700">
                We view every client relationship as a long-term partnership. Our goal is to be your go-to resource
                for any future documentation requirements, built on a foundation of trust and consistency.
              </p>
              <p className="text-lg leading-relaxed text-zinc-900">
                Serving you effectively is our main focus. We leverage decades of insight to ensure high approval
                rates. Every file is treated with the utmost care to guarantee you receive exactly what you need.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="rounded-xl border border-zinc-200"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-zinc-900">
          See what decades of professional experience can do for you. Reach out now for a free consultation
          and let us simplify your documentation journey.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">Contact Us Now</Button>
          </Link>
          <Link href="/services/passport">
            <Button variant="outline" size="lg">View Our Services</Button>
          </Link>
        </div>
        <p className="mt-6 text-sm text-zinc-800">
          Available 24/7 • Free Consultation • Secure & Confidential
        </p>
      </motion.section>
    </main>
  );
}