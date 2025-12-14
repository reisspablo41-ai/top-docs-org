"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface NewsArticle {
  slug: string;
  title: string;
  image: string;
  date: string;
  category: string;
  excerpt: string;
}

const newsArticles: NewsArticle[] = [
  {
    slug: "dvla-driving-licence-online-services-guide",
    title: "DVLA Driving Licence Online: Apply, Replace & All Services Guide 2025",
    image:
      "https://onlinelegitdocuments.com/wp-content/uploads/2023/01/driver-1.jpg",
    date: "October 30, 2025",
    category: "Driver's License",
    excerpt:
      "Comprehensive overview of DVLA digital services, driving licence management, online application procedures, lost licence replacement, and available DVLA service options.",
  },
  {
    slug: "uk-driving-theory-test-practical-test-complete-guide",
    title: "UK Driving Theory Test & Practical Test: Complete Guide 2025",
    image:
      "https://onlinelegitdocuments.com/wp-content/uploads/2023/01/driver-2.jpg",
    date: "October 31, 2025",
    category: "Driver's License",
    excerpt:
      "Complete information on UK theory examinations, practical test procedures, digital test booking systems, and strategies for successful test completion.",
  },
  {
    slug: "professional-driver-license-cpc-licence-guide",
    title: "Professional Driver License & CPC Licence: Complete Guide 2025",
    image:
      "https://onlinelegitdocuments.com/wp-content/uploads/2023/01/driver-3.jpg",
    date: "November 1, 2025",
    category: "Driver's License",
    excerpt:
      "Detailed overview of professional driving credentials, CPC certification requirements, practical examination procedures, and professional competence documentation.",
  },
  {
    slug: "motorcycle-license-uk-complete-guide",
    title: "Motorcycle License UK: A1, A2 & Full Motorcycle Licence Guide 2025",
    image:
      "https://onlinelegitdocuments.com/wp-content/uploads/2023/01/driver-1.jpg",
    date: "November 2, 2025",
    category: "Driver's License",
    excerpt:
      "Comprehensive information on motorcycle licensing, UK motorcycle credentials, A1 category requirements, permit procedures, and theory examination details.",
  },
  {
    slug: "lost-driving-licence-replacement-uk-guide",
    title: "Lost Driving Licence UK: Replacement Process & Guide 2025",
    image:
      "https://onlinelegitdocuments.com/wp-content/uploads/2023/01/driver-2.jpg",
    date: "November 3, 2025",
    category: "Driver's License",
    excerpt:
      "Step-by-step instructions for lost licence replacement, UK replacement procedures, required documentation, and efficient replacement strategies.",
  },
  {
    slug: "buy-legal-uk-european-driving-license-guide",
    title: "Where to Buy a Legal UK Driving License & European Driving License: Complete Guide 2025",
    image:
      "https://onlinelegitdocuments.com/wp-content/uploads/2023/01/driver-3.jpg",
    date: "October 29, 2025",
    category: "Driver's License",
    excerpt:
      "Authorized pathways for obtaining UK driving credentials, European licence acquisition, EU driving documentation, and international permit requirements through official channels.",
  },
  {
    slug: "uk-driving-licence-complete-guide-2025",
    title: "UK Driving Licence: Apply, Replace, Renew & Complete Guide 2025",
    image:
      "https://onlinelegitdocuments.com/wp-content/uploads/2023/01/driver-2.jpg",
    date: "October 28, 2025",
    category: "Driver's License",
    excerpt:
      "Detailed procedures for UK licence applications, provisional licence requirements, replacement processes, DVLA services, test scheduling, and renewal procedures.",
  },
  {
    slug: "deutscher-fuehrerschein-umschreibung-uebersetzung-guide",
    title: "Deutscher Führerschein: Umschreibung, Übersetzung & alle wichtigen Infos 2025",
    image:
      "https://onlinelegitdocuments.com/wp-content/uploads/2023/01/driver-1.jpg",
    date: "October 27, 2025",
    category: "Driver's License",
    excerpt:
      "Alles über deutschen Führerschein, Führerschein übersetzen lassen, beglaubigte Übersetzung Führerschein, Umschreibung ausländischer Führerschein und deutsche Fahrerlaubnis.",
  },
  {
    slug: "como-sacar-pasaporte-mexicano-guia-completa",
    title: "Cómo sacar el pasaporte mexicano: Guía completa 2025",
    image:
      "https://onlinelegitdocuments.com/wp-content/uploads/2023/01/pass1.jpg",
    date: "October 26, 2025",
    category: "Passports",
    excerpt:
      "Aprende cómo sacar cita para pasaporte, requisitos para sacar pasaporte mexicano, dónde tramitar tu pasaporte y todos los pasos para obtener tu pasaporte por primera vez o renovarlo.",
  },
  {
    slug: "uk-passport-application-guide",
    title: "UK passport application & renewal guide 2025",
    image:
      "https://e3.365dm.com/25/10/2048x1152/skynews-new-passport-uk-passport_7048171.jpg?20251011010412",
    date: "October 25, 2025",
    category: "Passports",
    excerpt:
      "Checklist for UK passport eligibility, fees, Fast Track vs Premium services, child applications and lost passport replacements.",
  },
  {
    slug: "uk-residence-permit-essential-guide",
    title: "UK Residence Permit (BRP) 2025: Everything you need to know",
    image:
      "https://assets.publishing.service.gov.uk/media/61fbba588fa8f538882511e4/s960_1_BRP_example.png",
    date: "October 25, 2025",
    category: "Compliance",
    excerpt:
      "Eligibility, documents and renewal timelines for the Biometric Residence Permit covering students, workers and dependants across the UK.",
  },
  {
    slug: "permesso-di-soggiorno-guida-2025",
    title: "Permesso di soggiorno temporaneo y permanente: Guía 2025",
    image:
      "https://legitpass.com/wp-content/uploads/2024/07/Italian-RP.jpg",
    date: "October 24, 2025",
    category: "Compliance",
    excerpt:
      "Requisitos para el permesso temporaneo, permesso permanente y Carta di soggiorno, con pasos para vincularlo a tus servicios migratorios.",
  },
  {
    slug: "permiso-residencia-espana-seo-guia",
    title: "Permiso de residencia en España: Checklist 2025",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "October 24, 2025",
    category: "Compliance",
    excerpt:
      "Temporal, no lucrativa y larga duración: documentos, tasas y citas para asegurar tu residencia en España sin retrasos.",
  },
  {
    slug: "renovar-permiso-conducir-caducado",
    title: "Renovar permiso de conducir caducado: Checklist express 2025",
    image: "/images/spanish-license-back.svg",
    date: "October 23, 2025",
    category: "Driver's License",
    excerpt:
      "Documentos, tasas y citas que necesitas para reactivar un carnet vencido y evitar multas o problemas con el seguro.",
  },
  {
    slug: "permiso-conducir-b-guia-completa",
    title: "Permiso de conducir B: Requisitos y trucos para aprobar",
    image: "/images/spanish-license-front.svg",
    date: "October 23, 2025",
    category: "Driver's License",
    excerpt:
      "Todo sobre el carnet B: edad mínima, exámenes teórico-prácticos, maniobras clave y keywords para encontrar recursos oficiales.",
  },
  {
    slug: "permiso-internacional-conducir-guia",
    title: "Permiso internacional de conducir: Guía rápida antes de viajar",
    image: "/images/spanish-license-front.svg",
    date: "October 22, 2025",
    category: "Driver's License",
    excerpt:
      "Requisitos, países válidos y consejos para tramitar el PIC y conducir legalmente en el extranjero.",
  },
  {
    slug: "centros-examenes-permiso-conducir",
    title: "Centro de exámenes para permisos de conducir: Cómo elegir",
    image: "/images/spanish-license-back.svg",
    date: "October 22, 2025",
    category: "Driver's License",
    excerpt:
      "Tipos de centros, documentos, exámenes y errores frecuentes para aprobar a la primera.",
  },
  {
    slug: "niederlassungserlaubnis-deutschland-seo-guide",
    title: "Niederlassungserlaubnis Deutschland – Kompakter SEO-Leitfaden",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "October 21, 2025",
    category: "Compliance",
    excerpt:
      "Schritt-für-Schritt zur unbefristeten Aufenthaltserlaubnis: Voraussetzungen, Unterlagen, Behördentermine und Vorteile übersichtlich erklärt.",
  },
  {
    slug: "arbeitserlaubnis-deutschland-seo-zusammenfassung",
    title: "Arbeitserlaubnis Deutschland – Kurz & SEO-freundliche Zusammenfassung",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "October 20, 2025",
    category: "Compliance",
    excerpt:
      "Erfahren Sie, welche Voraussetzungen für eine deutsche Arbeitserlaubnis gelten, welche Varianten es gibt und wie Sie den Antrag bei der Ausländerbehörde reibungslos stellen.",
  },
  {
    slug: "renew-my-georgia-drivers-license-easy-steps",
    title: "Renew my Georgia driver's license: Easy steps",
    image: "https://onlinelegitdocuments.com/wp-content/uploads/2025/10/renew-my-georgia-drivers-license-560x420.webp",
    date: "October 16, 2025",
    category: "Driver's License",
    excerpt:
      "Is it time to renew your Georgia driver's license? Follow these simplified steps to stay compliant and avoid delays.",
  },
  {
    slug: "lost-your-drivers-license-florida-replace-fast",
    title: "Lost Your Driver's License in Florida? Here's How to Replace It Fast",
    image: "https://onlinelegitdocuments.com/wp-content/uploads/2025/10/drivers-license-lost-florida.jpg",
    date: "October 16, 2025",
    category: "Driver's License",
    excerpt:
      "Misplaced your Florida license? Learn the quickest way to replace it with these actionable steps.",
  },
  {
    slug: "check-drivers-license-status-florida",
    title: "Quick Guide: How to Check Driver's License Status Florida",
    image: "https://onlinelegitdocuments.com/wp-content/uploads/2025/10/check-drivers-license-status-florida.jpg",
    date: "October 16, 2025",
    category: "Driver's License",
    excerpt:
      "Need to verify your Florida license status? Here's a quick guide to checking it online, by phone, or in person.",
  },
  {
    slug: "missouri-drivers-license-renewal-2025",
    title: "Missouri Drivers License Renewal: 2025",
    image: "https://onlinelegitdocuments.com/wp-content/uploads/2025/10/missouri-drivers-license-renewal.jpg",
    date: "October 16, 2025",
    category: "Driver's License",
    excerpt:
      "Understand the 2025 Missouri renewal process, documents required, and the timelines to stay on the road legally.",
  },
  {
    slug: "california-drivers-license-renewal-guide",
    title: "California Driver's License Renewal: A Comprehensive Guide",
    image: "https://onlinelegitdocuments.com/wp-content/uploads/2023/01/driver-1.jpg",
    date: "October 15, 2025",
    category: "Driver's License",
    excerpt:
      "Everything you need to renew your California license, including eligibility, documents, and renewal channels.",
  },
  {
    slug: "texas-drivers-license-replacement-process",
    title: "Texas Driver's License Replacement: What to Do When Lost",
    image: "https://onlinelegitdocuments.com/wp-content/uploads/2023/01/driver-2.jpg",
    date: "October 14, 2025",
    category: "Driver's License",
    excerpt:
      "Lost your Texas license? Follow these steps to report, verify, and get a replacement quickly.",
  },
  {
    slug: "passport-renewal-expedited-processing",
    title: "Passport Renewal: Expedited Processing Options for Urgent Travel",
    image: "https://images.pexels.com/photos/163064/lie-detector-polygraph-fake-false-163064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "October 11, 2025",
    category: "Passports",
    excerpt:
      "Need a passport fast? Explore expedited services, agency appointments, and courier options.",
  },
  {
    slug: "real-id-requirements-by-state",
    title: "Real ID Requirements by State: What You Need to Know",
    image: "https://images.pexels.com/photos/842961/pexels-photo-842961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "October 10, 2025",
    category: "Compliance",
    excerpt:
      "Stay ahead of Real ID deadlines. See what documents each state requires and how to prepare.",
  },
  {
    slug: "illinois-drivers-license-renewal-requirements",
    title: "Illinois Driver's License Renewal Guide: Stay Compliant",
    image: "https://onlinelegitdocuments.com/wp-content/uploads/2023/01/driver-3.jpg",
    date: "October 12, 2025",
    category: "Driver's License",
    excerpt:
      "Step-by-step instructions for updating your Illinois driver's license with new Real ID standards.",
  },
  {
    slug: "am-fuhrerschein-alles-was-du-wissen-musst",
    title: "Am Führerschein: Alles, was du wissen musst, um deinen Führerschein zu bekommen",
    image: "https://onlinelegitdocuments.com/wp-content/uploads/2023/01/driver-1.jpg",
    date: "October 17, 2025",
    category: "Driver's License",
    excerpt:
      "Der Führerschein ist ein wichtiger Schritt zur Mobilität und Unabhängigkeit. Erfahre alles über den Ablauf, Tipps zur Vorbereitung und häufige Fehler, die du vermeiden solltest.",
  },
  {
    slug: "motorrad-fuhrerschein-deutschland-alles-wissen",
    title: "Alles, was Sie über den Motorrad Führerschein in Deutschland wissen müssen",
    image: "https://onlinelegitdocuments.com/wp-content/uploads/2023/01/driver-2.jpg",
    date: "October 18, 2025",
    category: "Driver's License",
    excerpt:
      "Der Erwerb eines Motorrad Führerscheins ist der erste Schritt zur Freiheit des Motorradfahrens. Erfahren Sie alles über Klassen, Voraussetzungen und den Erwerbsprozess.",
  },
  {
    slug: "wann-fuhrerschein-umtauschen-alles-wissen",
    title: "Wann muss ich meinen Führerschein umtauschen? – Alles, was Sie wissen müssen",
    image: "https://onlinelegitdocuments.com/wp-content/uploads/2023/01/driver-3.jpg",
    date: "October 19, 2025",
    category: "Driver's License",
    excerpt:
      "Wichtige Informationen über Führerscheinumtausch in Deutschland. Erfahren Sie Fristen, Anforderungen und wie Sie den Umtausch rechtzeitig durchführen.",
  },
];

