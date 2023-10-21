import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import GlobalContext from '../context/GlobalContext';
import { mockContextValue, mockData } from './utils/mocks';

describe('News Section', () => {
  beforeEach(() => {
    render(
      <GlobalContext.Provider value={ mockContextValue }>
        <App />
      </GlobalContext.Provider>,
    );
  });

  test('if the title of the news are rendered', () => {
    const title = screen.getByRole('heading', { name: mockData.items[1].titulo });
    const lastTitle = screen.getByRole('heading', { name: mockData.items[9].titulo });
    expect(title && lastTitle).toBeInTheDocument();
  });

  test('if the description of the news are rendered', () => {
    const description = screen.getByText(mockData.items[1].introducao);
    const lastDescription = screen.getByText(mockData.items[9].introducao);
    expect(description && lastDescription).toBeInTheDocument();
  });

  test('if the link news button is rendered correctly', () => {
    const firstLink = screen.getAllByRole('link', { name: 'Leia a notícia aqui' })[1];
    expect(firstLink).toBeInTheDocument();
    expect(firstLink).toHaveAttribute('href', mockData.items[1].link);
  });

  test("if there's no data", () => {
    const emptyItemsData = { ...mockData, items: [] };

    render(
      <GlobalContext.Provider value={ { ...mockContextValue, data: emptyItemsData } }>
        <App />
      </GlobalContext.Provider>,
    );

    const noDataMessage = screen.getByText(/Não há dados disponíveis/i);
    expect(noDataMessage).toBeInTheDocument();
  });

  test('if the news filter buttons works correctly', () => {
    const releaseButton = screen.getByRole('button', { name: /Release/i });
    expect(releaseButton).toBeInTheDocument();

    fireEvent.click(releaseButton);

    const secondNewsTitle = screen.queryByRole('heading', { name: mockData.items[2].titulo });
    expect(secondNewsTitle).not.toBeInTheDocument();

    const newsButton = screen.getByRole('button', { name: 'Notícia' });
    expect(newsButton).toBeInTheDocument();

    fireEvent.click(newsButton);
    expect(screen.getByRole('heading', { name: mockData.items[2].titulo })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: mockData.items[1].titulo })).not.toBeInTheDocument();
  });

  test('if the change news layout button works correctly', () => {
    const changeLayoutButton = screen.getByTestId('change-layout-btn');
    expect(changeLayoutButton).toBeInTheDocument();

    const newsArticleContainer = screen.getByTestId('news-article-container');
    expect(newsArticleContainer).toHaveClass('news-article-container');
    expect(newsArticleContainer).not.toHaveClass('column-layout');

    fireEvent.click(changeLayoutButton);
    expect(newsArticleContainer).toHaveClass('column-layout');
  });
});
