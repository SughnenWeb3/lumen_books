import { NextResponse } from 'next/server';
import { getBooks } from '../../lib/data';
export async function GET(request: Request) {
  const books = await getBooks();
  return NextResponse.json(
    { 
      success: true,
      count: books.length, 
      data: books 
    },
    { status: 200 }
  );
}
