import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import GlobalContext from '../context/GlobalContext';
import { mockContextValue, mockData } from './utils/mocks';

describe('Button Favorite News', () => {
  beforeEach(() => {
    render(
      <GlobalContext.Provider value={ mockContextValue }>
        <App />
      </GlobalContext.Provider>,
    );
  });

  const favoriteNewsBtn = 'favorite-news-btn';

  test('if the button saves the latest news article', () => {
    const favoriteButton = screen.getAllByRole('button')[0];
    expect(favoriteButton).toHaveClass(favoriteNewsBtn);

    fireEvent.click(favoriteButton);
    const favoriteNewsFilterButton = screen.getByRole('button', { name: 'Favoritas' });

    fireEvent.click(favoriteNewsFilterButton);
    const favoritesSpan = screen.getByText('Favoritas');
    expect(favoritesSpan).toHaveClass('selected-filter');

    const favoriteNewsTitle = screen.getByRole('heading', { name: mockData.items[0].titulo });
    expect(favoriteNewsTitle).toBeInTheDocument();
  });

  test('if the button removes the news', () => {
    const secondFavoriteButton = screen.getAllByRole('button')[8];
    expect(secondFavoriteButton).toHaveClass(favoriteNewsBtn);

    fireEvent.click(secondFavoriteButton);
    const favoriteNewsFilterButton = screen.getByRole('button', { name: 'Favoritas' });

    fireEvent.click(favoriteNewsFilterButton);
    const favoritedNewsTitle = screen.getAllByRole('heading', { name: mockData.items[0].titulo })[1];
    expect(favoritedNewsTitle).toBeInTheDocument();
    const favoritedNewsFavButton = screen.getAllByRole('button')[8];
    expect(favoritedNewsFavButton).toHaveClass(favoriteNewsBtn);

    fireEvent.click(favoritedNewsFavButton);
    const firstNewsTitle = screen.queryByRole('heading', { name: mockData.items[1].titulo });
    expect(firstNewsTitle).not.toBeInTheDocument();
  });
});
