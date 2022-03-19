export class convertData{
    from?:string;
    to?:string;
    amount?:number;
    setConvertData(_convert :any){
        const convert = _convert as convertData;
        this.from = convert.from;
        this.to = convert.to;
        this.amount = convert.amount;
    }
}

export interface cuurencyInterface{
    from:string;
    to:string;
    amount:number;
}