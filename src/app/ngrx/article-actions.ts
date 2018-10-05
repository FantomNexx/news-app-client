import {Action} from '@ngrx/store';
import {IArticleModel} from './article-model';

export const SYNC = '[IArticleModel] SYNC';
export const EDIT = '[IArticleModel] UPDATE';
export const CREATE = '[IArticleModel] CREATE';
export const DELETE = '[IArticleModel] REMOVE';
export const UPDATE_SELECTED_ARTICLE_ID = '[IArticleModel] UPDATE SELECTED ARTICLE ID';



export class Sync implements Action {
    readonly type = SYNC;
    public payload: IArticleModel[];

    constructor(payload: IArticleModel[]) {
        this.payload = payload;
    }
}// Sync

export class Edit implements Action {
    readonly type = EDIT;
    public payload: IArticleModel;

    constructor(payload: IArticleModel) {
        this.payload = payload;
    }
}// Edit

export class Create implements Action {
    readonly type = CREATE;
    public payload: IArticleModel;

    constructor(payload: IArticleModel) {
        this.payload = payload;
    }
}// Create

export class Delete implements Action {
    readonly type = DELETE;
    public payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }
}// Delete

export class UpdateSelectedArticleId implements Action {
    readonly type = UPDATE_SELECTED_ARTICLE_ID;
    public payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }
}// UpdateSelectedArticleId


export type All
    = Edit
    | Sync
    | Create
    | Delete
    | UpdateSelectedArticleId;
