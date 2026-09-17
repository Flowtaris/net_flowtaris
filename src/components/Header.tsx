import Link from 'next/link';
import LogoImage from '@/components/ui/LogoImage';
import MobileNav from '@/components/ui/MobileNav';
import { getCmsData } from '@/lib/cms';

export default async function Header() {
  const cms = await getCmsData();
  const data = cms?.header || {
    logoText: 'Flowtaris',
    logoSubText: '',
    logoTagline: 'Accountability Engine',
    navLinks: [],
    statusChip: 'Operational',
    ctaText: 'Get Started',
    ctaLink: '#'
  };

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl">
      {/* Gold accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[var(--color-brand-accent)] to-transparent opacity-40" />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-[var(--color-brand-accent)]/10 scale-100 group-hover:scale-125 transition-transform duration-500" />
            {data.logoImage ? <img src={data.logoImage} alt="Logo" className="relative w-full h-full object-contain" /> : <LogoImage className="relative w-full h-full" />}
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline gap-0.5">
              <span className="text-[1.1rem] font-heading font-black text-[var(--color-brand-navy)] tracking-tight group-hover:text-[var(--color-brand-accent)] transition-colors duration-300">{data.logoText}</span>
              {data.logoSubText && <span className="text-[1.1rem] font-heading font-light text-[var(--color-brand-slate)]/60">{data.logoSubText}</span>}
            </div>
            <span className="text-[0.55rem] font-mono text-[var(--color-brand-accent)] uppercase tracking-[0.22em] -mt-0.5">{data.logoTagline}</span>
          </div>
        </Link>

        {/* Nav — desktop pill hover */}
        <nav className="hidden md:flex items-center gap-1">
          {data.navLinks.map((link: { label: string; href: string }) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative px-4 py-2 text-[13px] font-medium text-[var(--color-brand-navy)]/70 hover:text-[var(--color-brand-navy)] rounded-full transition-all duration-300 hover:bg-[var(--color-brand-navy)]/[0.04]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Status chip — hidden on mobile */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            <span className="text-[10px] font-mono font-semibold text-emerald-700 tracking-wide">{data.statusChip}</span>
          </div>

          {/* CTA — hidden on small mobile, visible on sm+ */}
          <a
            href={data.ctaLink}
            className="group/cta hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-[12px] font-bold text-white bg-[var(--color-brand-navy)] shadow-md transition-all duration-300 hover:shadow-[0_4px_20px_rgba(10,22,40,0.3)] hover:-translate-y-[1px] overflow-hidden relative"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-accent)]/30 to-transparent -translate-x-full group-hover/cta:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative">{data.ctaText}</span>
            <span className="relative text-[var(--color-brand-accent)] text-[10px]">→</span>
          </a>

          {/* Mobile hamburger menu */}
          <MobileNav
            links={data.navLinks}
            ctaText={data.ctaText}
            ctaLink={data.ctaLink}
          />
        </div>
      </div>
    </header>
  );
}
