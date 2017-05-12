import { Component, OnChanges, Input, ElementRef} from '@angular/core';

declare var FlipClock: any;
declare var $: any;

@Component({
	selector: 'app-timer',
	templateUrl: './timer.component.html',
	styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnChanges {
	constructor(private _elementRef: ElementRef) { }

	@Input() clickedCard;
	@Input() cardExpanded;
	renderComponent: Boolean = true;

	ngOnChanges(){
		this.renderComponent = this.cardExpandedCheck();
		this.renderClock();
	}

	renderClock(){
		var clock = new FlipClock($('.flipClock'), {
			clockFace: 'TwelveHourClock'
		});

		$(`
        .flipClock > .flip-clock-divider:last-of-type,
        .flipClock ul:nth-child(7),
        .flipClock ul:nth-child(8),
        .flip-clock-meridium`).remove();
	}

	cardExpandedCheck(): Boolean{
		if(this.cardExpanded){
			return this._elementRef.nativeElement.localName === this.clickedCard;
		}
		return true;
	}

}
