import { HandlerContext } from "$fresh/server.ts";

const BODY_TEXT = "Up to 10ms CPU time per request";

export const handler = (
  _req: Request,
  _ctx: HandlerContext
): Promise<Response> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(new Response(BODY_TEXT));
    }, 200);
  });
};
