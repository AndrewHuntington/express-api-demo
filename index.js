const express = require("express");
const app = express();
const PORT = 8080;

// middleware
// converts body to json
app.use(express.json());

app
  .get("/", (req, res) => {
    res.send("Hello World!");
  })
  .listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });

app.get("/pizza", (req, res) => {
  res.status(200).send({
    food: "🍕",
    size: "large",
  });
});

app.post("/pizza/:id", (req, res) => {
  const { id } = req.params;
  // needs middleware to convert body to json
  const { topping } = req.body;

  if (!topping) {
    res.status(418).send({ message: "What? No toppings?" });
  }

  res.send({
    pizza: `🍕 with your topping of ${topping} and ID of ${id}`,
  });
});
