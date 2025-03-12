import { NextResponse } from "next/server";

export function GET() {
  return new NextResponse(
    `User-agent: *
Allow: /
Sitemap: https://www.flaviojs.com/sitemap
`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
