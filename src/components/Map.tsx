'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Importação dinâmica do mapa para evitar problemas de SSR
const MapComponent = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-96 bg-gray-100 rounded-lg">
      <div className="text-center">
        <div className="text-4xl mb-4">🗺️</div>
        <p className="text-gray-600">Carregando mapa...</p>
      </div>
    </div>
  )
});

interface MapProps {
  className?: string;
}

export default function Map({ className = "h-96 w-full" }: MapProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className={`${className} bg-gray-100 rounded-lg flex items-center justify-center`}>
        <div className="text-center">
          <div className="text-4xl mb-4">🗺️</div>
          <p className="text-gray-600">Carregando mapa...</p>
        </div>
      </div>
    );
  }

  return <MapComponent className={className} />;
} 