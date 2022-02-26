import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {QueryNoticeReceiveListForm} from "../form/query-notice-receive-list.form";
import {UpdateNoticeReceiveForm} from "../form/update-notice-receive.form";

@Injectable({providedIn: 'root'})
export class NoticeService {

    constructor(private httpClient: HttpClient) {
    }

    /**
     * 查询通知接收
     * @param noticeId 通知ID
     * @param studentId 学生ID
     */
    queryReceive(noticeId: number, studentId: number): Observable<any> {

        return this.httpClient.get("/notice/receive?noticeId=" + noticeId + "&studentId=" + studentId);
    }

    queryNoticeReceiveList(form: QueryNoticeReceiveListForm): Observable<any> {

        return this.httpClient.post("/notice/receive/list", form);
    }

    updateNotice(form: UpdateNoticeReceiveForm): Observable<any> {

        return this.httpClient.put("/notice/receive", form);
    }
}
