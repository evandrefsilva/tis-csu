/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração para standalone output (necessário para Docker)
  output: 'standalone',
  
  // Configurações de segurança
  poweredByHeader: false,
  
  // Configurações de compressão
  compress: true,
  
  // Configurações de imagens
  images: {
    domains: ['cdnjs.cloudflare.com'],
    unoptimized: false,
  },
  
  // Configurações de experimental features
  experimental: {
    // Otimizações para produção (desabilitado temporariamente)
    // optimizeCss: true,
  },
  
  // Configurações de headers de segurança
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Configurações de redirecionamento
  async redirects() {
    return [];
  },
  
  // Configurações de rewrites
  async rewrites() {
    return [];
  },
};

module.exports = nextConfig; 