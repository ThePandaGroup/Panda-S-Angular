import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PandaproxyService } from './pandaproxy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'panda-s';

  buyer: any;
  cart: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private pandaProxyService: PandaproxyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.pandaProxyService.getABuyer(1111).subscribe(buyer => {
      this.buyer = buyer;
      this.fetchCartItems((buyer as any).cart);
    });
  }

  fetchCartItems(cart: string[]) {
    cart.forEach(shoeId => {
      this.pandaProxyService.getAShoe(Number(shoeId)).subscribe(item => {
        this.cart.push(item);
      });
    });
  }

  removeFromCart(shoeId: number) {
    return;
  }
}
