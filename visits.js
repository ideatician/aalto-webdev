const setVisits = async (s) => {
    const kv = await Deno.openKv();
    await kv.set(["visits"], s);
};

const incrementVisits = async () => {
    let visits = await getVisits();
    visits++;
    await setVisits(visits);
  };

const getVisits = async () => {
    const kv = await Deno.openKv();
    const visits = await kv.get(["visits"]);
    return visits.value ?? 0;
};

export { incrementVisits };
export { getVisits };