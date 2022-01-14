import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'user',
        loadChildren: () => import('./module/user/user.module').then(m => m.UserModule)
    },
    {
        path: '',
        loadChildren: () => import ('./module/task/task.module').then(m => m.TaskModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
