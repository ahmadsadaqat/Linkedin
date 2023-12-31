export type Post = {
  id: string;
  profile: User;
  content: string;
  image?: string;
  likes: number;
};

export type User = {
  id: string;
  name: string;
  position: string;
  image?: string;
  backimage?: string;
  about?: string;
  experience?: Experience[];
};

export type Experience = {
  id: string;
  title: string;
  companyname: string;
  companyimage?: string;
};
