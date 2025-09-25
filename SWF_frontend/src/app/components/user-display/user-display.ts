import { Component } from '@angular/core';
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-user-display',
  standalone:true,
  templateUrl: './user-display.html',
  styleUrl: './user-display.css',
  imports: [NzButtonModule, NzIconModule]
})
export class UserDisplay {

}

