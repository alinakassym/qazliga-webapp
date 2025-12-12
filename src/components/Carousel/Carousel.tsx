import type { FC } from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Box, IconButton } from '@mui/material';

interface CarouselItem {
  id: string;
  image: string;
  alt?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlayInterval?: number;
}

const Carousel: FC<CarouselProps> = ({ items, autoPlayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  // Aspect ratio: 113:360 (height:width)
  const aspectRatio = 113 / 360;

  // Create extended items array with clones for infinite effect
  // [last, ...items, first]
  const extendedItems = items.length > 0 ? [items[items.length - 1], ...items, items[0]] : [];

  const goToNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  }, []);

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(index + 1);
  };

  // Handle infinite loop reset
  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(items.length);
      }, 300);
    } else if (currentIndex === extendedItems.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 300);
    }
  }, [currentIndex, items.length, extendedItems.length]);

  // Auto-play
  useEffect(() => {
    if (autoPlayInterval > 0) {
      timeoutRef.current = window.setTimeout(() => {
        goToNext();
      }, autoPlayInterval);

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, [currentIndex, autoPlayInterval, goToNext]);

  if (items.length === 0) {
    return null;
  }

  // Calculate the actual index for indicators (without clones)
  const getActualIndex = () => {
    if (currentIndex === 0) return items.length - 1;
    if (currentIndex === extendedItems.length - 1) return 0;
    return currentIndex - 1;
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        paddingBottom: `${aspectRatio * 100}%`,
        overflow: 'hidden',
        backgroundColor: theme => theme.palette.surface,
        borderRadius: 2,
      }}
    >
      {/* Images */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          transition: isTransitioning ? 'transform 0.3s ease-in-out' : 'none',
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {extendedItems.map((item, index) => (
          <Box
            key={`${item.id}-${index}`}
            sx={{
              minWidth: '100%',
              height: '100%',
              position: 'relative',
            }}
          >
            <Box
              component="img"
              src={item.image}
              alt={item.alt || 'Carousel image'}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Indicators */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 12,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1,
          zIndex: 10,
        }}
      >
        {items.map((item, index) => {
          const actualIndex = getActualIndex();
          const isActive = index === actualIndex;

          return (
            <IconButton
              key={item.id}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              sx={{
                width: isActive ? 24 : 8,
                height: 8,
                minWidth: 'auto',
                borderRadius: 1,
                padding: 0,
                backgroundColor: theme =>
                  isActive ? theme.palette.primary.main : theme.palette.divider,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: theme =>
                    isActive ? theme.palette.primary.dark : theme.palette.action.hover,
                },
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Carousel;
