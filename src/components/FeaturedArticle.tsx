import { NewsArticle } from '@/interfaces';
import { Calendar, MessageSquareText } from 'lucide-react';
import TimeAgo from './TimeAgo';

interface FeaturedArticleProps {
  article: NewsArticle;
  commentary: string;
}

export default function FeaturedArticle({ article, commentary }: FeaturedArticleProps) {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-8 md:p-12 mb-20 shadow-2xl overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Image */}
        <div className="relative h-80 rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-red-600 text-white animate-pulse">
            Artigo em Destaque
          </span>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center space-x-4 mb-3 text-gray-400">
            <span className="font-semibold text-emerald-400">{article.source.title}</span>
            <span>&bull;</span>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1.5" />
              <TimeAgo dateTime={article.dateTime} />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            {article.title}
          </h2>
          <p className="text-gray-300 mb-6 line-clamp-3">
            {article.body}
          </p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 font-semibold hover:underline"
          >
            Leia a notícia original &rarr;
          </a>
        </div>
      </div>

      {/* Commentary Section */}
      <div className="mt-8 md:mt-12 pt-8 border-t border-gray-700">
        <h3 className="text-2xl font-bold mb-4 flex items-center">
          <MessageSquareText className="w-7 h-7 mr-3 text-emerald-400" />
          Nossa Análise
        </h3>
        <div className="prose prose-invert max-w-none text-gray-300">
          <p>{commentary}</p>
        </div>
      </div>
    </section>
  );
}
