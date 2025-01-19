import { render, screen } from '@testing-library/react';
import App from './App';
import title from './title';


test('renders learn react link', () => {
  render(<title />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
