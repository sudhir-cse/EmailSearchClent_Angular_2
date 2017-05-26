import { Component } from '@angular/core';

import { EmailService } from './emails/email.service';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/emails']">Search</a></li>
                </ul>
            </div>
        </nav>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
     </div>    
    `,
    providers: [EmailService]
})
export class AppComponent { 
    pageHeading: string = 'Enron Email Search'
}
