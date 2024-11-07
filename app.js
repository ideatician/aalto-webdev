import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import { getStore, setStore } from "./store.js";
const app = new Hono();

app.get("/", (c) => {
    const store = c.req.query("store");
    if (store) {
        setStore(store);
    }
    return c.text(`Store: ${getStore()}`);
});

export default app;
