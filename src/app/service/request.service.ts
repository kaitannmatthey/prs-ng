import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response';
import { Request } from '../model/request.class';
import { User } from '../model/user.class';

@Injectable({
    providedIn: "root"
})

export class RequestService {
    url: string = "http://localhost:8080/requests/";
    requests: Request[] = [];

    constructor(private http: HttpClient) { }

    list(): Observable<JsonResponse> {
        // making a get request to retrieve all users, returns as a JsonResponse
        return this.http.get(this.url) as Observable<JsonResponse>;
    }

    get(id: number): Observable<JsonResponse> {
        return this.http.get(this.url + id) as Observable<JsonResponse>;
    }
      
    save(request: Request): Observable<JsonResponse> {
        return this.http.post(this.url, request) as Observable<JsonResponse>;
    }
    
    update(request: Request): Observable<JsonResponse> {
        return this.http.put(this.url, request) as Observable<JsonResponse>;
    }
      
    delete(id: number): Observable<JsonResponse> {
        return this.http.delete(this.url + id) as Observable<JsonResponse>;
    }

    submitReview(request: Request) {
        console.log("sr req ", request);
        return this.http.put(this.url + "submit-review", request) as Observable<JsonResponse>;

    }

    listReview(id: number) {
        console.log("req serv id: ", id);
        console.log("url: ", this.url + "list-review/" + id)
        return this.http.get(this.url + "list-review/" + id) as Observable<JsonResponse>;
    }

    approve(request: Request) {
        return this.http.put(this.url + "approve", request) as Observable<JsonResponse>;
    }

    reject(request: Request) {
        return this.http.put(this.url + "reject/", request) as Observable<JsonResponse>;
    }

    checkOn(id: number) {
        return this.http.get(this.url + "check-on/" + id) as Observable<JsonResponse>;
    }
}
