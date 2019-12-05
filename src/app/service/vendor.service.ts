import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response';
import { Vendor } from '../model/vendor.class';

@Injectable({
    providedIn: "root"
})

export class VendorService {
    url: string = "http://localhost:8080/vendors/";

    constructor(private http: HttpClient) { }

    list(): Observable<JsonResponse> {
        // making a get request to retrieve all vendors, returns as a JsonResponse
        return this.http.get(this.url) as Observable<JsonResponse>;
    }

    get(id: number): Observable<JsonResponse> {
        return this.http.get(this.url + id) as Observable<JsonResponse>;
    }
      
    save(vendor: Vendor): Observable<JsonResponse> {
        return this.http.post(this.url, vendor) as Observable<JsonResponse>;
    }
    
    update(vendor: Vendor): Observable<JsonResponse> {
        return this.http.put(this.url, vendor) as Observable<JsonResponse>;
    }
      
    delete(id: number): Observable<JsonResponse> {
        return this.http.delete(this.url + id) as Observable<JsonResponse>;
    }
}
