import React, { useState, useEffect } from 'react';
import axios from 'axios';

type TaskState = 'TODO' | 'IN_PROGRESS' | 'DONE';

interface Task {
  _id: number;
  title: string;
  status: TaskState;
}

const baseUrl = 'http://localhost:8080/api/v1/tasks';

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(baseUrl);
      setTasks(response.data.data);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  };

  const handleStateChange = async (id: number, newState: TaskState) => {
    try {
      await axios.patch(`${baseUrl}/${id}`, {
        status: newState,
      });
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === id ? { ...task, status: newState } : task
        )
      );
    } catch (error) {
      console.error('Failed to update task status:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`${baseUrl}/${id}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  const handleAddTask = async () => {
    if (newTaskTitle.trim() === '') {
      return;
    }

    try {
      const response = await axios.post(baseUrl, {
        title: newTaskTitle,
        status: 'TODO',
      });

      setTasks((prevTasks) => [...prevTasks, response.data]);
      setNewTaskTitle('');
    } catch (error) {
      console.error('Failed to add task:', error);
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Enter a new task..."
          style={{ width: '15rem', height: '2rem' }}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div>
        {tasks.map((task) => (
          <div key={task._id}>
            <span>{task.title}</span>
            <button onClick={() => handleStateChange(task._id, 'TODO')}>
              TODO
            </button>
            <button onClick={() => handleStateChange(task._id, 'IN_PROGRESS')}>
              IN PROGRESS
            </button>
            <button onClick={() => handleStateChange(task._id, 'DONE')}>
              DONE
            </button>
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
