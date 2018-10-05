import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {IAppStateExtended} from '../app.state';
import * as ArticleActions from '../ngrx/article-actions';
import {ARTICLE_EVENTS, EventManagerService} from './event_manager';
import {Injectable, OnDestroy} from '@angular/core';
import {IArticleModel} from '../ngrx/article-model';

@Injectable({
    providedIn: 'root'
})

export class Syncer implements OnDestroy {

    constructor(
        private http: HttpClient,
        private store: Store<IAppStateExtended>,
        private event_manager: EventManagerService) {

        event_manager.subscribe(
            ARTICLE_EVENTS.CREATE, this,
            (args: any) => this.createArticle(args[0].article));

        event_manager.subscribe(
            ARTICLE_EVENTS.UPDATE, this,
            (args: any) => this.updateArticle(args[0].article));

        event_manager.subscribe(
            ARTICLE_EVENTS.REMOVE, this,
            (args: any) => this.removeArticle(args[0].selected_article_id));

    }// constructor

    ngOnDestroy(): void {
        this.event_manager.unsubscribe(ARTICLE_EVENTS.CREATE, this);
        this.event_manager.unsubscribe(ARTICLE_EVENTS.UPDATE, this);
        this.event_manager.unsubscribe(ARTICLE_EVENTS.REMOVE, this);
    }// ngOnDestroy


    onArticlesCreateSuccess(data) {
        console.log(data);
        this.getArticles();
    }// onArticlesGetSuccess
    onArticlesCreateError(error) {
        console.log(error);
    }// onArticlesGetError

    public createArticle(article: IArticleModel) {
        // this.store.dispatch(new ArticleActions.Create(article));
        const url = 'http://localhost:3000/api/article_create';
        const params = {article: article};
        this.doPostRequest(
            url,
            params,
            (data) => this.onArticlesCreateSuccess(data),
            (err) => this.onArticlesCreateError(err)
        );
    }// updateArticle


    onArticlesUpdateSuccess(data) {
        console.log(data);
    }// onArticlesGetSuccess
    onArticlesUpdateError(error) {
        console.log(error);
    }// onArticlesGetError

    public updateArticle(article: IArticleModel) {
        this.store.dispatch(new ArticleActions.Edit(article));
        const url = 'http://localhost:3000/api/article_update';
        const params = {article: article};
        this.doPostRequest(
            url,
            params,
            (data) => this.onArticlesUpdateSuccess(data),
            (err) => this.onArticlesUpdateError(err)
        );
    }// updateArticle


    onArticlesRemoveSuccess(data) {
        console.log(data);
    }// onArticlesGetSuccess
    onArticlesRemoveError(error) {
        console.log(error);
    }// onArticlesGetError

    public removeArticle(selected_article_id: string) {
        this.store.dispatch(new ArticleActions.Delete(selected_article_id));
        const url = 'http://localhost:3000/api/article_remove';
        const params = {article_id_to_remove: selected_article_id};
        this.doPostRequest(
            url,
            params,
            (data) => this.onArticlesRemoveSuccess(data),
            (err) => this.onArticlesRemoveError(err)
        );
    }// updateArticle


    onArticlesGetSuccess(articles) {
        this.store.dispatch(new ArticleActions.Sync(articles));
    }// onArticlesGetSuccess
    onArticlesGetError(error) {
        console.log(error);
    }// onArticlesGetError

    public getArticles() {
        const url = 'http://localhost:3000/api/articles';
        const params = {};
        this.doGetRequest(
            url,
            params,
            (articles) => this.onArticlesGetSuccess(articles),
            (err) => this.onArticlesGetError(err)
        );
    }// getArticles


    doGetRequest(url, params, onSuccess, onError) {
        const config = {
            params: params,
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json; charset=utf-8',
            }
        }; // config

        this.http.get(url, config).subscribe(
            data => onSuccess(data), error => onError(error));
    }// doGetRequest
    doPostRequest(url, params, onSuccess, onError) {
        const config = {
            params: params,
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json; charset=utf-8',
            }
        }; // config

        this.http.post(url, config).subscribe(
            data => onSuccess(data), error => onError(error));
    }// doPostRequest

}// Syncer

