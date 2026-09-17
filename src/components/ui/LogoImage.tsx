"use client";

import Image from 'next/image';

interface LogoImageProps {
  className?: string;
}

export default function LogoImage({ className = "" }: LogoImageProps) {
  return (
    <div className={className} style={{ position: 'relative' }}>
      <Image 
        src="/logo.png" 
        alt="Flowtaris Logo" 
        fill
        style={{ objectFit: 'contain' }}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}
