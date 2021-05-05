import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'selenium-webdriver';
import { Product } from '../_models/product';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-product-infor',
  templateUrl: './product-infor.component.html',
  styleUrls: ['./product-infor.component.css']
})
export class ProductInforComponent implements OnInit {
  product: Product = new Product();
  productId: number = 0;
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productId = id ? +id : 0;
    if (this.productId) {
      this.productService.getProduct(this.productId).subscribe(
        (product) => (this.product = product),
        (error) => {
          this.router.navigate(['/product-info']);
        }
      );
    } else {
      this.product = new Product();
    }
  }
 
  submitProduct() {
    if (this.productId == 0) {
      this.productService.addProduct(this.product).subscribe(
        (product) => {
          this.router.navigate(['/products']);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.productService.updateProduct(this.product).subscribe(
        (product) => {
          this.router.navigate(['/products']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

}
