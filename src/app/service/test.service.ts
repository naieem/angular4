// import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// @Injectable()
// export class TestService {
//     results=[];
//     constructor(private _http: Http) { };
//     getAll() {
//         this._http.get('https://jsonplaceholder.typicode.com/todos').subscribe(data => {
//             this.results = data['_body'];
//             debugger;
//             return this.results;
//         });
//     }
// }


import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class TestService {

    private heroesUrl = 'https://jsonplaceholder.typicode.com/todos';  // URL to web api

    constructor(private http: Http) { }

    getHeroes(){
        return this.http.get(this.heroesUrl)
        .map((response:Response) => response.json());
    }


    //   getHero(id: number): Promise<Hero> {
    //     const url = `${this.heroesUrl}/${id}`;
    //     return this.http.get(url)
    //       .toPromise()
    //       .then(response => response.json().data as Hero)
    //       .catch(this.handleError);
    //   }

    //   delete(id: number): Promise<void> {
    //     const url = `${this.heroesUrl}/${id}`;
    //     return this.http.delete(url, {headers: this.headers})
    //       .toPromise()
    //       .then(() => null)
    //       .catch(this.handleError);
    //   }

    //   create(name: string): Promise<Hero> {
    //     return this.http
    //       .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
    //       .toPromise()
    //       .then(res => res.json().data as Hero)
    //       .catch(this.handleError);
    //   }

    //   update(hero: Hero): Promise<Hero> {
    //     const url = `${this.heroesUrl}/${hero.id}`;
    //     return this.http
    //       .put(url, JSON.stringify(hero), {headers: this.headers})
    //       .toPromise()
    //       .then(() => hero)
    //       .catch(this.handleError);
    //   }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}



/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/