const categories = ["All", "Driver's License", "Passports", "Compliance"];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? newsArticles
      : newsArticles.filter((article) => article.category === activeCategory);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 space-y-12">
      {/* Hero */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="rounded-3xl bg-gradient-to-br from-teal-600 via-teal-500 to-teal-700 text-white p-10 md:p-16 shadow-lg"
      >
        <p className="text-sm uppercase tracking-[0.4em] text-white/80 mb-4">
          News & Updates
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          Stay current on identity, permits, and compliance updates.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl">
          Practical guidance, renewal reminders, and regulatory insights that help
          you navigate global document requirements confidently.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/contact">
            <Button className="bg-white text-teal-700 hover:bg-zinc-100">
              Talk to an expert
            </Button>
          </Link>
          <a
            href="#latest-news"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white font-semibold"
          >
            Browse latest updates
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </motion.section>

      {/* Filters */}
      <section className="space-y-4">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-teal-600 text-white shadow-sm"
                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <p className="text-sm text-zinc-500">
          Showing {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""} in{" "}
          {activeCategory === "All" ? "all categories" : activeCategory}
        </p>
      </section>

      {/* News Cards */}
      <motion.section
        id="latest-news"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filteredArticles.map((article) => (
          <motion.div key={article.slug} variants={fadeInUp}>
            <Card className="h-full flex flex-col overflow-hidden">
              <div className="relative w-full h-52">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                />
                <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
                  {article.category}
                </span>
              </div>
              <CardHeader className="flex-1">
                <p className="text-xs uppercase tracking-wider text-zinc-500 mb-2">
                  {article.date}
                </p>
                <CardTitle className="text-xl leading-tight text-zinc-900">
                  <Link href={`/news/${article.slug}`} className="hover:text-teal-600 transition-colors">
                    {article.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="text-sm text-zinc-700 leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <Link
                    href={`/news/${article.slug}`}
                    className="text-sm font-semibold text-teal-600 hover:text-teal-700 inline-flex items-center gap-1"
                  >
                    Read more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <span className="text-xs text-zinc-500 uppercase tracking-wide">3 min read</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.section>

      {/* CTA */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="rounded-2xl border border-zinc-200 p-8 text-center space-y-4"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900">
          Need personalized guidance for your next document?
        </h2>
        <p className="text-zinc-700 max-w-2xl mx-auto">
          Our consultants monitor global compliance updates so you don&apos;t have to. Reach out for
          tailored checklists, document reviews, and expedited scheduling support.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact">
            <Button>Contact us</Button>
          </Link>
          <Link href="/how-to-order">
            <Button variant="outline">How to order</Button>
          </Link>
        </div>
      </motion.section>
    </main>
  );
}


