import {PAGFile} from 'libpag/types/pag-file';
import {PAGView} from 'libpag/types/pag-view';

declare global {
    interface BMapGLInstance {
        Map: BMapGLGenerateConstructor;
        Point: BMapGLPointConstructor;
        Icon: BMapGLIconConstructor;
        Size: BMapGLSizeConstructor;
        Marker: BMapGLMarkerConstructor;
        CustomOverlay: BMapGLCustomLayerConstructor;
    }

    interface BMapGLGenerateConstructor {
        new(id: string): BMapInstance;

        readonly prototype: any[];
    }

    interface BMapGLPointConstructor {
        new(x: number, y: number): BMapPointInstance;

        readonly prototype: any[];
    }

    interface BMapGLIconConstructor {
        new(path: string, size: BMapSizeInstance, options: {
            anchor: BMapIconInstance
        }): BMapIconInstance;

        readonly prototype: any[];
    }

    interface BMapGLSizeConstructor {
        new(width: number, height: number): BMapSizeInstance;

        readonly prototype: any[];
    }

    interface BMapGLMarkerConstructor {
        new(point: BMapPointInstance, options: {
            icon: BMapIconInstance
        }): BMapMarkerInstance;

        readonly prototype: any[];
    }

    interface BMapGLCustomLayerConstructor {
        new(fun: () => Element, options: {
            offsetX?: number
            offsetY?: number
            point: BMapPointInstance
            opacity?: number
            map?: BMapInstance
        }): BMapCustomLayerInstance;

        readonly prototype: any[];
    }

    interface BMapPointInstance {

    }

    interface BMapIconInstance {

    }

    interface BMapSizeInstance {

    }

    interface BMapMarkerInstance {

    }

    interface BMapCustomLayerInstance {

    }

    interface BMapEventMap {
        'tilesloaded': string;
    }

    interface BMapInstance {
        centerAndZoom(point: BMapPointInstance, level: number): void;

        enableScrollWheelZoom(enabled: boolean): void;

        setMapType(mapType: string): void;

        addEventListener<K extends keyof BMapEventMap>(type: K, listener: (this: Window, ev: BMapEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;

        addOverlay(overlay: BMapMarkerInstance | BMapCustomLayerInstance): void;

        removeOverlay(overlay: BMapMarkerInstance | BMapCustomLayerInstance): void;

        destroy(): void;
    }

    declare var BMapGL: BMapGLInstance;

    declare interface PAGFileGlobal extends PAGFile{

    }

    declare interface PAGViewGlobal extends PAGView{

    }
}

export {
    BMapGLInstance,
    BMapPointInstance,
    BMapIconInstance,
    BMapSizeInstance,
    BMapMarkerInstance,
    BMapCustomLayerInstance,
    BMapEventMap,
    BMapInstance,
    BMapGL,
    PAGFileGlobal,
    PAGViewGlobal
}
