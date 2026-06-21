'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { revalidatePath } from 'next/cache';
import { addBook } from './data';

export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');
  
  // Simulate network latency to show pending state
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (email === 'admin' && password === 'password') {
    // Next.js 15+ requires awaiting cookies()
    const cookieStore = await cookies();
    cookieStore.set('auth_token', 'super-secret-token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    });
  } else {
    return { error: 'Invalid password. Hint: try "password"' };
  }

  // Redirect to dashboard on success. redirect() throws an error internally, 
  // so it must be outside the try/catch or after the else block.
  redirect('/dashboard');
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete('auth_token');
  redirect('/login');
}

export async function addBookAction(prevState: any, formData: FormData) {
  // Simulate network latency to show pending state
  await new Promise((resolve) => setTimeout(resolve, 800));

  const title = formData.get('title') as string;
  const author = formData.get('author') as string;
  const description = formData.get('description') as string;
  const category = formData.get('category') as string;
  const price = parseFloat(formData.get('price') as string);
  
  // Hardcode a default image for demo purposes
  const coverImageUrl = '/book1.jpeg';

  if (!title || !author || !description || !category || isNaN(price)) {
    return { error: 'Please fill out all fields correctly.' };
  }

  await addBook({
    title,
    author,
    description,
    category,
    price,
    coverImageUrl,
  });

  // Revalidate the cache on-demand for relevant paths
  revalidatePath('/dashboard');
  revalidatePath('/books');
  revalidatePath('/');

  // Redirect back to dashboard
  redirect('/dashboard');
}
