import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    page = "Recipes"; //Recipes OR Shopping List

    onPageChanged(page: string) {
        this.page = page;
    }
}
