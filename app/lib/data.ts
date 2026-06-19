// src/lib/data.ts

export const books = [
    {
      id: "1",
      slug: "silent-forest",
      title: "The Silent Forest",
      author: "Eliza Vance",
      price: 25,
      description: "A mysterious adventure",
      coverImageUrl: "/books/book1.jpg",
      category: "Fiction",
      createdAt: "2026-06-01",
      ratingsCount: 120,
    },
    {
      id: "2",
      slug: "woven-destinies",
      title: "Woven Destinies",
      author: "Morgan Kellen",
      price: 30,
      description: "Fantasy masterpiece",
      coverImageUrl: "/books/book2.jpg",
      category: "Fantasy",
      createdAt: "2026-06-02",
      ratingsCount: 300,
    },
    {
      id: "3",
      slug: "echoes-of-time",
      title: "Echoes of Time",
      author: "Eliza Vance",
      price: 20,
      description: "Time travel mystery",
      coverImageUrl: "/books/book3.jpg",
      category: "Science Fiction",
      createdAt: "2026-06-03",
      ratingsCount: 250,
    },
  ];
  
  export async function getBooks() {
    await new Promise((resolve) =>
      setTimeout(resolve, 500)
    );
  
    return books;
  }