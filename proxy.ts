import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// La raíz sirve el contenido en español sin cambiar la URL visible
export function proxy(request: NextRequest) {
  return NextResponse.rewrite(new URL("/es", request.url));
}

export const config = {
  matcher: "/",
};
