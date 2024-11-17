/// @vitest-environment happy-dom

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '.';
import { render } from './test/utilities';

test('it should render the component', () => {
  render(<Counter />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('0');
});

test('it should increment when the "Increment" button is pressed', async () => {
  const user = userEvent.setup();
  render(<Counter />);

  const currentCount = screen.getByTestId('current-count');
  const incrementButton = screen.getByRole('button', { name: 'Increment' });

  await user.click(incrementButton);

  expect(currentCount).toHaveTextContent('1');
});

test('it should render the component with an initial count', () => {
  const { user } = render(<Counter />);

  const counter = screen.getByTestId('current-count');
  expect(counter).toBeDefined;
  expect(counter).toHaveTextContent('0');
});

test('it should reset the count when the "Reset" button is pressed', async () => {
  const { user } = render(<Counter />);

  const counter = screen.getByTestId('current-count');
  expect(counter).toBeDefined;
  expect(counter).toHaveTextContent('0');

  const increaseBtn = screen.getByRole('button', { name: 'Increment' });
  const resetBtn = screen.getByRole('button', { name: 'Reset' });

  await user.click(increaseBtn);
  await user.click(increaseBtn);
  await user.click(increaseBtn);

  expect(counter).toHaveTextContent('3');

  await user.click(resetBtn);

  expect(counter).toHaveTextContent('0');
});
