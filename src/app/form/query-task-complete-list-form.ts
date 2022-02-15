export class QueryTaskCompleteListForm {
    constructor(
        public studentId: number,
        public taskName: string,
        public completeState: number,
        public pageIndex: number,
        public pageSize: number
    ) {
    }
}
