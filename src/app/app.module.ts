import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {ConsoleComponent} from './console/console.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {SettingsComponent} from './settings/settings.component';
import {CookieService} from 'ngx-cookie-service';
import {ExplorerComponent} from './explorer/explorer.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


const appRoutes: Routes = [
  {path: '', component: ConsoleComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'explorer', component: ExplorerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ConsoleComponent,
    FooterComponent,
    HeaderComponent,
    SettingsComponent,
    ExplorerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    FormsModule
  ],
  providers: [
    CookieService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
