import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  //NOTE: Array of Recipe type
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','Test Descprition od Recipe','https://www.indianhealthyrecipes.com/wp-content/uploads/2021/02/white-sauce-pasta.jpg'),
    new Recipe('A Test Recipe','Test Descprition od Recipe','https://www.indianhealthyrecipes.com/wp-content/uploads/2021/02/white-sauce-pasta.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
