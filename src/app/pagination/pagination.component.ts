import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

	@Output() onPageChange = new EventEmitter<number>();
	lastPage: number;
	pages: number[];


  constructor() { }
  ngOnInit() {
  	this.lastPage = 48;
  	this.pages = [this.lastPage - 1, this.lastPage, 1, 2, 3];
  }

  setPages(page: number): void {
  	this.pages[2] = page;
  	this.pages[3] = this.checkPageBounds(this.pages[2] + 1);
  	this.pages[4] = this.checkPageBounds(this.pages[3] + 1);
  	this.pages[1] = this.checkPageBounds(this.pages[2] - 1);
  	this.pages[0] = this.checkPageBounds(this.pages[1] - 1);
  	window.scrollTo(0,0);
  }

  checkPageBounds(page: number): number {
  	if(page > this.lastPage) {
  		page = 1;
  	} else if(page < 1) {
  		page = this.lastPage;
  	}
  	return page;
  }

  goToFirst(): void {
  	this.setPages(1);
		this.onPageChange.emit(1);
  }

  goBack(): void {
		this.onPageChange.emit(this.pages[1]);
  	this.setPages(this.pages[1]);
  }

  goForward(): void {
		this.onPageChange.emit(this.pages[3]);				
  	this.setPages(this.pages[3]);
  }

  goToLast(): void {
		this.onPageChange.emit(this.lastPage);
  	this.setPages(this.lastPage);
  }

  goToPage(event): void {
  	const page:number =parseInt(event.target.innerHTML);
		this.onPageChange.emit(page);
  	this.setPages(page);
  }

}
