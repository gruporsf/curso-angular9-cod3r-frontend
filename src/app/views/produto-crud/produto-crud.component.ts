import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-produto-crud',
  templateUrl: './produto-crud.component.html',
  styleUrls: ['./produto-crud.component.css']
})
export class ProdutoCrudComponent implements OnInit {

  constructor(private route: Router, private headerService: HeaderService) {
    headerService.headerData = {
      titulo: 'Cadastro de Produtos',
      icone: 'storefront',
      routeUrl: '/produtos'
    };
  }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.route.navigate(['/produtos/criar']);
  }

}
