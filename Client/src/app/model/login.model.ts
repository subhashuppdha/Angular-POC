export interface IUserLogin {
    UserName:string;
    UserType:string;
    Password:string;
    IsActive:boolean;
}

export class UserLogin implements IUserLogin {
    constructor(public UserName:string, public UserType:string,public Password:string,public IsActive:boolean){}
}

