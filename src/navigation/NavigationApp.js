import * as React from 'react';
import { StackActions, CommonActions } from '@react-navigation/native';

export const navigationRef = React.createRef();

export const mainTab = () => {
  return navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: 'MainTabs' }],
    })
  );
};

export function resetStack(routeName, params) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: routeName }],
      params,
    })
  );
  navigationRef.current?.navigate(routeName, params);
}

export function goBack() {
  navigationRef.current?.dispatch(StackActions.pop(1));
}