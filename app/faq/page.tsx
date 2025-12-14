"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqCategories = [
  "General",
  "Passports",
  "Driver's Licenses",
  "ID Cards",
  "Residence Permits",
  "Work Permits",
  "Ordering & Payment",
  "Delivery & Shipping",
  "Security & Privacy",
];

const faqs: FAQItem[] = [
  // General
  {
    category: "General",
    question: "What services does Top Docs Org provide?",
    answer: "We provide professional guidance and support for official identity and permit documentation services, including passports, driver's licenses, ID cards, residence permits, and work permits. We've been serving clients since 1995 with expertise in American, European, Australian, UK, and Asian documents.",
  },
  {
    category: "General",
    question: "How long has Top Docs Org been in business?",
    answer: "We've been in this business since 1995, providing trusted document services to over 10,000 satisfied clients worldwide. Our long-standing presence demonstrates our commitment to quality and reliability.",
  },
  {
    category: "General",
    question: "What makes Top Docs Org different from other document services?",
    answer: "We offer three decades of experience, 24/7 customer support, secure and confidential handling of information, prompt delivery services, and affordable pricing. Our team of expert consultants is available around the clock to assist you with any questions or concerns.",
  },
  {
    category: "General",
    question: "Is your service legal and legitimate?",
    answer: "Yes, we provide guidance and support for lawful applications submitted to official authorities. We help you prepare and track your own submissions to official government organizations. All information provided is intended to assist with lawful applications only.",
  },
  {
    category: "General",
    question: "What countries do you serve?",
    answer: "We serve clients worldwide and have experience with documents from multiple jurisdictions including American, European, Australian, UK, and Asian passports and licenses. We provide guidance tailored to your specific location and document requirements.",
  },
  
  // Passports
  {
    category: "Passports",
    question: "What types of passports do you assist with?",
    answer: "We provide guidance for American, European, Australian, UK, and Asian passports. We help you understand eligibility requirements, required supporting documents, timeline guidance, and submission procedures for passport applications and renewals.",
  },
  {
    category: "Passports",
    question: "How long does passport processing take?",
    answer: "Processing times vary by country and document type. Typically, passport applications can take anywhere from 4-12 weeks for standard processing, or 2-3 weeks for expedited service. We provide realistic timeline guidance based on your specific jurisdiction and circumstances.",
  },
  {
    category: "Passports",
    question: "What documents do I need for a passport application?",
    answer: "Required documents typically include proof of identity (birth certificate, existing passport), proof of citizenship, passport photos meeting official specifications, completed application forms, and payment for fees. We provide detailed checklists tailored to your specific location and passport type.",
  },
  {
    category: "Passports",
    question: "Can you help with passport renewal?",
    answer: "Yes, we provide comprehensive guidance for passport renewals, including eligibility requirements, required documentation, submission procedures, and timeline expectations. We help ensure your renewal application is complete and compliant.",
  },
  {
    category: "Passports",
    question: "What if my passport is lost or stolen?",
    answer: "We provide guidance for replacing lost or stolen passports, including reporting requirements, necessary documentation, application procedures, and expedited processing options if you have urgent travel plans.",
  },
  
  // Driver's Licenses
  {
    category: "Driver's Licenses",
    question: "What types of driver's licenses do you assist with?",
    answer: "We provide guidance for driver's licenses from various jurisdictions including American states, European countries (including German licenses - Echter deutscher Führerschein), UK, Australian, and Asian licenses. We help with new applications, renewals, replacements, and status checks.",
  },
  {
    category: "Driver's Licenses",
    question: "How do I renew my driver's license?",
    answer: "Renewal processes vary by jurisdiction. We provide step-by-step guidance including eligibility requirements, required documents, online vs in-person renewal options, vision test requirements, and fee information specific to your location.",
  },
  {
    category: "Driver's Licenses",
    question: "What should I do if I lost my driver's license?",
    answer: "We guide you through the replacement process, which typically involves reporting the loss, gathering required identification documents, completing replacement forms, and submitting to the appropriate authority. Processing times and requirements vary by jurisdiction.",
  },
  {
    category: "Driver's Licenses",
    question: "How can I check my driver's license status?",
    answer: "We provide guidance on checking your license status through official online portals, in-person visits, or by phone. This includes understanding what information you'll need and how to interpret your license status (valid, suspended, revoked, expired).",
  },
  {
    category: "Driver's Licenses",
    question: "What documents are needed for a driver's license application?",
    answer: "Requirements vary by jurisdiction but typically include proof of identity, proof of residency, Social Security number, completed application forms, proof of completion of driver education (if required), and payment for fees. We provide jurisdiction-specific checklists.",
  },
  
  // ID Cards
  {
    category: "ID Cards",
    question: "What types of ID cards do you assist with?",
    answer: "We provide guidance for national ID cards, state ID cards, and non-driver identification cards from various jurisdictions. We help with new applications, renewals, replacements, and updates to existing ID cards.",
  },
  {
    category: "ID Cards",
    question: "How long does it take to get an ID card?",
    answer: "Processing times vary by jurisdiction, typically ranging from 1-4 weeks. Some locations offer expedited services for an additional fee. We provide timeline guidance based on your specific location and application type.",
  },
  {
    category: "ID Cards",
    question: "What documents do I need for an ID card application?",
    answer: "Required documents typically include proof of identity (birth certificate, passport), proof of residency (utility bill, bank statement), Social Security number, and payment for fees. We provide detailed checklists tailored to your jurisdiction.",
  },
  {
    category: "ID Cards",
    question: "Can I replace a lost or damaged ID card?",
    answer: "Yes, we provide guidance for replacing lost or damaged ID cards, including required documentation, application procedures, fees, and processing times. The process is typically similar to obtaining a new ID card.",
  },
  
  // Residence Permits
  {
    category: "Residence Permits",
    question: "What types of residence permits do you assist with?",
    answer: "We provide guidance for various residence permit categories including temporary residence permits, permanent residence permits, study permits, work-related permits, and family reunification permits. Requirements vary significantly by country and permit type.",
  },
  {
    category: "Residence Permits",
    question: "How long does residence permit processing take?",
    answer: "Processing times vary widely by country and permit type, typically ranging from 2-12 months. Some countries offer expedited processing for certain categories. We provide realistic timeline expectations based on your specific situation.",
  },
  {
    category: "Residence Permits",
    question: "What documents are required for a residence permit?",
    answer: "Requirements vary by country and permit type but commonly include valid passport, application forms, proof of financial means, health insurance, accommodation proof, sponsor letters (if applicable), and supporting documents specific to your permit category.",
  },
  {
    category: "Residence Permits",
    question: "Can you help with residence permit renewals?",
    answer: "Yes, we provide comprehensive guidance for residence permit renewals, including eligibility requirements, required documentation, submission procedures, timeline planning, and maintaining good standing throughout the renewal process.",
  },
  
  // Work Permits
  {
    category: "Work Permits",
    question: "What types of work permits do you assist with?",
    answer: "We provide guidance for various work permit categories including temporary work permits, skilled worker permits, seasonal work permits, and work authorization for different visa types. Requirements vary by country and employment situation.",
  },
  {
    category: "Work Permits",
    question: "How long does work permit processing take?",
    answer: "Processing times vary by country and permit type, typically ranging from 1-6 months. Some countries offer expedited processing for certain categories. We provide timeline guidance based on your specific employment situation and jurisdiction.",
  },
  {
    category: "Work Permits",
    question: "What documents are needed for a work permit application?",
    answer: "Common requirements include valid passport, job offer or employment contract, employer sponsorship documents, proof of qualifications, health insurance, and application forms. We provide detailed checklists based on your specific situation.",
  },
  
  // Ordering & Payment
  {
    category: "Ordering & Payment",
    question: "How do I place an order?",
    answer: "You can contact us through our website contact form or email (contact@topdocs.com). Our team will guide you through the process, provide a tailored checklist, and answer any questions you have.",
  },
  {
    category: "Ordering & Payment",
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods. Please contact us directly to discuss payment options available for your specific situation. We ensure secure and confidential handling of all payment information.",
  },
  {
    category: "Ordering & Payment",
    question: "Are your prices competitive?",
    answer: "Yes, we offer high-quality services at affordable prices. We provide transparent pricing with no hidden fees. Contact us for a personalized quote based on your specific document needs and requirements.",
  },
  {
    category: "Ordering & Payment",
    question: "Do you offer discounts for multiple documents?",
    answer: "We offer competitive pricing and may provide discounts for multiple documents or group applications. Contact us to discuss your specific needs and we'll provide the best pricing options available.",
  },
  
  // Delivery & Shipping
  {
    category: "Delivery & Shipping",
    question: "How long does delivery take?",
    answer: "Delivery timelines vary by document type and jurisdiction. Preparation typically takes 1-3 days, with delivery windows varying based on your location and the specific document. We provide realistic scheduling and status updates throughout the process.",
  },
  {
    category: "Delivery & Shipping",
    question: "How do you ensure secure delivery?",
    answer: "We use secure, confidential communication channels and privacy-conscious packaging. We provide status updates and practical tips on receiving official correspondence securely and reliably. Your privacy and security are our top priorities.",
  },
  {
    category: "Delivery & Shipping",
    question: "Can I track my order status?",
    answer: "Yes, we provide status notifications and milestone tracking throughout the process. You'll receive updates on your application progress, submission status, and delivery timeline. Our 24/7 support team is available to answer any questions.",
  },
  {
    category: "Delivery & Shipping",
    question: "What if I need expedited processing?",
    answer: "Expedited processing options vary by document type and jurisdiction. Contact us to discuss your timeline needs and we'll explore available expedited options and provide realistic expectations for your specific situation.",
  },
  
  // Security & Privacy
  {
    category: "Security & Privacy",
    question: "How do you protect my personal information?",
    answer: "We follow strict privacy-conscious practices, minimize data collection, and use secure channels for all communication. Your information is used only to provide guidance and assistance. We never share your information with third parties without your explicit consent.",
  },
  {
    category: "Security & Privacy",
    question: "Is my information kept confidential?",
    answer: "Absolutely. Confidentiality is our priority. All inquiries are handled with the utmost discretion and data security. We use encrypted communication channels and follow best practices for secure data handling.",
  },
  {
    category: "Security & Privacy",
    question: "What data do you collect?",
    answer: "We collect only the minimum information necessary to provide our services. This typically includes contact information and details relevant to your document application. We never collect more information than is necessary for your specific needs.",
  },
  {
    category: "Security & Privacy",
    question: "How do you ensure document authenticity?",
    answer: "We provide guidance for obtaining official documents through legitimate government channels. All documents are obtained through proper official authorities and meet all legal requirements and security standards for your jurisdiction.",
  },
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = faqs.filter((faq) => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-lg md:text-xl text-zinc-700 max-w-3xl mx-auto">
          Find answers to common questions about our services, ordering process, 
          delivery, and more. Can&apos;t find what you&apos;re looking for? 
          Contact our 24/7 support team.
          </p>
        </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        {faqCategories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setOpenIndex(0);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? "bg-teal-600 text-white"
                : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, index) => (
          <Card key={index} className="overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left"
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-zinc-900 pr-8">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-teal-600 flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-zinc-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </button>
          </Card>
        ))}
        </div>

      {/* Contact CTA */}
      <div className="bg-teal-50 border border-teal-200 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
          Still have questions?
        </h2>
        <p className="text-zinc-700 mb-6">
          Our 24/7 support team is here to help. Contact us for personalized 
          assistance with your specific needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
          >
            📧 Contact Us
          </a>
          <a
            href="mailto:contact@topdocs.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-teal-600 text-teal-600 rounded-md hover:bg-teal-50 transition-colors"
          >
            📧 Email Us
          </a>
        </div>
      </div>
    </main>
  );
}