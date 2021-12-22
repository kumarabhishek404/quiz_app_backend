const Express = require("express");
const cors = require('cors');
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const CONNECTION_URL = 'mongodb+srv://quiz:quizapp@quiz.8o4t0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const DATABASE_NAME = "quiz";


var app = Express();
app.use(cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database, collection;

app.post("/score", (request, response) => {
  const data = request.body
  collection.insertOne(data, (error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    response.send(result.result);
  });
});

app.listen(5000, () => {
  MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
      throw error;
    }
    database = client.db(DATABASE_NAME);
    collection = database.collection("quiz");
    console.log("Connected to `" + DATABASE_NAME + "`!");
  });
});