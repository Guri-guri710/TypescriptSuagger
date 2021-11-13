import { Router } from "express";
import { getTasks } from "../controllers/task.cotrollers";

const router = Router();

router.get("/tasks", getTasks);

router.get("/tasks/count", (req, res) => {
  res.send("Hello world");
});

router.post("/tasks", (req, res) => {
  res.send("Hello world");
});

router.get("/tasks/:id", (req, res) => {
  res.send("Hello world");
});

router.delete("/tasks/:id", (req, res) => {
  res.send("Hello world");
});

router.put("/tasks/:id", (req, res) => {
  res.send("Hello world");
});

export default router;
