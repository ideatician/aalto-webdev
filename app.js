import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

let count = 4;


app.get("/", (c) => {
    if (count === 1) {
        return c.text(`Kaboom!`);
    } else {
        count -= 1;
        return c.text(count);
    }
});
/*
app.get("/", 
    (c) => c.text(`Kaboom!`)
);
*/
export default app;
