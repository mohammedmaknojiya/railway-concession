import React from "react";

export type AppView = {
  isPhoneView: boolean;
  isTabView: boolean;
};

const initialAppViewValue: AppView = { isPhoneView: false, isTabView: false };
export const AppViewContext: React.Context<AppView> =
  React.createContext(initialAppViewValue);
