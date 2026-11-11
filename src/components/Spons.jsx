import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, History, Handshake, ArrowRight, Sparkles } from "lucide-react";
import { playClickTick } from "../utils/cyberAudio";

// Exact ordered sponsor categories for 2025 per specifications
const sponsors2025 = [
  {
    tierName: "TITLE SPONSOR",
    gridClass: "grid-cols-1 max-w-md mx-auto",
    items: [
      {
        name: "Hire3x",
        tier: "Title Sponsor",
        logo: "/assets/spons/spons-25/Hire3x.webp",
        url: "https://hire3x.com/",
        height: "h-36 sm:h-44",
      },
    ],
  },
  {
    tierName: "CO-TITLE SPONSOR",
    gridClass: "grid-cols-1 max-w-md mx-auto",
    items: [
      {
        name: "Sirius DigiTech",
        tier: "Co-Title Sponsor",
        logo: "/assets/spons/spons-25/Adani_Ai_Sirius_Digitech.webp",
        url: "https://www.linkedin.com/company/sirius-digitech/",
        height: "h-36 sm:h-44",
      },
    ],
  },
  {
    tierName: "PLATINUM SPONSOR",
    gridClass: "grid-cols-1 max-w-md mx-auto",
    items: [
      {
        name: "ONGC",
        tier: "Platinum Sponsor",
        logo: "/assets/spons/spons-25/ONGC.webp",
        url: "https://ongcindia.com/",
        height: "h-32 sm:h-40",
      },
    ],
  },
  {
    tierName: "IN ASSOCIATION WITH",
    gridClass: "grid-cols-1 max-w-md mx-auto",
    items: [
      {
        name: "GAIL India Limited",
        tier: "In Association With",
        logo: "/assets/spons/spons-25/GAIL.webp",
        url: "https://gailonline.com/",
        height: "h-32 sm:h-40",
      },
    ],
  },
  {
    tierName: "STRATEGIC SPONSOR",
    gridClass: "grid-cols-1 max-w-md mx-auto",
    items: [
      {
        name: "Optym",
        tier: "Strategic Sponsor",
        logo: "/assets/spons/spons-25/OPTYM.webp",
        url: "https://www.optym.com/",
        height: "h-32 sm:h-36",
      },
    ],
  },
  {
    tierName: "MAJOR SPONSOR",
    gridClass: "grid-cols-1 max-w-md mx-auto",
    items: [
      {
        name: "Blue Yonder",
        tier: "Major Sponsor",
        logo: "/assets/spons/spons-25/blue_yonder.webp",
        url: "https://www.blueyonder.com/",
        height: "h-30 sm:h-36",
      },
    ],
  },
  {
    tierName: "SILVER SPONSOR",
    gridClass: "grid-cols-1 max-w-md mx-auto",
    items: [
      {
        name: "IEM",
        tier: "Silver Sponsor",
        logo: "/assets/spons/spons-25/IEM.webp",
        url: "http://www.iem.edu.in/",
        height: "h-28 sm:h-34",
      },
    ],
  },
  {
    tierName: "POWERED BY",
    gridClass: "grid-cols-1 max-w-md mx-auto",
    items: [
      {
        name: "Unstop",
        tier: "Powered by",
        logo: "/assets/spons/spons-25/Unstop.webp",
        url: "https://unstop.com/",
        height: "h-28 sm:h-34",
      },
    ],
  },
  {
    tierName: "EVENT PARTNERS",
    gridClass: "grid-cols-2 sm:grid-cols-4 max-w-5xl mx-auto",
    items: [
      {
        name: "Delhivery",
        tier: "Event Partner",
        logo: "/assets/spons/spons-25/Delhivery_Logo.webp",
        url: "https://www.delhivery.com/",
        height: "h-28 sm:h-32",
      },
      {
        name: "LIVEai",
        tier: "Event Partner",
        logo: "/assets/spons/spons-25/LiveAi.webp",
        url: "https://www.liveai.eu/",
        height: "h-28 sm:h-32",
      },
      {
        name: "KGTS",
        tier: "Event Partner",
        logo: "/assets/spons/spons-25/kgts.webp",
        url: "https://www.linkedin.com/company/the-kgts/",
        height: "h-28 sm:h-32",
      },
      {
        name: "DecisionOpt",
        tier: "Event Partner",
        logo: "/assets/spons/spons-25/decisionOptNew.webp",
        url: "https://decisionopt.com/",
        height: "h-28 sm:h-32",
      },
    ],
  },
  {
    tierName: "TITLE MEDIA PARTNER",
    gridClass: "grid-cols-1 max-w-md mx-auto",
    items: [
      {
        name: "The Times of India",
        tier: "Title Media Partner",
        logo: "/assets/spons/spons-25/the-times-of-india.webp",
        url: "https://timesofindia.indiatimes.com/",
        height: "h-28 sm:h-34",
      },
    ],
  },
  {
    tierName: "MEDIA PARTNERS",
    gridClass: "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto",
    items: [
      {
        name: "Campus Varta",
        tier: "Media Partner",
        logo: "/assets/spons/spons-25/CampusVarta.webp",
        url: "https://www.campusvarta.com/",
        height: "h-28 sm:h-32",
      },
      {
        name: "InsideSuccess",
        tier: "Media Partner",
        logo: "/assets/spons/spons-25/InsightSuccess.webp",
        url: "https://www.insightssuccess.in/",
        height: "h-28 sm:h-32",
      },
    ],
  },
  {
    tierName: "YOUTH MEDIA PARTNER",
    gridClass: "grid-cols-1 max-w-md mx-auto",
    items: [
      {
        name: "Youth Incorporated",
        tier: "Youth Media Partner",
        logo: "/assets/spons/spons-25/YouthIncorporated.webp",
        url: "https://youthincmag.com/",
        height: "h-28 sm:h-32",
      },
    ],
  },
  {
    tierName: "BLOGGER OUTREACH PARTNER",
    gridClass: "grid-cols-1 max-w-md mx-auto",
    items: [
      {
        name: "BlogAdda.com",
        tier: "Blogger Outreach Partner",
        logo: "/assets/spons/spons-25/BlogAdda.webp",
        url: "https://www.blogadda.com/",
        height: "h-28 sm:h-32",
      },
    ],
  },
];

