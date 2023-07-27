export type Post = {
  id: string;
  author: User;
  content: string;
  image?: string;
  likes: number;
  comments: string[];
};

type User = {
  id: string;
  name: string;
  position: string;
  image?: string;
};
