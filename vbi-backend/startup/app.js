let express = require('express');
let cors = require('cors')
let session = require('express-session')
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let app = express();
const router = require("./routes");
require("./db");
require("../models/relations");
let seedData = require("./seedData");
app.use(logger('dev'));
app.set('trust proxy', 1);
app.use(cors({
  origin: ["http://localhost:3000", "https://vbi-ui.netlify.app"],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}))
app.use(session({
  store: new (require('connect-pg-simple')(session))({
    conObject: {
      connectionString: process.env.DATABASE_URL,
      ssl: true,
    }
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: true,
    maxAge: 30 * 24 * 60 * 60 * 1000
  }
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

router(app);
seedData();
module.exports = app;
