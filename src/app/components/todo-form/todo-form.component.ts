import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { formOptions } from 'src/app/config/options';
import { Todo, TodoStatus } from 'src/app/interfaces/todos.interfaces';
import { TodosService } from 'src/app/services/todos.service';

export function uniqueNamesValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const names = control.value.map((person: { fullName: string }) => person.fullName.toLowerCase());
    const hasDuplicates = names.length !== new Set(names).size;
    return hasDuplicates ? { duplicateNames: true } : null;
  };
}


export function dateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const dueDate = new Date(control.value);
    dueDate.setHours(0, 0, 0, 0); 
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); 
    return dueDate < currentDate ? { invalidDate: true } : null;
  };
}


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  private todosService = inject(TodosService);
  private fb = inject(FormBuilder);

  public formOptions = formOptions; 

  public todoForm: FormGroup = this.fb.group({
    description: ['', Validators.required],
    status: [formOptions[0].value, Validators.required],
    dueDate: ['', [Validators.required, dateValidator()]], 
    people: this.fb.array([], { validators: uniqueNamesValidator() }),
  });

  get people(): FormArray {
    return this.todoForm.get('people') as FormArray;
  }

  public addPerson() {
    const personForm = this.fb.group({
      fullName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      skills: this.fb.array([
        this.fb.control('', Validators.required)
      ]),
    });
    this.people.push(personForm);
  }

  public addTodo() {
    const peopleControl = this.todoForm.get('people') as FormArray;
  
    if (peopleControl.length === 0) {
      alert('Debe tener minimo una persona asociada a la tarea');
      return;
    }
  
    if (peopleControl.errors?.['duplicateNames']) {
      return;
    }
  
    const dueDate = new Date(this.todoForm.value.dueDate);
    dueDate.setHours(0, 0, 0, 0); 
  
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); 
  
    if (dueDate < currentDate) {
      alert('La fecha debe ser igual o mayor a la actual');
      return;
    }
    console.log('Fecha límite seleccionada:', dueDate);
    console.log('Fecha actual:', currentDate);

  

    const peopleWithLowercaseNames = this.todoForm.value.people.map((person: { fullName: string, age: number, skills: string[] }) => ({
      ...person,
      fullName: person.fullName.toLowerCase(),
    }));
  

    const newTodo: Todo = {
      id: Math.random(),
      description: this.todoForm.value.description,
      status: this.todoForm.value.status,
      dueDate: this.todoForm.value.dueDate,
      createdAt: new Date(),
      people: peopleWithLowercaseNames, 
    };
  
    this.todosService.addTodo(newTodo);
    this.todoForm.reset(); 
  }

  public getPersonSkills(index: number): FormArray {
    return this.people.at(index).get('skills') as FormArray;
  }

  public addSkill(personIndex: number) {
    const personSkills = this.getPersonSkills(personIndex);
    personSkills.push(this.fb.control('', Validators.required));
  }

  public removeSkill(personIndex: number, skillIndex: number) {
    const personSkills = this.getPersonSkills(personIndex);
    personSkills.removeAt(skillIndex);
  }

  public removePerson(personIndex: number) {
    this.people.removeAt(personIndex);
  }
}
