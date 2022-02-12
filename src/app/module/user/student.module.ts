import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

// User模块组件
import {StudentInfoComponent} from 'src/app/component/user/student-info/student-info.component';
import {StudentLoginComponent} from 'src/app/component/user/student-login/student-login.component';

// User模块路由
import {StudentRoutingModule} from './student-routing.module';

// 通用
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzTypographyModule} from 'ng-zorro-antd/typography';
// 布局
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
// 数据录入
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzSelectModule} from 'ng-zorro-antd/select';
// 反馈
import {NzMessageModule} from "ng-zorro-antd/message";

@NgModule({
    declarations: [
        StudentInfoComponent,
        StudentLoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        StudentRoutingModule,
        NzButtonModule,
        NzIconModule,
        NzTypographyModule,
        NzDividerModule,
        NzLayoutModule,
        NzDatePickerModule,
        NzFormModule,
        NzInputModule,
        NzSelectModule,
        NzMessageModule
    ]
})

export class StudentModule {
}
