import {Component, OnInit, Input, Output, EventEmitter, DoCheck} from '@angular/core';

@Component({
    selector: 'app-article-listitem',
    templateUrl: './cmp-article-listitem.html',
    styleUrls: ['./cmp-article-listitem.css']
})

export class ArticleListItemComponent implements OnInit,  DoCheck {

    id: number;
    author: String;
    title: String;
    content: String;
    created: Date;
    date: String;

    options = {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};


    @Input() article;
    @Output() notify_selected_id: EventEmitter<number> = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit() {
        this.id = this.article.id;
        this.author = this.article.author;
        this.title = this.article.title;
        this.content = this.article.content;
        this.created = this.article.created;
    }


    ngDoCheck() {
        this.id = this.article.id;
        this.author = this.article.author;
        this.title = this.article.title;
        this.content = this.article.content;
        this.created = this.article.created;
    }

    onClick() {
        this.notify_selected_id.emit(this.id);
    }
}


/*


        this.id = this.article.id;
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
*/
