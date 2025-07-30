'use client';

import { Suspense } from 'react';
import Article from './Article';

export default function ArticlePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Article />
    </Suspense>
  );
}
