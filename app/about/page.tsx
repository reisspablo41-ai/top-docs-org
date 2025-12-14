'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
          Your trusted partner for professional identity and permit
          documentation services since 1995
        </p>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Our Mission
          </h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed text-zinc-900">
                At Top Docs Org, our mission is to deliver exceptional solutions
                tailored to your unique needs. We are dedicated to providing
                outstanding consulting services that streamline complex
                documentation procedures. With more than thirty years of industry
                experience, we have established ourselves as leaders in excellence,
                dependability, and steadfast commitment to achieving our clients'
                objectives.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-zinc-700">
                We understand that navigating official documentation
                requirements can be overwhelming. That's why we've made it our
                purpose to deliver clear, accurate guidance and high-quality
                services that help you achieve your goals efficiently and
                confidently.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Services & Specialization */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Our Services & Specialization
          </h2>
          <p className="text-lg text-zinc-800">
            We provide diverse solutions in document production, ranging from
            passports, driver's licenses, ID cards, residence permits,
            certificates, and more. Our expertise spans multiple jurisdictions
            and document types.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <Card>
            <CardHeader>
              <CardTitle>Travel Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Professional passport services with experience in American,
                European, Australian, UK, and Asian passports. We ensure quality
                database documents that meet international standards.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Identity Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Original driver's licenses and ID cards with appropriate
                holograms and security features. Our documents are registered
                and can pass any verification test.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Residence & Work Permits</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Comprehensive support for residence permits and work permits. We
                help you navigate the requirements and secure the documentation
                you need for your journey.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Quality, Experience & Trust */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Quality, Experience & Trust
          </h2>
        </motion.div>

        <motion.div variants={fadeInUp} className="grid gap-6 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-teal-600">
                Three Decades of Excellence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                We've been in this business since 1995, providing the best
                services to over 10,000 satisfied clients worldwide.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Completed Cases</span>
                  <span className="font-semibold text-teal-600">315+</span>
                </div>
                <div className="flex justify-between">
                  <span>Satisfied Customers</span>
                  <span className="font-semibold text-teal-600">966+</span>
                </div>
                <div className="flex justify-between">
                  <span>Expert Consultants</span>
                  <span className="font-semibold text-teal-600">868+</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-teal-600">
                Committed to Quality
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We have the best top-notch documents and services. Our quality
                standards ensure that every document meets the highest industry
                standards with appropriate security features, holograms, and
                verification capabilities.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-teal-600">
                Global Partnership
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We have 100% partnership with every government organization. Our
                extensive network and established relationships enable us to
                deliver reliable, authentic documentation services across
                multiple jurisdictions.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Why Choose Top Docs Org
          </h2>
        </motion.div>

        <motion.div variants={fadeInUp} className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-teal-600">
                🔒 Enhanced Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our system is secured to keep your information confidential. We
                follow strict privacy protocols and use encrypted communication
                channels to protect your sensitive data throughout the entire
                process.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-teal-600">
                ⚡ Prompt Delivery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our prompt delivery services always make sure that your document
                will reach your doorstep in the least time. We understand
                urgency and work efficiently to meet your deadlines without
                compromising quality.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-teal-600">👥 Great Team</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We have a great team ready to serve you 24/7. Our expert
                consultants are available around the clock to answer your
                questions, provide guidance, and ensure a smooth experience from
                start to finish.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-teal-600">
                💯 100% Satisfaction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We provide 100% satisfaction to every customer. You are our
                first priority. Our improved client service ensures that your
                needs are met with professionalism, attention to detail, and
                personalized support.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-teal-600">
                💰 Affordable Cost
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We offer competitive pricing without compromising on quality.
                Our transparent pricing structure ensures you know exactly what
                you're paying for, with no hidden fees or surprises.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-teal-600">
                🏆 High Success Rates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Building experience and giving high success rates is our
                commitment. Our track record speaks for itself—we deliver
                results that exceed expectations and build long-term trust with
                our clients.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Long-term Service */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Building Experience & High Success Rates
          </h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed text-zinc-700">
                Our long-term service commitment means we're here for you not
                just today, but for all your future documentation needs. We've
                built our reputation on consistency, reliability, and continuous
                improvement.
              </p>
              <p className="text-lg leading-relaxed text-zinc-900">
                Serving you in the best possible way is our topmost priority.
                We've invested in building experience that translates into high
                success rates for our clients. Every interaction, every
                document, and every service delivery is an opportunity to
                demonstrate our commitment to excellence.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="rounded-xl border border-zinc-200"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-zinc-900">
          Experience the difference that three decades of expertise can make.
          Contact us today for a free consultation and discover how we can help
          you achieve your documentation goals with confidence and ease.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">Contact Us Now</Button>
          </Link>
          <Link href="/services/passport">
            <Button variant="outline" size="lg">
              View Our Services
            </Button>
          </Link>
        </div>
        <p className="mt-6 text-sm text-zinc-800">
          Available 24/7 • Free Consultation • Secure & Confidential
        </p>
      </motion.section>
    </main>
  );
}
