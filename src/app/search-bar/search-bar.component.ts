import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  value!: string;
  @Output() handleSearch = new EventEmitter<string>();
  @Output() clearInput = new EventEmitter<void>();

  HandleClear() {
    this.clearInput.emit();
  }
  HandleSearch() {
    this.handleSearch.emit(this.value);
  }
}
