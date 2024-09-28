export interface Todo {
  id: string | number;
  description: string;
  status: TodoStatus;
  createdAt: string | Date;
  dueDate: string | Date;  // Añadimos la propiedad dueDate
  people?: Person[];       // Asegúrate de que la propiedad people esté presente si la usas
}

export type TodoStatus = 'empty' | 'in-progress' | 'finished';

export type FilterStatus = TodoStatus | 'all';

export type Orders = 'newest' | 'oldest';

export interface Person {
  fullName: string;
  age: number;
  skills: string[];
}
