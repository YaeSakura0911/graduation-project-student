export class UpdateStudentForm {
    constructor(
        public studentId: number,
        public studentGender: number,
        public studentTelephone: string,
        public studentEmail: string
    ) {
    }
}
