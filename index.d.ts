declare module "react-native-screenshot-detect" {
    import { NativeEventEmitter } from 'react-native';

    export function subscribe(cb: Function): NativeEventEmitter;
    export function unsubscribe(eventEmitter: NativeEventEmitter): void;
}
