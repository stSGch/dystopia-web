import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: erzeugt einen out/-Ordner mit reinem HTML/CSS/JS,
  // den du per FTP/SFTP oder Static Hosting (Hostpoint, Cyon, Netlify Drop, etc.) hochladen kannst.
  output: "export",

  // Trailing slash sorgt dafür, dass URLs auf statischen Hosts ohne Rewrite-Rules
  // sauber funktionieren (z.B. /imprint/ liefert /imprint/index.html).
  trailingSlash: true,

  // next/image braucht in der Default-Konfig den Next-Server.
  // Beim static export werden Bilder unoptimiert direkt aus /public ausgeliefert.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
