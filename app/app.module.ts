import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { EmailListComponent } from './emails/email-list.component';
import { EmailFilterPipe } from './emails/email-filter.pipe';
import { TextSummaryPipe } from './emails/text-summary.pipe';
import { WelcomeComponent } from './home/welcome.component'; 
import { EmailDetailComponent } from './emails/email-detail.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'emails', component: EmailListComponent},
      {path: 'emails/:id', component: EmailDetailComponent},
      {path: '', redirectTo: 'welcome', pathMatch:'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
      ]),
    ],
  declarations: [ 
    AppComponent,
    EmailListComponent,
    EmailFilterPipe,
    TextSummaryPipe,
    WelcomeComponent,
    EmailDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
