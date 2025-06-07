import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { App } from './app.component';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./modules/user/user.module').then((m) => m.UserModule),
      },
    ]),
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
