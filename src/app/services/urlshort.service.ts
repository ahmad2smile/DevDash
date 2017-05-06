import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class UrlshortService{
    constructor(private _http: Http){
    }

    private _headers = new Headers({'Content-Type': 'application/json'});
    googleUrlShort: string = "https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyCtKZf4ouiSdZ4N55kSlrvyvsSE_xVpX7M";

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    shortHandler(urlToShort: string): Promise<any> {
    return this._http
      .post(
          this.googleUrlShort,
          JSON.stringify({"longUrl": urlToShort}),
          {headers: this._headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
    }
}
