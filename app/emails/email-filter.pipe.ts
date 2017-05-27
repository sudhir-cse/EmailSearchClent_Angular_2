import { PipeTransform, Pipe } from '@angular/core';
import { IEmail } from './email';

@Pipe({
    name: 'EmailFilter'
})
export class EmailFilterPipe implements PipeTransform{

    // filter by email-subject
    transform(value: IEmail[], filterBy: string): IEmail[]{
        filterBy ? filterBy.toLowerCase() : null;
        return filterBy ? value.filter((email: IEmail) =>
            email._source.subject.toLowerCase().indexOf(filterBy) !== -1) : value;
    }
}