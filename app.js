"use strict";
const starwars = require('starwars');

const app = document.getElementById("app");

app.innerText = starwars();
