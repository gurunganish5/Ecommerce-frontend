import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material.module';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router){}

  onSubmit(){
    this.authService.register(this.username, this.email, this.password).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.log('Registration failed', error);
      }
  });
  }

}
