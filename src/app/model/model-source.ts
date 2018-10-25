export interface IModelSource {
    _id?: string;
    name: string;
    rss_url: string;
    icon_url: string;
} // IModelSource

export class ModelSource implements IModelSource {
    _id: string;
    name: string;
    rss_url: string;
    icon_url: string;

    constructor() {
        this._id = '';
        this.name = '';
        this.rss_url = '';
        this.icon_url = '';
    }
} // ModelSource
