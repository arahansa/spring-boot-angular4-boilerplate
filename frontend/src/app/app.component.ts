import {
  Component,
  OnInit
} from '@angular/core';

import { AuthService } from './services/auth/auth.service';
import {CoinService} from "./services/coin/coin.service";
import {Response} from '@angular/http';
import {CoinCurrency} from "./models/coincurrency.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService, CoinService]
})
export class AppComponent implements OnInit {

  currency_polo;
  currency_coinone;

  ngOnInit() {
    this.currency_polo = new CoinCurrency('', '','', '', '');
    this.currency_coinone = new CoinCurrency('', '','', '', '');
    this.getPolo();
  }

  constructor(private authService: AuthService, private coinService : CoinService) {
  }

  signUp(username:string, email:string, password:string) : void {
    console.log("name :", username);
    this.authService.signUp(username, email, password).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
    );
  }

  getPolo() : void {
    this.coinService.getPoloData().subscribe(
        (res: Response) => {
          const data = res.json();
          let btc_xrp = data['BTC_XRP'].last;
          let btc_eth = data['BTC_ETH'].last;
          let btc_etc = data['BTC_ETC'].last;
          let btc_ltc = data['BTC_LTC'].last;
          let btc_dash = data['BTC_DASH'].last;
          this.currency_polo = new CoinCurrency(btc_xrp, btc_eth, btc_etc, btc_dash, btc_ltc);
        },
        (err) => console.log(err)

    );
  }

  getCoinOne() : void{
    console.log('테스트');
    this.coinService.getCoinonData().subscribe(
        (res: Response) => {

          const data = res.json();
          let btc = Number(data['btc'].last);
          let xrp = Number(data['xrp'].last);
          let eth = Number(data['eth'].last);
          let etc = Number(data['etc'].last);


          this.currency_coinone = new CoinCurrency(String(xrp/btc), String(eth/btc),String(etc/btc), '', '');
        }
    );
  }



}
