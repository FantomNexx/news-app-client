import {Component, OnInit} from '@angular/core';
import {IArticleModel} from '../ngrx/article-model';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as ArticleActions from '../ngrx/article-actions';
import {IAppStateExtended} from '../app.state';


@Component({
    selector: 'app-article-crud-form',
    templateUrl: './cmp-article-crud-form.html',
    styleUrls: ['./cmp-article-crud-form.css']
})

export class ArticleCrudFormComponent implements OnInit {

    obs_state: Observable<IAppStateExtended>;
    obs_articles: Observable<IArticleModel[]>;
    obs_id: Observable<number>;
    state: IAppStateExtended;

    local_article: IArticleModel;

    author: string;
    title: string;
    content: string;


    constructor(private store: Store<IAppStateExtended>) {
        this.obs_state = this.store.select('articles_reducer');

        this.obs_id = this.store.select(
            value => value['articles_reducer'].selected_article_id);


        this.obs_id.subscribe(
            value => console.log(value));

        this.obs_articles = this.store.select(
            value => value['articles_reducer'].articles);


        this.obs_articles.subscribe(
            value => console.log(value));
    }


    ngOnInit() {
        this.obs_state.subscribe(
            state => this.Init(state));
    }

    Init(state: IAppStateExtended) {

        this.state = state;

        this.local_article = this.state.articles[this.state.selected_article_id];

        this.author = this.local_article.author;
        this.title = this.local_article.title;
        this.content = this.local_article.content;
    }

    Update() {
        this.local_article.author = this.author;
        this.local_article.title = this.title;
        this.local_article.content = this.content;

        this.edit();
    }


    edit() {
        this.store.dispatch(new ArticleActions.Edit(this.local_article));
    }

    create() {
        this.store.dispatch(new ArticleActions.Create(this.local_article));
    }

    delete() {
        this.store.dispatch(new ArticleActions.Delete(this.local_article));
    }

}


/*
import {HttpClient} from '@angular/common/http';

    author: string;
    title: string;
    content: string;

    constructor(private http: HttpClient) {
        this.author = 'Dwayne';
        this.title = 'How to start and end';
        this.content = 'No way';
    }

    ngOnInit() {
    }


    onCreateArticleSuccess(data) {
        console.log(data);
    }// onGetArticlesSuccess

    onCreateArticleError(error) {
        console.log(error);
    }// onGetArticlesError


    ArticleCreate() {
        const url = 'http://localhost:3000/api/article_create';
        const config = {
            params: {},
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json; charset=utf-8',
            }, data: {
                author: this.author,
                title: this.title,
                content: this.content
            }
        };

        this.http.post(url, config).subscribe(
            data => this.onCreateArticleSuccess(data),
            error => this.onCreateArticleError(error));

    }// ArticleCreate

 */
