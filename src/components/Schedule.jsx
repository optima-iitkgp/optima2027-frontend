import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Layers } from "lucide-react";

const scheduleDays = [
  {
    day: "DAY 01",
    date: "March 12, 2027",
    dayOfWeek: "Friday",
    status: "Upcoming",
    tag: "INAGURATION & KEYNOTES",
    details: "Opening ceremony, plenary keynotes, and competition kickoff.",
  },
  {
    day: "DAY 02",
    date: "March 13, 2027",
    dayOfWeek: "Saturday",
    status: "Upcoming",
    tag: "HACKATHONS & ROUNDS",
    details: "Flagship hackathon sprints, model formulation, and case defense.",
  },
  {
    day: "DAY 03",
    date: "March 14, 2027",
    dayOfWeek: "Sunday",
    status: "Upcoming",
    tag: "FINALES & VALEDICTORY",
    details: "Finalist jury evaluations, podium ceremonies, and closing gala.",
  },
];

const Schedule = () => {
  return (
    <section
      id="schedule"
      className="relative w-full pt-16 sm:pt-18 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 bg-[#030305] border-b border-white/5 overflow-hidden"
    >
      {/* Background Ambient Atmosphere */}
      <div className="pointer-events-none absolute top-1/3 -left-40 w-80 h-80 bg-accent-brand/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-[140px]" />
      <div className="absolute inset-0 bg-cad-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12 pb-6 border-b border-white/10">
          <div className="section-header mb-3">
            <span className="section-header-square" />
            <h2 className="section-header-text text-xl sm:text-2xl lg:text-3xl">
              Event Schedule
            </h2>
          </div>
          <p className="text-text-secondary text-sm max-w-xl font-sans leading-relaxed">
            Three days of optimization challenges, keynote symposiums, and innovation showcases.
          </p>
        </div>

        {/* Minimal 3-Day Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {scheduleDays.map((item, idx) => (
            <motion.div
              key={item.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-[#08080f]/90 p-6 sm:p-7 flex flex-col justify-between hover:border-accent-brand/40 transition-all duration-300 group shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
            >
              <div>
                {/* Day Header & Status */}
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/5">
                  <span className="font-mono text-xs font-bold text-accent-brand tracking-widest uppercase">
                    {item.day}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                    {item.status}
                  </span>
                </div>

                {/* Date Display */}
                <div className="space-y-1 mb-4">
                  <h3 className="text-2xl font-display font-extrabold text-white uppercase tracking-tight group-hover:text-cyan-300 transition-colors">
                    {item.date}
                  </h3>
                  <p className="font-mono text-xs text-zinc-400">
                    {item.dayOfWeek}
                  </p>
                </div>

                {/* Tag Pill */}
                <div className="mb-4">
                  <span className="inline-block text-[10px] font-mono font-semibold tracking-wider px-2.5 py-1 rounded bg-accent-brand/10 text-accent-brand border border-accent-brand/20">
                    {item.tag}
                  </span>
                </div>

                {/* Minimal description */}
                <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                  {item.details}
                </p>
              </div>

              {/* Bottom Schedule Announcing Soon Badge */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-accent-brand/70" />
                  <span>Timeline</span>
                </span>
                <span className="text-zinc-400">Announcing Soon</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
