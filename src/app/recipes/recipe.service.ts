import { Recipe } from './receip.model';
import { Observable, of } from 'rxjs';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'A test Recipe',
      'first test description',
      'https://media.defense.gov/2011/Feb/04/2000288219/780/780/0/110201-F-6881R-001.JPG'
    ),
    new Recipe(
      2,
      'A second Recipe',
      'second test description',
      'https://media.defense.gov/2011/Feb/04/2000288219/780/780/0/110201-F-6881R-001.JPG'
    )
  ];
  constructor() {}

  getRecipes(): Observable<Recipe[]> {
    return of(this.recipes.slice());
  }

  findById(id: number): Observable<Recipe> {
    return of(this.recipes.find(recipe => recipe.id === id));
  }
}
