import { render, screen } from '@testing-library/react';

import Product from '@components/Product';

describe('Product', () => {
  let handleClick: jest.Mock;

  beforeEach(() => {
    handleClick = jest.fn();

    render(<Product name="Item 1" description="Foo" onClick={handleClick} />);
  });

  it('renders the product', () => {
    const name = screen.getByRole('heading', {
      level: 2,
      name: /Item 1 ->$/,
    });

    const description = screen.getByText(/Foo$/);

    expect(name).toHaveTextContent(/Item 1 ->$/);
    expect(description).toHaveTextContent(/Foo$/);
  });

  it('calls the click handler on click', () => {
    const productButton = screen.getByRole('button', {
      name: /Add Item 1 to basket$/,
    });

    productButton.click();

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders the name in the aria-label', () => {
    const productButton = screen.getByRole('button', {
      name: /Add Item 1 to basket$/,
    });

    expect(productButton).toHaveAttribute(
      'aria-label',
      expect.stringMatching(/Add Item 1 to basket$/),
    );
  });

  it('applies the correct CSS class to the product button', () => {
    const productButton = screen.getByRole('button', {
      name: /Add Item 1 to basket$/,
    });

    expect(productButton).toHaveClass('product');
  });
});
