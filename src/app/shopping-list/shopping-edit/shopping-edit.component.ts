import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('id') idElm: ElementRef;
  @ViewChild('name') nameElm: ElementRef;
  @ViewChild('amount') amountElm: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit() {}

  addIngredients() {
    this.ingredientAdded.emit(
      new Ingredient(
        this.idElm.nativeElement.value(),
        this.nameElm.nativeElement.value(),
        this.amountElm.nativeElement.value()
      )
    );
  }
}
