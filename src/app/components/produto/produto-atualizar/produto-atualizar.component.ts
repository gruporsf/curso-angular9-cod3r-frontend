import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-produto-atualizar',
  templateUrl: './produto-atualizar.component.html',
  styleUrls: ['./produto-atualizar.component.css']
})
export class ProdutoAtualizarComponent implements OnInit {

  produto: Produto;

  constructor(private produtoService: ProdutoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    this.produtoService.readById(id).subscribe(produto => {
      this.produto = produto;
    });
  }

  editarProduto(): void{
    this.produtoService.update(this.produto).subscribe(() => {
      this.produtoService.showMessage('Produto alterado com sucesso');

      this.router.navigate(['/produtos']);
    });
  }

  cancelar(): void{
    this.router.navigate(['/produtos']);
  }

}
