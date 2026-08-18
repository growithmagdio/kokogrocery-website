import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  category?: string;
}

const DEFAULT_FALLBACKS: Record<string, string> = {
  rice: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop',
  spices: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop',
  pulses: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop',
  millets: 'https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?q=80&w=800&auto=format&fit=crop',
  coffee: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
  default: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800&auto=format&fit=crop',
};

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = 'KOKO Global Export Product',
  fallbackSrc,
  category,
  className = '',
  ...props
}) => {
  const getInitialFallback = () => {
    if (fallbackSrc) return fallbackSrc;
    if (category && DEFAULT_FALLBACKS[category.toLowerCase()]) {
      return DEFAULT_FALLBACKS[category.toLowerCase()];
    }
    return DEFAULT_FALLBACKS.default;
  };

  const [imgSrc, setImgSrc] = useState<string>(src || getInitialFallback());
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(getInitialFallback());
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={className}
      loading="lazy"
      {...props}
    />
  );
};
