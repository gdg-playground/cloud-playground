import { addCount, getCount, resetCount } from "./functions"

const port = process.env.PORT ? Number.parseInt(process.env.PORT) : 3000;

Bun.serve({
    port,
    routes: {
        "/": async () => {
            const count = await getCount();

            return new Response(`Count: ${count}`);
        },
        "/add": async () => {
            const count = await addCount();

            return new Response(`Count: ${count}`);
        },
        "/reset": async () => {
            await resetCount();

            return new Response("OK");
        }
    }
});

console.log(`ready on ${port}`);