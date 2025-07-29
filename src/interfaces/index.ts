export interface NewsArticle {
  uri: string;
  title: string;
  body: string;
  url: string;
  source?: {
    title: string;
  };
  dateTime?: string;
  image?: string;
}
