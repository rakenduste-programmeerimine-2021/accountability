// SIIT ALGAB VIDEOSUHTLUSE KOOD
const dotenv = require("dotenv");
dotenv.config();

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

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	})

	socket.on("callUser", (data) => {
		io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
	})

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	})
})

// Siin olid PORT-id varem 5000
server.listen(8081, () => console.log("server is running on port 8081"))
// SIIT LÕPPEB VIDEOSUHTLUSE KOOD
// -------------------------------------------------------------------------
// SIIT ALGAB ANDRESE KOOD
// const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 8080
const jwtAuth = require("./middleware/jwtAuth")
// require("dotenv").config()

const itemRoutes = require('./routes/item');
const authRoutes = require('./routes/auth');

const app_2 = express()
app_2.use(express.json());

app_2.use('/api/item', itemRoutes);
app_2.use('/api/auth', authRoutes);

app_2.get('/', (req, res) => {
  res.send('Hello World!')
})

app_2.get('/secret', jwtAuth, (req, res) => {
  res.send('Secret Hello World!')
})

app_2.get('*', (req, res) => {
  res.send('This route does not exist')
})

mongoose
//   .connect(process.env.MONGODB_URI, {
	.connect("mongodb+srv://New-User-J:CanIntoPassword@cluster0.zz4zo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
	  app_2.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
	})
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })
// SIIT LÕPPEB ANDRESE KOOD
