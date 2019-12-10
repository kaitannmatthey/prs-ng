import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response';
import { LineItem } from '../model/line-item';

@Injectable({
    providedIn: "root"
})

export class LineItemService {
    url: string = "http://localhost:8080/line-items/";
    lineItemEditId: number;

    constructor(private http: HttpClient) { }

    list(id: number): Observable<JsonResponse> {
        return this.http.get(this.url + "lines-for-pr/" + id) as Observable<JsonResponse>;
    }

    get(id: number): Observable<JsonResponse> {
        return this.http.get(this.url + id) as Observable<JsonResponse>;
    }
      
    save(lineItem: LineItem): Observable<JsonResponse> {
        return this.http.post(this.url, lineItem) as Observable<JsonResponse>;
    }
    
    update(lineItem: LineItem): Observable<JsonResponse> {
        return this.http.put(this.url, lineItem) as Observable<JsonResponse>;
    }
    
    delete(id: number): Observable<JsonResponse> {
        return this.http.delete(this.url + id) as Observable<JsonResponse>;
    }
}
