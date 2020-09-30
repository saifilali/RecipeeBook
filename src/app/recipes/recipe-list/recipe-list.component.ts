import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test','https://cdn.healthykitchen101.com/uploads/2019/04/Gumbo-recipe-1.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
