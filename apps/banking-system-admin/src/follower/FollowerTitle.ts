import { Follower as TFollower } from "../api/follower/Follower";

export const FOLLOWER_TITLE_FIELD = "followerUser";

export const FollowerTitle = (record: TFollower): string => {
  return record.followerUser?.toString() || String(record.id);
};
