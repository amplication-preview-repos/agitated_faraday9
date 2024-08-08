import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FollowerCreateInput = {
  followerUser?: string | null;
  user?: UserWhereUniqueInput | null;
};
