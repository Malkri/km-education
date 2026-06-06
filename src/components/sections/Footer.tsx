const socialIcons = [
  {
    label: "Instagram",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="size-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="size-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="size-4">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-paper py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <div className="text-lg tracking-tight font-light text-brand mb-4">
            KM<span className="text-paper/40">EDUCATION</span>
          </div>
          <p className="text-sm text-paper/50 font-light leading-relaxed">
            Live online classes with a clear study plan for confident progress.
          </p>
        </div>
        <div>
          <h5 className="text-[10px] uppercase tracking-[0.2em] text-brand mb-6 font-mono">
            Quick Links
          </h5>
          <ul className="space-y-3 text-sm font-light text-paper/60">
            <li><a href="#programs" className="hover:text-paper transition-colors">Programs</a></li>
            <li><a href="#how" className="hover:text-paper transition-colors">How It Works</a></li>
            <li><a href="#results" className="hover:text-paper transition-colors">Results</a></li>
            <li><a href="#faq" className="hover:text-paper transition-colors">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-[10px] uppercase tracking-[0.2em] text-brand mb-6 font-mono">
            Contact
          </h5>
          <ul className="space-y-3 text-sm font-light text-paper/60">
            <li>hello@kmeducation.com.au</li>
            <li>+61 (0) 000 000 000</li>
            <li>Online · Australia-wide</li>
          </ul>
        </div>
        <div>
          <h5 className="text-[10px] uppercase tracking-[0.2em] text-brand mb-6 font-mono">
            Connect
          </h5>
          <div className="flex gap-3 mb-8">
            {socialIcons.map((icon) => (
              <a key={icon.label} href="#" aria-label={icon.label} className="size-9 rounded-full border border-paper/15 flex items-center justify-center hover:bg-brand hover:border-brand transition-colors">
                {icon.svg}
              </a>
            ))}
          </div>
          <a
            href="#book"
            className="block w-full text-center bg-brand py-3 text-[10px] uppercase tracking-[0.2em] font-light hover:bg-paper hover:text-ink transition-colors"
          >
            Book a Free Trial
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-paper/10 flex flex-col md:flex-row justify-between text-[10px] font-mono text-paper/30 uppercase tracking-[0.2em] gap-4">
        <div>© {new Date().getFullYear()} KM Education. All rights reserved.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-paper">Privacy</a>
          <a href="#" className="hover:text-paper">Terms</a>
        </div>
      </div>
    </footer>
  );
}
