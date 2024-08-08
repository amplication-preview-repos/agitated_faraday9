import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FollowerListRelationFilter } from "../follower/FollowerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  followers?: FollowerListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
