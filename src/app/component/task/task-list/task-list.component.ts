import {Component, OnInit} from '@angular/core';
import {StorageUtil} from "../../../util/storage.util";
import {CompleteEntity} from "../../../entity/complete.entity";
import {QueryTaskCompleteListForm} from "../../../form/query-task-complete-list.form";
import {TaskService} from "../../../service/task.service";

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

    studentId: number = 0;
    taskName: string = "";
    completeState: number = 0;

    pageIndex: number = 1;
    pageSize: number = 10;
    total!: number;

    completeList: CompleteEntity[] = [];

    constructor(
        private storageUtil: StorageUtil,
        private taskService: TaskService) {
    }

    // 页面初始化
    ngOnInit(): void {
        this.studentId = this.storageUtil.get("auth").studentId;
        this.queryCompleteList();
    }

    // 查询完成情况列表
    queryCompleteList(): void {
        let form = new QueryTaskCompleteListForm(
            this.studentId,
            this.taskName,
            this.completeState,
            this.pageIndex,
            this.pageSize
        );
        console.log(form);
        this.taskService.queryTaskCompleteList(form).subscribe(response => {
            console.log("queryCompleteList()", response);
            if (response.code == 200) {
                this.completeList = response.body.completeList;
            }
        })
    }
}
