'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Fix para os ícones do Leaflet
delete (Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapComponentProps {
  className?: string;
}

export default function MapComponent({ className = "h-96 w-full" }: MapComponentProps) {
  // Coordenadas dos escritórios em Angola
  const locations = [
    {
      name: "Praia - Santiago",
      address: "Achada de Santo António - Rua Cidade do Funchal, Nº 2",
      coordinates: [14.9311, -23.5087], // Praia
      type: "Sede Principal"
    },
    {
      name: "Mindelo - São Vicente", 
      address: "Rua da República, 150",
      coordinates: [16.8501, -24.9581], // Mindelo
      type: "Escritório Regional"
    },
    {
      name: "Sal - Ilha do Sal",
      address: "Rua da Liberdade, 75",
      coordinates: [16.7551, -22.9326], // Santa Maria
      type: "Escritório Regional"
    }
  ];

  // Centro do mapa (Praia)
  const center = [14.9311, -23.5087] as [number, number];

  return (
    <div className={className}>
      <MapContainer 
        center={center} 
        zoom={8} 
        className="h-full w-full rounded-lg"
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {locations.map((location, index) => (
          <Marker 
            key={index} 
            position={location.coordinates as [number, number]}
          >
            <Popup>
              <div className="text-center">
                <h3 className="font-bold text-lg text-csu-red mb-2">{location.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{location.address}</p>
                <span className="inline-block bg-csu-white text-csu-black px-2 py-1 rounded text-xs font-semibold">
                  {location.type}
                </span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
} 