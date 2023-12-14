This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Setting-Up Project

## Clone the Project
First, you will need to clone the project by following the command:
```bash
git clone https://github.com/codeprakhar25/Remittance-Transfer-App.git
```

Then run the command to install all dependencies:
```bash
cd Remittance-Transfer-App
npm i
```

# Starting the application

>**Note**: IMPORTANT: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) and [Android Studio - Setup](https://developer.android.com/studio)  Setup instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly, provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode, respectively.


## Congratulations! :tada:

You've successfully run your React Native App. :partying_face:

## Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Authentication flow and API integration

I utilized Google APIs(without Firebase) for Google authentication and the react-native-google-signin library to integrate it into the application.
Used @reduxjs/toolkit library for state management @reduxjs/toolkit/query/react for data fetching in the application. These provide hooks(like ) that are part of the overall Query API provided by Redux Toolkit. They abstract away much of the boilerplate code associated with data fetching and state management, making it easier to integrate data fetching into your React components while keeping the application state in sync with the data from your API.


# Design Decisions

I researched existing Remittance Transfer Applications, focusing primarily on Remitly. Based on my findings, I decided to structure the application's UI into three main sections: Home, History, and Profile. Additionally, there is a login screen at the start of the application. On the Home screen, I incorporated a 'Transfer Money' button, which, when clicked, opens a new screen for users to fill in the necessary details.

## Libraries Used

    "@react-native-async-storage/async-storage
    "@react-native-community/masked-view
    "@react-native-material/core"
    "@react-native-picker/picker"
    "@react-navigation/bottom-tabs"
    "@react-navigation/native"
    "@react-navigation/native-stack"
    "@react-navigation/stack"
    "@reduxjs/toolkit"
    "react"
    "react-native"
    "react-native-gesture-handler"
    "react-native-google-signin"
    "react-native-safe-area-context"
    "react-native-screens"
    "react-navigation-stack"
    "react-redux"
