# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

All code lives in `Frontend/` (Vite + React 19, plain JSX, no TypeScript). There is no backend yet; run all commands from `Frontend/`.

## Commands

```bash
cd Frontend
npm install
npm run dev       # Vite dev server (file watching uses polling, see vite.config.js)
npm run build     # production build to dist/
npm run lint      # ESLint (flat config: js recommended + react-hooks + react-refresh)
npm run preview   # serve the built dist/
```

No test framework is configured.

## Environment

`Frontend/.env` must define `VITE_CURRENCY` (the currency symbol shown next to prices), which is read in `src/store/appStore.jsx`.

## Architecture

- **State:** one global Zustand store, `src/store/appStore.jsx` (`useAppStore`). It holds `user`, `isSeller`, `showUserLogin`, `products`, `cartItems`, `searchQuery` and the cart actions. Components subscribe with selectors, e.g. `useAppStore((s) => s.addToCart)`. There is no React Context. `react-hot-toast` toasts are fired from inside the store actions.
- **Cart shape:** `cartItems` is a map of `{ [productId]: quantity }`. `getCartCount()` and `getCartAmount()` are derived by looking up `products` by `_id` and using `offerPrice`.
- **Data is mocked:** `fetchProducts()` loads `dummyProducts` from `src/assets/assets.js`. That file is also the central registry for every image/icon (`assets`), plus `categories`, `footerLinks`, `features`, `dummyAddress` and `dummyOrders`. To add an image, import it there and add it to the `assets` export. Product objects look like `{ _id, name, category, price, offerPrice, image: [], description: [], inStock }`.
- **Auth is stubbed:** `src/models/Auth.jsx` (a login/register modal shown when `showUserLogin` is true) and `src/components/seller/SellerLogin.jsx` only flip store flags (`user`, `isSeller`). No real API calls are made yet.
- **Routing** (`src/App.jsx`, with `BrowserRouter` in `main.jsx`):
  - Customer routes: `/`, `/products`, `/products/:category`, `/products/:category/:id`, `/cart`, `/add-address`, `/my-orders`.
  - Category URL segments are lowercase versions of `product.category` / `categories[].path` (e.g. `Vegetables` becomes `/products/vegetables`), so compare them case-insensitively.
  - `/seller/*` renders `SellerLayout` (sidebar + `<Outlet/>`) with nested `AddProduct` (index), `product-list` and `orders` when `isSeller` is true; otherwise it renders `SellerLogin`. Any path containing "seller" hides the customer Navbar and Footer and drops the page padding.
- **Folders:** `src/pages/` holds route screens (`pages/seller/` for the seller dashboard). `src/components/` holds shared UI.
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite`, with no tailwind.config file. Theme tokens are defined in `src/index.css` under `@theme`: `primary` (#4ebc8a) and `primary-dull`, used as `bg-primary`, `text-primary`, etc. The font is Outfit (Google Fonts).
