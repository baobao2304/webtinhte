
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, pipe } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


import { Fruit } from 'src/app/shared/models/fruit';
import { ConfigService } from 'src/app/config/config-service';
@Injectable({
    providedIn: 'root'
})
export class FruitService {
    // private handleErrorr: HandleError;
    apiURL;
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    constructor(private http: HttpClient,
                private service: ConfigService,
                ) { }
    //  API get()
    getProduct(): Observable<Fruit[]> {
        // this.service.getAPI(this.apiURL);
        return this.http.get<Fruit[]>(this.service.apiAll + '/fruit');
        // .pipe(
        //     retry(3)
        // );
    }

    // getAlbumID(): Observable<Album[]> {
    //     return this.http.get<Album[]>(this.apiURL + '/albums')
    //         // tslint:disable-next-line:align
    //         .pipe(retry(1), catchError(this.handleError));
    // }
    // // Error handling
    // handleError(error) {
    //     let errorMessage = '';
    //     if (error.error instanceof ErrorEvent) {
    //         // Get client-side error
    //         errorMessage = error.error.message;
    //     } else {
    //         // Get server-side error
    //         errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    //     }
    //     window.alert(errorMessage);
    //     return throwError(errorMessage);
    // }
}
