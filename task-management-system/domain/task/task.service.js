import TaskModel from './task.schema.js';

export async function getTasks() {
  const tasks = await TaskModel.find({}).exec();
  return tasks;
}

export async function createTask(task) {
  const prepareTask = new TaskModel({
    title: task.title,
    status: task.status,
  });
  const newlyTask = await prepareTask.save();
  return newlyTask;
}

export async function updateTask(taskDetail) {
  const { taskId, data } = taskDetail;
  const updatedTask = await TaskModel.findByIdAndUpdate(taskId, data, {
    new: true,
  });
  if (!updatedTask) {
    throw new Error('NF_0001');
  }
  return updatedTask;
}

export async function deleteTask(taskId) {
  const deletedTask = await TaskModel.findByIdAndDelete(taskId);
  if (!deletedTask) {
    throw new Error('NF_0001');
  }
}
