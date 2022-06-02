const app = require("@forkjs/group-router");

const {
  createTask,
  getTask,
  getAllTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

app.group("/api/tasks", () => {
  //*   @Route   /api/tasks/add-task
  app.post("/add-task", createTask);
  //*   @Route   /api/tasks/select-task/:id
  app.post("/select-task/:id", getTask);
  //*   @Route   /api/tasks/select-all
  app.post("/select-all", getAllTask);
  //*   @Route   /api/tasks/delete-task/:id
  app.delete("/delete-task/:id", deleteTask);
  //*   @Route   /api/tasks/update-task/:id
  app.post("/update-task/:id", updateTask);
});

module.exports = app.router;
