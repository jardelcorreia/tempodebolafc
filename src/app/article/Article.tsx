'use client';

import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Article() {
  const searchParams = useSearchParams();
  const url = searchParams.get('url');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {url ? (
          <iframe src={url} className="w-full h-screen border-none" />
        ) : (
          <div className="text-center py-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              URL do artigo não encontrada
            </h3>
            <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
              Não foi possível carregar o artigo.
            </p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
