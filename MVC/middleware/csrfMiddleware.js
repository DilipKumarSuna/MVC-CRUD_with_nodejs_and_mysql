const express = require('express');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');

const app = express();

// Set up middleware
app.use(cookieParser());
app.use(csrf({ cookie: true }));
