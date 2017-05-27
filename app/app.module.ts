import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { EmailModule } from './emails/email.module';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component'; 

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch:'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
      ]),
      EmailModule
    ],
  declarations: [ 
    AppComponent,
    WelcomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
