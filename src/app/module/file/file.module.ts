import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {FileListComponent} from "../../component/file/file-list/file-list.component";

import {FileRoutingModule} from './file-routing.module';

// 通用
import {NzTypographyModule} from "ng-zorro-antd/typography";
// 布局
import {NzGridModule} from "ng-zorro-antd/grid";
// 导航
import {NzPaginationModule} from "ng-zorro-antd/pagination";
// 数据录入
import {NzInputModule} from "ng-zorro-antd/input";
// 数据展示
import {NzTableModule} from "ng-zorro-antd/table";
// 反馈
import {NzMessageModule} from 'ng-zorro-antd/message';

@NgModule({
    declarations: [
        FileListComponent
    ],
    imports: [
        CommonModule,
        FileRoutingModule,
        FormsModule,
        NzTypographyModule,
        NzGridModule,
        NzPaginationModule,
        NzInputModule,
        NzTableModule,
        NzMessageModule
    ]
})
export class FileModule {
}
