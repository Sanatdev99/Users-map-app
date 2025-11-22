import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polygon, useMapEvents } from 'react-leaflet';
import { v4 as uuid } from 'uuid';
import { getDb } from '../lib/db';

type LatLng = [number, number];

function DrawTool({ onChange }: { onChange: (p: LatLng[]) => void }) {
    const [pts, setPts] = useState<LatLng[]>([]);

    useMapEvents({
        click(e) {
            const p: LatLng = [e.latlng.lat, e.latlng.lng];
            const next = [...pts, p];
            setPts(next);
            onChange(next);
        },
    });

    return pts.length ? <Polygon positions={pts} pathOptions={{ color: 'blue' }} /> : null;
}

export default function MapPage() {
    const [poly, setPoly] = useState<LatLng[]>([]);
    const [savedList, setSavedList] = useState<any[]>([]);

    useEffect(() => {
        (async () => {
            const db = await getDb();
            setSavedList(await db.getAll('polygons'));
        })();
    }, []);

    const savePolygon = async () => {
        if (!poly.length) return;
        const db = await getDb();
        await db.put('polygons', {
            id: uuid(),
            coords: poly,
            createdAt: new Date().toISOString(),
        });
        setSavedList(await db.getAll('polygons'));
        setPoly([]);
    };

    return (
        <div className="container-custom grid gap-4 p-6">
            <h1 className="text-2xl font-bold">Map - Draw Polygon</h1>
            <div className="h-[600px] rounded overflow-hidden shadow-sm">
                <MapContainer center={[41.3, 69.2]} zoom={12} className="h-full w-full">
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <DrawTool onChange={setPoly} />
                    {savedList.map((p) => (
                        <Polygon key={p.id} positions={p.coords} pathOptions={{ color: '#999' }} />
                    ))}
                </MapContainer>
            </div>
            <div className="flex gap-3">
                <button
                    onClick={savePolygon}
                    disabled={!poly.length}
                    className="px-4 py-1 bg-brand-500 text-xl font-semibold border text-gray-950 rounded-md"
                >
                    Save
                </button>
                <button onClick={() => setPoly([])} className="px-4 py-1 bg-brand-500 text-xl font-semibold border text-gray-950 rounded-md">
                    Clear
                </button>
            </div>
            <div>
                <h3 className="font-medium text-xl mb-4">Saved polygons</h3>
                <ul className="text-xl font-medium text-gray-600">
                    {savedList.length === 0 && <li>None</li>}
                    {savedList.map((p) => (
                        <li key={p.id}>
                            {p.id} • {new Date(p.createdAt).toLocaleString()}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}