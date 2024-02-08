import { Component, inject, TemplateRef } from '@angular/core';

import {NgbOffcanvas} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent {

  private offcanvasService = inject(NgbOffcanvas);
	closeResult = '';

	open(content: TemplateRef<any>) {
    console.log('content :>> ', content);
		this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				// this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

  selectedItem: string | null = null;
  selectedMenuItem: string | null = null;

  selectItem(item: string) {
    this.selectedItem = item;
  }
  selectMenuItem(item: string) {
    this.selectedMenuItem = item;
  }
}
