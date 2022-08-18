import {createNavigationContainerRef} from '@react-navigation/native';
// import {CommonActions} from '@react-navigation/core';

export const navigationRef = createNavigationContainerRef();

// export function navigate(name :any, params :Anu) {
//   if (navigationRef.isReady()) {
//     navigationRef.navigate(name, params);
//   }
// }

// export function reset(resetAction) {
//   if (navigationRef.isReady()) {
//     navigationRef.dispatch(CommonActions.reset(resetAction));
//   }
// }

// export const changeStack = stackName => {
//   resetRoot(stackName);
// };

// const resetRoot = routeName => {
//   navigationRef.current?.resetRoot({
//     index: 0,
//     routes: [{name: routeName}],
//   });
// };
