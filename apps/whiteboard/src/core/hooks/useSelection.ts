import {useWhiteboard} from '~core/hooks';
import {shallow} from 'zustand/shallow';
import {getLayerUtil} from '~core/layers';
import {type Bounds} from '~core/types';

export const useSelection = () => {
	const app = useWhiteboard();
	const selectedLayers = app.useStore(state => state.appState.selectedLayers, shallow);
	const status = app.useStore(state => state.appState.status);
	const layers = app.getLayers(selectedLayers);

	let bounds = null;

	if (layers.length > 0 && status !== 'translating' && status !== 'resizing') {
		const firstLayerBounds = getLayerUtil(layers[0]).getBounds(layers[0] as never);
		bounds = layers.slice(1).reduce<Bounds>((bounds, layer) => {
			const layerBounds = getLayerUtil(layer).getBounds(layer as never);
			return {
				x: Math.min(bounds.x, layerBounds.x),
				y: Math.min(bounds.y, layerBounds.y),
				width: Math.max(bounds.x + bounds.width, layerBounds.x + layerBounds.width) - Math.min(bounds.x, layerBounds.x),
				height: Math.max(bounds.y + bounds.height, layerBounds.y + layerBounds.height) - Math.min(bounds.y, layerBounds.y),
			};
		}, firstLayerBounds);
	}

	return {bounds, selectedLayers: new Set(selectedLayers)};
};

