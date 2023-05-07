let id = 1;
let tasks = [
  {
    id: 1,
    title: 'Test',
    status: 'TODO',
  },
];

export async function getTasks() {
  return tasks;
}

export async function createTask(task) {
  const newlyTask = {
    id: ++id,
    ...task,
  };
  tasks.push(newlyTask);
  return newlyTask;
}

export async function updateTask(taskDetail) {
  const { taskId, data } = taskDetail;
  const prepareTaskIndex = tasks.findIndex((t) => t.id === +taskId);
  if (prepareTaskIndex < 0) {
    throw new Error('NOT_FOUND');
  }
  tasks[prepareTaskIndex] = {
    id: taskId,
    ...tasks[prepareTaskIndex],
    ...data,
  };
  return tasks[prepareTaskIndex];
}

export async function deleteTask(taskId) {
  const id = +taskId
  const prepareTaskIndex = tasks.findIndex((t) => t.id === id);
  if (prepareTaskIndex < 0) {
    throw new Error('NOT_FOUND');
  }
  tasks = tasks.filter((t) => t.id !== id);
}
