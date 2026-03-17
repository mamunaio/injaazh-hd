import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CounterCardProps {
  end: number;
  suffix?: string;
  label: string;
}

const CounterCard = ({ end, suffix = "+", label }: CounterCardProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="font-heading text-4xl md:text-5xl font-bold text-accent">
        {count}{suffix}
      </div>
      <p className="mt-2 text-sm text-primary-foreground/60 uppercase tracking-widest">{label}</p>
    </motion.div>
  );
};

export default CounterCard;
