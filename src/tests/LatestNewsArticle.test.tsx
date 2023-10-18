import { render, screen } from '@testing-library/react';
import App from '../App';
import GlobalContext from '../context/GlobalContext';
import { contextValue, mockData } from './mocks';

describe('Latest News Article', () => {
  beforeEach(() => {
    render(
      <GlobalContext.Provider value={ contextValue }>
        <App />
      </GlobalContext.Provider>,
    );
  });

  test('if the image of the latest news is rendered', () => {
    const image = screen.getByTestId('latest-news-img');
    expect(image).toHaveAttribute('src', mockData.imageIntro);
  });

  test('if the title of the latest news is rendered', () => {
    const title = screen.getByRole('heading', { name: mockData.items[0].titulo });
    expect(title).toBeInTheDocument();
  });
});
