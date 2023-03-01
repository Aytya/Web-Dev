import {Component, EventEmitter, Output} from '@angular/core';
import {products, Product} from "../products";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  @Output() child = new EventEmitter<Product>();
  product = products;

  clickMyStore(){
    // @ts-ignore
    this.child.emit(this.product);
  }

}
