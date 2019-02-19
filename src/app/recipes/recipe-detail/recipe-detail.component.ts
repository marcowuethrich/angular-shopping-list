import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../receip.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() public recipe: Recipe;

  constructor(
    private activatedRouter: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    const id = +this.activatedRouter.snapshot.paramMap.get('id');
    this.recipeService.findById(id).subscribe(recipe => (this.recipe = recipe));

    this.activatedRouter.paramMap.subscribe((param: ParamMap) =>
      this.recipeService
        .findById(+param.get('id'))
        .subscribe(recipe => (this.recipe = recipe))
    );
  }
}
