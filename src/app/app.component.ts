import {Component, OnInit} from '@angular/core';
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

export class AppComponent implements OnInit {

    switch_data: CmpSwitchData;
    route_watcher: RouteWatcher;

    constructor(
        private _route_watcher: RouteWatcher,
        private syncer: Syncer) {

        this.route_watcher = _route_watcher;
    }// constructor

    ngOnInit() {
        // this.syncer.getArticles();
        this.initSwitchData();
    }// ngOnInit


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

