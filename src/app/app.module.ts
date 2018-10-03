import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ArticleCrudFormComponent} from './cmp-article-crud-from/cmp-article-crud-form';
import {ArticlesListComponent} from './cmp-articles-list/cmp-articles-list';
import {ArticleListItemComponent} from './cmp-articles-list/cmp-article-listitem/cmp-article-listitem';

import {ArticlesReducer} from './ngrx/articles-reducer';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { SwitcherComponent } from './switcher/switcher.component';
import { ArticleViewerComponent } from './cmp-article-viewer/cmp-article-viewer';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
        ArticleCrudFormComponent,
        ArticlesListComponent,
        ArticleListItemComponent,
        SwitcherComponent,
        ArticleViewerComponent,
        PageNotFoundComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        StoreModule.forRoot({
            articles_reducer:
            ArticlesReducer,
        }),
        RouterModule.forRoot([
            {path: '', component: AppComponent},
            {path: 'edit', component: AppComponent},
            {path: 'view', component: AppComponent},
            {path: '**', component: PageNotFoundComponent},
        ]),
        StoreDevtoolsModule.instrument({maxAge: 10})
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
