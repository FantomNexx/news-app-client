export interface IArticleModel {
    id?: number;
    author: string;
    title: string;
    created: string;
    content: string;
    content_raw?: string;
}

export class ArticleModel implements IArticleModel {
    id: number;
    title: string;
    author: string;
    created: string;
    content: string;
    content_raw: string;

    constructor() {
        this.id = -1;
        this.author = '';
        this.title = '';
        this.created = '';
        this.content = '';
        this.content_raw = '';
    }
}