const SponsorCard = ({ sponsor, height = "h-32" }) => {
  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${height} group relative cad-card p-5 sm:p-6 flex flex-col items-center justify-center transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_10px_30px_rgba(255,107,0,0.18)] bg-[#08080f]/90 rounded-xl border border-white/10`}
    >
      <span className="absolute top-2.5 left-3 font-mono text-[9px] uppercase tracking-wider text-orange-400/80 group-hover:text-orange-300 transition-colors">
        // {sponsor.tier}
      </span>

      <span className="absolute top-2.5 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowUpRight className="w-3.5 h-3.5 text-accent-brand" />
      </span>

      <div className="w-full h-full max-h-[70%] flex items-center justify-center p-2">
        <img
          src={sponsor.logo}
          alt={sponsor.name}
          className="max-h-full max-w-[85%] object-contain transition-all duration-300 transform group-hover:scale-108 drop-shadow-[0_4px_16px_rgba(255,255,255,0.08)]"
          loading="lazy"
        />
      </div>

      <span className="absolute bottom-2 text-[10px] font-mono uppercase tracking-wider text-text-secondary/70 group-hover:text-white transition-colors">
        {sponsor.name}
      </span>
    </a>
  );
};

const Spons = () => {
  const [activeTab, setActiveTab] = useState("2027"); // "2027" | "2025"

  return (
    <section
      id="sponsors"
      className="relative w-full pt-16 sm:pt-18 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 bg-bg-base border-b border-border-subtle overflow-hidden"
    >
      {/* Background CAD grid */}
      <div className="absolute inset-0 bg-cad-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-80 h-80 rounded-full bg-orange-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header & Tab Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="section-header mb-3">
              <span className="section-header-square" />
              <h2 className="section-header-text text-xl sm:text-2xl lg:text-3xl">
                {activeTab === "2027" ? "Sponsors & Partners" : "2025 Sponsors"}
              </h2>
            </div>
            <p className="text-text-secondary text-sm max-w-2xl font-sans leading-relaxed">
              {activeTab === "2027"
                ? "Connecting with industry leaders in supply chain, analytics, AI, and operations research."
                : "Honoring our esteemed partners, enterprises, and media organizations who supported Optima 2025."}
            </p>
          </div>

          {/* Clean Tab Controls */}
          <div className="flex items-center gap-2 p-1.5 bg-bg-surface border border-border-subtle self-start md:self-end">
            <button
              onClick={() => {
                playClickTick();
                setActiveTab("2027");
              }}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-200 ${
                activeTab === "2027"
                  ? "bg-accent-brand text-black font-bold shadow-brand-glow"
                  : "text-text-secondary hover:text-white hover:bg-white/5"
              }`}
            >
              <span>Optima 2027</span>
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
              <span>2025 Sponsors</span>
            </button>
          </div>
        </div>

        {/* Dynamic View: 2027 Announcing Soon vs 2025 Ordered Sponsor Directory */}
        <AnimatePresence mode="wait">
          {activeTab === "2027" ? (
            /* ========================================================
               2027 SPONSORS ANNOUNCING SOON CONTAINER
               ======================================================== */
            <motion.div
              key="sponsors-2027-soon"
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
                  <Handshake className="w-6 h-6 sm:w-7 sm:h-7 text-accent-brand drop-shadow-[0_0_10px_rgba(255,107,0,0.6)]" />
                </div>
              </div>

              {/* Status Pill */}
              <div className="inline-flex items-center px-3.5 py-1 mb-4 rounded-full border border-accent-brand/30 bg-accent-brand/10 text-xs font-mono font-semibold tracking-wider text-accent-brand">
                <span>Partnerships Opening Soon</span>
              </div>

              {/* Heading */}
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white tracking-tight mb-3">
                Optima 2027 Partnerships
              </h3>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm text-zinc-300 max-w-lg mx-auto leading-relaxed mb-6">
                We are currently onboarding title partners, industry sponsors, and challenge creators for Optima 2027 at IIT Kharagpur. Full sponsor directory will be revealed shortly.
              </p>

              {/* CTA Button to View 2025 Sponsors */}
              <div className="flex items-center justify-center">
                <button
                  onClick={() => {
                    playClickTick();
                    setActiveTab("2025");
                  }}
                  className="btn-primary px-6 py-3 text-xs tracking-wider gap-2 shadow-lg"
                >
                  <span>View 2025 Sponsors</span>
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
               2025 ORDERED SPONSOR DIRECTORY
               ======================================================== */
            <motion.div
              key="sponsors-2025-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-10"
            >
              {sponsors2025.map((tier) => (
                <div key={tier.tierName} className="space-y-4">
                  <div className="flex items-center justify-center">
                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-semibold px-4 py-1 rounded-full bg-white/[0.03] border border-white/10">
                      {tier.tierName}
                    </span>
                  </div>

                  <div className={`grid gap-4 sm:gap-6 ${tier.gridClass}`}>
                    {tier.items.map((sponsor) => (
                      <SponsorCard
                        key={sponsor.name}
                        sponsor={sponsor}
                        height={sponsor.height}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Spons;
