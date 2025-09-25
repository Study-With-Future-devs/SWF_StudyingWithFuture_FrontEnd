import { Component } from '@angular/core';
import { Banner } from '../../components/banner/banner'
import { CommonModule } from '@angular/common';
import { UserDisplay } from "../../components/user-display/user-display";
import { NzDemoCalendarCustomizeHeaderComponent } from "../../components/calendar/calendar"

@Component({
  selector: 'app-aluno',
  imports: [Banner, CommonModule, UserDisplay, NzDemoCalendarCustomizeHeaderComponent],
  templateUrl: './aluno.html',
  styleUrls: ['./aluno.css']
})
export class Aluno {

}
