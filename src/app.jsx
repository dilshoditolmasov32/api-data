/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';
// ----------------------------------------------------------------------

// import { Route, Routes } from 'react-router-dom';
// import LoginPage from './pages/login';
export default function App() {
  useScrollToTop();

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>

    // <Routes>
    //   <Route path="/" element={<LoginPage />} />
    //   <Route>
    //   <Route path="/" element={<LoginPage />} />
    //   </Route>
    // </Routes>
  );
}
