import {Component, OnInit} from '@angular/core';
import {ArticleModel, IArticleModel} from '../../ngrx/article-model';
import {Store} from '@ngrx/store';
import {IAppStateExtended} from '../../app.state';
import {EVENTS_ARTICLE, EventManagerService} from '../../utils/event_manager';


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
        private store: Store<IAppStateExtended>,
        private event_manager: EventManagerService) {

        this.article = new ArticleModel();

        this.store.select(
            value => value['articles_reducer'].selected_article_id).subscribe(
            selected_article_id => this.updateArticleId(selected_article_id));
    }// constructor


    updateArticleId(selected_article_id: string) {
        if (selected_article_id === '') {
            return;
        }// if

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
    }// clearArticleContent


    edit() {
        if (this.article._id === '') {
            return;
        }
        this.event_manager.emit(EVENTS_ARTICLE.UPDATE, {article: this.article});
        // this.store.dispatch(new ArticleActions.Edit(this.article));
    }

    create() {
        if (this.article._id === '') {
            return;
        }
        this.event_manager.emit(EVENTS_ARTICLE.CREATE, {article: this.article});
        // this.store.dispatch(new ArticleActions.Create(this.article));
    }

    delete() {
        if (this.article._id === '') {
            return;
        }// if
        this.event_manager.emit(EVENTS_ARTICLE.REMOVE, {selected_article_id: this.selected_article_id});
        // this.store.dispatch(new ArticleActions.Delete(this.article));
    }

}// ArticleCrudFormComponent
