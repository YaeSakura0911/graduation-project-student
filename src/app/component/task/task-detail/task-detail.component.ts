import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TaskService} from "../../../service/task.service";

@Component({
    selector: 'app-task-detail',
    templateUrl: './task-detail.component.html',
    styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {

    completeId: number = 0;

    constructor(
        private route: ActivatedRoute,
        private taskService: TaskService
    ) {
        this.route.queryParams.subscribe((res) => {
            this.completeId = Number(res['completeId']);
        })
    }

    ngOnInit(): void {
        this.queryTaskComplete();
    }

    queryTaskComplete(): void {
        this.taskService.queryTaskComplete(this.completeId).subscribe(response => {
            console.log()
        })
    }

}
