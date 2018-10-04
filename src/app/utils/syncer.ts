import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {IAppStateExtended} from '../app.state';
import * as ArticleActions from '../ngrx/article-actions';


export class Syncer {

    constructor(
        private http: HttpClient,
        private store: Store<IAppStateExtended>) {

        this.getArticles();
    }// constructor


    onGetArticlesSuccess(articles) {
        // console.log(articles);

        this.store.dispatch(
            new ArticleActions.Sync(articles));
    }// onGetArticlesSuccess

    onGetArticlesError(error) {
        console.log(error);
    }// onGetArticlesError


    public getArticles() {
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
    }// getArticles

}// Syncer

