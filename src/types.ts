export type Post = {
  id: string;
  author: User;
  content: string;
  image?: string;
  likes: number;
};

export type User = {
  id: string;
  name: string;
  position: string;
  image?: string;
  backImage?: string;
  about?: string;
};
