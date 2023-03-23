import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    constructor(public _product: ProductService,
        private _toastr: ToastrService) { }

    products: Product[] = []
    ngOnInit(): void {
        this.getData();
    }

    getData() {
        this._product.getAllProducts().subscribe(res => this.products = res);
    }
    addProduct(name: string, price: number) {
        if (name != '' && price > 0) {
            this._product.addProduct({ name, price }).subscribe(res => this.getData())
            this._toastr.success('success', 'add Product!');
        }else{
            this._toastr.error('error', 'missing details!');
        }
    }
    deleteProduct(id: number) {
        this._product.deleteProduct(id).subscribe(res => this.getData())
    }
    updateProduct(product: Product) {
        this._product.updateProduct(product.id, { name: product.name, price: product.price }).subscribe(res => this.getData())
    }
}
