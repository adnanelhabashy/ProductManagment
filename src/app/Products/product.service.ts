import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError, observable } from 'rxjs';
import { catchError , tap } from 'rxjs/operators';
@Injectable(
    {providedIn: 'root'}
)

export class ProductService{
    private productUrl = 'api/products/products.json';
    constructor(private http:HttpClient){}
    getProducts():Observable <IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
          tap(data => console.log('ALL :'+JSON.stringify(data))),
          catchError(this.handleError)
        );



    }

    private handleError(err : HttpErrorResponse) {
      let errorMessage = '';
      if(err.error instanceof ErrorEvent)
      {
        errorMessage = `An Error Occurred :${err.error.message}`;
      }
      else 
      {
        errorMessage = `Server Returned code : ${err.status},error message is:${err.message}`
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }
}