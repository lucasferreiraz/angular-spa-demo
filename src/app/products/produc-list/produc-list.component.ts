import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-produc-list',
  templateUrl: './produc-list.component.html'
})
export class ProducListComponent {
  public products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe({
        next: products => this.products = products,
        error: error => console.log(error)
      })
      
  }

}
