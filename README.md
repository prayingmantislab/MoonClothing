# Welcome to Moon Clothing App 
Stack includes:

- React Native
- React Navigation
- MobX State Tree
- TypeScript

File structure:

**components**
This is where the components live. 

**i18n**
This is where translations live using `react-native-i18n`.

**models**
This is where the app's models lives. Each model has a directory which will contain the `mobx-state-tree` model file, test file, and any other supporting files like actions, types, etc.

**navigators**
This is where `react-navigation` navigators lives.

**screens**
This is where screen components lives. 
**services**
Any services that interface with the outside world lives here (REST APIs, Push Notifications, etc.).

**theme**
Here lives the theme for the application, including spacing, colors, and typography.

**utils**
This is a the place for miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truely shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.

**app.tsx** is the entry point to the app.


** To run the App 

on iOS
npx react-native run-ios 

on Android
npx react-native run-android
