const setStore = async (s) => {
    const kv = await Deno.openKv();
    await kv.set(["store"], s);
};

const getStore = async () => {
    const kv = await Deno.openKv();
    const s = await kv.get(["store"]);
    return s.value ?? "Nothing.";
};

export { setStore };
export { getStore };