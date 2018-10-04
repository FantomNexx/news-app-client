import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IAppStateExtended} from '../app.state';
import {APP_MODE, APP_MODE_PAGES} from '../ngrx/app-model';


export interface ISwitchItemData {
    text: string;
    url: string;
    selected: boolean;
}// ISwitchItemData

export class CSwitchItemData implements ISwitchItemData {

    text: string;
    url: string;
    selected: boolean;

    constructor(obj: ISwitchItemData);
    constructor(text: string, url: string, selected: boolean);
    constructor() {
        if (arguments.length === 1) {
            this.text = arguments[0].a;
            this.url = arguments[0].b;
            this.selected = arguments[0].c;
        } else {
            this.text = arguments[0];
            this.url = arguments[1];
            this.selected = arguments[2];
        }
    }
}// CSwitchItemData


export class CmpSwitchData {
    public label: string;
    public items: CSwitchItemData[];

    constructor() {
        this.label = '';
        this.items = [] as CSwitchItemData[];
    }

}// CSwitchItemData

@Component({
    selector: 'app-switcher',
    templateUrl: './switcher.component.html',
    styleUrls: ['./switcher.component.css']
})

export class SwitcherComponent implements OnInit {

    app_mode: APP_MODE;

    @Input() switch_data_input;

    constructor(private store: Store<IAppStateExtended>) {
        this.app_mode = APP_MODE.UNKNOWN;

        this.store.select(
            value => value['app_reducer'].app_mode).subscribe(
            app_mode => this.setAppState(app_mode));
    }// constructor

    ngOnInit() {
        this.updateSwitcherState();
    }// ngOnInit


    updateSwitcherState() {

        if (!this.switch_data_input) {
            return;
        }

        const curren_url = APP_MODE_PAGES[this.app_mode];

        for (const item of this.switch_data_input.items) {
            item.selected = false;
            if (item.url.localeCompare(curren_url) === 0) {
                item.selected = true;
            }// if
        }// for
    }


    setAppState(app_mode) {
        this.app_mode = app_mode;
        this.updateSwitcherState();
    }// setAppState

    onItemClick(_item: CSwitchItemData) {
        return;

        for (const item of this.switch_data_input.items) {
            item.selected = false;
        }

        for (const item of this.switch_data_input.items) {
            if (_item.text.localeCompare(item.text) === 0) {
                item.selected = true;
            }
        }
    }// onItemClick
}
