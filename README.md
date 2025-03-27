# Nexus Drive

Nexus Drive is a modern car rental platform inspired by Turo, built with Next.js and React. The application allows users to browse, search, and book vehicles for rent, as well as list their own vehicles.

## Features

- Responsive, modern UI using TailwindCSS
- Car listings with detailed information
- Car details page with images, specifications, and host information
- Search functionality by location and date
- User authentication (simulated)
- Reviews and ratings

## Technology Stack

- **Frontend Framework**: Next.js 15
- **UI Library**: React
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Maps**: React Map GL (Mapbox)
- **State Management**: React Hooks

## Setup and Installation

1. Clone the repository:
```bash
git clone https://github.com/jackalkahwati/nexus-drive.git
cd nexus-drive
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/`: Main application code
  - `components/`: Reusable UI components
  - `data/`: Mock data for cars and other entities
  - `cars/`: Car listing and details pages
  - `api/`: API route handlers
  - `lib/`: Utility functions and service modules

## Deployment

### Vercel Deployment

The easiest way to deploy this application is with Vercel, the platform built by the creators of Next.js.

1. Push your code to a GitHub repository.

2. Visit [vercel.com](https://vercel.com) and sign in with GitHub.

3. Click "Add New..." > "Project" and select your repository.

4. Configure the project with the following settings:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: (leave as default)
   - Output Directory: (leave as default)

5. Click "Deploy" to start the deployment process.

6. Once deployed, you'll receive a URL to access your application.

### Manual Deployment

To deploy to other platforms:

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

3. The application will be available on port 3000 by default.

### Environment Variables

No environment variables are required for basic functionality, but you can configure the following:

- `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN`: If you want to enable actual map functionality (optional)

The application is currently deployed on Vercel and can be accessed at [nexus-drive.vercel.app](https://nexus-drive.vercel.app).

## License

MIT 