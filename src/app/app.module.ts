import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {RouterModule} from '@angular/router';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppComponent} from './app.component';
import {ArticleCrudFormComponent} from './article-components/cmp-article-crud-from/cmp-article-crud-form';
import {ArticleListComponent} from './article-components/cmp-article-list/cmp-article-list';
import {ArticleListItemComponent} from './article-components/cmp-article-listitem/cmp-article-listitem';
import {SwitcherComponent} from './cmp-switcher/switcher.component';
import {ArticleViewerComponent} from './article-components/cmp-article-viewer/cmp-article-viewer';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {ArticlesReducer} from './ngrx/articles-reducer';
import {AppReducer} from './ngrx/app-reducer';


@NgModule({
    declarations: [
        AppComponent,
        ArticleListComponent,
        ArticleListItemComponent,
        ArticleViewerComponent,
        ArticleCrudFormComponent,
        PageNotFoundComponent,
        SwitcherComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        StoreModule.forRoot({
            articles_reducer: ArticlesReducer,
            app_reducer: AppReducer,
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
