import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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
        path: "notice",
        canActivate: [AuthGuard],
        loadChildren: () => import('./module/notice/notice.module').then(m => m.NoticeModule)
    },
    {
        path: 'file',
        canActivate: [AuthGuard],
        loadChildren: () => import('./module/file/file.module').then(m => m.FileModule)
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
export class AppRoutingModule {
}
