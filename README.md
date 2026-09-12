# Click N' Pick It

A static website for selling 3D-printed **play/novelty pocket knives** —
balisong trainers, fidget-style folders, and cosplay props. No blades, no
sharp edges, just fun printed pieces.

## What's here

- `index.html` – single-page site: hero, product catalog, "how it works",
  a safety section, FAQ, and an order form.
- `css/style.css` – all styling (dark, EDC-inspired theme).
- `js/script.js` – mobile nav toggle, "Add to Order" quick-add, and the
  order form (opens a pre-filled email — no backend or database needed).

It's plain HTML/CSS/JS on purpose: **zero build step, zero hosting cost**.
You can open `index.html` directly in a browser, or deploy it for free on
GitHub Pages, Netlify, Vercel, or Cloudflare Pages.

## Before you go live

1. **Set your real contact email.** Open `js/script.js` and change:
   ```js
   const ORDER_EMAIL = "orders@clicknpickit.example";
   ```
   to the address you want order requests sent to.
2. **Swap in real product photos.** Each `.product-thumb` currently uses a
   placeholder SVG icon — replace with `<img>` tags pointing at photos in
   `images/` once you have them.
3. **Update prices, models, and copy** in `index.html` to match your actual
   lineup and pricing.
4. **Double-check local rules** on selling knife-shaped novelty items —
   messaging on the site already stresses these are blunt, non-functional
   items for practice/cosplay/collecting, not weapons or tools.

## Deploying for free (GitHub Pages)

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. In the repo settings, go to **Pages** → set source to the `main`
   (or your default) branch, root folder.
3. GitHub will give you a `https://<user>.github.io/<repo>/` URL within a
   minute or two.

## Adding real checkout/payments later

Right now orders go through a simple "email us" form — no payment
processing, no ongoing fees. When you're ready to accept payments directly
on the site, the most common low-cost paths are:

- **Stripe Payment Links** or **Stripe Checkout** – no code required to get
  started, small per-transaction fee only.
- **Snipcart** or **Shopify Buy Button** – drop-in cart/checkout widgets
  that work with a static site like this one.

Ask and this can be wired in as a next step.
