export const UserProfileSetType = "USER_PROFILE_SET";

export interface UserProfilePayLoad {
  id: string;
  userName: string;
}

export interface UserProfileAction {
  type: string;
  payload: UserProfilePayLoad | null;
}

export const UserProfileReducer = (
  state: any = null,
  action: UserProfileAction
): UserProfilePayLoad | null => {
  switch (action.type) {
    case UserProfileSetType:
      return action.payload;
    default:
      return state;
  }
};
