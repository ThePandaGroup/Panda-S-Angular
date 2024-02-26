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
  seller: any;

  constructor(
    private route: ActivatedRoute,
    private pandaProxyService: PandaproxyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.pandaProxyService.getShoe(1).subscribe(shoes => this.shoe = shoes);
  }

}
