import React from 'react';

type BasketItemProps = {
  name: string;
  count: number;
};

const BasketItem: React.FC<BasketItemProps> = ({ name, count }) => (
  <div>
    {name} count: {count}
  </div>
);

export default React.memo(BasketItem);
