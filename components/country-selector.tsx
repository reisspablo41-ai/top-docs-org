'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const countries = [
  {
    name: 'Germany',
    flag: '🇩🇪',
    url: 'https://topdocs.de',
    isExternal: true,
  },
  {
    name: 'United Kingdom',
    flag: '🇬🇧',
    url: 'https://topdocs.uk',
    isExternal: true,
  },
  {
    name: 'Spain',
    flag: '🇪🇸',
    url: 'https://topdocs.es',
    isExternal: true,
  },
  {
    name: 'France',
    flag: '🇫🇷',
    url: '/contact',
    isExternal: false,
  },
  {
    name: 'Italy',
    flag: '🇮🇹',
    url: '/contact',
    isExternal: false,
  },
  {
    name: 'Netherlands',
    flag: '🇳🇱',
    url: '/contact',
    isExternal: false,
  },
  {
    name: 'Belgium',
    flag: '🇧🇪',
    url: '/contact',
    isExternal: false,
  },
  {
    name: 'Austria',
    flag: '🇦🇹',
    url: '/contact',
    isExternal: false,
  },
  {
    name: 'Switzerland',
    flag: '🇨🇭',
    url: '/contact',
    isExternal: false,
  },
  {
    name: 'Portugal',
    flag: '🇵🇹',
    url: '/contact',
    isExternal: false,
  },
  {
    name: 'Greece',
    flag: '🇬🇷',
    url: '/contact',
    isExternal: false,
  },
  {
    name: 'Poland',
    flag: '🇵🇱',
    url: '/contact',
    isExternal: false,
  },
];

export function CountrySelector() {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeInUp}
      className="mt-8"
    >
      <Card className="bg-gradient-to-br from-teal-50 to-blue-50 border-teal-200">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-zinc-900 mb-4 text-center">
            Order by Country
          </h3>
          <p className="text-sm text-zinc-600 mb-6 text-center">
            Select your country to proceed with your order
          </p>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {countries.map((country) => {
              const ButtonContent = (
                <Button
                  variant="outline"
                  className="w-full h-auto py-4 flex flex-col items-center gap-2 bg-white hover:bg-teal-50 border-2 border-teal-200 hover:border-teal-400 transition-all"
                >
                  <span className="text-3xl">{country.flag}</span>
                  <span className="font-semibold text-zinc-900">
                    {country.name}
                  </span>
                  <span className="text-sm text-teal-600 font-medium">
                    Order Now
                  </span>
                </Button>
              );

              if (country.isExternal) {
                return (
                  <a
                    key={country.name}
                    href={country.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {ButtonContent}
                  </a>
                );
              }

              return (
                <Link key={country.name} href={country.url} className="block">
                  {ButtonContent}
                </Link>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

