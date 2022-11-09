import { api } from '@/services/api';
import { Post } from './types';

export async function fetchPosts() {
  return api.get<Post[]>('posts').then((res) => res.data);
}

export type { Post };
