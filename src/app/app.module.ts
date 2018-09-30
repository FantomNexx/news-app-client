import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticlesViewComponent } from './articles-view/articles-view.component';
import { ArticleSingleViewComponent } from './article-single-view/article-single-view.component';

@NgModule({
    declarations: [
        AppComponent,
        ArticleCreateComponent,
        ArticlesViewComponent,
        ArticleSingleViewComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
