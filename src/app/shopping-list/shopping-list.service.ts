import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient("Apple", 5),
        new Ingredient("Tomato", 3),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addListOfIngredients(ingredients: Ingredient[]) {
        ingredients.forEach(ing => {
            this.ingredients.push(ing);
        });
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}