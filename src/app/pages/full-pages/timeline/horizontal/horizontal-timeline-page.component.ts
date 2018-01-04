import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-horizontal-timeline-page',
    templateUrl: './horizontal-timeline-page.component.html',
    styleUrls: ['./horizontal-timeline-page.component.scss']
})

export class HorizontalTimelinePageComponent implements OnInit {

    ngOnInit() {
        // Horizontal timeline js
        $.getScript('./assets/js/horizontal-timeline.js');
    }
}