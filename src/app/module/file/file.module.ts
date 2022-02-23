import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FileListComponent} from "../../component/file/file-list/file-list.component";

import {FileRoutingModule} from './file-routing.module';


@NgModule({
    declarations: [
        FileListComponent
    ],
    imports: [
        CommonModule,
        FileRoutingModule
    ]
})
export class FileModule {
}
