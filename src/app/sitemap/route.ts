import { NextResponse } from "next/server";

export async function GET() {
  try {
    const baseUrl = "https://www.flaviojs.com";

    const pages = [
      "/",
      "/#projetos",
      "/#habilidades",
      "/#depoimentos",
      "/#contato",
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(
          (page) => `
        <url>
          <loc>${baseUrl}${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>${page === "/" ? "1.0" : "0.8"}</priority>
        </url>`
        )
        .join("")}
    </urlset>`.trim();

    return new NextResponse(sitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    console.error("Erro ao gerar o sitemap:", error);
    return new NextResponse("Erro ao gerar o sitemap", { status: 500 });
  }
}
