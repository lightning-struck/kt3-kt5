'use client';

import type { ThemeProviderProps } from 'next-themes';

import * as React from 'react';
import { HeroUIProvider } from '@heroui/system';
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { DislikeStoreProvider } from '@/app/shared/core/providers/dislikeProvider';
import { FavoriteStoreProvider } from '@/app/shared/core/providers/favoriteProvider';
import { SortStoreProvider } from '@/app/shared/core/providers/sortProvider';
import { BasketStoreProvider } from '@/app/shared/core/providers/basketProvider';
import { UserStoreProvider, useUserStore } from './shared/core/providers/userProvider';
import { useLocalStorage } from './shared/hooks/useLocalStorage';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module '@react-types/shared' {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>['push']>[1]>;
  }
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();


  return (
    <HeroUIProvider navigate={router.push}>
    {/* <NextThemesProvider {...themeProps}> */}
      <UserStoreProvider>
        <DislikeStoreProvider>
          <FavoriteStoreProvider>
            <BasketStoreProvider>
              <SortStoreProvider>
                {children}
              </SortStoreProvider>
            </BasketStoreProvider>
          </FavoriteStoreProvider>
        </DislikeStoreProvider>
      </UserStoreProvider>
      {/* </NextThemesProvider> */}
    </HeroUIProvider>
  );
}
