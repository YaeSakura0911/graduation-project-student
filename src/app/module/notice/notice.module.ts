import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {NoticeDetailComponent} from "../../component/notice/notice-detail/notice-detail.component";
import {NoticeListComponent} from "../../component/notice/notice-list/notice-list.component";

import {NoticeRoutingModule} from './notice-routing.module';

// 通用
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzTypographyModule} from "ng-zorro-antd/typography";
// 布局
import {NzGridModule} from "ng-zorro-antd/grid";
// 数据录入
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSelectModule} from "ng-zorro-antd/select";
// 数据展示
import {NzBadgeModule} from "ng-zorro-antd/badge";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzDescriptionsModule} from "ng-zorro-antd/descriptions";
// 反馈
import {NzMessageModule} from "ng-zorro-antd/message";
import {NzModalModule} from "ng-zorro-antd/modal";


@NgModule({
    declarations: [
        NoticeDetailComponent,
        NoticeListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        NoticeRoutingModule,
        NzButtonModule,
        NzTypographyModule,
        NzGridModule,
        NzInputModule,
        NzSelectModule,
        NzBadgeModule,
        NzCardModule,
        NzDescriptionsModule,
        NzMessageModule,
        NzModalModule
    ]
})
export class NoticeModule {
}
