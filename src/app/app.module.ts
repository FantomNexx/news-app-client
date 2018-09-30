import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ArticleCrudFormComponent} from './cmp-article-crud-from/cmp-article-crud-form';
import {ArticlesListComponent} from './cmp-articles-list/cmp-articles-list';
import {ArticleListItemComponent} from './cmp-article-listitem/cmp-article-listitem';

import {ArticlesReducer} from './ngrx/articles-reducer';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
    declarations: [
        AppComponent,
        ArticleCrudFormComponent,
        ArticlesListComponent,
        ArticleListItemComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        StoreModule.forRoot({
            articles:
            ArticlesReducer,
        }),
        StoreDevtoolsModule.instrument({maxAge: 10})
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
