const express = require('express');
const app = express();
const cors = require('cors');
// const path = require('path');
const connectToDb = require('./config/connectToDb')
const dotenv = require('dotenv');
const PORT = process.env.PORT || 5000;
dotenv.config();
connectToDb()
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(path.join(__dirname, 'public')));


app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => {
//   res.render('home');
// });

const musicRouter = require("./routes/musicRoutes")
const userRouter = require("./routes/userRoutes")

app.use("/music",musicRouter )
app.use("/user",userRouter )

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
