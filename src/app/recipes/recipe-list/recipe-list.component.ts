import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../receip.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService
      .getRecipes()
      .subscribe(recipes => (this.recipes = recipes));
  }
}
