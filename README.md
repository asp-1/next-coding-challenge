# Michael's NextJS Coding Challenge

## The Challenge:
Some newb has made a mess of this code. There are TODOs that need finishing off, broken and questionable tests and the code itself is inefficient.  
Please fix up whatever mess you find to get this piece of work working well.

### Extended tasks

- Our Product Manager wants a new 'checkout' page which should detail all of the items in the basket with their quantity and a total item quantity. Create this page.
- We've launched our new product API - <https://v0-api-endpoint-request.vercel.app/api/products> - can you please migrate the site to use the products from here - UK only for now. Our CTO is adamant that products should be available as soon as the page loads - no loading spinners.
- We've released a way of getting some more products. Its a bit slow so these can be displayed to the user after the initial products load please <https://v0-api-endpoint-request.vercel.app/api/more-products>
- We're launching in the states! When the user navigates to /us, prices should be displayed in dollars (USD) instead of GBP, and text should be localized for US users. Ensure the solution is scalable for future regions (e.g., Europe, Asia). Consider how you would handle currency formatting, locale-specific content, and dynamic routing.
- Run your applications tests when you push the branch to github
- Deploy your application when you push the branch to github

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, `npm install`, then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run the testing and linting with `npm run test` and `npm run lint`.

## Ash's Changelog

- Refactored codebase
  - Reconfigured ESLint to use Next and Prettier for more comprehensive rule converage, which will improve code quality and consistency
  - Changed project structure (e.g. moved tests and styles into their own folder)
  - Added additional aliases for cleaner imports
  - Created reusable Product component
    - Added prop types
    - Specified HTML button type attribute
    - Improved aria label
    - Memoise component so it doesn't re-render unless props change
    - Moved relevant styles from `page.module.css` to `product.module.css`
  - Created reusable Basket and BasketItem components
    - Added aria label to Basket button
    - Memoised components so they don't re-render unless props change
    - Moved relevant styles from `page.module.css`
    - Used `<ul>` and `<li>` to improve accessibility and structure for assitive technologies, such as screen readers
    - Used `.map()` to iterate over items and render each basket item
    - Used basket state from context to grab basket
    - Calculated total quantity from basket array and memoised result
  - Created type for item and placed it in `common/types` so that it can be used throughout the application
  - Created Basket context, provider and custom hook so that we can manage and inject basket state and actions throughout the application
  - Refactored `addToBasket` (formerly `addToCart`) and used functional updater to ensure it uses the most-up-to-date previous value
- Aligned description items to the start using `flex-start`
- Installed missing Jest types (`@types/jest`)
- Resolved TypeScript error `Property 'toHaveTextContent' does not exist on type 'JestMatchers<HTMLElement>'.ts(2339)`
- Made `home` tests pass
  - Wrapped button clicks with `act()`
  - Changed expected value to `/Basket: 1 items$/` to make test #2 pass
  - Changed `name` property to match new aria labels
  - Provided basket state and actions to `Home` component with `BasketContextProvider`