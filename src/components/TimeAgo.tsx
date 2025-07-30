'use client';

import { useState, useEffect } from 'react';

const formatTimeAgo = (dateTime?: string) => {
  if (!dateTime) return 'Agora';
  const now = new Date();
  const articleDate = new Date(dateTime);
  const diffInSeconds = Math.floor((now.getTime() - articleDate.getTime()) / 1000);

  if (diffInSeconds < 60) return `${diffInSeconds}s`;
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes}min`;
  if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h`;
  return `${Math.floor(diffInMinutes / 1440)}d`;
};

export default function TimeAgo({ dateTime }: { dateTime?: string }) {
  const [timeAgo, setTimeAgo] = useState(() => formatTimeAgo(dateTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeAgo(formatTimeAgo(dateTime));
    }, 1000); // Atualiza a cada segundo

    return () => clearInterval(interval);
  }, [dateTime]);

  return <>{timeAgo}</>;
}
