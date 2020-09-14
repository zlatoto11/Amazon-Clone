const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HRF38ETCBTTBleac48hjZBkZU6th5rz9TemUq4KREMVkUBNCuQcqX5XjxTaR7KSu27QNHxAd30gwnMRzP5qMwxJ00p7lReg7q"
);

//API

// App config
const app = express();
//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.get("/qazi", (request, response) =>
  response.status(200).send("Wats up QZI")
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received BOOm!! for this ammount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "GBP",
  });

  //OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/clone-a1bca/us-central1/api
