# Welcome to Moon Clothing App 
Stack includes:

- React Native
- React Navigation
- MobX State Tree
- TypeScript

File structure

├── app
│   ├── components
│   ├── i18n
│   ├── utils
│   ├── models
│   ├── navigators
│   ├── screens
│   ├── services
│   ├── theme
│   ├── app.tsx
├── storybook
│   ├── views
│   ├── index.ts
│   ├── storybook-registry.ts
│   ├── storybook.ts
│   ├── toggle-storybook.tsx
├── test
│   ├── __snapshots__
│   ├── storyshots.test.ts.snap
│   ├── mock-i18n.ts
│   ├── mock-reactotron.ts
│   ├── setup.ts
│   ├── storyshots.test.ts
├── README.md
├── android
│   ├── app
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── keystores
│   └── settings.gradle
├── ignite
│   ├── ignite.json
│   └── plugins
├── index.js
├── ios
│   ├── IgniteProject
│   ├── IgniteProject-tvOS
│   ├── IgniteProject-tvOSTests
│   ├── IgniteProject.xcodeproj
│   └── IgniteProjectTests
├── .env
└── package.json

```

### ./app directory

Included in an Ignite boilerplate project is the `app` directory. This is a directory you would normally have to create when using vanilla React Native.

The inside of the src directory looks similar to the following:

```
app
│── components
│── i18n
├── models
├── navigators
├── screens
├── services
├── theme
├── utils
└── app.tsx
```

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

**app.tsx** This is the entry point to the app. This is where you will find the main App component which renders the rest of the application.
