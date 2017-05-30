import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { EmailListComponent } from './email-list.component';
import { EmailDetailComponent } from './email-detail.component';
import { EmailFilterPipe } from './email-filter.pipe';
import { EmailService } from './email.service'
import { TextSummaryPipe } from './text-summary.pipe';
import { PagerService} from './pager.service';
import { AppConfigService } from '../config/app-config.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {path: 'emails', component: EmailListComponent},
            {path: 'emails/:id', component: EmailDetailComponent}
        ])
    ],
    declarations: [
        EmailListComponent,
        EmailDetailComponent,
        EmailFilterPipe,
        TextSummaryPipe
    ],
    providers: [EmailService, PagerService, AppConfigService]
})
export class EmailModule{

} 