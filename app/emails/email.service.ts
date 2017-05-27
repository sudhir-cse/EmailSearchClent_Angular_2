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

    //private _localUrl: string = 'api/emails/emails.json';
    private _baseUrl: string = "http://localhost:9200/index/_search?q=text:";
    private _emails: IEmail[];

    constructor(private _http: Http){
    }

    getEmails(searchText: string): Observable<IEmail[]>{
        return this._http.get(this._baseUrl + searchText)
            .map((response: Response) =><IEmail[]> response.json().hits.hits)
            .do(data => this._emails = data)
           // .do(data => console.log('All: '+ JSON.stringify(data)))
            .catch(this.handleError);
    }

    handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }

    getEmailById(id: string): IEmail{
        return this._emails.find(e => e._id == id);
    }

    emails(): IEmail[] {
        return this._emails;
    }
}