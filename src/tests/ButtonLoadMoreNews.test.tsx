import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import GlobalContext from '../context/GlobalContext';
import { mockContextValue } from './utils/mocks';

describe('Button Load More News', () => {
  beforeEach(() => {
    render(
      <GlobalContext.Provider value={ { ...mockContextValue, maxNewsQtd: 9 } }>
        <App />
      </GlobalContext.Provider>,
    );
  });

  test('if the button works correctly', async () => {
    const buttonLoadMoreNews = screen.getByRole('button', {
      name: /MAIS NOTÍCIAS/i,
    });

    expect(buttonLoadMoreNews).toHaveClass('load-news-button');
    expect(buttonLoadMoreNews).toBeInTheDocument();
    expect(screen.getAllByRole('article')).toHaveLength(10);

    fireEvent.click(buttonLoadMoreNews);

    expect(screen.queryByRole('button', {
      name: /MAIS NOTÍCIAS/i,
    })).not.toBeInTheDocument();
  });
});
