import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';

@Injectable()
export class CEPService {

    

    find(cep : string){
        if(!cep) return;
        let cepNormalized = cep.replace(/\D/g, '');
        return this.http.get('https://viacep.com.br/ws/' + cepNormalized + '/json/')
        .map((response: Response) => {
            const endereco = response.json();
            return endereco;
        })
        .catch((error: Response) => {
                return Observable.throw(error.json())
        });
    }

    constructor(private http : Http) { }
}