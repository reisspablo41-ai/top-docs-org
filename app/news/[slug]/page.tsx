import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { blogPosts } from "@/app/blog/[slug]/page";

export default async function NewsPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const residenceSlugs = new Set([
    "permiso-residencia-espana-seo-guia",
    "permesso-di-soggiorno-guida-2025",
    "uk-residence-permit-essential-guide",
  ]);

  const passportSlugs = new Set([
    "passport-renewal-expedited-processing",
    "uk-passport-application-guide",
  ]);

  const serviceLink = passportSlugs.has(post.slug)
    ? { href: "/services/passport", label: "Passport Services" }
    : residenceSlugs.has(post.slug)
    ? {
        href: "/services/residence-permit",
        label: "Residence Permit Services",
      }
    : {
        href: "/services/drivers-license",
        label: "Driver's License Services",
      };

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <Link
        href="/news"
        className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-8"
      >
        <svg
          className="w-5 h-5"
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
        Back to News
      </Link>

      <article>
        <div className="relative aspect-video mb-8 rounded-xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={675}
            className="w-full h-full object-cover"
            unoptimized
          />
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-4 text-sm text-zinc-600 mb-4">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
            {post.title}
          </h1>
        </div>

        <div
          className="prose prose-lg max-w-none prose-headings:text-zinc-900 prose-p:text-zinc-700 prose-ul:text-zinc-700 prose-li:text-zinc-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 pt-8 border-t border-zinc-200 flex items-center justify-between">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium"
          >
            <svg
              className="w-5 h-5"
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
            Back to News
          </Link>
          <Link
            href={serviceLink.href}
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium"
          >
            {serviceLink.label}
            <svg
              className="w-5 h-5"
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
          </Link>
        </div>
      </article>
    </main>
  );
}

