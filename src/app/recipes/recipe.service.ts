import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("Recipe1",
            "Recipe Description",
            "https://pinchofyum.com/wp-content/uploads/Moroccan-Chickpea-Bowls-Recipe.jpg",
            [
                new Ingredient("Apple", 5),
                new Ingredient("Tomato", 3),
            ]),
        new Recipe("Recipe2",
            "Recipe Description2",
            "https://www.gimmesomeoven.com/wp-content/uploads/2014/06/12-Minute-Chicken-and-Broccoli-Recipe-2.jpg",
            [
                new Ingredient("Apple", 5),
                new Ingredient("Apple", 5),
                new Ingredient("Tomato", 3),
            ]),
        new Recipe("Recipe3",
            "Recipe Description3",
            "https://picturetherecipe.com/wp-content/uploads/2020/01/Rogan-Josh-by-PictureTheRecipe-Featured-1-395x500.jpg",
            [
                new Ingredient("Apple", 5),
                new Ingredient("Tomato", 3),
                new Ingredient("Tomato", 3),
            ]),
    ];

    getRecipes() {
        console.log(this.recipes)
        return this.recipes.slice();
    }
}