import { useContext } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LatestNewsArticle from './components/LatestNewsArticle/LatestNewsArticle';
import NewsSection from './components/NewsSection/NewsSection';
import GlobalContext from './context/GlobalContext';

function App() {
  const { isPending } = useContext(GlobalContext);

  return (
    <>
      <Header />
      <main>
        <LatestNewsArticle />
        <NewsSection />
      </main>
      {!isPending && <Footer />}
    </>
  );
}

export default App;
