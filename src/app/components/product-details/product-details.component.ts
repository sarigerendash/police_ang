import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

    @Input()
    product?: Product
    @Output()
    updateProduct = new EventEmitter<Product>();

    editFlag: boolean = false

    editProduct() {
      this.editFlag = true
    }
    saveProduct(name: string ,price:number){
        this.updateProduct.emit({id:this.product?.id,name,price});
        this.editFlag = false
    }
}
