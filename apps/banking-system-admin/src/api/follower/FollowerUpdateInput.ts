import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FollowerUpdateInput = {
  followerUser?: string | null;
  user?: UserWhereUniqueInput | null;
};
