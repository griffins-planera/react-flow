import { KeyCode } from '../types';
export interface UseKeyPressOptions {
    target: Document | HTMLElement | ShadowRoot | null;
}
declare const _default: (keyCode?: KeyCode | null, options?: UseKeyPressOptions) => boolean;
export default _default;
