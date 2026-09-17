# Lucca Pizza & Fast Food

## Pages
- `index.html` — Home
- `menu.html` — Menu
- `deals.html` — Deals
- `reservation.html` — Reservation
- `about.html` — About
- `contact.html` — Contact
- `cart.html` — Cart
- `checkout.html` — Checkout

All internal page links have been normalized so the site works on GitHub Pages when these files are kept in the same folder. Home navigation and Home buttons now open their dedicated pages instead of Home-page sections.

## GitHub Pages
Upload the contents of this folder to a GitHub repository and enable **Settings → Pages → Deploy from branch**. `index.html` is the home page.

## Backend
GitHub Pages hosts static HTML/CSS/JS only; it does **not** run Node/Express. The `backend/` folder contains an Express API for orders, reservations and contact messages. Deploy that backend separately (for example on a Node-compatible hosting service), then connect the frontend API calls to its URL.

The frontend currently keeps cart/order/reservation/contact data in browser `localStorage`, so the GitHub Pages version remains usable without a server. The restaurant WhatsApp number configured for order/contact handoff is **03129016202**.

### Run backend locally
```bash
cd backend
npm install
npm start
```

Health check: `GET /api/health`
