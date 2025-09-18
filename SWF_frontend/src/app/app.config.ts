import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import pt from '@angular/common/locales/pt';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { pt_BR, provideNzI18n } from 'ng-zorro-antd/i18n';
import { EyeOutline, EyeInvisibleOutline } from "@ant-design/icons-angular/icons";
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { routes } from './app.routes';

const appIcons = [
  EyeOutline,
  EyeInvisibleOutline 
];

registerLocaleData(pt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(FormsModule, HttpClientModule),
    provideNzI18n(pt_BR),
    provideNzIcons(appIcons),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ]
};
