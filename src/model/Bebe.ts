export class Bebe{
    private id: string;
    private Nome: string;
    private Peso: number;
    private Altura: number;
 
    public constructor(_id:string, _Nome:string,_Peso:number, _Altura:number) {
        this.id= _id; 
         this.Nome= _Nome;
        this.Peso= _Peso;
        this.Altura= _Altura;
    }

    public setId(_id:string):void{
        this.id= _id;
    }

    public getId():string{
        return this.id;
    }

    public setNome(_Nome:string):void{
        this.Nome= _Nome;
    }
    public getNome():string{
        return this.Nome;
    }

    public setPeso(_Peso:number):void{
        this.Peso= _Peso;
    }

    public getPeso():number{
        return this.Peso;
    }

    public setAltura(_Altura:number):void{
        this.Altura= _Altura;
    }

    public getAltura():number{
        return this.Altura;
    }
}