import {Component} from '@angular/core';
import {LoginStudentForm} from "../../../form/login-student-form";
import {StudentService} from "../../../service/student.service";
import {StorageUtil} from "../../../util/storage.util";
import {Router} from "@angular/router";

@Component({
    selector: 'app-student-login',
    templateUrl: './student-login.component.html',
    styleUrls: ['./student-login.component.scss']
})
export class StudentLoginComponent {

    studentNo: string = "";
    studentPassword: string = "";

    constructor(
        private router: Router,
        private studentService: StudentService,
        private storageUtil: StorageUtil
    ) {
    }

    // 学生登录
    loginStudent(): void {
        let form: LoginStudentForm = new LoginStudentForm(
            this.studentNo,
            this.studentPassword
        )
        console.log("LoginStudentForm", form);
        this.studentService.loginStudent(form).subscribe(response => {
            console.log("loginStudent", response);
            if (response.code == 200) {
                this.storageUtil.set("auth", {
                    studentId: response.body.studentId,
                    studentName: response.body.studentName,
                    researchId: response.body.researchId
                });
                this.router.navigateByUrl("/task");
            }
        })
    }

}
