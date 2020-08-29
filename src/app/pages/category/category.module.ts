/**
 * Created by andrew.yang on 7/27/2017.
 */
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {categoryRoutes} from "./category.routes";
import {SharedModule} from "../../shared/shared.module";
import {CategoryComponent} from "./category.component";
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(categoryRoutes)
    ],
    declarations: [
        CategoryComponent,
        ProductCarouselComponent
    ]
})
export class CategoryModule { }