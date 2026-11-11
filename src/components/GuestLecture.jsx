import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { guests, guestLectures } from "../constants/GuestLectures.js";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Linkedin,
  Award,
  History,
  Mic,
} from "lucide-react";
import { playClickTick } from "../utils/cyberAudio";

const GuestLecture = () => {
  const [activeTab, setActiveTab] = useState("upcoming"); // "upcoming" | "2025"

  // Chief Guest & Guest of Honor (separate)
  const chiefGuest = guests[0];
  const guestOfHonor = guests[1];

  // All other guest lecture speakers (rest same way)
  const regularSpeakers = guestLectures;

  return (
    <section
      id="speakers"
      className="relative w-full pt-16 sm:pt-18 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 bg-[#030305] border-b border-white/5 overflow-hidden"
    >
      {/* Background Ambient Atmosphere */}
      <div className="pointer-events-none absolute top-1/4 -right-40 w-96 h-96 bg-cyan-400/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 -left-40 w-96 h-96 bg-[#ff4500]/10 rounded-full blur-[140px]" />
      <div className="absolute inset-0 bg-cad-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header & Tab Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="section-header mb-3">
              <span className="section-header-square" />
              <h2 className="section-header-text text-xl sm:text-2xl lg:text-3xl">
                {activeTab === "upcoming" ? "Guest Lectures" : "2025 Guest Lectures"}
              </h2>
            </div>
            <p className="text-text-secondary text-sm max-w-2xl font-sans leading-relaxed">
              {activeTab === "upcoming"
                ? "Keynotes and executive addresses by global leaders, defense technologists, and operations researchers."
                : "Archive of eminent leaders and researchers who delivered keynote addresses and executive talks at Optima."}
            </p>
          </div>

          {/* Clean Tab Controls */}
          <div className="flex items-center gap-2 p-1.5 bg-bg-surface border border-border-subtle self-start md:self-end">
            <button
              onClick={() => {
                playClickTick();
                setActiveTab("upcoming");
              }}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-200 ${
                activeTab === "upcoming"
                  ? "bg-accent-brand text-black font-bold shadow-brand-glow"
                  : "text-text-secondary hover:text-white hover:bg-white/5"
              }`}
            >
              <span>Upcoming</span>
            </button>

            <button
              onClick={() => {
                playClickTick();
                setActiveTab("2025");
              }}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-200 ${
                activeTab === "2025"
                  ? "bg-accent-brand text-black font-bold shadow-brand-glow"
                  : "text-text-secondary hover:text-white hover:bg-white/5"
              }`}
            >
              <History className="w-3.5 h-3.5" />
              <span>2025 Guest Lectures</span>
            </button>
          </div>
        </div>

        {/* Dynamic View: Upcoming (Coming Soon) vs 2025 Guest Lectures */}
        <AnimatePresence mode="wait">
          {activeTab === "upcoming" ? (
            /* ========================================================
               UPCOMING GUEST LECTURES (COMING SOON)
               ======================================================== */
            <motion.div
              key="upcoming-guest-lectures"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative max-w-3xl mx-auto my-4 p-6 sm:p-10 border border-border-subtle bg-bg-surface/90 backdrop-blur-md overflow-hidden text-center shadow-[0_15px_40px_rgba(0,0,0,0.7)]"
            >
              {/* Subtle background glow */}
              <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-brand/10 rounded-full blur-[90px]" />

              {/* Central Glowing Icon */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-5 flex items-center justify-center">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-accent-brand/20 to-black border border-accent-brand/60 flex items-center justify-center shadow-[0_0_20px_rgba(255,107,0,0.35)]">
                  <Mic className="w-6 h-6 sm:w-7 sm:h-7 text-accent-brand drop-shadow-[0_0_10px_rgba(255,107,0,0.6)]" />
                </div>
              </div>

              {/* Status Pill */}
              <div className="inline-flex items-center px-3.5 py-1 mb-4 rounded-full border border-accent-brand/30 bg-accent-brand/10 text-xs font-mono font-semibold tracking-wider text-accent-brand">
                <span>Guest Lectures Announcing Soon</span>
              </div>

              {/* Heading */}
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white tracking-tight mb-3">
                Optima 2027 Keynote Series
              </h3>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm text-zinc-300 max-w-lg mx-auto leading-relaxed mb-6">
                We are finalizing sessions with renowned defense directors, industry CEOs, and optimization leaders. The complete speaker lineup will be revealed soon.
              </p>

              {/* Key Highlights */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs font-mono text-zinc-400 mb-6">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10">
                  <Calendar className="w-3.5 h-3.5 text-accent-brand" />
                  <span>March 12–14, 2027</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>IIT Kharagpur</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Keynotes &amp; Industry Panels</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex items-center justify-center">
                <button
                  onClick={() => {
                    playClickTick();
                    setActiveTab("2025");
                  }}
                  className="btn-primary px-6 py-3 text-xs tracking-wider gap-2 shadow-lg"
                >
                  <span>Explore 2025 Guest Lectures</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* CAD Corner Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent-brand/40" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent-brand/40" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-accent-brand/40" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent-brand/40" />
            </motion.div>
          ) : (
            /* ========================================================
               2025 GUEST LECTURES ARCHIVE
               ======================================================== */
            <motion.div
              key="archive-2025-guest-lectures"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-12"
            >
              {/* Dignitaries Tier: Chief Guest & Guest of Honor explicitly separated */}
              <div>
                <div className="mb-6 flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent-brand" />
                  <h3 className="text-sm font-mono uppercase tracking-widest text-accent-brand font-bold">
                    Keynote Dignitaries
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Chief Guest */}
                  {chiefGuest && (
                    <div className="relative rounded-2xl border border-accent-brand/40 bg-gradient-to-br from-accent-brand/[0.08] via-black to-black p-5 sm:p-6 backdrop-blur-xl flex flex-col sm:flex-row items-center sm:items-start gap-5 shadow-[0_10px_35px_rgba(255,107,0,0.15)]">
                      <div className="relative w-28 h-32 sm:w-32 sm:h-36 rounded-xl overflow-hidden flex-shrink-0 bg-black border border-accent-brand/30">
                        <img
                          src={chiefGuest.img}
                          alt={chiefGuest.name}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 text-center sm:text-left min-w-0">
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-accent-brand text-black text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
                          {chiefGuest.title || "Chief Guest"}
                        </span>
                        <h4 className="text-lg sm:text-xl font-display font-extrabold text-white uppercase tracking-tight">
                          {chiefGuest.name}
                        </h4>
                        <p className="text-xs sm:text-sm font-mono text-cyan-300 mt-1">
                          {chiefGuest.designation}
                        </p>
                        {chiefGuest.linkedin && (
                          <a
                            href={chiefGuest.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white font-mono mt-3 transition-colors"
                          >
                            <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Official Profile</span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Guest of Honor */}
                  {guestOfHonor && (
                    <div className="relative rounded-2xl border border-cyan-400/40 bg-gradient-to-br from-cyan-400/[0.08] via-black to-black p-5 sm:p-6 backdrop-blur-xl flex flex-col sm:flex-row items-center sm:items-start gap-5 shadow-[0_10px_35px_rgba(0,240,255,0.12)]">
                      <div className="relative w-28 h-32 sm:w-32 sm:h-36 rounded-xl overflow-hidden flex-shrink-0 bg-black border border-cyan-400/30">
                        <img
                          src={guestOfHonor.img}
                          alt={guestOfHonor.name}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 text-center sm:text-left min-w-0">
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-cyan-400 text-black text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
                          {guestOfHonor.title || "Guest of Honor"}
                        </span>
                        <h4 className="text-lg sm:text-xl font-display font-extrabold text-white uppercase tracking-tight">
                          {guestOfHonor.name}
                        </h4>
                        <p className="text-xs sm:text-sm font-mono text-cyan-300 mt-1">
                          {guestOfHonor.designation}
                        </p>
                        {guestOfHonor.linkedin && (
                          <a
                            href={guestOfHonor.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white font-mono mt-3 transition-colors"
                          >
                            <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                            <span>LinkedIn Profile</span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* All Other Guest Lectures (Rest same way) */}
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-400 font-bold">
                    Distinguished Speakers &amp; Lecturers
                  </h3>
                  <span className="text-xs font-mono text-zinc-500">
                    {regularSpeakers.length} Speakers
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {regularSpeakers.map((speaker) => (
                    <div
                      key={speaker.id}
                      className="group relative rounded-xl border border-white/10 bg-[#08080f]/90 hover:border-cyan-400/40 p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_8px_25px_rgba(0,0,0,0.8)]"
                    >
                      <div>
                        {/* Portrait Container */}
                        <div className="relative w-full h-48 rounded-lg overflow-hidden bg-black/50 border border-white/10 mb-3.5">
                          <img
                            src={speaker.imgUrl}
                            alt={speaker.name}
                            className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>

                        {/* Speaker Name */}
                        <h4 className="font-display text-base font-bold text-white uppercase tracking-tight group-hover:text-cyan-300 transition-colors">
                          {speaker.name}
                        </h4>

                        {/* Profession / Designation */}
                        <p className="font-mono text-xs text-accent-brand mt-1 leading-snug">
                          {speaker.designation}
                        </p>

                        {/* Company */}
                        {speaker.company && (
                          <p className="font-mono text-[11px] text-zinc-400 mt-0.5">
                            {speaker.company}
                          </p>
                        )}
                      </div>

                      {/* Footer: Topic or LinkedIn Link */}
                      <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
                        {speaker.topic ? (
                          <span className="text-[10px] font-sans text-zinc-400 truncate pr-2 italic">
                            &ldquo;{speaker.topic}&rdquo;
                          </span>
                        ) : (
                          <span />
                        )}
                        {speaker.linkedin && (
                          <a
                            href={speaker.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-500 hover:text-cyan-400 transition-colors flex-shrink-0"
                            aria-label={`${speaker.name} LinkedIn`}
                          >
                            <Linkedin className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GuestLecture;
