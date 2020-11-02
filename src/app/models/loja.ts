export class Loja {

    nome: string;
    endereco: string;
    bairro: string;
    cidade: string;
    uf: string;
    cep: string;
    complemento: string="";
    numero: string;
    tel: string;
    ativo: boolean = true;
    
    lat: number;
    lng: number;

    

    //variaveis para remoção de erro
    logradouro: string;
    erro: string;
    localidade: string;
}
