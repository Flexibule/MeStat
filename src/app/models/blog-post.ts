export interface BlogPost {
    title: string;
    publishedDate: Date;
    readingTime: number;
    views: number;
    reads: number;
    claps: number;
    inPublication?: boolean;
}