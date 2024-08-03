const server = Bun.serve({
	port: 8080,
	fetch(req) {
    		return new Response("404!");
	},
});

console.log(server.port);
