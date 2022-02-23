import {Component, OnInit} from '@angular/core';
import {FileEntity} from "../../../entity/file.entity";
import {NzMessageService} from "ng-zorro-antd/message";
import {FileService} from "../../../service/file.service";
import {QueryFileListForm} from "../../../form/query-file-list.form";
import {StorageUtil} from "../../../util/storage.util";

@Component({
    selector: 'app-file-list',
    templateUrl: './file-list.component.html',
    styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {

    researchId: number = 0;
    fileName: string = "";

    pageIndex: number = 1;
    pageSize: number = 10;
    total!: number;

    fileList: FileEntity[] = [];

    constructor(
        private fileService: FileService,
        private messageService: NzMessageService,
        private storageUtil: StorageUtil
    ) {
    }

    ngOnInit(): void {
        this.researchId = this.storageUtil.get("auth").researchId;
        this.queryFileList();
    }

    queryFileList(): void {
        let form = new QueryFileListForm(
            this.researchId,
            this.fileName,
            this.pageIndex,
            this.pageSize
        )
        console.log("QueryFileListForm", form);
        this.fileService.queryFileList(form).subscribe(response => {
            console.log(response);
            if (response.code == 200) {
                this.fileList = response.body.fileList;
                this.total = response.body.total;
            }
        })
    }

}
