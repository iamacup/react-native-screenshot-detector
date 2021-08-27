declare module 'react-native-screenshot-detector' {
    export type Unsubscribe = () => void;
    export function onTakeScreenshot(cb: () => void): Unsubscribe;
}
