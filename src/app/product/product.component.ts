import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
title: string = 'E-commerce';
priceMax!:number;
listProduct!: Product[];
  constructor() { }

  ngOnInit(): void {
    this.listProduct=[
      {id:0,title:'t-shirt1', price:18 , quantity:0,like:0},
      {id:1,title:'t-shirt2', price:15 , quantity:10,like:0},
      {id:2,title:'t-shirt3', price:8 , quantity:8,like:0}
    ]
  }
  increment(i:number){
    this.listProduct[i].like++;
  }
  buy(i:number){
    this.listProduct[i].quantity--;

  }
}
