import { Component } from "@angular/core";
//../../../node_modules/
@Component({
    selector : 'pm-products',
    templateUrl : './product-list.component.html'
})
export class ProductListComponent
{
    pageTitle : string = 'Product list';
    imageWidth : number = 50;
    imageMargin : number = 2;
    products : any[] = [
        {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
      }
    ];
}