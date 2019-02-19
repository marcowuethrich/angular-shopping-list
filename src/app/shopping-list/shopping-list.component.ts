import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient(1, 'Apples', 1),
    new Ingredient(2, 'Tomatoes', 5),
    new Ingredient(3, 'Oranges', 3)
  ];

  constructor() {}

  ngOnInit() {}

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
