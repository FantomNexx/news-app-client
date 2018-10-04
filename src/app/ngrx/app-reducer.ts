import * as Actions from './app-actions';
import {APP_MODE, IAppModel} from './app-model';

export type AppActions = Actions.All;

const default_state: IAppModel = {
    app_mode: APP_MODE.HOME
};


export function AppReducer(
    state: IAppModel = default_state, action: AppActions): IAppModel {

    switch (action.type) {
        case Actions.UPDATE:
            return onUpdate(state, action);

        default:
            return state;
    }// switch
}// ArticlesReducer


const newState = (state, new_data) => {
    return Object.assign({}, state, new_data);
};


function onUpdate(state: IAppModel, action: AppActions) {
    console.log(action.app_mode);
    return newState(state, {app_mode: action.app_mode});
}// onUpdate



