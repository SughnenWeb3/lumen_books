# Lumen Books

Lumen Books is a small online bookstore and seller dashboard I built to explore and demonstrate the different rendering and data-fetching patterns available in Next.js 15 (App Router). 

Instead of just building a standard app, I made sure every core Next.js feature was implemented where it practically makes sense.

## What's inside

Here is a quick breakdown of how the different parts of the app are built:

- **The Home Page (`/`)**: This is completely static for fast loading. It uses Incremental Static Regeneration (ISR) to grab fresh "featured books" every hour behind the scenes, so the site stays fast but up to date.
- **The Catalog (`/books`)**: This page is fully dynamic (Server-Side Rendered). It reads search parameters directly from the URL to filter and sort books in real time.
- **Book Details (`/books/[slug]`)**: These pages are pre-rendered at build time (SSG). If someone tries to view a book that was added after the build, it falls back to ISR to generate the page on the fly. I also added dynamic Open Graph tags here for SEO.
- **Streaming & Suspense**: On the book detail page, the "Recommended for you" section takes a bit longer to load. Instead of making the user wait, the main page loads instantly and the recommendations stream in later with a loading skeleton.
- **Authentication & Middleware**: The `/dashboard` route is protected. I set up Edge Middleware to check for an auth cookie—if you aren't logged in, it bounces you to the login page.
- **Mutations & Server Actions**: The login form and the "Add New Book" form both use Server Actions. No API routes needed. When a new book is added, `revalidatePath` is triggered to instantly update the cache.
- **API Routes**: I included a simple `/api/books` route handler just to show how to serve JSON data to external clients.

## Running it locally

If you want to poke around the code or run it yourself:

1. Clone the repo and install the dependencies:
   ```bash
   npm install
   ```

2. Create a `.env.local` file in the root folder and add these variables:
   ```env
   NEXT_PUBLIC_SITE_NAME="Lumen Books"
   AUTH_SECRET="put-any-random-string-here"
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```

You can view the site at `http://localhost:3000`.

## Testing the dashboard

If you want to see the protected dashboard and try adding a book, go to `/login` and use these credentials:

- **Username:** `admin`
- **Password:** `password`

## Tech Stack
- Next.js 15 (App Router)
- Tailwind CSS
- Lucide React (Icons)
