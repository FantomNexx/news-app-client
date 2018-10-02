import {Component, OnInit} from '@angular/core';
import {IArticleModel} from '../ngrx/article-model';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as ArticleActions from '../ngrx/article-actions';
import {IAppStateExtended} from '../app.state';


declare let sanitizeHtml: any;


@Component({
    selector: 'app-article-crud-form',
    templateUrl: './cmp-article-crud-form.html',
    styleUrls: ['./cmp-article-crud-form.css']
})

export class ArticleCrudFormComponent implements OnInit {

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


    Update() {
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
