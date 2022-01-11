const express = require("express")
const http = require("http")
const app = express()
const server = http.createServer(app)
const io = require("socket.io")(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: [ "GET", "POST" ]
	}
})

io.on("connection", (socket) => {
	socket.emit("me", socket.id)
	// "me" on kasutaja ID

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
		// Kõne lõpetamine
	})

	socket.on("callUser", (data) => {
		io.to(data.userToCall).emit("callUser", 
		{ signal: data.signalData, from: data.from, name: data.name })
		// signal from ja name tulevad frontendist
	})

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	})
	// kõne vastuvõtmine
})

server.listen(5000, () => console.log("server is running on port 5000"))
