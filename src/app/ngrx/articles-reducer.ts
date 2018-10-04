import * as ArticleActions from './article-actions';
import {IArticleModel} from './article-model';
import {IAppStateExtended} from '../app.state';


export type Actions = ArticleActions.All;


const default_state: IAppStateExtended = {
    articles: [],
    selected_article_id: ''
};


const newState = (state, new_data) => {
    return Object.assign({}, state, new_data);
};


export function ArticlesReducer(
    state: IAppStateExtended = default_state, action: Actions): IAppStateExtended {

    switch (action.type) {
        case ArticleActions.EDIT:
            return onEdit(state, action);

        case ArticleActions.SYNC:
            return onSync(state, action);

        case ArticleActions.UPDATE_SELECTED_ARTICLE_ID:
            return onUpdateSelectedArticle(state, action);

        default:
            return state;
    }// switch
}// ArticlesReducer


function onEdit(sate: IAppStateExtended, action: Actions): IAppStateExtended {
    const articles: IArticleModel[] =
        sate.articles.map(article => {

            const article_new: IArticleModel = <IArticleModel>action.payload;

            if (article._id !== article_new._id) {
                return article;
            }// if

            article = article_new;
            return article;
        });

    return newState(sate, {articles});
}// onEdit


function onUpdateSelectedArticle(sate: IAppStateExtended, action: Actions): IAppStateExtended {
    return newState(sate, {selected_article_id: action.payload});
}// onUpdateSelectedArticles

function onSync(sate: IAppStateExtended, action: Actions): IAppStateExtended {
    const new_articles: IArticleModel[] = <IArticleModel[]>action.payload;
    return newState(sate, {articles: new_articles});
}// IAppStateExtended


