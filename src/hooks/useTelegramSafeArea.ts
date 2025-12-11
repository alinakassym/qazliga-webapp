import { useState, useEffect } from 'react';
import { getTelegramWebApp, isTelegramWebApp } from '@/utils/telegram';

interface SafeAreaInsets {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export type PlatformType = 'android' | 'ios' | 'desktop' | 'web' | 'unknown';

interface SafeAreaWithPlatform extends SafeAreaInsets {
  platform: PlatformType;
  platformRaw?: string;
}

/**
 * Определяет тип платформы на основе значения от Telegram
 */
const getPlatformType = (platform?: string): PlatformType => {
  if (!platform) return 'unknown';

  const platformLower = platform.toLowerCase();

  if (platformLower === 'android') return 'android';
  if (platformLower === 'ios') return 'ios';
  if (['macos', 'tdesktop', 'unigram'].includes(platformLower)) return 'desktop';
  if (['web', 'weba', 'webk'].includes(platformLower)) return 'web';

  return 'unknown';
};

/**
 * Хук для получения safe area insets из Telegram WebApp API
 * Возвращает актуальные отступы для безопасной области + информацию о платформе
 */
export const useTelegramSafeArea = () => {
  const [safeAreaData, setSafeAreaData] = useState<SafeAreaWithPlatform>({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    platform: 'unknown',
    platformRaw: undefined,
  });

  useEffect(() => {
    if (!isTelegramWebApp()) {
      return;
    }

    const tg = getTelegramWebApp();
    if (!tg) {
      return;
    }

    const insets = tg.contentSafeAreaInset || tg.safeAreaInset;

    const platformRaw = tg.platform;
    const platform = getPlatformType(platformRaw);

    const newSafeAreaData = {
      top: insets?.top || 0,
      bottom: insets?.bottom || 0,
      left: insets?.left || 0,
      right: insets?.right || 0,
      platform,
      platformRaw,
    };

    console.log('Telegram Safe Area & Platform:', {
      platform,
      platformRaw,
      safeArea: insets,
    });

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSafeAreaData(newSafeAreaData);
  }, []);

  return safeAreaData;
};

/**
 * Хук для получения платформы
 */
export const useSafePlatform = () => {
  const safeAreaData = useTelegramSafeArea();

  return safeAreaData.platform;
};

/**
 * Хук для получения правильного paddingTop с учетом safe area
 * @param defaultPaddingTelegram - дефолтный отступ для Telegram (если safe area недоступен)
 * @param defaultPaddingWeb - дефолтный отступ для веба
 */
export const useSafePaddingTop = (defaultPaddingTelegram = 48, defaultPaddingWeb = 0) => {
  const isTelegram = isTelegramWebApp();
  const safeAreaData = useTelegramSafeArea();
  console.log('safeAreaData: ', safeAreaData);

  if (!isTelegram) {
    return defaultPaddingWeb;
  }

  return safeAreaData.top > 0 ? safeAreaData.top : defaultPaddingTelegram;
};
