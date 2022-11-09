import { fetchPosts } from '@/services/placeHolderApi';
import { useQuery } from '@tanstack/react-query';

export function useFetchPosts() {
  const { data: posts } = useQuery(['posts'], fetchPosts);

  return {
    posts,
  };
}
