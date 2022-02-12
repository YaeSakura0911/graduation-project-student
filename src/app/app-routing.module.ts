import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./guard/auth.guard";

const routes: Routes = [
    {
        path: 'user',
        loadChildren: () => import('./module/user/student.module').then(m => m.StudentModule)
    },
    {
        path: 'task',
        canActivate: [AuthGuard],
        loadChildren: () => import ('./module/task/task.module').then(m => m.TaskModule)
    },
    {
        path: '',
        redirectTo: '/user/login',
        pathMatch: "full"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
