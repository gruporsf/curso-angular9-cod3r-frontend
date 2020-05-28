import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-produto-criar',
  templateUrl: './produto-criar.component.html',
  styleUrls: ['./produto-criar.component.css']
})
export class ProdutoCriarComponent implements OnInit {

  produto: Produto = {
    nome: 'Produto de teste',
    preco: 125.99
  }

  constructor(private produtoService: ProdutoService, private route: Router) { }

  ngOnInit(): void {
    
  }

  criarProduto(): void{

    this.produtoService.create(this.produto).subscribe(() => {

      this.produtoService.showMessage('Produto criado');
      
      this.route.navigate(['/produtos']);
    });
  }

  cancelar(): void {
    this.route.navigate(['/produtos']);
  }

}
