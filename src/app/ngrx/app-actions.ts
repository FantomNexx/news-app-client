import {Action} from '@ngrx/store';
import {IArticleModel} from './article-model';
import {APP_MODE} from './app-model';

export const UPDATE = '[IAppModel] UPDATE';

export class Update implements Action {
    readonly type = UPDATE;
    public app_mode: APP_MODE;

    constructor(app_mode: APP_MODE) {
        this.app_mode = app_mode;
    }
}// Sync


export type All = Update;
/*
    | Sync
    | Create
    | Delete
    | UpdateSelectedArticleId;
*/
