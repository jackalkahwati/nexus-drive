# NexusTuro - Car Sharing Marketplace

A modern car-sharing marketplace platform built with Next.js, inspired by Turo.com. This project provides a sleek, responsive front-end implementation.

## Tech Stack

- **Next.js** - React framework with App Router
- **TypeScript** - Type safety for robust code
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI component library

## Features

- 🚗 Browse car listings with search and filtering
- 👤 User profiles and hosting capabilities
- 📅 Booking system with date selection
- ⭐ Ratings and reviews
- 💰 Pricing information and calculations
- 📱 Fully responsive design for all devices

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/nexus-turo.git
cd nexus-turo
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
nexus-turo/
├── app/               # Next.js App Router
│   ├── components/    # Reusable UI components
│   ├── cars/          # Car details pages
│   ├── search/        # Search results page
│   ├── globals.css    # Global styles
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Homepage
├── public/            # Static assets
├── next.config.js     # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js  # PostCSS configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Project dependencies
```

## Deployment

This project can be easily deployed to Vercel, Netlify, or any other platform supporting Next.js.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from [Turo.com](https://turo.com)
- Car images from [Unsplash](https://unsplash.com) 