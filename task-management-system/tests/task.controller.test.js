import request from 'supertest';

import app from '../app.js';

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from '../domain/task/task.service.js';

jest.mock('../domain/task/task.service.js');

describe('Task Controller', () => {
  test('GET /api/v1/tasks should return array of task', async () => {
    const mockTasks = [
      {
        _id: '6459a468f6924c2e33132d63',
        title: 'Test1',
        status: 'TODO',
        __v: 0,
      },
    ];
    getTasks.mockReturnValue(mockTasks);

    const response = await request(app)
      .get('/api/v1/tasks')
      .set('Accept', 'application/json');

    expect(response.status).toEqual(200);
    expect(response.body.data).toEqual(mockTasks);
  });

  test('POST /api/v1/tasks should return newly create task', async () => {
    const mockTasks = [
      {
        _id: '6459a468f6924c2e33132d63',
        title: 'Test1',
        status: 'TODO',
        __v: 0,
      },
    ];
    createTask.mockReturnValue(mockTasks);

    const body = {
      title: 'Test1',
      status: 'TODO',
    };
    const response = await request(app)
      .post('/api/v1/tasks')
      .set('Accept', 'application/json')
      .send(body);

    expect(response.status).toEqual(200);
    expect(response.body).toEqual(mockTasks);
  });

  test('PATCH /api/v1/tasks/:id should return updated task', async () => {
    const mockTasks = [
      {
        _id: '6459a468f6924c2e33132d63',
        title: 'Test1',
        status: 'IN_PROGRESS',
        __v: 0,
      },
    ];
    updateTask.mockReturnValue(mockTasks);

    const taskId = '6459a468f6924c2e33132d63';
    const body = {
      status: 'IN_PROGRESS',
    };
    const response = await request(app)
      .patch(`/api/v1/tasks/${taskId}`)
      .send(body)
      .set('Accept', 'application/json');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual(mockTasks);
  });

  test('PATCH /api/v1/tasks/:id with invalid id should return 404', async () => {
    updateTask.mockImplementation(() => {
      throw new Error('NF_0001');
    });

    const taskId = 'invalidId';
    const body = {
      status: 'IN_PROGRESS',
    };
    const response = await request(app)
      .patch(`/api/v1/tasks/${taskId}`)
      .send(body)
      .set('Accept', 'application/json');

    expect(response.status).toEqual(404);
  });

  test('DELETE /api/v1/tasks/:id should delete task', async () => {
    const mockTasks = [
      {
        _id: '6459a468f6924c2e33132d63',
        title: 'Test1',
        status: 'TODO',
        __v: 0,
      },
    ];
    const taskId = '6459a468f6924c2e33132d63';
    deleteTask.mockReturnValue(mockTasks);
    const response = await request(app)
      .delete(`/api/v1/tasks/${taskId}`)
      .set('Accept', 'application/json');
    expect(response.status).toEqual(204);
  });

  test('DELETE /api/v1/tasks/:id with invalid id should return 404', async () => {
    const taskId = 'invalidId';
    deleteTask.mockImplementation(() => {
      throw new Error('NF_0001');
    });
    const response = await request(app)
      .delete(`/api/v1/tasks/${taskId}`)
      .set('Accept', 'application/json');
    expect(response.status).toEqual(404);
  });

  test('GET /api/v1/invalid should return not found', async () => {
    const response = await request(app)
      .get('/api/v1/invalid')
      .set('Accept', 'application/json');
    expect(response.status).toEqual(404);
  });
});
