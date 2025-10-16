export type LoggedOutStackType = {
  LOGIN_PAGE: undefined;
  REGISTRATION_PAGE: undefined;
};

export type LoggedInStackType = {
  TAB_BAR_STACK: undefined;
};

export type DrawerStack = {
  TAB_BAR_STACK: undefined;
};

export type TabBarStackType = {
  HOME_PAGE: undefined;
  FAVORITE_PAGE: undefined;
};

const LoggenOutStackScreens: LoggedOutStackType = {
  LOGIN_PAGE: undefined,
  REGISTRATION_PAGE: undefined,
};

const LoggenInStackScreens: LoggedInStackType = {
  TAB_BAR_STACK: undefined,
};

export type RootStackNavigation = {
  LOGGED_IN_STACK: { screens?: keyof typeof LoggenInStackScreens };
  LOGGED_OUT_STACK: { screens?: keyof typeof LoggenOutStackScreens };
};
