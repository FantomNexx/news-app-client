import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IArticleModel} from '../../ngrx/article-model';
import {Store} from '@ngrx/store';
import {IAppStateExtended} from '../../app.state';
import * as ArticleActions from '../../ngrx/article-actions';

@Component({
    selector: 'app-articles-list',
    templateUrl: './cmp-articles-list.html',
    styleUrls: ['./cmp-articles-list.css']
})

export class ArticlesListComponent implements OnInit {

    obs_state: Observable<IAppStateExtended>;
    articles: IArticleModel[];

    constructor(private store: Store<IAppStateExtended>) {
        this.obs_state = this.store.select('articles_reducer');
        this.obs_state.subscribe(state => {
            this.articles = state.articles.map(item => ({...item}));
        });
    }// constructor

    ngOnInit() {
    }

    onNotifyClick(selected_article_id: string) {
        this.store.dispatch(
            new ArticleActions.UpdateSelectedArticleId(selected_article_id));
    }// onNotifyClick

}// ArticlesListComponent
