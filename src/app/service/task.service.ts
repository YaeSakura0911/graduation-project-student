import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {QueryTaskCompleteListForm} from "../form/query-task-complete-list.form";

@Injectable({providedIn:'root'})
export class TaskService {

    constructor(private http: HttpClient) {
    }

    queryTaskComplete(completeId: number): Observable<any> {
        return this.http.get("/task/complete?completeId=" + completeId);
    }

    // 查询作业完成列表
    queryTaskCompleteList(form: QueryTaskCompleteListForm): Observable<any> {
        return this.http.post("/task/complete/list", form);
    }
}
