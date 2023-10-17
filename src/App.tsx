import './App.css';
import Header from './components/Header/Header';
import LatestNewsArticle from './components/LatestNewsArticle/LatestNewsArticle';
import NewsSection from './components/NewsSection/NewsSection';

function App() {
  return (
    <>
      <Header />
      <main>
        <LatestNewsArticle />
        <NewsSection />
      </main>
    </>
  );
}

export default App;
