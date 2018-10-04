import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';


export enum SYNC_STATE {
    IDLE = 1,
    WAITING_FOR_RESPONSE
}

@Component({
    selector: 'app-cmp-articles-syncer',
    templateUrl: './articles-syncer.component.html',
    styleUrls: ['./articles-syncer.component.css']
})

export class ArticlesSyncerComponent implements OnInit {

    sync_state: SYNC_STATE;
    articles: Array<any>;

    btn_label: string;
    btn_sync: string;
    btn_is_disabled: boolean;

    constructor(private http: HttpClient) {
        this.articles = [];
        this.setSyncState(SYNC_STATE.IDLE);
    }// constructor

    ngOnInit() {
        // this.getArticles();
    }

    setSyncState(new_state: SYNC_STATE) {
        this.sync_state = new_state;

        switch (this.sync_state) {
            case SYNC_STATE.IDLE:
                this.btn_sync = 'Sync';
                this.btn_label = 'Idle';
                this.btn_is_disabled = false;
                break;
            case SYNC_STATE.WAITING_FOR_RESPONSE:
                this.btn_sync = 'Sync...';
                this.btn_label = 'Waiting for response...';
                this.btn_is_disabled = true;
                break;
        }// switch
    }// setSyncState


    onBtnClick() {
        if (this.btn_is_disabled) {
            return;
        }// if

        this.getArticles();
    }// onBtnClick


    onGetArticlesSuccess(articles) {
        this.setSyncState(SYNC_STATE.IDLE);
        this.articles = articles;
        console.log(articles);
    }// onGetArticlesSuccess

    onGetArticlesError(error) {
        this.setSyncState(SYNC_STATE.IDLE);
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

        this.setSyncState(SYNC_STATE.WAITING_FOR_RESPONSE);

        this.http.get(url, config).subscribe(
            data => this.onGetArticlesSuccess(data),
            error => this.onGetArticlesError(error));
    }// getArticles

}// ArticlesSyncerComponent
