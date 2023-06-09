import {QuadTree} from '~core/utils/QuadTree';
import {getLayerUtil, type Layer} from '~core/layers';
import React from 'react';
import {type WhiteboardApp} from '~core/WhiteboardApp';

export const useLayersTree = (app: WhiteboardApp, layerIds: string[]) => React.useMemo(() => {
	const tree = new QuadTree<Layer>();
	for (const layer of app.document.layers.get(layerIds)) {
		const utils = getLayerUtil(layer);
		tree.insert({
			bounds: utils.getBounds(layer as never),
			data: layer,
		});
	}

	return tree;
}, [app, layerIds]);
