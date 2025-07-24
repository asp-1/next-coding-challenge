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
  - Reconfigured ESLint to use Next and Prettier for more comprehensive rule coverage, which will improve code quality and consistency
  - Changed project structure (e.g. moved tests and styles into their own folder)
  - Added additional aliases for cleaner imports
  - Created reusable Product component
    - Added prop types
    - Specified HTML button type attribute
    - Improved aria-label
    - Memoise component so it doesn't re-render unless props change
    - Moved relevant styles from `page.module.css` to `product.module.css`
  - Created reusable Basket and BasketItem components
    - Added aria-label to Basket button
    - Memoised components so they don't re-render unless props change
    - Moved relevant styles from `page.module.css`
    - Used `<ul>` and `<li>` to improve accessibility and structure for assistive technologies, such as screen readers
    - Used `.map()` to iterate over items and render each basket item
    - Used basket context to grab basket state
    - Calculated total quantity from basket array and memoised result
  - Created Products component
    - Wrapped product components with a fragment to avoid extra DOM nodes and so that the parent's grid layout is applied correctly
    - Used `.map()` to iterate over products and render each product
    - Used `addToBasket()` from basket context to update basket state
  - Removed unused `.content` CSS rule
  - Created type for item and placed it in `types` for reuse
  - Created Basket context, provider and custom hook so that we can manage and inject basket state and actions throughout the application
  - Refactored `addToBasket()` (formerly `addToCart()`) and used functional updater to ensure it uses the most-up-to-date previous value
  - Defined store name as a constant in `constants` for reuse
  - Stored static product data in JSON format in `data/products/products.json`
  - Calculate basket quantity from basket state instead to reduce complexity, minimise redundancy, and the need to manage additional state
- Aligned description items to the start using `flex-start`
- Used `@typings` alias instead of `@types` to prevent namespace conflicts
- Installed missing Jest types (`@types/jest`)
- Resolved TypeScript error `Property 'toHaveTextContent' does not exist on type 'JestMatchers<HTMLElement>'.ts(2339)`
- Made `home` tests pass
  - Wrapped button clicks with `act()`
  - Changed expected value to `/Basket: 1 items$/` to make test #2 pass
  - Changed `name` property to match new aria-labels
  - Provided basket state and actions to `Home` component with `BasketContextProvider`
- Added tests for all components in `src/components`
  - Followed AAA (Arrange-Act-Assert) pattern
  - Added `renderWithBasketContext()` utility to wrap components with `BasketContext` in tests
  - Avoided hardcoding by defining values such as `name` and `count` as constants and generating regex patterns with template strings
