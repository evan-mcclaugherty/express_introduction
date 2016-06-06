let express = require('express');
let app = express();

let vegetables = [
    "Carrots",
    "Cucumber",
    "Peas"
];
//app.set("views", "./views");
app.set("view engine", "hbs")

app.get("/", (request, response) => {
    response.render("index", {
        name: "Evan"
    })
})

app.get("/vegetables", (request, response) => {
    response.send(vegetables.join(" "));
})
app.get("/hello/:name", (request, response) => {
    response.send("Hello, " + request.params.name);
})
app.get("/companies/:company/products/:productName", (request, response) => {
    response.send(request.params.company + " makes the " + request.params.productName);
});
app.get("/hi", (request, response) => {
    let name = request.query.name;
    response.send(`Hello, ${name}`)
})

app.get("/meaning_of_life", (request, response) => {
    response.send("42");
})

app.listen(8000, () => {
    console.log("Server Started...");
})
