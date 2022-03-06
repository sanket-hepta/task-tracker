export class Task{
    id: number;
    title: string;
    note: string;

    constructor(id: number = 0, title: string = '', note: string){
        this.id = id;
        this.title = title;
        this.note = note;
    }
}