import { screen } from '@testing-library/react';

import Basket from '@components/Basket';
import { renderWithBasketContext } from '@testing/utils/render';

describe('Basket', () => {
  it('renders an empty basket', () => {
    renderWithBasketContext(<Basket />);

    const basketButton = screen.getByRole('button', {
      name: /Go to checkout, 0 items in basket$/,
    });

    expect(basketButton).toHaveTextContent(/Basket: 0 items$/);
  });

  it('renders a non-empty basket', () => {
    const basket = [{ name: 'Item 1', quantity: 1 }];

    renderWithBasketContext(<Basket />, {
      basket,
    });

    const basketButton = screen.getByRole('button', {
      name: /Go to checkout, 1 items in basket$/,
    });

    expect(basketButton).toHaveTextContent(/Basket: 1 items$/);
  });

  it('renders a basket list', () => {
    renderWithBasketContext(<Basket />);

    const basketList = screen.getByRole('list', {
      name: /Basket items$/,
    });

    expect(basketList).toBeInTheDocument();
  });

  it('renders an item in the basket', () => {
    const itemOne = { name: 'Item 1', quantity: 1 };

    const basket = [itemOne];

    renderWithBasketContext(<Basket />, {
      basket,
    });

    const basketListItems = screen.getByText(
      new RegExp(`${itemOne.name} count: ${itemOne.quantity}$`),
      {
        selector: 'li',
      },
    );

    expect(basketListItems).toHaveTextContent(
      new RegExp(`${itemOne.name} count: ${itemOne.quantity}$`),
    );
  });

  it('renders multiple items in the basket', () => {
    const itemOne = { name: 'Item 1', quantity: 1 };
    const itemTwo = { name: 'Item 2', quantity: 2 };

    const basket = [itemOne, itemTwo];

    renderWithBasketContext(<Basket />, {
      basket,
    });

    const basketListItems = screen.getAllByRole('listitem');

    expect(basketListItems[0]).toHaveTextContent(
      new RegExp(`${itemOne.name} count: ${itemOne.quantity}$`),
    );
    expect(basketListItems[1]).toHaveTextContent(
      new RegExp(`${itemTwo.name} count: ${itemTwo.quantity}$`),
    );
  });

  it('applies the correct CSS class to the basket button', () => {
    renderWithBasketContext(<Basket />);

    const basketButton = screen.getByRole('button', {
      name: /Go to checkout, 0 items in basket$/,
    });

    expect(basketButton).toHaveClass('basket');
  });

  it('applies the correct CSS class to the basket list', () => {
    renderWithBasketContext(<Basket />);

    const basketList = screen.getByRole('list', {
      name: /Basket items$/,
    });

    expect(basketList).toHaveClass('basketList');
  });
});
