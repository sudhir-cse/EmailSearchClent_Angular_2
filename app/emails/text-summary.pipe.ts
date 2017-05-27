import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'TextSummary'
})
export class TextSummaryPipe implements PipeTransform{

    //accepts start and end indexes to return sub-set of string
    transform(value: string, charFrom: number, charTo:number): string{
        return value ? value.substring(charFrom, charTo)+'...' : null;
    }
}