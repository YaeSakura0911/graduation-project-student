import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {QueryTaskCompleteListForm} from "../form/query-task-complete-list-form";
import {UpdateTaskCompleteForm} from "../form/update-task-complete-form";

@Injectable({providedIn:'root'})
export class TaskService {

    httpOptions = {headers: new HttpHeaders()};

    constructor(private http: HttpClient) {
    }

    queryTaskComplete(completeId: number): Observable<any> {
        return this.http.get("/task/complete?completeId=" + completeId);
    }

    // 查询作业完成列表
    queryTaskCompleteList(form: QueryTaskCompleteListForm): Observable<any> {
        return this.http.post("/task/complete/list", form);
    }

    updateTaskComplete(formData: FormData): Observable<any> {
        return this.http.put("/task/complete", formData);
    }
}
