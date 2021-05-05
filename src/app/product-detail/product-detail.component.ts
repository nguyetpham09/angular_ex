import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../_models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product!: Product;
  constructor() { }
  // product: Product = {
  //   id: 1,
  //   name: 'Lethia',
  //   description: 'mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl',
  //   imageUrl: 'http://dummyimage.com/182x100.png/5fa2dd/ffffff',
  //   price: 46,
  // }
  
  ngOnInit(): void {
  }

}
