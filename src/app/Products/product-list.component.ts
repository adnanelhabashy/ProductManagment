import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
//../../../node_modules/
@Component({
    selector : 'pm-products',
    templateUrl : './product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit
{
    pageTitle : string = 'Product list';
    imageWidth : number = 50;
    imageMargin : number = 2;
    showImage:boolean = false;
    _listFilter :string ;

    get listFilter():string {
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter):this.products;
    }
    filteredProducts :IProduct[];
    products : IProduct[] = [
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

    constructor(){
        this.filteredProducts = this.products;
        this.listFilter = 'cart'
    }

    performFilter(filterBy:string):IProduct[]{
        filterBy = filterBy.toLowerCase();
        return this.products.filter((product : IProduct) => 
        product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);
    }

    toggleImages():void{
        this.showImage = !this.showImage;
    }

    ngOnInit():void{
        console.log('initialized');
    }

   
}