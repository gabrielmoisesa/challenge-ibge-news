import './App.css';
import ButtonLoadMoreNews from './components/ButtonLoadMoreNews/ButtonLoadMoreNews';
import Header from './components/Header/Header';
import LatestNewsArticle from './components/LatestNewsArticle/LatestNewsCard';
import NewsSection from './components/NewsSection/NewsSection';

function App() {
  return (
    <>
      <Header />
      <main>
        <LatestNewsArticle />
        <NewsSection />
        <ButtonLoadMoreNews />
      </main>
    </>
  );
}

export default App;
