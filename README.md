# Clickitpickit

A responsive static shop with original logo, a geometric 3D folding pocket-tool viewer, real supplied product photos, color selection, and a browser-local shopping bag.

Confirmed pricing: USD $15 per tool and $4.99 flat shipping per order. Tax is not configured. Checkout is intentionally closed: no order is submitted, payment collected, inventory reserved, or customer address stored.

## Finish opening orders

Get the parent-managed Venmo business username, order contact email, shipping area and dispatch timing. Wire an actual order intake service and parent-managed payment destination before enabling checkout. Keep order receipt and payment status separate: opening Venmo or a customer saying they paid is not payment verification. Square/Stripe can later replace the payment step with server-created checkout and verified payment webhooks.

Confirm available colors and product age guidance with the maker. Do not advertise safety certification without supporting documentation. The 3D model is an illustration, not a manufacturing file. Real product photos remain the reference.

## Project

Static publish directory: `dist`. Vercel configuration: `vercel.json`. Import this GitHub repository in Vercel with Framework Preset "Other"; the configuration serves `dist` without a build step. Scripts have no build-time dependencies. Run any static HTTP server against `dist` for local preview. Cart data stores only color indexes and quantities on the buyer's device.

`dist/assets/logo.png` is the reusable company logo. `dist/viewer.js` owns the folding animation and reduced-motion behavior. `dist/shop.js` owns pricing, cart, color choices, gallery, and feature-detected WebMCP tools.
