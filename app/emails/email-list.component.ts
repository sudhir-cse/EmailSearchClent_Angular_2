import {Component, OnInit} from '@angular/core';

import { IEmail, ISource } from './email';
import { EmailService } from './email.service';
import { PagerService } from './pager.service';

import { IPager } from './pager';

@Component({
    moduleId: module.id,
    templateUrl: 'email-list.component.html',
    styleUrls: ['email-list.component.css']

})
export class EmailListComponent implements OnInit{ 
    pageTitle: string = 'Email List';
    filterBy: string;
    emails: IEmail[]; //all items
    errorMessage: string;

    /*------pagination------*/
    pager: IPager; //pager object
    pagedItems: IEmail[]; //paged item

    constructor(private _emailService: EmailService,
                private _pagerService: PagerService){
    }

    ngOnInit(){
        this._emailService.getEmails()
            .subscribe(emails => {
                this.emails = emails;
                this.setPage(1);
            },
            error => this.errorMessage = <any>error);
    }

    setPage(page: number) {
        // get pager object from service
        this.pager = <IPager>this._pagerService.getPager(this.emails.length, page);       
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get current page of items
        this.pagedItems = this.emails.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

}