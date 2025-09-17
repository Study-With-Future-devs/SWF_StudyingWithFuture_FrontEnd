import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import pt from '@angular/common/locales/pt';

// Importações do NG-ZORRO
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { pt_BR, provideNzI18n } from 'ng-zorro-antd/i18n';
import { EyeOutline, EyeInvisibleOutline } from "@ant-design/icons-angular/icons";

import { routes } from './app.routes';

// 1. Definição dos ícones que serão usados
const appIcons = [
  EyeOutline,
  EyeInvisibleOutline
];

// 2. Registro do idioma português para a aplicação
registerLocaleData(pt);

// 3. ÚNICA declaração do appConfig com todos os providers corretos
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    importProvidersFrom(FormsModule),
    provideNzI18n(pt_BR),
    // Forma moderna e correta de fornecer os ícones
    provideNzIcons(appIcons)
  ]
};
