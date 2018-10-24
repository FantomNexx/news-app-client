import {Component, OnInit} from '@angular/core';
import {RouteWatcher} from '../utils/route-watcher';
import {Syncer} from '../utils/syncer';

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

    route_watcher: RouteWatcher;

    constructor(
        private _route_watcher: RouteWatcher,
        private syncer: Syncer) {

        this.route_watcher = _route_watcher;
    }// constructor

    ngOnInit() {
        console.log('MainLayoutComponent OnInit');
        // this.syncer.getArticles();
    }// ngOnInit

}// MainLayoutComponent
