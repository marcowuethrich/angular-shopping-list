import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../receip.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() public recipe: Recipe;

  constructor(private router: Router, private activeRouter: ActivatedRoute) {}

  ngOnInit() {}

  onSelect() {
    this.router.navigate([this.recipe.id, 'edit'], {
      relativeTo: this.activeRouter
    });
  }
}
