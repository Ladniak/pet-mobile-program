export type LoggedOutStackType = {
  LOGIN_PAGE: undefined;
  REGISTRATION_PAGE: undefined;
};

export type LoggedInStackType = {
  HOME_PAGE: undefined;
};

const LoggenOutStackScreens: LoggedOutStackType = {
  LOGIN_PAGE: undefined,
  REGISTRATION_PAGE: undefined,
};

const LoggenInStackScreens: LoggedInStackType = {
  HOME_PAGE: undefined,
};

export type RootStackNavigation = {
  LOGGED_IN_STACK: { screens?: keyof typeof LoggenInStackScreens };
  LOGGED_OUT_STACK: { screens?: keyof typeof LoggenOutStackScreens };
};
