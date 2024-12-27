// app/providers.tsx

"use client"; // Ensure this is a client component

import { NextUIProvider } from '@nextui-org/react';
import dynamic from 'next/dynamic';

// Dynamically import SSRProvider from @react-aria/ssr
const SSRProvider = dynamic(() => import('@react-aria/ssr').then((mod) => mod.SSRProvider), {
  ssr: false // Disable server-side rendering for this component
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SSRProvider>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </SSRProvider>
  );
}
