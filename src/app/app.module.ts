import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { DatePipe } from './pipes/date.pipe';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './components/dropdwon/dropdwon.component';
import { ArrowComponent } from './components/dropdwon/components/arrow.component';
import { TodoFiltersComponent } from './components/todo-filters/todo-filters.component';
import { TodoOrdersComponent } from './components/todo-orders/todo-orders.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListarComponent } from './modules/pages/listar/listar.component';
import { CrearComponent } from './modules/pages/crear/crear.component';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  { path: 'crear', component: CrearComponent },
  { path: 'listar', component: ListarComponent },
  { path: '', redirectTo: '/crear', pathMatch: 'full' }, 
];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
    DatePipe,
    TodoFormComponent,
    DropdownComponent,
    ArrowComponent,
    TodoFiltersComponent,
    TodoOrdersComponent,
    ListarComponent,
    CrearComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule, 
    ToolbarComponent,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {}