"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CircularProgressProps {
  value: number; // Final value (e.g., 315)
  max: number; // Max value for percentage calculation (e.g., 1000)
  suffix?: string;
  label: string;
  size?: number;
  strokeWidth?: number;
}

export function CircularProgress({
  value,
  max,
  suffix = "",
  label,
  size = 120,
  strokeWidth = 8,
}: CircularProgressProps) {
  const [progress, setProgress] = useState(0);
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const percentage = (value / max) * 100;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progressPercent = Math.min(elapsed / duration, 1);

      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progressPercent, 4);
      const currentProgress = percentage * easeOutQuart;
      const currentValue = Math.floor(value * easeOutQuart);

      setProgress(currentProgress);
      setDisplayValue(currentValue);

      if (progressPercent < 1) {
        requestAnimationFrame(animate);
      } else {
        setProgress(percentage);
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, max, percentage]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-zinc-200"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="text-teal-600 transition-all duration-300"
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-2xl md:text-3xl font-bold text-teal-600">
            {displayValue}{suffix}
          </div>
        </div>
      </div>
      <p className="mt-3 text-sm md:text-base font-medium text-zinc-800 text-center">
        {label}
      </p>
    </div>
  );
}

