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

  constructor(
    private route: ActivatedRoute,
    private pandaProxyService: PandaproxyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.pandaProxyService.getAStorefront(80299).subscribe(storefront => this.storefront = storefront);
  }

}
