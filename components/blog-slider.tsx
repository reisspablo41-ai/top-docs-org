"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "renew-my-georgia-drivers-license-easy-steps",
    title: "Renew my Georgia driver's license: Easy steps",
    excerpt: "Is it time to renew my Georgia driver's license? Don't worry, the process is often simpler than you think. This guide walks you through the essential steps.",
    image: "https://onlinelegitdocuments.com/wp-content/uploads/2025/10/renew-my-georgia-drivers-license-560x420.webp",
    date: "October 16, 2025",
    author: "Admin",
  },
  {
    id: 2,
    slug: "lost-your-drivers-license-florida-replace-fast",
    title: "Lost Your Driver's License in Florida? Here's How to Replace It Fast",
    excerpt: "Losing your driver's license can be a hassle, but replacing your driver's license lost Florida doesn't have to be complicated. Learn the quick steps here.",
    image: "https://onlinelegitdocuments.com/wp-content/uploads/2025/10/drivers-license-lost-florida.jpg",
    date: "October 16, 2025",
    author: "Admin",
  },
  {
    id: 3,
    slug: "check-drivers-license-status-florida",
    title: "Quick Guide: How to Check Driver's License Status Florida",
    excerpt: "Discover how to quickly check your driver's license status in Florida. This guide covers the online methods and what you need to know.",
    image: "https://onlinelegitdocuments.com/wp-content/uploads/2025/10/check-drivers-license-status-florida.jpg",
    date: "October 16, 2025",
    author: "Admin",
  },
  {
    id: 4,
    slug: "missouri-drivers-license-renewal-2025",
    title: "Missouri Drivers License Renewal: 2025",
    excerpt: "Facing your Missouri drivers license renewal? This essential guide breaks down everything you need to know for a smooth renewal process in 2025.",
    image: "https://onlinelegitdocuments.com/wp-content/uploads/2025/10/missouri-drivers-license-renewal.jpg",
    date: "October 16, 2025",
    author: "Admin",
  },
  {
    id: 5,
    slug: "california-drivers-license-renewal-guide",
    title: "California Driver's License Renewal: Complete Guide 2025",
    excerpt: "Everything you need to know about renewing your California driver's license. From online renewal to in-person requirements, we cover it all.",
    image: "https://images.pexels.com/photos/842961/pexels-photo-842961.jpeg",
    date: "October 15, 2025",
    author: "Admin",
  },
  {
    id: 6,
    slug: "texas-drivers-license-replacement-process",
    title: "Texas Driver's License Replacement: Step-by-Step Process",
    excerpt: "Lost or damaged your Texas driver's license? Follow our comprehensive guide to replace it quickly and efficiently through the official channels.",
    image: "https://images.pexels.com/photos/1058959/pexels-photo-1058959.jpeg",
    date: "October 14, 2025",
    author: "Admin",
  },
  {
    id: 7,
    slug: "new-york-drivers-license-renewal-online",
    title: "New York Driver's License Renewal: Online vs In-Person",
    excerpt: "Learn the differences between online and in-person renewal for your New York driver's license and choose the best option for your situation.",
    image: "https://images.pexels.com/photos/4922080/pexels-photo-4922080.jpeg",
    date: "October 13, 2025",
    author: "Admin",
  },
  {
    id: 8,
    slug: "illinois-drivers-license-renewal-requirements",
    title: "Illinois Driver's License Renewal: Requirements and Timeline",
    excerpt: "Understanding the requirements and timeline for renewing your Illinois driver's license. Get prepared with our detailed checklist and guide.",
    image: "https://images.pexels.com/photos/45113/pexels-photo-45113.jpeg",
    date: "October 12, 2025",
    author: "Admin",
  },
  {
    id: 9,
    slug: "passport-renewal-expedited-processing",
    title: "Passport Renewal: Expedited Processing Options",
    excerpt: "Need your passport renewed quickly? Explore expedited processing options and learn how to get your passport renewed in time for your travel plans.",
    image: "https://images.pexels.com/photos/29402986/pexels-photo-29402986.jpeg",
    date: "October 11, 2025",
    author: "Admin",
  },
  {
    id: 10,
    slug: "real-id-requirements-by-state",
    title: "Real ID Requirements by State: What You Need to Know",
    excerpt: "Comprehensive guide to Real ID requirements across different states. Ensure you have the right documentation for domestic air travel and federal facilities.",
    image: "https://images.pexels.com/photos/842961/pexels-photo-842961.jpeg",
    date: "October 10, 2025",
    author: "Admin",
  },
];

export function BlogSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(4);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const totalSlides = Math.ceil(blogPosts.length / visibleCount);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const getVisiblePosts = () => {
    const start = currentIndex * visibleCount;
    return blogPosts.slice(start, start + visibleCount);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <AnimatePresence mode="wait">
          {getVisiblePosts().map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative aspect-video overflow-hidden rounded-t-xl">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={560}
                      height={420}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  <CardContent className="pt-4">
                    <div className="flex items-center gap-2 text-xs text-zinc-600 mb-2">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-900 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-zinc-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="text-sm font-medium text-teal-600 hover:text-teal-700">
                      Read More →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={goToPrev}
          className="p-2 rounded-full border border-zinc-300 hover:bg-teal-50 hover:border-teal-600 transition-colors"
          aria-label="Previous posts"
        >
          <svg
            className="w-5 h-5 text-zinc-600"
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

        <div className="flex gap-2">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-teal-600 w-8"
                  : "bg-zinc-300 hover:bg-zinc-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-2 rounded-full border border-zinc-300 hover:bg-teal-50 hover:border-teal-600 transition-colors"
          aria-label="Next posts"
        >
          <svg
            className="w-5 h-5 text-zinc-600"
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
      </div>
    </div>
  );
}

