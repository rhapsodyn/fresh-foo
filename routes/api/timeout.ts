import { HandlerContext } from "$fresh/server.ts";
import { crypto } from "crypto";

const BODY_TEXT = "Up to 10ms CPU time per request";

/**
 * try 1
 */
const handler_1 = (_req: Request, _ctx: HandlerContext): Promise<Response> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(new Response(BODY_TEXT));
    }, 200);
  });
};

/**
 * try 2 
 */
const handler_2 = (_req: Request, _ctx: HandlerContext): Response => {
  let text = BODY_TEXT;
  for (let i = 0; i < 1000; i++) {
    text += "\n" + crypto.randomUUID();
  }
  return new Response(text);
};

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  let text = BODY_TEXT;
  for (let i = 0; i < 100000; i++) {
    text += "\n" + crypto.randomUUID();
  }
  return new Response(text);
};