'use client';

import { useState } from 'react';
import { Clock, ExternalLink, Share2, Bookmark, Eye, MessageCircle, Heart } from 'lucide-react';
import { NewsArticle } from '@/interfaces';
interface NewsCardProps {
  article: NewsArticle;
  index: number;
  variant?: 'default' | 'featured' | 'compact';
  timeAgo: string;
}

export default function NewsCard({ article, index, variant = 'default', timeAgo }: NewsCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.body.substring(0, 100) + '...',
          url: article.url,
        });
      } catch (error) {
        console.log('Erro ao compartilhar:', error);
      }
    } else {
      // Fallback para copiar URL
      navigator.clipboard.writeText(article.url);
      // Aqui você poderia mostrar uma notificação de "URL copiada"
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'featured':
        return 'md:col-span-2 lg:col-span-2';
      case 'compact':
        return 'lg:col-span-1';
      default:
        return '';
    }
  };

  return (
    <article
      className={`group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-emerald-200/50 hover:-translate-y-2 ${getVariantClasses()}`}
      style={{
        animationDelay: `${index * 150}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      {/* Image Section - Only for featured variant or if image exists */}
      {(variant === 'featured' || article.image) && (
        <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-blue-50">
          {article.image ? (
            <div className="relative h-48 md:h-56">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ) : (
            <div className="h-48 md:h-56 bg-gradient-to-br from-emerald-100 via-blue-50 to-purple-50 flex items-center justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">⚽</span>
              </div>
            </div>
          )}
        </div>
      )}

      <div className={`p-6 ${variant === 'featured' ? 'lg:p-8' : ''}`}>
        {/* Header with source and time */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-800 border border-emerald-200/50">
              {article.source?.title || "Tempo de Bola"}
            </span>
            {variant === 'featured' && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 animate-pulse">
                🔥 Destaque
              </span>
            )}
          </div>
          <div className="flex items-center text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
            <Clock className="w-3 h-3 mr-1" />
            <span>{timeAgo}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className={`font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-300 leading-tight ${
          variant === 'featured' ? 'text-2xl lg:text-3xl mb-4' : 'text-lg lg:text-xl'
        }`}>
          {article.title}
        </h2>

        {/* Body */}
        <p className={`text-gray-600 mb-6 leading-relaxed ${
          variant === 'featured' ? 'text-base line-clamp-4' : 'text-sm line-clamp-3'
        }`}>
          {article.body}
        </p>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center font-semibold bg-gradient-to-r from-emerald-500 to-blue-500 text-white hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl rounded-xl ${
              variant === 'featured' ? 'px-6 py-3 text-base' : 'px-4 py-2 text-sm'
            }`}
          >
            Leia mais
            <ExternalLink className={`ml-2 ${variant === 'featured' ? 'w-5 h-5' : 'w-4 h-4'}`} />
          </a>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full text-gray-400 hover:text-emerald-500 hover:bg-emerald-50 transition-all duration-200 transform hover:scale-110"
              title="Compartilhar"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-2 rounded-full transition-all duration-200 transform hover:scale-110 ${
                isBookmarked
                  ? 'text-blue-500 bg-blue-50'
                  : 'text-gray-400 hover:text-blue-500 hover:bg-blue-50'
              }`}
              title="Salvar"
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-2 rounded-full transition-all duration-200 transform hover:scale-110 ${
                isLiked
                  ? 'text-red-500 bg-red-50'
                  : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
              }`}
              title="Curtir"
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Hover overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
    </article>
  );
}
