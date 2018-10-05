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
        case ArticleActions.CREATE:
            return onCreate(state, action);

        case ArticleActions.EDIT:
            return onEdit(state, action);

        case ArticleActions.DELETE:
            return onDelete(state, action);

        case ArticleActions.SYNC:
            return onSync(state, action);

        case ArticleActions.UPDATE_SELECTED_ARTICLE_ID:
            return onUpdateSelectedArticle(state, action);

        default:
            return state;
    }// switch
}// ArticlesReducer


function onCreate(sate: IAppStateExtended, action: Actions): IAppStateExtended {

    const article_new: IArticleModel = <IArticleModel>action.payload;

    const articles: IArticleModel[] =
        sate.articles.map(article => {
            return article;
        });

    articles.push(article_new);

    return newState(sate, {articles});
}// onEdit


function onEdit(sate: IAppStateExtended, action: Actions): IAppStateExtended {

    const article_new: IArticleModel = <IArticleModel>action.payload;

    const articles: IArticleModel[] =
        sate.articles.map(article => {

            if (article._id !== article_new._id) {
                return article;
            }// if

            article = article_new;
            return article;
        });

    return newState(sate, {articles});
}// onEdit


function onDelete(sate: IAppStateExtended, action: Actions): IAppStateExtended {

    const article_id_to_remove: string = <string>action.payload;

    const articles: IArticleModel[] =
        sate.articles.filter(article => {
            if (article._id === article_id_to_remove) {
                return false;
            }// if

            return true;
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


