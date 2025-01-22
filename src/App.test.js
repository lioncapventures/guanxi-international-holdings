import { render, screen } from '@testing-library/react';
import App from './App';
import './i18n';

test('renders language selector', () => {
  render(<App />);
  const languageElement = screen.getByText(/Select Your Language/i);
  expect(languageElement).toBeInTheDocument();
});
