import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Collapse } from '../collapse/collapse';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [Collapse(300)]
})
export class NavbarComponent implements OnInit {

	title = 'Filmster';
  currentURL;
  menuToggle = false;

  constructor(
  	private router: Router) {
      router.events.subscribe(val => {
        this.currentURL = val.url.slice(1);
      });
  }

  ngOnInit() {
  }

  gotoLink(e): void {
    let link = e.target.innerHTML.toLowerCase();
    link = (link === 'home') ? '' : link;
  	this.router.navigate(['/' + link])
  }

  active(link:string): boolean {
    return (link === this.currentURL)
  }
}
