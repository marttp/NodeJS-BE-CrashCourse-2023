import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from '../domain/task/task.service.js';
import TaskModel from '../domain/task/task.schema.js';

jest.mock('../domain/task/task.schema.js');

describe('Task Service', () => {
  test('Get All Tasks -> Success', async () => {
    // Given
    const mockTasks = [
      {
        _id: '6459a468f6924c2e33132d63',
        title: 'Test1',
        status: 'TODO',
        __v: 0,
      },
    ];
    TaskModel.find.mockReturnValue({
      exec: jest.fn().mockReturnValue(mockTasks),
    });
    // When
    const actualResult = await getTasks();
    // Then
    expect(actualResult).toStrictEqual([
      {
        _id: '6459a468f6924c2e33132d63',
        title: 'Test1',
        status: 'TODO',
        __v: 0,
      },
    ]);
  });

  test('Create Task -> Success', async () => {
    const mockResponse = {
      _id: '6459a468f6924c2e33132d63',
      title: 'Test1',
      status: 'TODO',
      __v: 0,
    };
    TaskModel.mockImplementation(() => ({
      save: jest.fn().mockReturnValue(mockResponse),
    }));
    // When
    const body = {
      title: 'Test1',
      status: 'TODO',
    };
    const actualResult = await createTask(body);
    // Then
    expect(actualResult).toBeTruthy();
    expect(actualResult._id).toBe('6459a468f6924c2e33132d63');
    expect(actualResult.title).toBe('Test1');
    expect(actualResult.status).toBe('TODO');
  });

  test('Update Task -> Success', async () => {
    const mockResponse = {
      _id: '6459a468f6924c2e33132d63',
      title: 'Test1',
      status: 'IN_PROGRESS',
      __v: 0,
    };
    TaskModel.findByIdAndUpdate.mockReturnValue(mockResponse);

    const taskId = '6459a468f6924c2e33132d63';
    const data = { status: 'IN_PROGRESS' };
    const actualResult = await updateTask({ taskId, data });

    expect(actualResult).toBeTruthy();
    expect(actualResult._id).toBe('6459a468f6924c2e33132d63');
    expect(actualResult.title).toBe('Test1');
    expect(actualResult.status).toBe('IN_PROGRESS');
  });

  test('Update Task -> Fail', async () => {
    TaskModel.findByIdAndUpdate.mockReturnValue(null);
    const taskId = 'wronglyId';
    const data = { status: 'IN_PROGRESS' };
    expect(async () => await updateTask({ taskId, data })).rejects.toThrow();
  });

  test('Delete Task -> Success', async () => {
    const mockResponse = {
      _id: '6459a468f6924c2e33132d63',
      title: 'Test1',
      status: 'TODO',
      __v: 0,
    };
    TaskModel.findByIdAndDelete.mockReturnValue(mockResponse);
    const taskId = '6459a468f6924c2e33132d63';
    expect(async () => await deleteTask(taskId)).not.toThrow();
  });

  test('Delete Task -> Fail', async () => {
    TaskModel.findByIdAndDelete.mockReturnValue(null);
    const taskId = '6459a468f6924c2e33132d63';
    expect(async () => await deleteTask(taskId)).rejects.toThrow();
  });
});
