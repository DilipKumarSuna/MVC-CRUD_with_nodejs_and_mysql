const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes/userRouter.js');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });



const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(csrfProtection);



app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

//app routes
app.use('/', routes);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

require