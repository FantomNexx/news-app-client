import {Component, OnInit, Input, AfterViewInit, ChangeDetectorRef} from '@angular/core';

@Component({
    selector: 'app-article-single-view',
    templateUrl: './article-single-view.component.html',
    styleUrls: ['./article-single-view.component.css']
})
export class ArticleSingleViewComponent implements OnInit, AfterViewInit {
    author: String;
    title: String;
    content: String;
    created: Date;
    date: String;

    options = {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};


    @Input() article;

    constructor(private cdr: ChangeDetectorRef) {
    }

    ngOnInit() {
    }


    ngAfterViewInit() {
        this.author = this.article.author;
        this.title = this.article.title;
        this.content = this.article.content;
        this.created = this.article.created;

        if (this.created != null) {
            const date_ms = Date.parse(this.created.toString());
            if (date_ms) {
                const date_obj = new Date();
                date_obj.setTime(date_ms);
                this.date = date_obj.toLocaleDateString('en-US', this.options);
            }
        } else {
            this.date = 'Unknown date';
        }

        console.log(this.date);

        this.cdr.detectChanges();
    }
}
