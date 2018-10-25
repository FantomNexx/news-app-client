import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-article-source-listitem',
    templateUrl: './cmp-article-source-listitem.html',
    styleUrls: ['./cmp-article-source-listitem.css']
})
export class CmpArticleSourceListItemComponent implements OnInit {

    @Input() source;

    constructor() {
    }

    ngOnInit() {
    }

}
