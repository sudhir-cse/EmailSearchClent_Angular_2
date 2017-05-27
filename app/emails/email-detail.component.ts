import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { IEmail } from './email';
import { EmailService } from './email.service'

@Component({
    moduleId: module.id,
    templateUrl: 'email-detail.component.html'
})
export class EmailDetailComponent implements OnInit, OnDestroy{
    pageTitle: string = 'Email Detail';
    email: IEmail;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _emailService: EmailService){
    }

    ngOnInit(){
        this.sub = this._route.params.subscribe(
            params => {
                let id: string = params['id'];
                this.getEmail(id);            
            }
        )  
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

    onBack(){
        this._router.navigate(['/emails']);
    }

    // getEmail(id: string){
    //     this._emailService.getEmailById(id).subscribe(
    //         email => this.email = email,
    //         error => this.errorMessage = <any>error
    //     );
    // }

    getEmail(id: string){
        this.email = this._emailService.getEmailById(id);
    }
}