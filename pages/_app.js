import { AuthProvider } from '../lib/auth';
import { CSSReset, ThemeProvider } from '@chakra-ui/react';
import customTheme from '../styles/theme';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <AuthProvider>
        <CSSReset />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
