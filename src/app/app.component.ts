import {Component} from '@angular/core';
import {CmpSwitchData, CSwitchItemData} from './cmp-switcher/switcher.component';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Syncer} from './utils/syncer';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {IAppStateExtended} from './app.state';
import {RouteWatcher} from './utils/route-watcher';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    switch_data: CmpSwitchData;

    syncer: Syncer;
    rotuer_watcher: RouteWatcher;

    constructor(
        private activated_route: ActivatedRoute,
        private router: Router,
        private http: HttpClient,
        private store: Store<IAppStateExtended>) {

        this.syncer = new Syncer(http, store);
        this.rotuer_watcher = new RouteWatcher(activated_route, router, store);

        this.initSwitchData();
    }// constructor

    initSwitchData() {
        this.switch_data = new CmpSwitchData();

        this.switch_data.label = 'App Mode';

        this.switch_data.items.push(
            new CSwitchItemData(
                'Home', '/', false
            ));

        this.switch_data.items.push(
            new CSwitchItemData(
                'View', '/view', false
            ));
        this.switch_data.items.push(
            new CSwitchItemData(
                'Edit', '/edit', false
            ));
    }// initSwitchData

}// AppComponent

