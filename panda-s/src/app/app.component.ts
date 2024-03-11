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

  ngOnInit() {
    console.log("APP COMPONENT INIT");
    this.pandaProxyService.getLoggedInUser().subscribe(response => {
      const buyerId = response.buyerId;
      console.log("BUYER IS: " + buyerId);
      if (buyerId) {
        this.isLoggedIn = true;
        this.pandaProxyService.getABuyer(buyerId).subscribe(buyer => {
          this.buyer = buyer;
          this.fetchCartItems((buyer as any).cart);
        });
      } else {
        console.log("NO BUYER");
        this.isLoggedIn = false;
      }
    });
  
    console.log("ok so this is the end");
  }

  fetchCartItems(cart: CartItem[]) {
    cart.forEach((cartItem: CartItem) => {
      this.pandaProxyService.getAShoe(cartItem.shoeID).subscribe(shoe => {
        this.cart.push(shoe);
      });
    });
  }

  removeFromCart(shoeId: string) {
    this.pandaProxyService.removeFromCart(shoeId).subscribe(
      response => {
        console.log('Shoe removed from cart', response);
        // Refresh the cart
        this.cart = [];
        this.fetchCartItems(this.buyer.cart);
        window.location.reload(); 
      },
      error => console.error('Error removing shoe from cart', error)
    );
  }

  // In your app.component.ts
  userLogout(event: Event) {
    event.preventDefault();
    console.log("LOGGING OUT NOW");
    this.pandaProxyService.logout().subscribe({
      next: () => {
        console.log("Logout successful. Reloading page.");
        window.location.reload(); 
      },
      error: (error) => {
        console.error("Error during logout:", error);
  
        window.location.reload(); 
      }
    });
  }

}

interface CartItem {
  shoeID: string;
  addedAt: Date;
}