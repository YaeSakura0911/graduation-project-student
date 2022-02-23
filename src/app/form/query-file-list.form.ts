export class QueryFileListForm {

    constructor(
        public researchId: number,
        public fileName: string,
        public pageIndex: number,
        public pageSize: number,
    ) {
    }
}
