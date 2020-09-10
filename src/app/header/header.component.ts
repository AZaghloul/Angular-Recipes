import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})
export class HeaderComponent {
    @Input() page: string;
    @Output() pageChange = new EventEmitter<string>();

    onPageChange(li) {
        this.pageChange.emit(li.target.textContent);
    }

}