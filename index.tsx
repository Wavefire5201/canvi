import { renderToReadableStream } from "react-dom/server.browser";
import Pokemon from "./components/App";

Bun.serve({
  async fetch(request) {

    const stream = await renderToReadableStream(<Pokemon />);

    return new Response(stream, {
      headers: { "Content-Type": "text/html" },
    });
  },
});

console.log("Listening ...");

