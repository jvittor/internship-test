import { Post } from '@/lib/entities/home/post';

export class PostUseCases {
  static async getPosts(page: number, limit: number): Promise<Post[]> {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    );
    if (!response.ok) {
      throw new Error('Falha ao buscar posts');
    } else {
      console.log('Posts carregados com sucesso!');
    }
    const posts: Post[] = await response.json();
    return posts;
  }
}
