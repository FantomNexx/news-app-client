import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EventManagerService, EVENTS_ARTICLE, EVENTS_SOURCE} from '../utils/event_manager';
import {IArticleModel} from '../ngrx/article-model';
import {IModelSource} from './model-source';

@Injectable({
    providedIn: 'root'
})


export class Model implements OnDestroy {

    public articles: IArticleModel[];
    public sources: IModelSource[];

    static OnError(error) {
        console.log(error);
    }// onArticlesGetError

    constructor(
        private http: HttpClient,
        private event_manager: EventManagerService) {
        this.SubscribeOnEvents();
    }// constructor

    SubscribeOnEvents() {

        this.event_manager.subscribe(
            EVENTS_ARTICLE.GET_ALL, this,
            () => this.ArticlesGetAll());

        this.event_manager.subscribe(
            EVENTS_SOURCE.GET_ALL, this,
            () => this.SourcesGetAll());
    } // SubscribeOnEvents

    ngOnDestroy(): void {
        this.event_manager.unsubscribe(EVENTS_ARTICLE.GET_ALL, this);
    }// ngOnDestroy


    onArticlesGetAllSuccess(_articles) {
        this.articles = _articles;

        this.event_manager.emit(
            EVENTS_ARTICLE.GET_ALL_RESULT,
            {articles: _articles});
    }// onArticlesGetSuccess

    public ArticlesGetAll() {
        const url = 'http://localhost:3000/api_article/articles';
        const params = {};
        this.doGetRequest(
            url, params,
            (articles) => this.onArticlesGetAllSuccess(articles),
            (err) => Model.OnError(err)
        ); // doGetRequest
    }// ArticlesGetAll


    onSourcesGetAllSuccess(_sources) {
        this.sources = _sources;

        this.event_manager.emit(
            EVENTS_SOURCE.GET_ALL_RESULT,
            {sources: _sources});
    }// onArticlesGetSuccess

    public SourcesGetAll() {
        const url = 'http://localhost:3000/api_article_source/article_sources';
        const params = {};
        this.doGetRequest(
            url, params,
            (sources) => this.onSourcesGetAllSuccess(sources),
            (err) => Model.OnError(err)
        ); // doGetRequest
    }// ArticlesGetAll


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

}// Model
