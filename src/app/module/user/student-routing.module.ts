import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentInfoComponent } from 'src/app/component/user/student-info/student-info.component';
import { StudentLoginComponent } from 'src/app/component/user/student-login/student-login.component';
import {AuthGuard} from "../../guard/auth.guard";

const routes: Routes = [
    {
        path: 'login',
        component: StudentLoginComponent
    },
    {
        path: 'info',
        canActivate: [AuthGuard],
        component: StudentInfoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentRoutingModule { }
