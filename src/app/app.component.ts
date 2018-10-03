import {Component} from '@angular/core';
import {CmpSwitchData, CSwitchItemData} from './switcher/switcher.component';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';


export enum APP_MODES {
    VIEW = 1,
    EDIT,
    HOME,
    UNKNOWN
}

export class CAPPMDOES {
    public appModes = APP_MODES;
}

const PAGES = {
    HOME: '/',
    VIEW: '/view',
    EDIT: '/edit',
};

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public app_modes = APP_MODES;

    switch_data: CmpSwitchData;
    app_mode: APP_MODES;

    constructor(private route: ActivatedRoute, private router: Router) {

        this.app_mode = APP_MODES.HOME;

        router.events.subscribe((event) => {
            this.onRouteChange(event);
        });

        this.route.paramMap.subscribe(
            params => {
                this.onRouteParams(params);
            }
        );

        this.initSwitchData();
    }

    onRouteParams(params) {
        // console.log(this.route.url);
        // console.log(params.get('param_name'));
    }

    onRouteChange(event) {
        if (event instanceof NavigationEnd) {
            console.log('revents', event);

            switch (event.urlAfterRedirects) {
                case PAGES.HOME:
                    this.app_mode = APP_MODES.HOME;
                    break;
                case PAGES.VIEW:
                    this.app_mode = APP_MODES.VIEW;
                    break;
                case PAGES.EDIT:
                    this.app_mode = APP_MODES.EDIT;
                    break;
            }
            console.log(this.app_mode);
        }
    }// onRouteChange

    initSwitchData() {
        this.switch_data = new CmpSwitchData();

        this.switch_data.label = 'App Mode';

        this.switch_data.items.push(
            new CSwitchItemData(
                'View', '/view', true
            ));
        this.switch_data.items.push(
            new CSwitchItemData(
                'Edit', '/edit', false
            ));
    }// initSwitchData


}// AppComponent

