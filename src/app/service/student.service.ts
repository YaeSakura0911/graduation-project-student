import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginStudentForm} from "../form/login-student-form";
import {UpdateStudentForm} from "../form/update-student-form";

@Injectable({ providedIn: 'root' })
export class StudentService {

    constructor(private http: HttpClient) {
    }

    // 学生登录
    loginStudent(form: LoginStudentForm): Observable<any> {
        return this.http.post<any>("/student/login", form);
    }

    // 查询学生详情
    queryStudent(studentId: number): Observable<any> {
        return this.http.get("/student?studentId=" + studentId);
    }

    // 更新学生详情
    updateStudent(form: UpdateStudentForm): Observable<any> {
        return this.http.put("/student", form);
    }
}
