# Room Rental Website

A React application for renting rooms, built with Vite.

## Features

- Home page with search bar, banner, featured rooms, and new listings
- Room list page with filters (price, area, location, amenities) and room cards
- Room detail page with image slider, description, amenities, map, owner info, and booking buttons
- Login/Register page
- Owner Dashboard

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── pages/
│   ├── Home.jsx
│   ├── RoomList.jsx
│   ├── RoomDetail.jsx
│   ├── Login.jsx
│   └── Dashboard.jsx
├── components/
│   ├── Navbar.jsx
│   ├── RoomCard.jsx
│   ├── SearchBar.jsx
│   └── Footer.jsx
├── App.jsx
└── main.jsx
```

## Technologies Used

- React
- React Router DOM
- Vite
- ESLint
