

import {Http ,Headers,RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()

export class WorldCupService {

    url='http://localhost:3434/list';
    constructor(private http:Http) {
        
    }

    get()
    {
        return this.http.get(this.url);
    }
    delete(venue:string)
    {
        return this.http.delete(this.url+'/'+venue);
    }

    post(country:string,year:number,noofteam:number,venue:string)
    {
        const body={
country:country,
year:year,
noofteam:noofteam,
venue:venue
        };

        const headers=new Headers({'Content-Type':'application/json'});
        const requestOptions=new RequestOptions({headers});

        return this.http.post(this.url,body,requestOptions);

    }
}