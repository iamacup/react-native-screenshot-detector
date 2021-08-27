# react-native-screenshot-detect

# This is a drop-in replacement for react-native-screenshot-detector with fixes for react-native > 0.60.0 which is no longer maintained

> Note: this project is designed to work with the newer version of React Native library imports, i.e. React Native >= 0.40.0, and will only work on iOS as Android does not provide the underlying functionality needed to track screenshots.

## Getting started

React Native < 0.60.0

```bash
npm install react-native-screenshot-detect
react-native link react-native-screenshot-detect
```

React Native >= 0.60.0

```bash
npm install react-native-screenshot-detect
npx pod-install
```

## Usage

Update the `AppDelegate.m` file to include the following:

# iOS

```objectivec
#import <RNScreenshotDetector/RNScreenshotDetector.h>

.........

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  // ... setup code

  // Somewhere React Native will have placed something like
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL...]

  // Somewhere below this you can setup the screenshot detector to listen for events
  RNScreenshotDetector* screenshotDetector = [[RNScreenshotDetector alloc] init];
  [screenshotDetector setupAndListen:rootView.bridge];
}
```

# In JS

```javascript
import { onTakeScreenshot } from "react-native-screenshot-detect";

const App = () => {
  useEffect(() => {
    const unsubscribe = onTakeScreenshot(() => {
      Alert.alert("Screenshot was taken");
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // ...
};
```
