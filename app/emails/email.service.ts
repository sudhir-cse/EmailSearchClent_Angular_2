import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IEmail, ISource } from './email';

@Injectable()
export class EmailService{

    private _emailsUrl: string = 'api/emails/emails.json';
    private _emails: IEmail[];

    constructor(private _http: Http){
    }

    getEmails(): Observable<IEmail[]>{
        return this._http.get(this._emailsUrl)
            .map((response: Response) => <IEmail[]> response.json().hits.hits)
            .do(data => console.log('All: '+ JSON.stringify(data)))
            .catch(this.handleError);
    }

    handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }

    getEmailById(id: string): Observable<IEmail>{
        return this.getEmails()
            .map((emails: IEmail[]) => emails.find(e => e._id == id));
    }

}