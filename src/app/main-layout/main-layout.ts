import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouteWatcher} from '../utils/route-watcher';
import {Model} from '../model/model';
import {EVENTS_ARTICLE, EventManagerService, EVENTS_SOURCE} from '../utils/event_manager';
import {IArticleModel} from '../ngrx/article-model';

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.html',
    styleUrls: ['./main-layout.css']
})
export class MainLayoutComponent implements OnInit, OnDestroy {

    route_watcher: RouteWatcher;

    public articles: IArticleModel[];

    constructor(
        private _route_watcher: RouteWatcher,
        private model: Model,
        private event_manager: EventManagerService) {

        this.route_watcher = _route_watcher;

        event_manager.subscribe(
            EVENTS_ARTICLE.GET_ALL_RESULT, this,
            (args: any) => this.OnArticlesGetAll(args[0].articles));
    }// constructor


    ngOnDestroy(): void {
        this.event_manager.unsubscribe(EVENTS_ARTICLE.GET_ALL_RESULT, this);
    }// ngOnDestroy


    OnArticlesGetAll(articles) {
       console.log(articles);
    }// OnArticlesGetAll


    ngOnInit() {
        // this.event_manager.emit(EVENTS_ARTICLE.GET_ALL);
        this.event_manager.emit(EVENTS_SOURCE.GET_ALL);
    }// ngOnInit

}// MainLayoutComponent
