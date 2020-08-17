class errorParser {
    private _resData: string;

    constructor(){
        this._resData = '';
    }
    set resData(res : any){
        this._resData = res
    }

    get resData(){
        return this._resData
    }

    checkErr(){
    }

}
export default class _fetch extends errorParser{
    private _host: string;
    constructor(){
        super();
        this._host = "http://127.0.0.1/";
    }

    async get(pathName:string,data:any){
        return fetch(`${this._host}${pathName}`,{
            method: `GET`,
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        }).then(res => new errorParser().resData = res);
    }

    async post(pathName:string,data:any){
        return fetch(`${this._host}${pathName}`,{
            method: `POST`,
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        }).then(res => new errorParser().resData = res);
    }

    async put(pathName:string,data:any){
        return fetch(`${this._host}${pathName}`,{
            method: `PUT`,
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        }).then(res => new errorParser().resData = res);
    }

    async delete(pathName:string,data:any){
        return fetch(`${this._host}${pathName}`,{
            method: `DELETE`,
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        }).then(res => new errorParser().resData = res);
    }

    

}