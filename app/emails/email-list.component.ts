import {Component, OnInit} from '@angular/core';

import { IEmail, ISource } from './email';
import { EmailService } from './email.service';

@Component({
    moduleId: module.id,
    templateUrl: 'email-list.component.html',
    styleUrls: ['email-list.component.css']

})
export class EmailListComponent implements OnInit{ 
    pageTitle: string = 'Email List';
    filterBy: string;
    emails: IEmail[];
    errorMessage: string;

    constructor(private _emailService: EmailService){

    }

    ngOnInit(){
        this._emailService.getEmails()
            .subscribe(emails => this.emails = emails,
                        error => this.errorMessage = <any>error);
    }
}