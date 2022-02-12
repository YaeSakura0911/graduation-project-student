import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {TaskDetailComponent} from 'src/app/component/task/task-detail/task-detail.component';
import {TaskListComponent} from 'src/app/component/task/task-list/task-list.component';

import {TaskRoutingModule} from './task-routing.module';

// 通用
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzTypographyModule} from 'ng-zorro-antd/typography';
// 布局
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzGridModule} from 'ng-zorro-antd/grid';
// 数据录入
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzUploadModule} from 'ng-zorro-antd/upload';
// 数据展示
import {NzBadgeModule} from 'ng-zorro-antd/badge';
import {NzDescriptionsModule} from 'ng-zorro-antd/descriptions';
import {NzTableModule} from 'ng-zorro-antd/table';

@NgModule({
    declarations: [
        TaskDetailComponent,
        TaskListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        TaskRoutingModule,
        NzButtonModule,
        NzIconModule,
        NzTypographyModule,
        NzDividerModule,
        NzGridModule,
        NzFormModule,
        NzInputModule,
        NzSelectModule,
        NzUploadModule,
        NzBadgeModule,
        NzDescriptionsModule,
        NzTableModule
    ]
})

export class TaskModule {
}
