import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {QueryFileListForm} from "../form/query-file-list.form";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class FileService {

    constructor(private http: HttpClient) {
    }

    queryFileList(form: QueryFileListForm): Observable<any> {
        return this.http.post("/file/list", form);
    }
}
