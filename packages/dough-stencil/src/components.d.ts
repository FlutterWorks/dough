/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DoughAllPurposeFlour {
        /**
          * Set active to true when you want to manipulate the dough. Set to false when you want it to smooth back to its original position.
          * @type {boolean}
         */
        "active": boolean;
        /**
          * The adhesion of the dough. The higher the number, the more the dough will stick to its original position.
          * @type {number}
         */
        "adhesion": number;
        /**
          * The origin X coordinate of the dough. This is the point that the dough will try to return to.
          * @type {number}
         */
        "originX": number;
        /**
          * The origin Y coordinate of the dough. This is the point that the dough will try to return to.
          * @type {number}
         */
        "originY": number;
        /**
          * The target X coordinate of the dough. This is the point that the dough will try to move to.
          * @type {number}
         */
        "targetX": number;
        /**
          * The target Y coordinate of the dough. This is the point that the dough will try to move to.
          * @type {number}
         */
        "targetY": number;
        /**
          * The viscosity of the dough. The higher the number, the more the dough will resist movement.
          * @type {number}
         */
        "viscosity": number;
    }
    interface DoughDraggable {
        /**
          * The adhesion of the dough. The higher the number, the more the dough will stick to its original position.
          * @type {number}
         */
        "adhesion": number;
        /**
          * The viscosity of the dough. The higher the number, the more the dough will resist movement.
          * @type {number}
         */
        "viscosity": number;
    }
    interface DoughPressable {
        /**
          * The adhesion of the dough. The higher the number, the more the dough will stick to its original position.
          * @type {number}
         */
        "adhesion": number;
        /**
          * The viscosity of the dough. The higher the number, the more the dough will resist movement.
          * @type {number}
         */
        "viscosity": number;
    }
}
export interface DoughDraggableCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDoughDraggableElement;
}
declare global {
    interface HTMLDoughAllPurposeFlourElement extends Components.DoughAllPurposeFlour, HTMLStencilElement {
    }
    var HTMLDoughAllPurposeFlourElement: {
        prototype: HTMLDoughAllPurposeFlourElement;
        new (): HTMLDoughAllPurposeFlourElement;
    };
    interface HTMLDoughDraggableElementEventMap {
        "doughDragStart": { x: number, y: number };
        "doughDragMove": { x: number, y: number };
        "doughDragEnd": { x: number, y: number };
    }
    interface HTMLDoughDraggableElement extends Components.DoughDraggable, HTMLStencilElement {
        addEventListener<K extends keyof HTMLDoughDraggableElementEventMap>(type: K, listener: (this: HTMLDoughDraggableElement, ev: DoughDraggableCustomEvent<HTMLDoughDraggableElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLDoughDraggableElementEventMap>(type: K, listener: (this: HTMLDoughDraggableElement, ev: DoughDraggableCustomEvent<HTMLDoughDraggableElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLDoughDraggableElement: {
        prototype: HTMLDoughDraggableElement;
        new (): HTMLDoughDraggableElement;
    };
    interface HTMLDoughPressableElement extends Components.DoughPressable, HTMLStencilElement {
    }
    var HTMLDoughPressableElement: {
        prototype: HTMLDoughPressableElement;
        new (): HTMLDoughPressableElement;
    };
    interface HTMLElementTagNameMap {
        "dough-all-purpose-flour": HTMLDoughAllPurposeFlourElement;
        "dough-draggable": HTMLDoughDraggableElement;
        "dough-pressable": HTMLDoughPressableElement;
    }
}
declare namespace LocalJSX {
    interface DoughAllPurposeFlour {
        /**
          * Set active to true when you want to manipulate the dough. Set to false when you want it to smooth back to its original position.
          * @type {boolean}
         */
        "active"?: boolean;
        /**
          * The adhesion of the dough. The higher the number, the more the dough will stick to its original position.
          * @type {number}
         */
        "adhesion"?: number;
        /**
          * The origin X coordinate of the dough. This is the point that the dough will try to return to.
          * @type {number}
         */
        "originX"?: number;
        /**
          * The origin Y coordinate of the dough. This is the point that the dough will try to return to.
          * @type {number}
         */
        "originY"?: number;
        /**
          * The target X coordinate of the dough. This is the point that the dough will try to move to.
          * @type {number}
         */
        "targetX"?: number;
        /**
          * The target Y coordinate of the dough. This is the point that the dough will try to move to.
          * @type {number}
         */
        "targetY"?: number;
        /**
          * The viscosity of the dough. The higher the number, the more the dough will resist movement.
          * @type {number}
         */
        "viscosity"?: number;
    }
    interface DoughDraggable {
        /**
          * The adhesion of the dough. The higher the number, the more the dough will stick to its original position.
          * @type {number}
         */
        "adhesion"?: number;
        "onDoughDragEnd"?: (event: DoughDraggableCustomEvent<{ x: number, y: number }>) => void;
        "onDoughDragMove"?: (event: DoughDraggableCustomEvent<{ x: number, y: number }>) => void;
        "onDoughDragStart"?: (event: DoughDraggableCustomEvent<{ x: number, y: number }>) => void;
        /**
          * The viscosity of the dough. The higher the number, the more the dough will resist movement.
          * @type {number}
         */
        "viscosity"?: number;
    }
    interface DoughPressable {
        /**
          * The adhesion of the dough. The higher the number, the more the dough will stick to its original position.
          * @type {number}
         */
        "adhesion"?: number;
        /**
          * The viscosity of the dough. The higher the number, the more the dough will resist movement.
          * @type {number}
         */
        "viscosity"?: number;
    }
    interface IntrinsicElements {
        "dough-all-purpose-flour": DoughAllPurposeFlour;
        "dough-draggable": DoughDraggable;
        "dough-pressable": DoughPressable;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "dough-all-purpose-flour": LocalJSX.DoughAllPurposeFlour & JSXBase.HTMLAttributes<HTMLDoughAllPurposeFlourElement>;
            "dough-draggable": LocalJSX.DoughDraggable & JSXBase.HTMLAttributes<HTMLDoughDraggableElement>;
            "dough-pressable": LocalJSX.DoughPressable & JSXBase.HTMLAttributes<HTMLDoughPressableElement>;
        }
    }
}
