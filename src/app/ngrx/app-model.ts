export enum APP_MODE {
    UNKNOWN = 0,
    HOME = 1,
    VIEW,
    EDIT,
}

export const APP_PAGES = {
    HOME: '/',
    VIEW: '/view',
    EDIT: '/edit',
};


export const APP_MODE_PAGES = [];
APP_MODE_PAGES[APP_MODE.UNKNOWN] = '';
APP_MODE_PAGES[APP_MODE.HOME] = APP_PAGES.HOME;
APP_MODE_PAGES[APP_MODE.VIEW] = APP_PAGES.VIEW;
APP_MODE_PAGES[APP_MODE.EDIT] = APP_PAGES.EDIT;

export interface IAppModel {
    app_mode: APP_MODE;
}
