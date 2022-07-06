import { HandlerContext } from "$fresh/server.ts";

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  /// updated
  return new Response(Deno.pid.toString());
};