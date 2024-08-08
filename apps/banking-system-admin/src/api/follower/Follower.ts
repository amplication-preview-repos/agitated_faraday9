import { User } from "../user/User";

export type Follower = {
  createdAt: Date;
  followerUser: string | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
