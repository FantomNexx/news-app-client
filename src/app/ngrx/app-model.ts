export enum APP_MODE {
    UNKNOWN = 0,
    HOME = 1,
    VIEW,
    EDIT,
    LAYOUT,
}

export const APP_PAGES = {
    HOME: '/',
    VIEW: '/view',
    EDIT: '/edit',
    LAYOUT: '/layout',
};


export const APP_MODE_PAGES = [];
APP_MODE_PAGES[APP_MODE.UNKNOWN] = '';
APP_MODE_PAGES[APP_MODE.HOME] = APP_PAGES.HOME;
APP_MODE_PAGES[APP_MODE.VIEW] = APP_PAGES.VIEW;
APP_MODE_PAGES[APP_MODE.EDIT] = APP_PAGES.EDIT;
APP_MODE_PAGES[APP_MODE.LAYOUT] = APP_PAGES.LAYOUT;

export interface IAppModel {
    app_mode: APP_MODE;
}
