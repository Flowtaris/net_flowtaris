import Link from 'next/link';
import LogoImage from '@/components/ui/LogoImage';
import { getCmsData } from '@/lib/cms';

export default async function Footer() {
  const cms = getCmsData();
  const data = cms?.footer || {
    platformLinks: [],
    companyLinks: [],
    ecosystemLinks: [],
    contactBtnText: 'Consult an Architect',
    contactBtnLink: 'https://flowtaris.com/contact'
  };

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 pb-4 pt-12">
      {/* 
        We use a relative wrapper that reserves exactly the height of the closed pill (90px).
        This keeps the pill in the normal document flow at the bottom of the page.
      */}
      <div className="relative w-full h-[90px] max-w-5xl flex justify-center">
        
        {/* 
          The footer itself is absolutely positioned to the bottom of the wrapper.
          When its height increases on hover, it naturally expands UPWARDS!
          This completely prevents hover jitter because the bottom handle never moves.
        */}
        <footer className="group absolute bottom-0 flex flex-col items-center w-[400px] hover:w-full bg-white rounded-[2rem] border border-gray-200 shadow-[0_5px_20px_rgba(0,0,0,0.05)] transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] hover:shadow-[0_-15px_40px_rgba(218,165,32,0.15)] hover:border-[var(--color-brand-accent)]/50 z-50">
          
          {/* Revealed Content - Placed ABOVE the handle so it expands UPWARDS */}
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] w-full">
            <div className="overflow-hidden">
              <div className="bg-[var(--color-brand-offwhite)] rounded-t-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                
                <div className="px-8 pb-4 pt-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  
                  {/* Platform */}
                  <div>
                    <div className="font-black text-[var(--color-brand-navy)] uppercase tracking-widest text-[10px] mb-4">Platform</div>
                    <div className="flex flex-col space-y-3 font-medium text-[var(--color-brand-slate)] text-xs">
                      {data.platformLinks.map((link: { label: string; href: string }) => (
                        <Link key={link.label} href={link.href} className="hover:text-[var(--color-brand-accent)] transition-colors">{link.label}</Link>
                      ))}
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <div className="font-black text-[var(--color-brand-navy)] uppercase tracking-widest text-[10px] mb-4">Company</div>
                    <div className="flex flex-col space-y-3 font-medium text-[var(--color-brand-slate)] text-xs">
                      {data.companyLinks.map((link: { label: string; href: string }) => (
                        <a key={link.label} href={link.href} className="hover:text-[var(--color-brand-accent)] transition-colors">{link.label}</a>
                      ))}
                    </div>
                  </div>

                  {/* Ecosystem & Connect */}
                  <div>
                    <div className="font-black text-[var(--color-brand-navy)] uppercase tracking-widest text-[10px] mb-4">Ecosystem</div>
                    <div className="flex flex-col space-y-3 font-medium text-[var(--color-brand-slate)] text-xs mb-6">
                      {data.ecosystemLinks.map((link: { label: string; href: string }) => (
                        <a key={link.label} href={link.href} className="hover:text-[var(--color-brand-accent)] transition-colors">{link.label}</a>
                      ))}
                    </div>
                    
                    <a href={data.contactBtnLink} className="inline-block px-5 py-2.5 bg-[var(--color-brand-navy)] text-white rounded-full font-bold hover:scale-105 transition-transform shadow-md text-[11px]">
                      {data.contactBtnText}
                    </a>
                  </div>

                </div>

                {/* Bottom line */}
                <div className="px-8 pb-8 pt-4 space-y-3">
                  <div className="text-[10px] font-mono text-gray-400 text-center leading-relaxed">
                    Flowtaris.net is the operational transparency layer of{' '}
                    <a href="https://flowtaris.com" className="text-[var(--color-brand-accent)] hover:underline font-semibold" rel="noopener">Flowtaris</a>
                    {' '}— Enterprise ERP &amp; Integration Consulting.{' '}
                    <a href="https://flowtaris.com/contact" className="text-[var(--color-brand-accent)] hover:underline font-semibold" rel="noopener">Hire this team →</a>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-mono text-gray-400">
                    <span>© {new Date().getFullYear()} Flowtaris. All rights reserved.</span>
                    <div className="flex space-x-4">
                      <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
                      <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Closed State (Handle) - ALWAYS AT THE BOTTOM */}
          <div className="flex flex-col items-center justify-center h-[90px] w-full cursor-pointer relative shrink-0 border-t border-transparent group-hover:border-gray-200/50 transition-colors duration-500 bg-white rounded-b-[2rem]">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center shadow-sm border border-gray-100 transition-all duration-500 group-hover:border-[var(--color-brand-accent)]">
                <LogoImage className="w-8 h-8 object-contain" />
              </div>
              <span className="text-3xl font-heading font-black text-[var(--color-brand-navy)] tracking-tight transition-colors duration-500 group-hover:text-[var(--color-brand-accent)]">
                Flowtaris
              </span>
            </div>
            {/* Hide the 'Hover to Expand' text on hover */}
            <div className="absolute -bottom-5 flex items-center space-x-2 transition-opacity duration-300 opacity-100 group-hover:opacity-0 pointer-events-none">
              <div className="w-1 h-1 rounded-full bg-[var(--color-brand-accent)] animate-pulse"></div>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-400">
                Hover to Expand
              </span>
              <div className="w-1 h-1 rounded-full bg-[var(--color-brand-accent)] animate-pulse"></div>
            </div>
          </div>

        </footer>
      </div>
    </div>
  );
}