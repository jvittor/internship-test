import { Post } from '@/lib/entities/home/post';

export class PostUseCases {
  static async getPosts(): Promise<Post[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('falha ao buscar posts');
    } else {
      console.log('posts carregados com sucesso!');
    }
    const posts: Post[] = await response.json();
    return posts;
  }
}
