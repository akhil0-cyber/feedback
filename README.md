# Loop — Feedback Management System (React + Vite)

A feedback collection and admin dashboard app built with React and Vite.

## Features
- **Give feedback** tab: customers submit name, category, star rating, and a message.
- **Admin dashboard** tab: total responses, average rating, top category, and open-review count; a bar chart of feedback by category (Recharts); auto-generated insights (weakest/strongest category, low ratings, items awaiting review); a filterable, sortable feedback table where admins can update each item's status (Open / Reviewed / Actioned).

## Project structure
```
src/
  components/
    FeedbackForm.jsx       customer submission form
    StarRating.jsx         star rating input
    AdminDashboard.jsx     dashboard layout + state
    CategoryChart.jsx      Recharts bar chart
    InsightList.jsx        generated insight cards
    FeedbackTable.jsx      feedback ledger table
  data/
    seedFeedback.js        sample starting data + category list
  App.jsx                  root component, tab switching, state
  index.css                all styling (design tokens as CSS variables)
  main.jsx                 React entry point
```

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

### In VS Code
1. Open this folder in VS Code (`File > Open Folder`).
2. Open a terminal (`` Ctrl+` `` / `` Cmd+` ``) and run `npm install` then `npm run dev`.
3. Cmd/Ctrl-click the printed `localhost` link, or open it in your browser.

## Build for production
```bash
npm run build
```
Outputs a static site to `dist/`, which you can deploy anywhere (Vercel, Netlify, GitHub Pages, your own server, etc.) — `npm run preview` serves that build locally to check it.

## Notes
- Data is seeded with 8 sample entries and lives only in React state — it resets on reload. There's no backend yet.
- Uses [Recharts](https://recharts.org) for the category chart and Google Fonts (Fraunces + IBM Plex Sans).
- To persist data, connect `src/App.jsx`'s `addFeedback` / `updateStatus` functions to an API or database instead of local state.
