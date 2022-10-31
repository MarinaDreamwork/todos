import { getTasks } from '../utils/utils';

describe('getTasks', () => {
  test('testing filter tasks', () => {
    expect(getTasks([
      {id: 1, completed: true, name: 'Сделать архитектуру проекта'},
      {id: 2, completed: false, name: 'Купить продукты'}
    ], 'active')).toStrictEqual([
      {id: 2, completed: false, name: 'Купить продукты'}
    ]);
  });
});