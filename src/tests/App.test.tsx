import { render } from '@testing-library/react';
import App from '../App';

describe('App components test', () => {
  render(<App />);

  test('Header', () => {
    expect(document.querySelector('header')).toBeInTheDocument();
  });
});
