import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../../service/student.service";
import {StorageUtil} from "../../../util/storage.util";
import {UpdateStudentForm} from "../../../form/update-student-form";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
    selector: 'app-student-info',
    templateUrl: './student-info.component.html',
    styleUrls: ['./student-info.component.scss']
})
export class StudentInfoComponent implements OnInit {

    studentId: number = 0;
    studentName: string = "";
    studentNo: string = "";
    studentGender: number = 0;
    studentTelephone: string = "";
    studentEmail: string = "";
    studentYear!: Date;
    researchName: string = "";

    constructor(
        private studentService: StudentService,
        private messageService: NzMessageService,
        private storageUtil: StorageUtil) {
    }

    // 页面初始化
    ngOnInit(): void {
        this.studentId = this.storageUtil.get("auth").studentId;
        this.queryStudent();
    }

    // 查询学生详情
    queryStudent(): void {
        this.studentService.queryStudent(this.studentId).subscribe(response => {
            console.log("queryStudent()", response);
            if (response.code == 200) {
                this.studentName = response.body.studentName;
                this.studentNo = response.body.studentNo;
                this.studentGender = response.body.studentGender;
                this.studentTelephone = response.body.studentTelephone;
                this.studentEmail = response.body.studentEmail;
                this.studentYear = response.body.studentYear;
                this.researchName = response.body.researchName;
            }
        })
    }

    // 更新学生详情
    updateStudent(): void {
        let form: UpdateStudentForm = new UpdateStudentForm(
            this.studentId,
            this.studentGender,
            this.studentTelephone,
            this.studentEmail
        );
        console.log("UpdateStudentForm", form);
        this.studentService.updateStudent(form).subscribe(response => {
            console.log("updateStudent()", response);
            if (response.code == 200 && response.body == true) {
                this.messageService.success("修改个人信息成功!");
            }
            else {
                this.messageService.error("修改个人信息失败!");
            }
            this.queryStudent();
        });
    }
}
