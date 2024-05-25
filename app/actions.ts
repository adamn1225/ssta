'use server';

import { deleteUserById, insertUser } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function deleteUser(userId: number) {
  // Uncomment this to enable deletion
  // await deleteUserById(userId);
  // revalidatePath('/');
}

export async function instertNewUser(uderId: number, name: string, username: string, email:string) {
}
