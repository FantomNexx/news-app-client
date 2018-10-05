import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {IAppStateExtended} from '../app.state';
import {APP_MODE, APP_PAGES} from '../ngrx/app-model';
import * as AppActions from '../ngrx/app-actions';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class RouteWatcher {
    public APP_MODE = APP_MODE;
    public app_mode: number;

    constructor(
        private activated_route: ActivatedRoute,
        private router: Router,
        private store: Store<IAppStateExtended>) {

        this.app_mode = APP_MODE.HOME;

        router.events.subscribe((event) => {
            this.onRouteChange(event);
        });

        activated_route.paramMap.subscribe(
            params => {
                this.onRouteParams(params);
            }
        );
    }// constructor

    onRouteParams(params) {
        // console.log(this.activated_route.url);
        // console.log(params.get('param_name'));
    }

    onRouteChange(event) {
        if (event instanceof NavigationEnd) {
            // console.log('revents', event);

            switch (event.urlAfterRedirects) {
                case APP_PAGES.HOME:
                    this.app_mode = APP_MODE.HOME;
                    break;
                case APP_PAGES.VIEW:
                    this.app_mode = APP_MODE.VIEW;
                    break;
                case APP_PAGES.EDIT:
                    this.app_mode = APP_MODE.EDIT;
                    break;
            }// switch

            this.store.dispatch(new AppActions.Update(this.app_mode));
            // console.log(this.app_mode);
        }// if
    }// onRouteChange

}// RouteWatcher

