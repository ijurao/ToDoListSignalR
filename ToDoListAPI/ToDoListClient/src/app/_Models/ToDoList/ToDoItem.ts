import { User } from '../Users/User';

export class ToDoItem {

    id: number;
    completed:Boolean;
    createdDate: Date;
    description: string;
    userName: string;
    isNew: boolean;
}
