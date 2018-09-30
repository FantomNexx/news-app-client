import {Action} from '@ngrx/store';
import {IArticleModel} from './article-model';

export const EDIT = '[IArticleModel] EDIT';
export const CREATE = '[IArticleModel] CREATE';
export const DELETE = '[IArticleModel] DELETE';
export const UPDATE_SELECTED_ARTICLE_ID = '[IArticleModel] UPDATE SELECTED ARTICLE ID';


export class Edit implements Action {
    readonly type = EDIT;
    public payload: IArticleModel;

    constructor(payload: IArticleModel) {
        this.payload = payload;
    }
}

export class Create implements Action {
    readonly type = CREATE;
    public payload: IArticleModel;

    constructor(payload: IArticleModel) {
        this.payload = payload;
    }
}

export class Delete implements Action {
    readonly type = DELETE;
    public payload: IArticleModel;

    constructor(payload: IArticleModel) {
        this.payload = payload;
    }
}

export class UpdateSelectedArticleId implements Action {
    readonly type = UPDATE_SELECTED_ARTICLE_ID;
    public payload: number;

    constructor(payload: number) {
        this.payload = payload;
    }
}


export type All
    = Edit
    | Create
    | Delete
    | UpdateSelectedArticleId;
