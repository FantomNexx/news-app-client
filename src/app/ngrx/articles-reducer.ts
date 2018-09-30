import * as ArticleActions from './article-actions';
import {IArticleModel} from './article-model';
import {IAppStateExtended} from '../app.state';


export type Actions = ArticleActions.All;


const article1: IArticleModel = {
    id: 0,
    author: 'Bryan Bishop',
    title: 'Everything coming to Netflix, Amazon Prime, and HBO Now in October',
    content: 'Netflix bets on horror with Apostle, Hill House, and Chilling Adventures of Sabrina',
    created: '2018/08/29'
};
const article2: IArticleModel = {
    id: 1,
    author: 'Rachel Becker',
    title: 'Watch these scientists discover a new fish, but miss the giant shark swimming by',
    content: '‘Look at the shark!’',
    created: '2018/09/30'
};


const default_state: IAppStateExtended = {
    articles: [article1, article2],
    selected_article_id: 0
};


const newState = (state, new_data) => {
    return Object.assign({}, state, new_data);
};

export function ArticlesReducer(
    state: IAppStateExtended = default_state, action: Actions) {

    switch (action.type) {

        case ArticleActions.EDIT:
            const article: IArticleModel = action.payload;
            state.articles[article.id] = article;
            console.log('edited: ', article.id, '  ', state.articles[article.id]);
            return newState(state, {articles: state.articles});

        case ArticleActions.UPDATE_SELECTED_ARTICLE_ID:
            state.selected_article_id = action.payload;
            return state;
            // return newState(state, {selected_article_id: state.selected_article_id});

        default:
            return state;
    }
}
