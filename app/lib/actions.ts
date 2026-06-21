'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { addBook } from './data';
export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');
  await new Promise((resolve) => setTimeout(resolve, 800));
  if (email === 'admin' && password === 'password') {
    const cookieStore = await cookies();
    cookieStore.set('auth_token', 'super-secret-token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, 
      path: '/',
    });
  } else {
    return { error: 'Invalid password. Hint: try "password"' };
  }
  redirect('/dashboard');
}
export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete('auth_token');
  redirect('/login');
}
export async function addBookAction(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 800));
  const title = formData.get('title') as string;
  const author = formData.get('author') as string;
  const description = formData.get('description') as string;
  const category = formData.get('category') as string;
  const price = parseFloat(formData.get('price') as string);
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
  revalidatePath('/dashboard');
  revalidatePath('/books');
  revalidatePath('/');
  redirect('/dashboard');
}
