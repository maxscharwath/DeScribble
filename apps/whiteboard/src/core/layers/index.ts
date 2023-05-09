import {createLayerUtils, type LayerUtilsKey, type LayerUtilsType, makeGetLayerUtil} from '~core/layers/BaseLayerUtil';
import {RectangleLayerUtil} from '~core/layers/Rectangle';
import {CircleLayerUtil} from '~core/layers/Circle';
import {PathLayerUtil} from '~core/layers/Path';
import {ImageLayerUtil} from '~core/layers/Image';
import {TextLayerUtil} from '~core/layers/Text';

export const Circle = new CircleLayerUtil();
export const Rectangle = new RectangleLayerUtil();
export const Path = new PathLayerUtil();
export const Image = new ImageLayerUtil();
export const Text = new TextLayerUtil();

export const layerUtils = createLayerUtils(
	Circle,
	Rectangle,
	Path,
	Image,
	Text,
);

export type LayerType = LayerUtilsKey<typeof layerUtils>;
export type Layer = LayerUtilsType<typeof layerUtils>;

export const getLayerUtil = makeGetLayerUtil(layerUtils);
