import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IArticleModel} from '../ngrx/article-model';
import {Store} from '@ngrx/store';
import {IAppStateExtended} from '../app.state';
import {CSwitchItemData} from '../switcher/switcher.component';


declare let sanitizeHtml: any;

@Component({
    selector: 'app-article-viewer',
    templateUrl: './cmp-article-viewer.html',
    styleUrls: ['./cmp-article-viewer.css']
})
export class ArticleViewerComponent implements OnInit {

    obs_id: Observable<number>;

    local_article: IArticleModel;
    article_id: number;


    constructor(
        private store: Store<IAppStateExtended>) {

        this.obs_id = this.store.select(
            value => value['articles_reducer'].selected_article_id);

        this.obs_id.subscribe(
            selected_article_id => this.UpdateArticleId(selected_article_id));
    }


    UpdateArticleId(id: number) {
        this.article_id = id;

        this.store.select(
            value => value['articles_reducer'].articles).subscribe(
            articles => {
                this.local_article = articles[this.article_id];
                this.ClearContent();
            }
        );
    }

    ngOnInit() {
    }

    ClearContent() {
        this.local_article.content = sanitizeHtml(this.local_article.content_raw);
    }



}
