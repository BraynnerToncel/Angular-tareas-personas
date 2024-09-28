import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

const MATERIAL_MODULES = [MatIconModule, MatToolbarModule, MatButtonModule];

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, MATERIAL_MODULES], 
  template: `
    <mat-toolbar color="primary">
      <span class="spacer"></span>      
      <a mat-button (click)="onNavigateTo('crear')">
        <mat-icon>add_circle</mat-icon>
        <span>Crear</span>  
      </a>

      <a mat-button (click)="onNavigateTo('listar')"> 
        <mat-icon>list</mat-icon>
        <span>Listar</span>       
      </a>
    </mat-toolbar>
  `,
  styles: []
})
export class ToolbarComponent {
  constructor(private router: Router) {}

  onNavigateTo(route: string) {
    this.router.navigate([route]);
  }
}
