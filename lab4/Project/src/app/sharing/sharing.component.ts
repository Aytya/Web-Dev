import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
@Component({
  selector: 'app-sharing',
  templateUrl: './sharing.component.html',
  styleUrls: ['./sharing.component.css'],

})
export class SharingComponent implements OnInit{
  product!: { image: string; price: number; name: string; rating: number; link: string; description: ({ subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string })[]; id: number } | { image: string; price: number; name: string; rating: number; link: string; description: ({ subdescr: string } | { subdescr: string } | { subdescr: string })[]; id: number } | { image: string; price: number; name: string; rating: number; link: string; description: ({ subdescr: string } | { subdescr: string } | { subdescr: string })[]; id: number } | { image: string; price: number; name: string; rating: number; link: string; description: ({ subdescr: string } | { subdescr: string } | { subdescr: string })[]; id: number } | { image: string; price: number; name: string; rating: number; link: string; description: ({ subdescr: string } | { subdescr: string } | { subdescr: string })[]; id: number } | { image: string; price: number; name: string; rating: number; link: string; description: ({ subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string })[]; id: number } | { image: string; price: number; name: string; rating: number; link: string; description: ({ subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string })[]; id: number } | { image: string; price: number; name: string; rating: number; link: string; description: ({ subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string })[]; id: number } | undefined
  @Input() card: Product | undefined
  constructor(
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  shareOnWhatsapp(card: { image: string; price: number; name: string; rating: number; link: string; description: { subdescr: string }[]; id: number }) {
    const message = `Check out this product: ${card.name} for ${card.price}₸ at ${card.link}`;
    const url = `whatsapp://send?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  }

  shareOnTelegram(card: { image: string; price: number; name: string; rating: number; link: string; description: { subdescr: string }[]; id: number }) {
    const message = `Check out this product: ${card.name} for ${card.price}₸ at ${card.link}`;
    const url = `tg://send?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  }

}
