import { Component } from '@angular/core';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule,
    NzToolTipModule
  ],
  templateUrl: './banner.html',
  styleUrl: './banner.css'
})
export class Banner {

}
