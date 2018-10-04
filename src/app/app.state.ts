import {IArticleModel} from './ngrx/article-model';

export interface IAppStateExtended {
    articles: IArticleModel[];
    selected_article_id: string;
}
