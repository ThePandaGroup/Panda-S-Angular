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

  constructor(
    private route: ActivatedRoute,
    private pandaProxyService: PandaproxyService,
    private router: Router
  ) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = +idParam;
      this.pandaProxyService.getShoe(id).subscribe(shoe => this.shoe = shoe);
    } else {
      this.router.navigate(['/']);
    }
  }

}
