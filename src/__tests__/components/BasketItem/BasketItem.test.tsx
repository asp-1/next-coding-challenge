import { render, screen } from '@testing-library/react';

import BasketItem from '@components/BasketItem';

describe('BasketItem', () => {
  beforeEach(() => {
    render(<BasketItem name="Item 1" count={1} />);
  });

  it('renders a basket list item', () => {
    const basketListItem = screen.getByRole('listitem');

    expect(basketListItem).toBeInTheDocument();
  });

  it('renders no more than 1 list item', () => {
    const basketListItems = screen.getAllByRole('listitem');

    expect(basketListItems).toHaveLength(1);
  });

  it('renders the name and count', () => {
    const basketListItem = screen.getByText(/Item 1 count: 1$/, {
      selector: 'li',
    });

    expect(basketListItem).toHaveTextContent(/Item 1 count: 1$/);
  });

  it('applies the correct CSS class', () => {
    const basketListItem = screen.getByRole('listitem');

    expect(basketListItem).toHaveClass('basketItem');
  });
});
