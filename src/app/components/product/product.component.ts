import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    constructor(public _product: ProductService) { }

    products: Product[] = []
    ngOnInit(): void {
        this.getData();
    }

    getData() {
        this._product.getAllProducts().subscribe(res => this.products = res);
    }
    addProduct( name: string ,price:number) {
        this._product.addProduct({name,price}).subscribe(res => this.getData())
    }
    deleteProduct( id: number) {
        this._product.deleteProduct(id).subscribe(res => this.getData())
    }
    updateProduct( id: number ,name: string ,price:number ) {
        this._product.updateProduct(id , {name,price}).subscribe(res => this.getData())
    }
}
