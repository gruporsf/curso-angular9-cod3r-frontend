import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-apagar',
  templateUrl: './produto-apagar.component.html',
  styleUrls: ['./produto-apagar.component.css']
})
export class ProdutoApagarComponent implements OnInit {

  produto: Produto;

  constructor(private produtoService: ProdutoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    this.produtoService.readById(id).subscribe(produto => {
      this.produto = produto;
    });
  }

  apagarProduto(): void{

    if(!confirm('Deseja realmente deletar?')){
      return;
    }

    this.produtoService.deletar(String(this.produto.id)).subscribe(() => {
      this.produtoService.showMessage('Produto apagado com sucesso');

      this.router.navigate(['/produtos']);
    });
  }

  cancelar(): void{
    this.router.navigate(['/produtos']);
  }

}
