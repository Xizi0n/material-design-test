

export class News {
    author: string;
    description: string;
    title: string;
    publishedAt: string;
    url: string;
    urlToImage: string;

    constructor(author: string, description: string, title: string, publishedAt: string, url: string, urlToImage: string) {
        this.author = author;
        this.description = description;
        this.title = title;
        this.publishedAt = publishedAt;
        this.url = url;
        this.urlToImage = urlToImage;
    }
}
