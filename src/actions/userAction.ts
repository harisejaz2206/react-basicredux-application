import { CHANGE_NAME, RESET_PROFILE } from "../types/actionTypes";

export const changeUserName = (name: string) => ({
  type: CHANGE_NAME,
  payload: name,
});

export const resetProfile = () => ({
  type: RESET_PROFILE,
});
