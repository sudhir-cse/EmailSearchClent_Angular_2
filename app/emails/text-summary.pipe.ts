import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'TextSummary'
})
export class TextSummaryPipe implements PipeTransform{

    transform(value: string, charFrom: number, charTo:number): string{
        return value ? value.substring(charFrom, charTo)+'...' : null;
    }
}