import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { cpuUsage } from 'process';

@Injectable({
  providedIn: 'root'
})
export class OpenapiService {

  apiUrl = "https://hjcgmxfb9b.execute-api.eu-central-1.amazonaws.com/dev/generate";

  constructor(private httpClient: HttpClient) { }

  getOpenAPI() {
    const headerDict = {
      'x-thinkit-custom':'amine'
        
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    return this.httpClient.get(this.apiUrl,requestOptions);
}

}
