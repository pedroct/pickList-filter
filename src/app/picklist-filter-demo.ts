import { Component, ChangeDetectorRef } from '@angular/core';
import { ImportsModule } from './imports';
import { Product } from '@domain/product';
import { ProductService } from '@service/productservice';
@Component({
    selector: 'picklist-filter-demo',
    templateUrl: './picklist-filter-demo.html',
    standalone: true,
    imports: [ImportsModule],
    providers: [ProductService]
})
export class PicklistFilterDemo {
    sourceProducts!: Product[];

    targetProducts!: Product[];

    constructor(
      private carService: ProductService,
      private cdr: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.carService.getProductsSmall().then(products => {
            this.sourceProducts = products;
            this.cdr.markForCheck();
        });
        this.targetProducts = [];
    }
}