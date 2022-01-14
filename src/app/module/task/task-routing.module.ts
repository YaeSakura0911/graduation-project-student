import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskDetailComponent } from 'src/app/component/task/task-detail/task-detail.component';
import { TaskListComponent } from 'src/app/component/task/task-list/task-list.component';

const routes: Routes = [
    {
        path: '',
        component: TaskListComponent
    },
    {
        path: 'detail',
        component: TaskDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TaskRoutingModule { }
