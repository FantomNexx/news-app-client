import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IArticleModel} from '../ngrx/article-model';
import {Store} from '@ngrx/store';
import {IAppStateExtended} from '../app.state';
import * as ArticleActions from '../ngrx/article-actions';

@Component({
    selector: 'app-articles-list',
    templateUrl: './cmp-articles-list.html',
    styleUrls: ['./cmp-articles-list.css']
})

export class ArticlesListComponent implements OnInit {

    obs_state: Observable<any>;
    state: IAppStateExtended;

    articles: IArticleModel[];
    selected_article_id: number;

    constructor(private store: Store<IAppStateExtended>) {
        this.obs_state = this.store.select('articles');
    }

    ngOnInit() {
        this.obs_state.subscribe(
            obs_state => this.state = obs_state);

        this.articles = this.state.articles;
    }

    onNotifyClick(selected_article_id: number) {
        this.selected_article_id = selected_article_id;
        console.log('this.selected_article_id ', this.selected_article_id);

        this.store.dispatch(
            new ArticleActions.UpdateSelectedArticleId(
                this.selected_article_id));
    }

}

/*
import {HttpClient} from '@angular/common/http';

    obs_articles: Array<any>;

    constructor(private http: HttpClient) {
        this.obs_articles = [];
    }

    ngOnInit() {
        // this.getArticles();
    }

    onGetArticlesSuccess(obs_articles) {
        // this.obs_articles = JSON.stringify(obs_articles);
        this.obs_articles = obs_articles;
    }// onGetArticlesSuccess

    onGetArticlesError(error) {
        console.log(error);
    }// onGetArticlesError

    getArticles() {
        const url = 'http://localhost:3000/api/articles';
        const config = {
            params: {},
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json; charset=utf-8',
            }
        };

        this.http.get(url, config).subscribe(
            data => this.onGetArticlesSuccess(data),
            error => this.onGetArticlesError(error));
    }

 */
