import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TaskService} from "../../../service/task.service";
import {UpdateTaskCompleteForm} from "../../../form/update-task-complete-form";
import {NzMessageService} from "ng-zorro-antd/message";
import {NzUploadFile} from "ng-zorro-antd/upload";
import {FileService} from "../../../service/file.service";

@Component({
    selector: 'app-task-detail',
    templateUrl: './task-detail.component.html',
    styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {

    taskName: string = "";
    taskContent: string = "";
    endTime!: Date;
    completeId: number = 0;
    completeContent: string = "";
    completeState: number = 0;
    fileList: NzUploadFile[] = [];
    goBackModalVisible: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private taskService: TaskService,
        private messageService: NzMessageService,
        private fileService: FileService
    ) {
        this.route.queryParams.subscribe((res) => {
            this.completeId = Number(res['completeId']);
        })
    }

    // 页面初始化
    ngOnInit(): void {
        this.queryTaskComplete();
    }

    beforeUpload = (file: NzUploadFile): boolean => {
        const fileType = file.type;
        const fileSize = file.size;
        const type = [
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/vnd.ms-powerpoint',
            'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            'application/pdf',
            'application/zip',
            'application/x-zip',
            'application/x-zip-compressed',
            'image/jpg',
            'image/jpeg',
            'image/png'
        ]
        if (fileType == undefined || type.indexOf(fileType) < 0) {
            this.messageService.error("不支持的文件格式");
            return false;
        }
        if (fileSize == undefined || fileSize / 1024 / 1024 > 10) {
            this.messageService.error("文件大小不能超过10Mb");
            return false;
        }
        this.fileList = this.fileList.concat(file);
        return false;
    };

    toggleGoBackModalVisible(): void {
        if (this.completeState == 1) {
            this.goBackModalVisible = !this.goBackModalVisible;
        }
        else {
            this.goBack();
        }
    }

    goBack(): void {
        history.back();
    }

    // 查询任务完成情况
    queryTaskComplete(): void {
        // 发起请求
        this.taskService.queryTaskComplete(this.completeId).subscribe(response => {
            console.log(response)
            if (response.code == 200) {
                this.taskName = response.body.taskName;
                this.taskContent = response.body.taskContent;
                this.endTime = response.body.endTime;
                this.completeState = response.body.completeState;
                this.completeContent = response.body.completeContent;
            }
        })
    }

    // 更新任务完成情况
    updateTaskComplete(): void {
        const formData = new FormData();
        let form = new UpdateTaskCompleteForm(
            this.completeId,
            this.completeContent,
            2,
        );

        this.fileList.forEach((file: any) => {
            formData.append('file', file);
        })
        formData.append("form", JSON.stringify(form));

        console.log("UpdateTaskForm", formData);
        // 发起请求
        this.taskService.updateTaskComplete(formData).subscribe(response => {
            console.log(response);
            if (response.code == 200 && response.body == true) {
                this.messageService.success("提交任务成功！");
                this.goBack();
            }
        })
    }

}
