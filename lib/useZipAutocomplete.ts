import { useEffect, useState, useMemo } from "react";

interface ZipCode {
  zip: string;
  city: string;
  state_id: string;
}

export default function useZipAutocomplete(input: string): ZipCode[] {
  const [zipData, setZipData] = useState<ZipCode[]>([]);

  useEffect(() => {
    fetch("/zipcodes.json")
      .then((res) => res.json())
      .then((data: ZipCode[]) =>
        setZipData(data.filter((z) => z.zip && z.city && z.state_id))
      )
      .catch((err) => console.error("Failed to load zipcodes.json", err));
  }, []);

  const results = useMemo(() => {
    if (!input || input.length < 2) return [];

    const q = input.toLowerCase();

    return zipData
      .filter(
        (z) =>
          typeof z.zip === "string" &&
          typeof z.city === "string" &&
          typeof z.state_id === "string" &&
          (
            z.zip.startsWith(q) ||
            z.city.toLowerCase().startsWith(q) ||
            z.state_id.toLowerCase().startsWith(q)
          )
      )
      .slice(0, 8);
  }, [input, zipData]);

  return results;
}
