import { Component, OnChanges, Input, ElementRef } from '@angular/core';
import { Http, Headers } from "@angular/http";

import { UrlshortService } from '../../services/urlshort.service';

import "rxjs/add/operator/toPromise"

declare var Materialize: any;

@Component({
	selector: 'app-urlshort',
	templateUrl: './urlshort.component.html',
	styleUrls: ['./urlshort.component.css']
})
export class UrlshortComponent implements OnChanges {
	constructor(
		private _elementRef: ElementRef,
		private _http: Http,
		private _urlshort: UrlshortService) {
	}

	@Input() clickedCard;
	@Input() cardExpanded;
	submitted: Boolean = false;
	urlshortData = {
		urlToShort: ""
	};
	shortUrl: string = "wating";
	renderComponent: Boolean = true;

	ngOnChanges() {
		this.renderComponent = this.cardExpandedCheck();
	}

	onSubmit() {
		this._urlshort.shortHandler(this.urlshortData.urlToShort)
			.then(res => {
				this.shortUrl = res.id;
				this.submitted = true;
			})
			.catch(err => {
				console.log(err);
				this.shortUrl = err;
			});
	}

	copyHandler() {
		let textArea = document.createElement("textarea");
		textArea.value = this.shortUrl;
		//for idiots on IE
		textArea.style.width = "1px";
		textArea.style.height = "1px";
		textArea.style.position = "fixed";
		textArea.style.top = "0";
		textArea.style.left = "0";
		document.body.appendChild(textArea);
		textArea.select();
		try {
			let copied = document.execCommand("copy");
			let noticeMsg = copied ? "Url Copied!" : "Error!! Unable to copy";
			console.log(noticeMsg);
			Materialize.toast(noticeMsg, 2000, "toastClass");
		} catch (err) {
			console.log(err);
		}
		document.body.removeChild(textArea);
	}

	cardExpandedCheck(): Boolean{
		if(this.cardExpanded){
			return this._elementRef.nativeElement.localName === this.clickedCard;
		}
		return true;
	}
}
