import {NativeEventEmitter, NativeModules} from 'react-native';

const { RNScreenshotDetector } = NativeModules;

export const SCREENSHOT_EVENT = 'ScreenshotTaken';

export function onTakeScreenshot(listener) {
  const eventEmitter = new NativeEventEmitter(RNScreenshotDetector);
  const eventSubscription = eventEmitter.addListener(
      SCREENSHOT_EVENT,
      listener,
  );
  const unsubscribe = () => {
    eventSubscription.remove();
  };

  return unsubscribe;
}

