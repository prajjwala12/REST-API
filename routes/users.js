import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const users = [];
// all routes here are starting with /users only!
router.get("/", (_req, res) => {
  res.send(users);
});

router.post("/", (_req, res) => {
  const user = _req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the name ${user.firstName} added to the database`);
});

router.get("/:id", (_req, res) => {
  const { id } = _req.params;
  const foundUser = users.find((user) => (user.id = id));
  res.send(foundUser);
});

router.delete("/:id", (_req, res) => {
  const { id } = _req.params;
  users = users.filter((user) => user.id != id);
  res.send(`User with the ${id} deleted from the database.`);
});

router.patch("/:id", (_req, res) => {
  const { id } = _req.params;
  const { firstName, lastName, age } = _req.body;
  const userToBeUpdated = users.find((user) => (user.id = id));

  if (firstName) users.firstName = firstName;
  if (lastName) users.lastName = lastName;
  if (lastName) users.age = age; 

  res.send(`User with the id ${id} has been updated`);
});

export default router;
