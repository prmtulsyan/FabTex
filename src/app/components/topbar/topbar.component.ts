/**
 * Created by andrew.yang on 7/28/2017.
 */
import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
    selector: 'top-bar',
    styleUrls: ['./top-bar.component.css'],
    template: `    
    <div class="main-header navbar-fixed-top">
        <div class="header-menu">
            <div class="header-mobile-nav-wrapper">
                <button type="button" class="navbar-toggle" (click)="collapse = !collapse">
                    <span class="fa fa-bars fa-2x"></span>
                </button>
            </div>
            <div class="header-logo-wrapper">
                <a routerLink = "/">
                    <img class="header-logo-image" src="./assets/imgs/logo.png" alt="Hero">
                </a>
            </div>
            <div class="header-nav-wrapper">
                <ul class="header-nav">
                    <li class="header-nav-item">
                        <a routerLink="/">HOME</a>
                    </li>
                    <li class="header-nav-item">
                        <a routerLink="/productlist">PRODUCTS</a>
                    </li>
                    <li class="header-nav-item">
                        <a routerLink="/">CONTACT</a>
                    </li>
                </ul>
            </div>
            <div class="header-cart-wrapper">
                <!-- add social media icons -->
            </div>
        </div>
        <ul class="mobile-header-nav" *ngIf="collapse" (click)="collapse = !collapse">
            <li>
                <a routerLink="/">HOME</a>
            </li>
            <li>
                <a routerLink="/">PRODUCTS</a>
            </li>
            <li>
                <a routerLink="/">CONTACT US</a>
            </li>
        </ul>
        <cart-popup></cart-popup>
    </div>
`
})
export class TopbarComponent implements OnInit {
    public collapse: boolean = false;
    public cart_num:number;
    constructor(
        private cartService: CartService
    ) { }

    ngOnInit() {
        this.cartService.cartListSubject
            .subscribe(res => {
                this.cart_num = res.length;
            })
    }
    toggleCartPopup = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.cartService.toggleCart()
    }
}