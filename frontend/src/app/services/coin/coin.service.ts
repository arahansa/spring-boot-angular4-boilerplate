/**
 * Created by jarvis on 2017. 5. 28..
 */

import { Injectable } from '@angular/core';

import {
    Http,
    Headers,
    RequestOptions,
    Response
} from '@angular/http';

import { Observable, ReplaySubject} from 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()
export class CoinService extends ReplaySubject<string> {

    constructor(private http: Http) {
        super();
    }

    getPoloData(){
        return this.http.get("https://poloniex.com/public?command=returnTicker");
    }

    getCoinonData() {
        return this.http.get("https://api.coinone.co.kr/ticker?currency=all");
    }
}