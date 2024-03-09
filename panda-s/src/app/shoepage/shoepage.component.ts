import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PandaproxyService } from '../pandaproxy.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shoepage',
  templateUrl: './shoepage.component.html',
  styleUrl: './shoepage.component.css'
})
export class ShoepageComponent implements OnInit{

  shoe: any;
  storefront: any;
  seller: any;

  constructor(
    private route: ActivatedRoute,
    private pandaProxyService: PandaproxyService,
    private router: Router
  ) { }

  ngOnInit() {
    const shoeId = this.route.snapshot.paramMap.get('shoeId');
    if (shoeId) {
      this.pandaProxyService.getAShoe(shoeId).subscribe(shoe => {
        this.shoe = shoe;
        if (this.shoe.storeId) {
          this.pandaProxyService.getAStorefront(this.shoe.storeId).subscribe(storefront => {
            this.storefront = storefront;
            if (this.storefront.sellerId) {
              this.pandaProxyService.getASeller(this.storefront.sellerId).subscribe(seller => {
                this.seller = seller;
              });
            }
          });
        }
      });
    }
  }

  // addToCart(shoeId: number) {
  //   this.pandaProxyService.updateCart(1111, shoeId).subscribe(() => {
  //     window.location.reload();
  //   });
  // }

  addToCart(shoeId: string) {
    console.log('adding to cart');
    this.pandaProxyService.updateCart(shoeId).subscribe(() => {
      window.location.reload();
    });
  }

}
