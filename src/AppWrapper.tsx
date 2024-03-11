/* eslint-disable @typescript-eslint/no-unused-vars */
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { SidebarProvider } from './layout/SidebarLayout/Sidebar/SidebarContext';
import { store } from './state/store';
import { themeCreator } from './themes/base';
import { getMockDecodedToken } from './utils/tokenUtils';

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export const ThemeContext = React.createContext(
  (_themeName: string): void => {}
);

export function AppWrapper() {
  const [isPreparing, setIsPreparing] = useState<boolean>(true);

  const prepare = async () => {
    if (import.meta.env.VITE_APP_IS_STRICT_MOCKS === 'yes') {
      console.info(
        '************************ USING MOCKS ************************'
      );
      const { worker } = await import('./mocks/browser');
      await worker.start();
      setIsPreparing(false);
    } else {
      setIsPreparing(false);
    }
    console.info(
      '************ SETTING SESSION STORAGE TOKEN COOKIE *************'
    );
    sessionStorage.setItem(
      `oidc.user:${import.meta.env.VITE_APP_IDP_URL}:${
        import.meta.env.VITE_APP_IDP_CLIENT_ID
      }`,
      JSON.stringify(getMockDecodedToken())
    );
  };

  useEffect(() => {
    prepare();
  }, []);

  const curThemeName = localStorage.getItem('appTheme') || 'PureLightTheme';
  const [themeName, _setThemeName] = useState(curThemeName);
  const theme = themeCreator(themeName);
  const setThemeName = (themeName: string): void => {
    localStorage.setItem('appTheme', themeName);
    _setThemeName(themeName);
  };

  return (
    <>
      {!isPreparing && (
        <React.StrictMode>
          <Provider store={store}>
            <ThemeContext.Provider value={setThemeName}>
              <ThemeProvider theme={theme}>
                <SidebarProvider>
                  <CssBaseline />
                  <BrowserRouter>
                    <App />
                  </BrowserRouter>
                </SidebarProvider>
              </ThemeProvider>
            </ThemeContext.Provider>
          </Provider>
        </React.StrictMode>
      )}
    </>
  );
}
