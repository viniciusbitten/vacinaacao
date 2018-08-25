import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs';

@Injectable()
export class PacienteService {

    

    find(nome, nomeMae){
        let nameNormalized = nome.toUpperCase();
        let nameMaeNormalized = nomeMae.toUpperCase();
    
        var headers = new Headers()
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
     
       let options = new RequestOptions({ headers: headers });
       var postBody = "nome=" + nameNormalized + "&nomeMae=" + nameMaeNormalized;
    
        return this.http.post('http://10.3.0.57:8080/api/vacinas/', postBody,  options)
        .map((response: Response) => {
            return response.json();
            
        })
        .catch((error: Response) => {
                return Observable.throw(error.json())
        });
    }

    constructor(private http : Http) { }
}