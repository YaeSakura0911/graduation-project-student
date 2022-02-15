import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TaskService} from "../../../service/task.service";
import {UpdateTaskCompleteForm} from "../../../form/update-task-complete-form";
import {NzMessageService} from "ng-zorro-antd/message";

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

    goBackModalVisible: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private taskService: TaskService,
        private messageService: NzMessageService
    ) {
        this.route.queryParams.subscribe((res) => {
            this.completeId = Number(res['completeId']);
        })
    }

    // 页面初始化
    ngOnInit(): void {
        this.queryTaskComplete();
    }

    toggleGoBackModalVisible(): void {
        this.goBackModalVisible = !this.goBackModalVisible;
    }

    goBack(): void {
        history.go(-1);
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
        let form = new UpdateTaskCompleteForm(
            this.completeId,
            this.completeContent,
            2,
            ""
        );
        // 发起请求
        this.taskService.updateTaskComplete(form).subscribe(response => {
            console.log(response);
            if (response.code == 200 && response.body == true) {
                this.messageService.success("提交任务成功！");
            }
        })
    }

}
