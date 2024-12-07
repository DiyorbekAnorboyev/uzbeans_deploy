// next.config.ts

import type { NextConfig } from 'next';

// Import i18n configuration (default import)
import i18nConfig from './next-i18next.config';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  i18n: i18nConfig.i18n, // Use default export for i18n config
};

export default nextConfig;
