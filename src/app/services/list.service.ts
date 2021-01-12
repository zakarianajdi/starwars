import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ListService {
    constructor(private http: HttpClient) { }

    configUrl = 'https://swapi.dev/api/people/';

    getList() {
        return this.http.get(this.configUrl);
    }

    getById(id: number) {
        return this.http.get(this.configUrl + id);
    }
}