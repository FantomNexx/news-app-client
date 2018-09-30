import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-articles-view',
    templateUrl: './articles-view.component.html',
    styleUrls: ['./articles-view.component.css']
})
export class ArticlesViewComponent implements OnInit {

    articles: Array<any>;

    constructor(private http: HttpClient) {
        this.articles = [];
    }

    ngOnInit() {
        this.getArticles();
    }

    onGetArticlesSuccess(articles) {
        // this.articles = JSON.stringify(articles);
        this.articles = articles;
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


}
