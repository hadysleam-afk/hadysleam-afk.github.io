// NEXT_PUBLIC_BASE_PATH="" for the root site, "/preview-next" for the temporary preview.
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: base || undefined,
  assetPrefix: base || undefined,
};
export default nextConfig;
