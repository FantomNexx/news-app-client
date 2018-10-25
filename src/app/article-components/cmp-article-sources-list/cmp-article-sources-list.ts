import {Component, OnDestroy, OnInit} from '@angular/core';
import {Model} from '../../model/model';
import {EventManagerService, EVENTS_ARTICLE, EVENTS_SOURCE} from '../../utils/event_manager';
import {IModelSource} from '../../model/model-source';

@Component({
    selector: 'app-article-sources-list',
    templateUrl: './cmp-article-sources-list.html',
    styleUrls: ['./cmp-article-sources-list.css']
})
export class CmpArticleSourcesListComponent implements OnInit, OnDestroy {

    public sources: IModelSource[];

    constructor(private model: Model,
                private event_manager: EventManagerService) {

        event_manager.subscribe(
            EVENTS_SOURCE.GET_ALL_RESULT, this,
            (args: any) => this.OnSourcesGetAll(args[0].sources));
    }// constructor

    ngOnInit() {
    }


    OnSourcesGetAll(sources) {
        this.sources = sources;
    }// OnSourcesGetAll

    ngOnDestroy(): void {
        this.event_manager.unsubscribe(EVENTS_ARTICLE.GET_ALL_RESULT, this);
    }// ngOnDestroy


}
