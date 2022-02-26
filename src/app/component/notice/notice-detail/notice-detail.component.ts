import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StorageUtil} from "../../../util/storage.util";
import {NoticeService} from "../../../service/notice.service";
import {UpdateNoticeReceiveForm} from "../../../form/update-notice-receive.form";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
    selector: 'app-notice-detail',
    templateUrl: './notice-detail.component.html',
    styleUrls: ['./notice-detail.component.scss']
})
export class NoticeDetailComponent implements OnInit {

    studentId: number = 0;
    noticeId: number = 0;
    noticeTitle: string = "";
    noticeContent: string = "";
    noticePriority: number = 0;
    noticeState: number = 0;
    readFlag: number = 0;
    releaseDate!: Date;
    modalVisible: boolean = false;

    @Output()
    refreshPage = new EventEmitter<any>();

    constructor(
        private noticeService: NoticeService,
        private messageService: NzMessageService,
        private storageUtil: StorageUtil
    ) {
    }

    ngOnInit(): void {
        this.studentId = this.storageUtil.get("auth").studentId;

    }

    closeModal(): void {
        this.modalVisible = false;
    }

    openModal(noticeId: number): void {
        this.modalVisible = true;
        this.noticeId = noticeId;
        this.queryReceive();
    }

    queryReceive(): void {
        this.noticeService.queryReceive(this.noticeId, this.studentId).subscribe(response => {
            console.log(response);
            if (response.code == 200) {
                this.noticeTitle = response.body.noticeTitle;
                this.noticeContent = response.body.noticeContent;
                this.noticePriority = response.body.noticePriority;
                this.noticeState = response.body.noticeState;
                this.readFlag = response.body.readFlag;
                this.releaseDate = response.body.releaseDate;
            }
        })
    }

    updateNotice(): void {
        let form = new UpdateNoticeReceiveForm(
            this.studentId,
            this.noticeId,
            2
        )
        this.noticeService.updateNotice(form).subscribe(response => {
            console.log(response);
            if (response.code == 200 && response.body == true) {
                this.messageService.success("通知已读成功！");
            } else {
                this.messageService.error("通知已读失败");
            }
            this.refreshPage.emit();
            this.closeModal();
        })
    }
}
