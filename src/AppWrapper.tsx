import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { store } from './state/store';
import { defaultTheme } from './themes/defaultTheme';
import { getMockDecodedToken } from './utils/tokenUtils';

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

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

  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme(
        deepmerge(
          {
            palette: {
              mode,
            },
          },
          defaultTheme
        )
      ),
    [mode]
  );

  return (
    <>
      {!isPreparing && (
        <React.StrictMode>
          <Provider store={store}>
            <ColorModeContext.Provider value={colorMode}>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </ThemeProvider>
            </ColorModeContext.Provider>
          </Provider>
        </React.StrictMode>
      )}
    </>
  );
}
