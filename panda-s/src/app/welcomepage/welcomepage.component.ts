import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PandaproxyService } from '../pandaproxy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrl: './welcomepage.component.css'
})
export class WelcomepageComponent implements OnInit{

  shoes: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private pandaProxyService: PandaproxyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pandaProxyService.getAllShoes().subscribe(shoes => this.shoes = shoes);
  }
}
