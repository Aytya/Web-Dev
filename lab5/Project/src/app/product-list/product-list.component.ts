import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product, products} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [...products];
  details = false
  items = this.products
  someCategories = ''
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  shareOnTelegram(card: Product) {
    const message = `Check out this product: ${card.name} for ${card.price}₸ at ${card.link}`;
    const url = `tg://send?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  }



  onClick(product: Product) {
    product.likesCount += (product.isLiked) ? -1 : 1;
    product.isLiked = !product.isLiked;
  }

  categories(){
    let ctgs = new Set<String>();
    products.forEach(product => {
      ctgs.add(product.category);
    })
    return ctgs;
  }
  saveCategory(category: String){
    // @ts-ignore
    if(category === "all"){
      this.someCategories ="all";
    }
    else{
      // @ts-ignore
      this.someCategories = category;
    }

  }
  setCategoryItems(){
    let list = new Array<Product>();
    // @ts-ignore
    products.forEach(product =>{
      if( product.category === this.someCategories){
        list.push(product);
      }
      else if(this.someCategories == ""){
        list.push((product));
      }
    })
    return list;
  }

  setDefault(event: any){
    this.someCategories = "";
  }
}

