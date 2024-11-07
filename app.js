import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import { getVisits, incrementVisits } from "./visits.js";
const app = new Hono();

app.get("/", async (c) => {
    await incrementVisits();
    return c.text(`Hello world!`);
});

app.get("/visits", async (c) => {
    return c.text(`Visit count: ${await getVisits()}`);
});

export default app;
