import { Component } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Router } from '@angular/router';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EyeOutline, EyeInvisibleOutline } from '@ant-design/icons-angular/icons';
import { AuthService } from '../../services/auth'
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NzIconModule, FormsModule, NgIf],
  providers: [
    { provide: NZ_ICONS, useValue: [EyeOutline, EyeInvisibleOutline] }
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  credentials={
    Email: '',
    Senha: ''
  }
  mensagemErro: string = ''
  passwordVisible: boolean = false

  constructor(
    private authService: AuthService,
    private router: Router
  ){ }

  togglePassword(){
    this.passwordVisible = !this.passwordVisible
  }
  onSubmit(): void {
    console.log('Formulário enviado!')
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        console.log("login bem sucedido", response)
        this.mensagemErro = 'Login bem sucedido'
        this.router.navigate(['/login'])
        //talvez redirecionar o usuário e gerar token
      },
      error: (err) => {
        console.log("Erro no login", err);
        this.mensagemErro = 'Erro ao efetuar login'
      }
      
    });
  }
}
