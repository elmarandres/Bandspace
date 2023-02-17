import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
//hallo online

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
