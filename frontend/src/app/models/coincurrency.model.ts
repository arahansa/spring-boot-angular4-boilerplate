/**
 * Created by jarvis on 2017. 5. 28..
 */

export class CoinCurrency {



    constructor(
        public btc_xrp: string,
        public btc_eth: string,
        public btc_etc: string,
        public btc_dash: string,
        public btc_ltc : string,
    ) {

    }

    toString() {
        return JSON.stringify(this);
    }

}

