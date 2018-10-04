import {Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {formatDate} from '../../../utils/utils';

@Component({
    selector: 'app-article-listitem',
    templateUrl: './cmp-article-listitem.html',
    styleUrls: ['./cmp-article-listitem.css']
})

export class ArticleListItemComponent implements OnInit, OnChanges {

    created_date_formatted: string;

    @Input() article;
    @Output() notify_selected_id: EventEmitter<number> = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit() {
        this.created_date_formatted = formatDate(this.article.created);
    }

    ngOnChanges() {
    }

    onClick() {
        this.notify_selected_id.emit(this.article._id);
    }



}// ArticleListItemComponent

