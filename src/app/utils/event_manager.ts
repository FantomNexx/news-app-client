import {EventEmitter, Injectable} from '@angular/core';


export const EVENTS_ARTICLE = {
    GET_ALL: 'ARTICLES_GET_ALL',
    GET_ALL_RESULT: 'ARTICLES_GET_ALL_RESULT',
    UPDATE: 'ARTICLE_EDIT',
    CREATE: 'ARTICLE_CREATE',
    REMOVE: 'ARTICLE_REMOVE',
};

export const EVENTS_SOURCE = {
    GET_ALL: 'SOURCES_GET_ALL',
    GET_ALL_RESULT: 'ASOURCES_GET_ALL_RESULT',
};

@Injectable({
    providedIn: 'root'
})

export class EventManagerService {

    private listeners = {};
    private subject = new EventEmitter();
    private eventObserver = this.subject.asObservable();


    constructor() {
        this.eventObserver.subscribe(({name, args}) => {

            if (this.listeners[name]) {
                for (const listener of this.listeners[name]) {
                    listener.callback(args);
                }// for
            }// if
        });

    }

    public subscribe(
        eventName: string, eventListener: any, callback: any) {

        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }// if

        let eventExist = false;
        for (const listener of this.listeners[eventName]) {

            if (listener.eventListener.constructor.name ===
                eventListener.constructor.name) {
                eventExist = true;
                break;
            }// if
        }// for

        if (!eventExist) {
            this.listeners[eventName].push({eventListener, callback});
        }// if
    }// subscribe


    public unsubscribe(
        eventName: string, eventListener: any) {

        if (this.listeners[eventName]) {
            for (let i = 0; i < this.listeners[eventName].length; i++) {

                if (this.listeners[eventName][i].eventListener.constructor.name ===
                    eventListener.constructor.name) {
                    this.listeners[eventName].splice(i, 1);
                    break;
                }// if
            }// for
        }// if
    }// unsubscribe


    emit(name: string, ...args: any[]) {
        this.subject.next({name, args});
    }
}
