import { Component } from '@angular/core';
import { Banner } from '../../components/banner/banner'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aluno',
  imports: [Banner, CommonModule],
  templateUrl: './aluno.html',
  styleUrls: ['./aluno.css']
})
export class Aluno {

}
