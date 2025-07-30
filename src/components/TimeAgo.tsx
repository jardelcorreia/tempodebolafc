'use client';

import { useState, useEffect } from 'react';

interface TimeAgoProps {
  dateTime?: string;
}

const formatTimeAgo = (dateTime?: string) => {
  if (!dateTime) return 'Agora';
  const now = new Date();
  const articleDate = new Date(dateTime);
  const diffInMinutes = Math.floor((now.getTime() - articleDate.getTime()) / (1000 * 60));

  if (diffInMinutes < 60) return `${diffInMinutes}min`;
  if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h`;
  return `${Math.floor(diffInMinutes / 1440)}d`;
};

export default function TimeAgo({ dateTime }: TimeAgoProps) {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    setTimeAgo(formatTimeAgo(dateTime));
    const interval = setInterval(() => {
      setTimeAgo(formatTimeAgo(dateTime));
    }, 60000); // Update every minute
    return () => clearInterval(interval);
  }, [dateTime]);

  return <span>{timeAgo}</span>;
}
