import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Briefcase, Users, Trophy } from 'lucide-react';

function CounterNumber({ target, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const numericTarget = parseInt(target, 10) || 0;
    const totalFrames = 60 * duration;
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // easeOutExpo calculation
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeProgress * numericTarget);

      setCount(current);

      if (frame >= totalFrames) {
        setCount(numericTarget);
        clearInterval(counter);
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const statsList = [
    {
      id: 'stat-years',
      target: 25,
      suffix: '+',
      label: 'Years Experience',
      desc: 'Quarter-century of structural leadership',
      icon: Briefcase
    },
    {
      id: 'stat-projects',
      target: 180,
      suffix: '+',
      label: 'Projects Completed',
      desc: 'Commercial, civic & residential landmarks',
      icon: Users
    },
    {
      id: 'stat-satisfaction',
      target: 95,
      suffix: '%',
      label: 'Client Satisfaction',
      desc: 'Repeat engagement and developer trust',
      icon: Trophy
    },
    {
      id: 'stat-awards',
      target: 40,
      suffix: '+',
      label: 'Industry Awards',
      desc: 'Excellence in design & safety engineering',
      icon: Award
    }
  ];

  return (
    <section
      id="statistics-section"
      className="relative z-20 bg-[#162238] text-white py-12 sm:py-16 border-y border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {statsList.map((stat, index) => {
            const Icon = stat.icon;
            const isLast = index === statsList.length - 1;

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className={`relative px-4 sm:px-8 flex flex-col justify-between ${
                  !isLast ? 'lg:border-r lg:border-white/10' : ''
                }`}
              >
                {/* Icon & Label */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-sm bg-[#0D1522] border border-[#E8892D]/30 flex items-center justify-center text-[#E8892D]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono tracking-wider text-[#CBD5E1]/80 uppercase">
                    METRIC 0{index + 1}
                  </span>
                </div>

                {/* Big Number */}
                <div className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight flex items-baseline">
                  <CounterNumber target={stat.target} suffix={stat.suffix} />
                  <span className="text-[#E8892D] ml-1">.</span>
                </div>

                {/* Title & Desc */}
                <div className="mt-2">
                  <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC]">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-[#CBD5E1]/80 mt-0.5 hidden sm:block">
                    {stat.desc}
                  </p>
                </div>

                {/* Subtle Orange bottom indicator */}
                <div className="w-8 h-0.5 bg-[#E8892D]/40 mt-4 rounded-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
