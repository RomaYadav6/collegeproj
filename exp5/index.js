const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

let pizzas = [
  { id: 1, name: "Margherita", size: "Medium" },
  { id: 2, name: "Pepperoni", size: "Large" },
];

app.get("/", (req, res) => {
  res.send("Welcome to the Pizza House!");
});

app.get("/pizzas", (req, res) => {
  res.json(pizzas);
});

app.get("/pizzas/:id", (req, res) => {
  const pizza = pizzas.find((p) => p.id === parseInt(req.params.id));
  if (!pizza) return res.status(404).json({ error: "Pizza not found" });
  res.json(pizza);
});

app.post("/pizzas", (req, res) => {
  const { name, size } = req.body;
  if (!name || !size)
    return res.status(400).json({ error: "Name and size are required" });
  const newPizza = {
    id: pizzas.length + 1,
    name,
    size,
  };
  pizzas.push(newPizza);
  res.status(201).json(newPizza);
});

app.put("/pizzas/:id", (req, res) => {
  const pizza = pizzas.find((p) => p.id === parseInt(req.params.id));
  if (!pizza) return res.status(404).json({ error: "Pizza not found" });

  const { name, size } = req.body;
  if (name) pizza.name = name;
  if (size) pizza.size = size;

  res.json(pizza);
});

app.delete("/pizzas/:id", (req, res) => {
  const index = pizzas.findIndex((p) => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Pizza not found" });

  const deleted = pizzas.splice(index, 1);
  res.json({ message: "Pizza deleted", deleted });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
  console.log(`Pizza server is running on http://localhost:${PORT}`);
});
