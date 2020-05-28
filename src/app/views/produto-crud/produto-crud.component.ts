import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-crud',
  templateUrl: './produto-crud.component.html',
  styleUrls: ['./produto-crud.component.css']
})
export class ProdutoCrudComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.route.navigate(['/produtos/criar']);
  }

}
