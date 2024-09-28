export interface Todo {
  id: string | number;
  description: string;
  status: TodoStatus;
  createdAt: string | Date;
  dueDate: string | Date;  
  people?: Array<Person>;      
}

export type TodoStatus = 'empty' | 'in-progress' | 'finished';

export type FilterStatus = TodoStatus | 'all';

export type Orders = 'newest' | 'oldest';

export interface Person {
  fullName: string;
  age: number;
  skills: string[];
}
