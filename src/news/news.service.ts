import { CreateNewsDto } from './create.news.dto';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

export interface News {
  id?: number;
  title: string;
  description: string;
  author: string;
  countView?: number;
}

function getRendomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
}

@Injectable()
export class NewsService {
  private readonly news: News[] = [
    {
      id: 1,
      title: 'Моя первая новость',
      description: 'Урраааа моя первая новость',
      author: 'Яго',
      countView: 15,
    },
  ];

  getAllNews(): News[] {
    return this.news;
  }

  find(id: News['id']): News | undefined {
    return this.news.find((news) => news.id === id);
  }

  create(news: CreateNewsDto) {
    const newId = getRendomInt(0, 10000);

    const newNews: News = {
      ...news,
      id: newId,
    } as any as News;

    this.news.push(newNews);
    return newNews;
  }

  remove(id: number): boolean {
    const indexRemuveNews = this.news.findIndex((news) => news.id === id);
    if (indexRemuveNews !== -1) {
      this.news.splice(indexRemuveNews, 1);
      return true;
    }

    return false;
  }
}
