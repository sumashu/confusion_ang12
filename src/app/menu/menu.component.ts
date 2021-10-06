import { Component, OnInit, ViewChild } from '@angular/core';
import { Dish } from '../shared/dish';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

   dishes:Dish[] =  [
    {
      id: '0',
      name: 'Uthappizza',
      image: '/assets/images/uthappizza.png',
      category: 'mains',
      featured: true,
      label: 'Hot',
      price: '4.99',
      // tslint:disable-next-line:max-line-length
      description: 'A unique combination of Indian Uthappam'
    },
    {
      id: '1',
      name: 'Zucchipakoda',
      image: '/assets/images/zucchipakoda.png',
      category: 'appetizer',
      featured: false,
      label: '',
      price: '1.99',
      description: 'Deep fried Zucchini coated '
    },
    {
      id: '2',
      name: 'Vadonut',
      image: '/assets/images/vadonut.png',
      category: 'appetizer',
      featured: false,
      label: 'New',
      price: '1.99',
      description: 'A quintessential ConFusion experience'
    },
    {
      id: '3',
      name: 'ElaiCheese Cake',
      image: '/assets/images/elaicheesecake.png',
      category: 'dessert',
      featured: false,
      label: '',
      price: '2.99',
      description: 'A delectable, semi-sweet'
    }
   ];

   displayedColumns: any[] = ['id', 'name', 'image','category','featured','label','price','description'];
   dataSource:any = this.dishes;

   @ViewChild(MatTable)
  table!: MatTable<Dish>;

   addData() {
     const randomElementIndex = Math.floor(Math.random() * Dish.length);
     this.dataSource.push(this.dishes[randomElementIndex]);
     this.table.renderRows();
   }
 
   removeData() {
     this.dataSource.pop();
     this.table.renderRows();
   }
 

  constructor() { }

  ngOnInit(): void {
  }

}
