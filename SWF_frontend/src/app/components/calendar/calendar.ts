import { Component } from '@angular/core';

import { NzCalendarModule } from 'ng-zorro-antd/calendar';

@Component({
  selector: 'nz-demo-calendar-customize-header',
  imports: [NzCalendarModule],
  template: `
    <div class="card">
      <nz-calendar [nzFullscreen]="false" [nzCustomHeader]="customHeader"></nz-calendar>
    </div>

    <ng-template #customHeader>
      <div>
      </div>
    </ng-template>
  `,
  styles: [
      `
      :host {
          display: block;
          width: 90%;
        }
    `
  ]
})
export class NzDemoCalendarCustomizeHeaderComponent {}
