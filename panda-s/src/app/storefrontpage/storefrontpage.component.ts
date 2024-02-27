import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PandaproxyService } from '../pandaproxy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-storefrontpage',
  templateUrl: './storefrontpage.component.html',
  styleUrl: './storefrontpage.component.css'
})
export class StorefrontpageComponent {

  storefront: any;
  shoes: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private pandaProxyService: PandaproxyService,
    private router: Router
  ) { }

  ngOnInit() {
    const storeId = Number(this.route.snapshot.paramMap.get('storefrontId'));
    this.pandaProxyService.getAStorefront(storeId).subscribe(storefront => {
      this.storefront = storefront;
      this.fetchShoes((storefront as any).invList);
    });
  }

  fetchShoes(invList: string[]) {
    invList.forEach(shoeId => {
      this.pandaProxyService.getAShoe(Number(shoeId)).subscribe(shoe => {
        this.shoes.push(shoe);
      });
    });
  }

}
