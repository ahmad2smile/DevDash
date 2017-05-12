import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	constructor() {
	}

	cardExpanded: Boolean = false;
	clickedCard: string = "";

	allCards: Array<string> = [
		"app-timer",
		"app-urlshort"
	];

	ngOnInit() {
	}

	cardClickHandler(e){
		let clickTarget: string = e.currentTarget.parentElement.parentElement.localName;
		let isTargetCard: Boolean = this.allCards.includes(clickTarget);
		
		if(isTargetCard){
			this.cardExpanded = !this.cardExpanded;
			this.clickedCard = clickTarget;
		}else{
			this.cardExpanded = false;
			this.clickedCard = "";
		}
	}

	expandEventHandler(e){
	}

}
