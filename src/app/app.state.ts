import {IArticleModel} from './ngrx/article-model';

export interface IAppState {
    article: IArticleModel;
    articles: IArticleModel[];
    selected_artocle_id: number;
}

export interface IAppStateExtended {
    articles: IArticleModel[];
    selected_article_id: number;
}
