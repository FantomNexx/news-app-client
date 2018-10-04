export interface IArticleModel {
    _id?: string;
    author: string;
    title: string;
    created: string;
    content: string;
    content_raw?: string;
}

export class ArticleModel implements IArticleModel {
    _id: string;
    title: string;
    author: string;
    created: string;
    content: string;
    content_raw: string;

    constructor() {
        this._id = '';
        this.author = '';
        this.title = '';
        this.created = '';
        this.content = '';
        this.content_raw = '';
    }
}
