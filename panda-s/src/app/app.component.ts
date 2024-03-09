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

  isLoggedIn = false;

  buyer: any;
  cart: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private pandaProxyService: PandaproxyService,
    private router: Router
  ) { }

  // ngOnInit() {
  //   this.pandaProxyService.getABuyer(1111).subscribe(buyer => {
  //     this.buyer = buyer;
  //     this.fetchCartItems((buyer as any).cart);
  //   });
  // }

  ngOnInit() {
    console.log("APP COMPONENT INIT");
    this.pandaProxyService.getLoggedInUser().subscribe((buyerId: string) => {
      console.log("BUYER IS PLS FOCUHSINDKNA " + buyerId);
      if (buyerId) {
        this.isLoggedIn = true;
        this.pandaProxyService.getABuyer(Number(buyerId)).subscribe(buyer => {
          this.buyer = buyer;
          this.fetchCartItems((buyer as any).cart);
        });
      } else {
        console.log("NO BUYER FUCKKKKKKKK");
        this.isLoggedIn = false;
      }
    });

    console.log("ok so this is the end");
  }

  fetchCartItems(cart: CartItem[]) {
    cart.forEach((cartItem: CartItem) => {
      this.pandaProxyService.getAShoe(Number(cartItem.shoeID)).subscribe(shoe => {
        this.cart.push(shoe);
      });
    });
  }

  removeFromCart(shoeId: number) {
    return;
  }
}

interface CartItem {
  shoeID: string;
  addedAt: Date;
}