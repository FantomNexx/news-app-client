import {Component, Input, OnInit} from '@angular/core';


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

    @Input() switch_data_input;

    constructor() {
    }

    ngOnInit() {
    }

    onItemClick(_item: CSwitchItemData) {

        for (let item of this.switch_data_input.items) {
            item.selected = false;
        }

        for (let item of this.switch_data_input.items) {
            if (_item.text.localeCompare(item.text) === 0) {
                item.selected = true;
            }
        }
    }// onItemClick
}
