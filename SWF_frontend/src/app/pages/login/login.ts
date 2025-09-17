import { Component } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EyeOutline, EyeInvisibleOutline } from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NzIconModule, FormsModule],
  providers: [
    { provide: NZ_ICONS, useValue: [EyeOutline, EyeInvisibleOutline] }
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  senha: String = '';
  passwordVisible: boolean = false;

  togglePassword(){
    this.passwordVisible = !this.passwordVisible
  }
  onSubmit(): void {
    console.log('Formulário enviado!');
  }
}
