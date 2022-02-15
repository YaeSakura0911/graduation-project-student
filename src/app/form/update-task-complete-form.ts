export class UpdateTaskCompleteForm {

    constructor(
        public completeId: number,
        public completeContent: string,
        public completeState: number,
        public fileUrl: string
    ) {
    }
}
