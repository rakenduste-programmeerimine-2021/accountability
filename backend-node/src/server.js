const dotenv = require("dotenv");
dotenv.config();
const express = require('express')
const mongoose = require('mongoose')
const cron = require('node-cron')
const User = require("./models/User")
const http = require("http")
const app = express()
const server = http.createServer(app)

const PORT = process.env.PORT || 3000
require("dotenv").config()



const authRoutes = require('./routes/auth');


app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('*', (req, res) => {
  res.send('This route does not exist')
})




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

server.listen(8080, () => console.log("server is running on port 8080"))



mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })

  