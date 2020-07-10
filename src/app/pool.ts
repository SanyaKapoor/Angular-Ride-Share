export class Pool {
    public _id?:string;
    public name:string;
    public from:string;
    public to:string;
    public date:Date;
    public time:string;
    public vacancy:number;
    public participants:Array<String>;
}