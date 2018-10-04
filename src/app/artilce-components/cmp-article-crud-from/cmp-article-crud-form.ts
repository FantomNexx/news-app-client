import {Component, OnInit} from '@angular/core';
import {ArticleModel, IArticleModel} from '../../ngrx/article-model';
import {Store} from '@ngrx/store';
import * as ArticleActions from '../../ngrx/article-actions';
import {IAppStateExtended} from '../../app.state';


declare let sanitizeHtml: any;


@Component({
    selector: 'app-article-crud-form',
    templateUrl: './cmp-article-crud-form.html',
    styleUrls: ['./cmp-article-crud-form.css']
})

export class ArticleCrudFormComponent implements OnInit {

    article: IArticleModel;
    selected_article_id: string;


    constructor(
        private store: Store<IAppStateExtended>) {

        this.article = new ArticleModel();

        this.store.select(
            value => value['articles_reducer'].selected_article_id).subscribe(
            selected_article_id => this.updateArticleId(selected_article_id));
    }// constructor


    updateArticleId(selected_article_id: string) {
        if (selected_article_id === '') {
            return;
        }

        this.selected_article_id = selected_article_id;

        this.store.select(value => value['articles_reducer'].articles).subscribe(
            articles => {
                this.updateArticle(articles);
            }
        ); // subscribe
    }// updateArticleId

    ngOnInit() {
    }


    updateArticle(articles: IArticleModel[]) {

        for (const article of articles) {
            if (article._id === this.selected_article_id) {
                this.article = <IArticleModel>article;
                break;
            }// if
        }// for

        this.clearArticleContent();
    }// updateArticle

    clearArticleContent() {
        if (!this.article.content_raw) {
            return;
        }// if
        this.article.content = sanitizeHtml(this.article.content_raw);
    }


    Update() {
        this.edit();
    }


    edit() {
        this.store.dispatch(new ArticleActions.Edit(this.article));
    }

    create() {
        this.store.dispatch(new ArticleActions.Create(this.article));
    }

    delete() {
        this.store.dispatch(new ArticleActions.Delete(this.article));
    }

}// ArticleCrudFormComponent
