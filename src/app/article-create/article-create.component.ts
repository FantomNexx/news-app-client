import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-article-create',
    templateUrl: './article-create.component.html',
    styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {

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
}
