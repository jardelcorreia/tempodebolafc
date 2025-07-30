'use client';

import { NewsArticle } from '@/interfaces';
import { X } from 'lucide-react';

interface ArticleModalProps {
  article: NewsArticle;
  onClose: () => void;
}

export default function ArticleModal({ article, onClose }: ArticleModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">{article.title}</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          {article.image && (
            <img src={article.image} alt={article.title} className="w-full h-auto rounded-lg mb-4" />
          )}
          <p className="text-gray-700 leading-relaxed">{article.body}</p>
        </div>
      </div>
    </div>
  );
}
