import type { Book } from './types';
const SIMULATED_DELAY = 500;
const books: Book[] = [
  {
    id: '1',
    slug: 'silent-forest',
    title: 'The Silent Forest',
    author: 'Eliza Vance',
    price: 2500,
    description:
      'Deep in the heart of an ancient woodland, a young botanist stumbles upon a clearing where no sound exists. As she investigates, she uncovers a centuries-old mystery that binds the forest to the fate of the nearby village. A captivating tale of nature, silence, and the secrets we keep.',
    coverImageUrl: '/book1.jpeg',
    category: 'Fiction',
    createdAt: '2026-01-15',
    ratingsCount: 120,
  },
  {
    id: '2',
    slug: 'woven-destinies',
    title: 'Woven Destinies',
    author: 'Marcus Hale',
    price: 4500,
    description:
      'In a world where every person is born with an invisible thread connecting them to their soulmate, one weaver discovers she can see — and cut — those threads. A sweeping fantasy about choice, connection, and the courage to rewrite your own fate.',
    coverImageUrl: '/book2.jpeg',
    category: 'Fantasy',
    createdAt: '2026-02-10',
    ratingsCount: 300,
  },
  {
    id: '3',
    slug: 'echoes-of-time',
    title: 'Echoes of Time',
    author: 'Eliza Vance',
    price: 3200,
    description:
      'When a theoretical physicist builds a device that can replay moments from the past, she must confront the ethical dilemmas of altering history — and the personal ghosts she never laid to rest. A mind-bending science fiction thriller.',
    coverImageUrl: '/book3.jpeg',
    category: 'Science Fiction',
    createdAt: '2026-03-05',
    ratingsCount: 250,
  },
  {
    id: '4',
    slug: 'midnight-compass',
    title: 'The Midnight Compass',
    author: 'Sofia Reyes',
    price: 3800,
    description:
      'A retired sea captain receives a compass that only works after midnight, pointing not to north but to unfinished business. Her journey across coastal towns becomes a meditation on regret, redemption, and second chances.',
    coverImageUrl: '/book4.png',
    category: 'Fiction',
    createdAt: '2026-03-20',
    ratingsCount: 185,
  },
  {
    id: '5',
    slug: 'kingdom-of-ash',
    title: 'Kingdom of Ash and Starlight',
    author: 'Darius Moon',
    price: 5500,
    description:
      'The final war between the Ember Throne and the Starlight Court threatens to consume the continent. A reluctant prince and a banished sorceress must forge an unlikely alliance to prevent annihilation. Epic fantasy at its finest.',
    coverImageUrl: '/book5.png',
    category: 'Fantasy',
    createdAt: '2026-04-01',
    ratingsCount: 420,
  },
  {
    id: '6',
    slug: 'neural-dawn',
    title: 'Neural Dawn',
    author: 'Priya Kapoor',
    price: 2800,
    description:
      'In 2089, consciousness can be uploaded, copied, and sold. When a neural architect discovers a rogue consciousness living in the network, she must decide: is it a glitch, a ghost, or something entirely new? Hard sci-fi with a human heart.',
    coverImageUrl: '/book6.png',
    category: 'Science Fiction',
    createdAt: '2026-04-15',
    ratingsCount: 310,
  },
  {
    id: '7',
    slug: 'the-last-recipe',
    title: 'The Last Recipe',
    author: 'Amara Chen',
    price: 2500,
    description:
      "A food historian discovers her late grandmother's notebook containing a recipe said to evoke lost memories in anyone who tastes the dish. As she cooks her way through the pages, family secrets rise to the surface. A warm, rich literary novel.",
    coverImageUrl: '/book7.png',
    category: 'Literary Fiction',
    createdAt: '2026-05-01',
    ratingsCount: 275,
  },
  {
    id: '8',
    slug: 'atlas-of-forgotten-places',
    title: 'Atlas of Forgotten Places',
    author: 'James Whitfield',
    price: 6000,
    description:
      'Part travelogue, part history, this non-fiction masterpiece takes readers to twelve locations erased from modern maps — abandoned cities, sunken islands, and vanished kingdoms — uncovering the stories the world chose to forget.',
    coverImageUrl: '/book8.png',
    category: 'Non-Fiction',
    createdAt: '2026-05-20',
    ratingsCount: 190,
  },
  {
    id: '9',
    slug: 'beneath-the-iron-sky',
    title: 'Beneath the Iron Sky',
    author: 'Sofia Reyes',
    price: 4200,
    description:
      'In a steampunk reimagining of the Industrial Revolution, an orphan mechanic and a disgraced aristocrat team up to expose a conspiracy that could enslave the working class forever. Gritty, inventive, and propulsive.',
    coverImageUrl: '/book3.jpeg',
    category: 'Fantasy',
    createdAt: '2026-06-01',
    ratingsCount: 340,
  },
  {
    id: '10',
    slug: 'quantum-garden',
    title: 'The Quantum Garden',
    author: 'Priya Kapoor',
    price: 3500,
    description:
      'A botanist on a generation ship discovers that the onboard garden exists in a quantum superposition — every plant is simultaneously alive and dead until observed. When crew members start disappearing, the garden becomes the prime suspect.',
    coverImageUrl: '/book1.jpeg',
    category: 'Science Fiction',
    createdAt: '2026-06-10',
    ratingsCount: 205,
  },
];
async function delay(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY));
}
export async function getBooks(): Promise<Book[]> {
  await delay();
  return books;
}
export async function getBookBySlug(slug: string): Promise<Book | null> {
  await delay();
  return books.find((b) => b.slug === slug) ?? null;
}
export async function getCategories(): Promise<string[]> {
  await delay();
  return [...new Set(books.map((b) => b.category))];
}
export async function getFeaturedBooks(limit = 3): Promise<Book[]> {
  await delay();
  return [...books].sort((a, b) => b.ratingsCount - a.ratingsCount).slice(0, limit);
}
export async function searchBooks(params: {
  category?: string;
  sort?: string;
  q?: string;
}): Promise<Book[]> {
  await delay();
  let result = [...books];
  if (params.category) {
    result = result.filter(
      (b) => b.category.toLowerCase() === params.category!.toLowerCase()
    );
  }
  if (params.q) {
    const query = params.q.toLowerCase();
    result = result.filter(
      (b) =>
        b.title.toLowerCase().includes(query) ||
        b.author.toLowerCase().includes(query)
    );
  }
  switch (params.sort) {
    case 'price-asc':
      result.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      result.sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      result.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      break;
    case 'popular':
      result.sort((a, b) => b.ratingsCount - a.ratingsCount);
      break;
    default:
      break;
  }
  return result;
}
export async function getRecommendedBooks(
  currentSlug: string,
  limit = 3
): Promise<Book[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const current = books.find((b) => b.slug === currentSlug);
  if (!current) return [];
  return books
    .filter((b) => b.slug !== currentSlug && b.category === current.category)
    .slice(0, limit);
}
export async function addBook(
  data: Omit<Book, 'id' | 'slug' | 'createdAt' | 'ratingsCount'>
): Promise<Book> {
  await delay();
  const slug = data.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  const newBook: Book = {
    ...data,
    id: String(books.length + 1),
    slug,
    createdAt: new Date().toISOString().split('T')[0],
    ratingsCount: 0,
  };
  books.push(newBook);
  return newBook;
}
export async function getAllSlugs(): Promise<string[]> {
  return books.map((b) => b.slug);
}