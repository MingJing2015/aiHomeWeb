import { Component, OnInit, Input } from '@angular/core';
import { GoodsService } from '../../services/goods.service';
import { Goods, Category, MenuItem } from '../../models/defineClass';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})

export class BreadcrumbComponent implements OnInit {
  @Input()
  goods: Goods;
  private categories: Array<Category>;
  private menuMyItems: Array<MenuItem>;
  private tabItems:  Array<MenuItem>;

  constructor(private goodsService: GoodsService) {

      this.menuMyItems = new Array();
      this.tabItems    = new Array();
  }

  ngOnInit() {

    // console.log(this.goods.goods_name);

    this.getCategoryThenBreadCrumb();
  }

// export class BreadcrumbComponent {
//   @Input()
//   hero: Goods;
// }

  private getCategory(): Promise<Category[]> {

    return this.goodsService.getCategory()
        .then(categories => this.categories = categories);
  }

  private getCategoryByID(): Promise<Category[]> {

    return this.goodsService
        .getCategory()
        .then(categories => this.categories = categories);
  }


// In  then() ,  call a new function ************
  private  getCategoryThenBreadCrumb(): Promise<void> {

    return this.getCategoryByID()
        .then(() => this.createMenuItems());

  }


  // Create Menu string array ..........................
  private createMenuItems() {

    //// console.log("createMenuItems Method :  -----------------------");

    // console.log(this.goods.cat_id);
    // console.log("this.categories.length: " + this.categories.length);

    let subCat ;
    let item1
    for (let i = 0; i < this.categories.length; i++) {

      if (this.categories[i].cat_id == this.goods.cat_id ) {

        // console.log(this.categories[i].cat_id);

        subCat = this.categories[i];
        item1 = {
          id: 'bread' + i,
          parameterID: subCat.cat_id,                // such as, iPhone cat_id 11
          path: '/type-page/type-page/',
          linkName: subCat.cat_name,
          active: '',
          random : this.getRandomString(i+1)     // get random url tail for refresh
        };

        // late push, change order 
        //this.menuMyItems.push(item);

        //console.log(item1);

        break;
      }
    }

    for (let i = 0; i < this.categories.length; i++) {

      if (this.categories[i].cat_id == subCat.parent_id ) {

        let subCat1 = this.categories[i];
        let item = {
          id: 'bread' + i,
          parameterID: subCat1.cat_id,                // such as, iPhone cat_id 11
          path: '/type-page/type-page/',
          linkName: subCat1.cat_name,
          active: '',
          random : this.getRandomString(i+1)     // get random url tail for refresh
        };

        this.menuMyItems.push(item);
        this.menuMyItems.push(item1);

        //console.log(item);

        break;
      }
    }
  }

  getRandomString(len : number){

    let str = '';

    for( let i=0; i<len; i++){
      str += "/1";
    }
    //console.log(str);

    return str;
  }
}


