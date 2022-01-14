import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// User模块组件
import { UserInfoComponent } from 'src/app/component/user/user-info/user-info.component';
import { UserLoginComponent } from 'src/app/component/user/user-login/user-login.component';

// User模块路由
import { UserRoutingModule } from './user-routing.module';

// 通用
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
// 布局
import { NzLayoutModule } from 'ng-zorro-antd/layout';
// 数据录入
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
    declarations: [
        UserInfoComponent,
        UserLoginComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        NzButtonModule,
        NzIconModule,
        NzLayoutModule,
        NzDatePickerModule,
        NzFormModule,
        NzInputModule
    ]
})

export class UserModule { }
