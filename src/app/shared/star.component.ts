import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from '@angular/core';

@Component({
    selector :'pm-star',
    templateUrl :'./star.component.html',
    styleUrls : ['star.component.css']
})
export class StarComponent{
@Input() rating : number;
starWidth : number ;

   @Output() ratingClicked : EventEmitter<string> =
       new EventEmitter<string>();

    ngOnChanges():void{
        this.starWidth = this.rating*75 /5;
    }

    onClick():void{
								//console.log(`the rating ${this.rating} was clicked`);
							 this.ratingClicked.emit(`the rating ${this.rating} was clicked`);
    }
}