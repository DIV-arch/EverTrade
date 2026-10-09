import React, { useState } from 'react';
import { supabase } from './lib/supabase';
import {
  Sparkles,
  Download,
  Wand2,
  BookOpen,
  ArrowRight,
  Menu,
  X,
  ShieldAlert,
  Sliders,
  TrendingDown,
  Layers,
  ChevronRight,
  Lock
} from 'lucide-react';
import flowerThumb from './assets/hero-flowers.png';

// Lucide-styled brand icons matching Lucide's 24x24 stroke aesthetic
const TwitterIcon = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [featureModalOpen, setFeatureModalOpen] = useState(null);
  const [activePill, setActivePill] = useState('Market Halt Detection');
  const [betaModalOpen, setBetaModalOpen] = useState(false);
const [betaName, setBetaName] = useState('');
const [betaEmail, setBetaEmail] = useState('');
const [betaLoading, setBetaLoading] = useState(false);
const [betaMessage, setBetaMessage] = useState('');
const [betaError, setBetaError] = useState(false);

const handleBetaSignup = async (e) => {
  e.preventDefault();

  const name = betaName.trim();
  const email = betaEmail.trim().toLowerCase();

  if (!name || !email) {
    setBetaError(true);
    setBetaMessage('Please enter your name and email.');
    return;
  }

  setBetaLoading(true);
  setBetaMessage('');
  setBetaError(false);

  try {
    const { error } = await supabase
      .from('beta_signups')
      .insert([{ name, email }]);

    if (error) {
      if (error.code === '23505') {
        throw new Error('This email is already registered.');
      }
      throw error;
    }

    setBetaMessage("You're on the list! Thanks for your interest.");
    setBetaName('');
    setBetaEmail('');
  } catch (error) {
    setBetaError(true);
    setBetaMessage(
      error.message || 'Registration failed. Please try again.'
    );
  } finally {
    setBetaLoading(false);
  }
};

  const features = {
    halt: {
      title: "Market Halt Detection",
      subtitle: "Autonomous Oracle Anomaly Sentry",
      desc: "Detects traditional stock exchange market halts, circuit halts, and desynchronized oracle feeds before erratic price prints cause improper liquidations in tokenized equities.",
      stats: "0.24s Mean Detection Time"
    },
    circuit: {
      title: "Circuit Breakers",
      subtitle: "Deterministic Liquidity Pause",
      desc: "Instantly constrains trading and leveraged position liquidations whenever reliable continuous price discovery is unavailable across venues.",
      stats: "100% Capital Gap Defense"
    },
    margin: {
      title: "Dynamic Margin",
      subtitle: "Uncertainty-Weighted Collateral",
      desc: "Autonomously escalates margin requirements during after-hours trading and periods of high cross-market variance to protect solvency.",
      stats: "Continuous Volatility Scaling"
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white font-sans select-none">
      {/* Background Autoplaying Looping Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none brightness-90 contrast-105"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4"
      />

      {/* Subtle depth overlay for high readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/25 z-[1] pointer-events-none" />

      {/* Main Two-Panel Split Layout */}
      <div className="relative z-10 flex flex-row w-full h-full p-4 lg:p-6 gap-4 lg:gap-6 box-border">
        
        {/* =========================================================================
            LEFT PANEL (52% on desktop, full width on mobile)
           ========================================================================= */}
        <section className="relative w-full lg:w-[52%] h-full flex flex-col justify-between p-6 lg:p-10 rounded-3xl liquid-glass-strong z-10">
          
          {/* Top Nav: Logo image (32x32) + "bloom" / "evertrade" text + Menu button pill */}
          <header className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="EverTrade Logo"
                className="w-8 h-8 rounded-full object-cover shadow-sm transition-transform hover:scale-105"
              />
              <span className="font-semibold text-2xl tracking-tighter text-white">
                evertrade
              </span>
            </div>

            <button
              onClick={() => setMenuOpen(true)}
              className="liquid-glass rounded-full px-5 py-2.5 flex items-center gap-2.5 text-xs tracking-wider uppercase text-white/90 hover:scale-105 active:scale-95 transition-transform"
            >
              <span>Menu</span>
              <Menu className="w-4 h-4 text-white" />
            </button>
          </header>

          {/* Hero Center (flex-1, centered) */}
          <div className="flex-1 flex flex-col items-center justify-center text-center my-auto py-2">
            {/* Logo image again (80x80) */}
            <div className="w-20 h-20 rounded-2xl liquid-glass flex items-center justify-center mb-6 shadow-2xl transition-transform hover:scale-105">
              <img
                src="/logo.png"
                alt="Bloom AI / EverTrade Icon"
                className="w-16 h-16 rounded-xl object-contain drop-shadow"
              />
            </div>

            {/* Headline with serif italic */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-[-0.05em] text-white font-medium leading-[1.08] max-w-2xl">
              Innovating the
              <br />
              <span className="font-serif italic text-white/80 font-normal">
                spirit of bloom AI
              </span>
            </h1>

            {/* Subtext with tokenized equities focus from README */}
            <p className="mt-3 text-xs sm:text-sm text-white/60 max-w-md font-light leading-relaxed">
              24/7 risk management architecture for tokenized equities on Solana.
              Safeguarding against market halts, gap risk, and off-hour liquidations.
            </p>

            {/* CTA Button: Explore Now with Download icon in w-7 h-7 bg-white/15 */}
            <div className="mt-7">
              <button
                onClick={() => setFeatureModalOpen('halt')}
                className="liquid-glass-strong rounded-full pl-6 pr-2.5 py-2.5 flex items-center gap-3.5 text-sm font-medium text-white hover:scale-105 active:scale-95 transition-transform shadow-2xl group"
              >
                <span className="tracking-wide">Explore Protocol</span>
                <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center transition-transform group-hover:translate-y-0.5">
                  <Download className="w-3.5 h-3.5 text-white" />
                </div>
              </button>
            </div>
            <button
  onClick={() => {
    setBetaMessage('');
    setBetaError(false);
    setBetaModalOpen(true);
  }}
  className="liquid-glass rounded-full px-6 py-3 mt-4 text-sm text-white hover:scale-105 transition-transform"
>
  Join the Beta
</button>

            {/* Three Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8 max-w-lg">
              {[
                { label: "Market Halt Detection", key: "halt" },
                { label: "Circuit Breakers", key: "circuit" },
                { label: "Dynamic Margin", key: "margin" }
              ].map((pill) => (
                <button
                  key={pill.label}
                  onClick={() => {
                    setActivePill(pill.label);
                    setFeatureModalOpen(pill.key);
                  }}
                  className={`liquid-glass rounded-full px-4 py-1.5 text-xs transition-transform hover:scale-105 active:scale-95 ${
                    activePill === pill.label ? 'text-white bg-white/10' : 'text-white/80'
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom quote */}
          <footer className="w-full flex flex-col items-center text-center mt-auto pt-3">
            <span className="text-[10px] tracking-widest uppercase text-white/50 mb-1.5">
              VISIONARY DESIGN
            </span>
            <p className="text-xs sm:text-sm text-white/90 max-w-md font-light">
              "We imagined a{" "}
              <span className="font-serif italic text-white/80">realm</span> with{" "}
              <span className="font-serif italic text-white/80">no ending</span>."
            </p>
            <div className="flex items-center justify-center gap-3 w-full max-w-xs mt-2.5 text-[10px] tracking-widest text-white/50">
              <span className="h-[1px] flex-1 bg-white/20" />
              <span className="uppercase">MARCUS AURELIO</span>
              <span className="h-[1px] flex-1 bg-white/20" />
            </div>
          </footer>
        </section>

        {/* =========================================================================
            RIGHT PANEL (48% on desktop, hidden on mobile lg:flex)
           ========================================================================= */}
        <section className="hidden lg:flex lg:w-[48%] h-full flex-col justify-between z-10">
          
          {/* Top bar */}
          <div className="flex items-center justify-between w-full">
            {/* Social Icons Pill with ArrowRight */}
            <div className="liquid-glass rounded-full px-4 py-2 flex items-center gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-white/80 transition-colors hover:scale-105"
                title="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-white/80 transition-colors hover:scale-105"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-white/80 transition-colors hover:scale-105"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <span className="text-white/30 text-xs">|</span>
              <button
                onClick={() => setFeatureModalOpen('circuit')}
                className="text-white hover:text-white/80 transition-colors hover:scale-105 flex items-center"
                title="Explore Circuit Feeds"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Account button with Sparkles icon button */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setAccountModalOpen(true)}
                className="liquid-glass rounded-full px-5 py-2 text-xs font-medium text-white hover:scale-105 active:scale-95 transition-transform"
              >
                Connect Wallet
              </button>
              <button
                onClick={() => setAccountModalOpen(true)}
                className="liquid-glass rounded-full w-9 h-9 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
                title="Ecosystem State"
              >
                <Sparkles className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Community card */}
          <div className="my-auto self-start">
            <div
              onClick={() => setFeatureModalOpen('margin')}
              className="liquid-glass rounded-2xl p-5 w-56 hover:scale-105 active:scale-95 transition-transform cursor-pointer"
            >
              <span className="text-[10px] tracking-wider uppercase text-white/50 block mb-1">
                Ecosystem
              </span>
              <h3 className="text-sm font-medium text-white mb-1.5">
                Enter our ecosystem
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Continuous risk settlement protecting 24/7 tokenized equities across global liquidity.
              </p>
            </div>
          </div>

          {/* Bottom feature section (mt-auto) */}
          <div className="mt-auto liquid-glass rounded-[2.5rem] p-4 lg:p-5 flex flex-col gap-3">
            
            {/* Two side-by-side cards: Processing (Wand2) and Growth Archive (BookOpen) */}
            <div className="grid grid-cols-2 gap-3">
              {/* Card 1: Processing (Wand2 icon) */}
              <div
                onClick={() => setFeatureModalOpen('halt')}
                className="liquid-glass rounded-3xl p-4 flex flex-col justify-between hover:scale-105 active:scale-95 transition-transform cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Wand2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[10px] text-white/40 tracking-wider uppercase">
                    ACTIVE
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white mb-0.5">
                    Processing
                  </h4>
                  <p className="text-[11px] text-white/60 leading-tight font-light">
                    Halt detection & oracle state verification.
                  </p>
                </div>
              </div>

              {/* Card 2: Growth Archive (BookOpen icon) */}
              <div
                onClick={() => setFeatureModalOpen('circuit')}
                className="liquid-glass rounded-3xl p-4 flex flex-col justify-between hover:scale-105 active:scale-95 transition-transform cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[10px] text-white/40 tracking-wider uppercase">
                    ARCHIVE
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white mb-0.5">
                    Growth Archive
                  </h4>
                  <p className="text-[11px] text-white/60 leading-tight font-light">
                    Solana Anchor contract execution logs.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom card: flower image thumbnail, "Advanced Plant Sculpting" title + description, and a "+" button */}
            <div
              onClick={() => setFeatureModalOpen('margin')}
              className="liquid-glass rounded-3xl p-3 flex items-center justify-between gap-3 hover:scale-105 active:scale-95 transition-transform cursor-pointer group"
            >
              <div className="flex items-center gap-3.5">
                <img
                  src={flowerThumb}
                  alt="hero-flowers"
                  className="w-24 h-16 rounded-2xl object-cover shadow-inner flex-shrink-0"
                />
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-wider uppercase text-white/50">
                    PROTECTION MODEL
                  </span>
                  <h4 className="text-sm font-medium text-white">
                    Advanced Plant Sculpting
                  </h4>
                  <p className="text-xs text-white/60 font-light line-clamp-1">
                    Continuous liquidation shield & gap-risk dampening.
                  </p>
                </div>
              </div>

              <button
                className="w-8 h-8 rounded-full liquid-glass flex items-center justify-center text-white text-base font-light flex-shrink-0 group-hover:scale-110 transition-transform"
                title="Expand Details"
              >
                +
              </button>
            </div>

          </div>

        </section>

      </div>

      {betaModalOpen && (
  <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
    <div className="liquid-glass-strong rounded-3xl w-full max-w-md p-6 sm:p-8 flex flex-col gap-5 shadow-2xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-white/50">
            Early Access
          </p>
          <h2 className="text-2xl text-white font-medium mt-2">
            Join the EverTrade Beta
          </h2>
        </div>
        <button
          type="button"
          onClick={() => setBetaModalOpen(false)}
          className="w-9 h-9 rounded-full liquid-glass flex items-center justify-center text-white"
          aria-label="Close signup form"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-sm text-white/70">
        Register your interest to receive updates about EverTrade beta access.
      </p>

      <form onSubmit={handleBetaSignup} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your name"
          value={betaName}
          onChange={(e) => setBetaName(e.target.value)}
          required
          maxLength={100}
          autoComplete="name"
          className="w-full rounded-xl bg-black/30 border border-white/20 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-white/60"
        />

        <input
          type="email"
          placeholder="Your email address"
          value={betaEmail}
          onChange={(e) => setBetaEmail(e.target.value)}
          required
          maxLength={254}
          autoComplete="email"
          className="w-full rounded-xl bg-black/30 border border-white/20 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-white/60"
        />

        <button
          type="submit"
          disabled={betaLoading}
          className="liquid-glass rounded-full py-3 text-sm text-white font-medium disabled:opacity-50"
        >
          {betaLoading ? 'Registering...' : 'Register for Beta Updates'}
        </button>
      </form>

      {betaMessage && (
        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${
            betaError ? 'text-red-300' : 'text-green-300'
          }`}
        >
          {betaMessage}
        </p>
      )}

      <p className="text-xs text-white/40">
        Your email will be used for beta-related updates.
      </p>
    </div>
  </div>
)}
      {/* =========================================================================
          INTERACTIVE MODAL: MENU DRAWER
         ========================================================================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <div className="liquid-glass-strong rounded-3xl w-full max-w-lg p-6 sm:p-8 flex flex-col gap-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="EverTrade" className="w-7 h-7 rounded-full" />
                <span className="text-xl font-semibold tracking-tighter text-white">
                  evertrade
                </span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-8 h-8 rounded-full liquid-glass flex items-center justify-center text-white hover:scale-105"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { title: "Market Halt Detection", desc: "Detects exchange halts & desynchronized feeds.", icon: ShieldAlert, key: "halt" },
                { title: "Circuit Breakers", desc: "Pauses liquidations during off-market liquidity freezes.", icon: Lock, key: "circuit" },
                { title: "Dynamic Margin", desc: "Escalates margin to cushion weekend gap risk.", icon: Sliders, key: "margin" },
                { title: "Funding Rate Safeguards", desc: "Safer funding mechanisms across equity closures.", icon: TrendingDown, key: "margin" },
                { title: "Solana Anchor Architecture", desc: "Rust programs & on-chain oracle verification.", icon: Layers, key: "circuit" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setMenuOpen(false);
                    setFeatureModalOpen(item.key);
                  }}
                  className="liquid-glass rounded-2xl p-3.5 flex items-center justify-between hover:scale-[1.02] transition-transform cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-white">{item.title}</h5>
                      <p className="text-xs text-white/60">{item.desc}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white/50" />
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-white/50">
              <span>Solana Anchor Framework</span>
              <span>v0.1.0 Architecture</span>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          INTERACTIVE MODAL: CONNECT WALLET / ACCOUNT
         ========================================================================= */}
      {accountModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <div className="liquid-glass-strong rounded-3xl w-full max-w-md p-6 sm:p-8 flex flex-col gap-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-white" />
                <h3 className="text-lg font-medium text-white">Connect Solana Wallet</h3>
              </div>
              <button
                onClick={() => setAccountModalOpen(false)}
                className="w-8 h-8 rounded-full liquid-glass flex items-center justify-center text-white hover:scale-105"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-white/60 leading-relaxed font-light">
              Connect your wallet to inspect simulated equity positions, margin ratios, and circuit breaker health telemetry.
            </p>

            <div className="flex flex-col gap-2.5">
              {['Phantom', 'Backpack', 'Solflare', 'Ledger Hardware'].map((wallet) => (
                <button
                  key={wallet}
                  onClick={() => setAccountModalOpen(false)}
                  className="liquid-glass rounded-2xl px-4 py-3 flex items-center justify-between hover:scale-105 active:scale-95 transition-transform"
                >
                  <span className="text-sm font-medium text-white">{wallet}</span>
                  <span className="text-[10px] tracking-wider uppercase text-white/40">
                    Connect
                  </span>
                </button>
              ))}
            </div>

            <div className="text-[11px] text-white/40 text-center font-light">
              Network: Solana Devnet • Oracle Feed: Active
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          INTERACTIVE MODAL: FEATURE DETAIL
         ========================================================================= */}
      {featureModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <div className="liquid-glass-strong rounded-3xl w-full max-w-lg p-6 sm:p-8 flex flex-col gap-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] tracking-widest uppercase text-white/50">
                  {features[featureModalOpen]?.subtitle || "Risk Protocol Feature"}
                </span>
                <h3 className="text-xl font-medium text-white">
                  {features[featureModalOpen]?.title}
                </h3>
              </div>
              <button
                onClick={() => setFeatureModalOpen(null)}
                className="w-8 h-8 rounded-full liquid-glass flex items-center justify-center text-white hover:scale-105"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm text-white/80 leading-relaxed font-light">
              {features[featureModalOpen]?.desc}
            </p>

            <div className="liquid-glass rounded-2xl p-4 flex items-center justify-between">
              <span className="text-xs text-white/60">Benchmark Metric:</span>
              <span className="text-xs font-medium text-white">
                {features[featureModalOpen]?.stats}
              </span>
            </div>

            <button
              onClick={() => setFeatureModalOpen(null)}
              className="liquid-glass-strong rounded-full py-3 text-xs tracking-wider uppercase font-medium text-white hover:scale-105 active:scale-95 transition-transform text-center"
            >
              Acknowledge Architecture
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
