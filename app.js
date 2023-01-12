const express = require("express"); // require package
const bodyParser = require("body-parser"); //require package

const app = express(); // creating app constant

let item = "";
let items = [];
app.use(bodyParser.urlencoded({ extended: true })); // allows me to grab body in callback function on post request
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function (req, res) {

    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    let day = today.toLocaleDateString("en-US", options);


    res.render("lists", {
        kindOfDay: day,
        newListItems: items
    })
})


app.post("/", function (req, res) {

    item = req.body.newItem;
    items.push(item)
    console.log(item)
    res.redirect("/")
})



app.listen(3000, function () {
    console.log("Server is running on port 3000")
    console.log(__dirname + "\views\lists.ejs")
})



