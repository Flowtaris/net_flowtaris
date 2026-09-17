import { getCmsData } from '@/lib/cms';
import FooterInteractive from '@/components/ui/FooterInteractive';

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
      <div className="relative w-full h-[90px] max-w-5xl flex justify-center">
        <FooterInteractive data={data} />
      </div>
    </div>
  );
}