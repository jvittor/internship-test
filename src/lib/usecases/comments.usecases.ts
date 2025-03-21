import { Comment } from '@/lib/entities/home/comments';

export class CommentUseCases {
  static async getComments(postId: number): Promise<Comment[]> {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    if (!response.ok) {
      throw new Error('Falha ao buscar comentários');
    }
    const comments: Comment[] = await response.json();
    return comments;
  }
}
