import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

app.post("/", (c) => c.text("POST request to /"));
app.get("/", (c) => c.text("GET request to /"));

export default app;
