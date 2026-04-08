import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative bg-charcoal border-t border-gold/10 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-14">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-5">
            <Logo variant="light" size="sm" />
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-gold/70 mb-5">Contact</p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:hello@parthenon.club"
                  className="font-sans text-sm text-cream/50 hover:text-cream transition-colors duration-300"
                >
                  hello@parthenon.club
                </a>
              </li>
              <li className="font-sans text-sm text-cream/50">Provo / Orem, Utah</li>
            </ul>
          </div>

          {/* Social + opening */}
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-gold/70 mb-5">Follow the Build</p>
            <div className="flex gap-4 mb-6">
              {["Instagram", "Facebook", "LinkedIn"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  aria-label={platform}
                  className="w-9 h-9 border border-cream/15 flex items-center justify-center text-cream/40 hover:text-cream hover:border-gold/40 transition-all duration-300"
                  title={platform}
                >
                  <span className="font-sans text-xs">{platform[0]}</span>
                </a>
              ))}
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-sage rounded-full animate-pulse" />
              <span className="font-sans text-xs text-cream/40 tracking-widest uppercase">
                Opening September 2026
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-cream/25">
            &copy; {new Date().getFullYear()} Parthenon Athletic Club. All rights reserved.
          </p>
          <p className="font-sans text-xs text-cream/20 tracking-widest uppercase">
            Embrace the struggle. Become self-made. Climb together.
          </p>
        </div>
      </div>
    </footer>
  );
}
