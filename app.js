import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import { getStore, setStore } from "./store.js";
const app = new Hono();

app.get("/", async (c) => {
    const store = c.req.query("store");
    if (store) {
        await setStore(store);
    }
    return c.text(`Store: ${await getStore()}`);
});

export default app;
