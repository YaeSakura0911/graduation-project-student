import {Component, OnInit, ViewChild} from '@angular/core';
import {NoticeService} from "../../../service/notice.service";
import {QueryNoticeReceiveListForm} from "../../../form/query-notice-receive-list.form";
import {NoticeEntity} from "../../../entity/notice.entity";
import {StorageUtil} from "../../../util/storage.util";
import {NoticeDetailComponent} from "../notice-detail/notice-detail.component";

@Component({
    selector: 'app-notice-list',
    templateUrl: './notice-list.component.html',
    styleUrls: ['./notice-list.component.scss']
})
export class NoticeListComponent implements OnInit {

    studentId: number = 0;
    noticeTitle: string = "";
    noticePriority: number = 0;

    noticeList: NoticeEntity[] = [];

    @ViewChild("noticeDetailModal")
    noticeDetailModal!: NoticeDetailComponent;

    constructor(
        private noticeService: NoticeService,
        private storageUtil: StorageUtil
    ) {
    }

    ngOnInit(): void {
        this.studentId = this.storageUtil.get("auth").studentId;
        this.queryNoticeList();
    }

    openNoticeDetailModal(noticeId: number): void {
        this.noticeDetailModal.openModal(noticeId);
    }

    queryNoticeList(): void {
        let form = new QueryNoticeReceiveListForm(
            this.studentId,
            this.noticeTitle,
            this.noticePriority
        );
        this.noticeService.queryNoticeReceiveList(form).subscribe(response => {
            console.log(response);
            if (response.code == 200) {
                this.noticeList = response.body.receiveList;
            }
        })
    }
}
