import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ArticleModel, IArticleModel} from '../../ngrx/article-model';
import {Store} from '@ngrx/store';
import {IAppStateExtended} from '../../app.state';
import {formatDate} from '../../utils/utils';


declare let sanitizeHtml: any;

@Component({
    selector: 'app-article-viewer',
    templateUrl: './cmp-article-viewer.html',
    styleUrls: ['./cmp-article-viewer.css']
})
export class ArticleViewerComponent {

    article: IArticleModel;
    created_date_formatted: string;
    selected_article_id: string;


    constructor(
        private store: Store<IAppStateExtended>) {

        this.article = new ArticleModel();
        this.created_date_formatted = '';

        this.store.select(
            value => value['articles_reducer'].selected_article_id).subscribe(
            selected_article_id => this.updateArticleId(selected_article_id));
    }// constructor


    updateArticleId(selected_article_id: string) {
        this.selected_article_id = selected_article_id;

        this.store.select(
            value => value['articles_reducer'].articles).subscribe(
            articles => {
                this.updateArticle(articles);
            }
        );
    }// updateArticleId


    updateArticle(articles: IArticleModel[]) {

        for (const article of articles) {
            if (article._id === this.selected_article_id) {
                this.article = <IArticleModel>article;
                this.created_date_formatted = formatDate(this.article.created);
                break;
            }
        }// for

        this.clearArticleContent();
    }// updateArticle


    clearArticleContent() {
        if (!this.article.content_raw) {
            return;
        }// if
        this.article.content = sanitizeHtml(this.article.content_raw);
    }// ClearContent

}// ArticleViewerComponent
