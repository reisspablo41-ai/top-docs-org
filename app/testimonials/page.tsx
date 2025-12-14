"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "R.S.",
    role: "Customer",
    rating: 5,
    text: "I needed something that looked polished and secure. The quiet way they handled everything was exactly why I ended up here.",
  },
  {
    id: 2,
    name: "J.B.",
    role: "Customer",
    rating: 5,
    text: "The attention to detail surprised me. The layered textures and clean finish were better than anything I'd seen online.",
  },
  {
    id: 3,
    name: "D.A.",
    role: "Customer",
    rating: 5,
    text: "I found this place during a stressful moment. The discreet approach and clear communication made the process feel safe.",
  },
  {
    id: 4,
    name: "M.H.",
    role: "Customer",
    rating: 5,
    text: "What pulled me in were the subtle security-style features they showed. It felt like they understood what people really look for.",
  },
  {
    id: 5,
    name: "C.S.",
    role: "Customer",
    rating: 5,
    text: "I just needed something that looked presentable for a personal situation. They kept everything quiet and straightforward.",
  },
  {
    id: 6,
    name: "E.K.",
    role: "Customer",
    rating: 5,
    text: "The design quality stood out immediately — sharp lines, consistent layout, and well-structured information. No loud promises, just results.",
  },
  {
    id: 7,
    name: "D.R.",
    role: "Customer",
    rating: 5,
    text: "I was tired of delays and missing documents. Their low-trace processing and calm tone made me feel like I finally had a backup plan.",
  },
  {
    id: 8,
    name: "T.S.",
    role: "Customer",
    rating: 5,
    text: "I appreciated the clarity. No extra questions, no pressure — just clean, high-detail work delivered quietly.",
  },
  {
    id: 9,
    name: "V.L.",
    role: "Customer",
    rating: 5,
    text: "The private, no-contact style is what convinced me. They really know how to operate without drawing attention.",
  },
  {
    id: 10,
    name: "N.P.",
    role: "Customer",
    rating: 5,
    text: "Everything looked professional — from the layout to the security-style finishes. It made me understand why people choose places like this.",
  },
  {
    id: 11,
    name: "A.O.",
    role: "Customer",
    rating: 5,
    text: "I needed something for a sensitive situation. The organized formats and discreet communication gave me a sense of control.",
  },
  {
    id: 12,
    name: "F.M.",
    role: "Customer",
    rating: 5,
    text: "When official options failed me, this platform felt like the only place offering structure and reliability without the stress.",
  },
  {
    id: 13,
    name: "Y.D.",
    role: "Customer",
    rating: 5,
    text: "The secure channels and silent updates were the biggest reasons I stayed. It felt like everything was handled in the background smoothly.",
  },
  {
    id: 14,
    name: "K.R.",
    role: "Customer",
    rating: 5,
    text: "I came here because I needed something done quickly. The precision and confidentiality made me feel like I wasn't alone in the process.",
  },
  {
    id: 15,
    name: "H.M.",
    role: "Customer",
    rating: 5,
    text: "The presentation looked authentic and well-crafted. For anyone who feels stuck, places like this start to make sense.",
  },
  {
    id: 16,
    name: "J.B.",
    role: "Customer",
    rating: 5,
    text: "The precision was unsettling in the best way. Clean layers, structured data, and security-style markings so subtle you almost miss them. It's the kind of work you only see from people who operate off the grid.",
  },
  {
    id: 17,
    name: "D.A.",
    role: "Customer",
    rating: 5,
    text: "I'd exhausted every legitimate channel. This place didn't make promises… they just delivered quiet professionalism. No noise. No trace. No slip-ups.",
  },
  {
    id: 18,
    name: "M.H.",
    role: "Customer",
    rating: 5,
    text: "Their process felt like it was designed for people who can't afford mistakes. Encrypted conversations, controlled timelines, and details handled like classified material.",
  },
  {
    id: 19,
    name: "C.S.",
    role: "Customer",
    rating: 5,
    text: "When you're dealing with a sensitive situation, you can't gamble. The subdued layouts and the way they replicated protective elements told me I was dealing with specialists… the kind that don't advertise themselves.",
  },
  {
    id: 20,
    name: "E.K.",
    role: "Customer",
    rating: 5,
    text: "The work carried that 'professional but unlisted' energy — the kind you don't question because the people behind it clearly know more than they say.",
  },
  {
    id: 21,
    name: "V.L.",
    role: "Customer",
    rating: 5,
    text: "They operate like a shadow office — minimal contact, strict privacy, and results that show an uncomfortable level of expertise.",
  },
  {
    id: 22,
    name: "N.P.",
    role: "Customer",
    rating: 5,
    text: "The thing that struck me most was the controlled aesthetic. Every line, mark, and segment looked like it was modeled after internal government templates — not copied, but understood.",
  },
  {
    id: 23,
    name: "A.O.",
    role: "Customer",
    rating: 5,
    text: "For those of us caught between deadlines and red tape, this kind of service feels like a lifeline. They know their lane and stay in it — quiet, efficient, invisible.",
  },
  {
    id: 24,
    name: "F.M.",
    role: "Customer",
    rating: 5,
    text: "Professional doesn't even begin to describe it. The work felt like something crafted in a back office you're not supposed to know exists.",
  },
  {
    id: 25,
    name: "K.R.",
    role: "Customer",
    rating: 5,
    text: "They didn't try to sell me anything. They simply asked for what was needed, and the final result looked like it had been produced by someone with top-tier technical access.",
  },
  {
    id: 26,
    name: "H.M.",
    role: "Customer",
    rating: 5,
    text: "The craftsmanship, the protective textures, the tone… everything suggested a level of expertise that lives in the grey areas of the world. It was unsettling how good they were.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400 fill-current" : "text-zinc-300"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-semibold text-lg shrink-0">
      {initials}
    </div>
  );
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export default function TestimonialsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
          Customer Testimonials
        </h1>
        <p className="text-lg md:text-xl text-zinc-700 max-w-3xl mx-auto">
          Read what our satisfied customers have to say about their experience 
          with Top Docs Org. Over 10,000 clients trust us for their document needs.
        </p>
      </div>

      {/* Testimonials Grid */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {testimonials.map((testimonial) => (
          <motion.div key={testimonial.id} variants={fadeInUp}>
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar name={testimonial.name} />
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-zinc-600">{testimonial.role}</p>
                    <div className="mt-2">
                      <StarRating rating={testimonial.rating} />
                    </div>
                  </div>
                </div>
                <p className="text-zinc-700 leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <div className="bg-teal-50 border border-teal-200 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
          Ready to Join Our Satisfied Customers?
        </h2>
        <p className="text-zinc-700 mb-6">
          Experience the quality and service that thousands of clients trust. 
          Contact us today to get started.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
          >
            Contact Us
          </a>
          <a
            href="/how-to-order"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-teal-600 text-teal-600 rounded-md hover:bg-teal-50 transition-colors"
          >
            How to Order
          </a>
        </div>
      </div>
    </main>
  );
}

