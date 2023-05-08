import React, {memo} from 'react';
import {Reorder} from 'framer-motion';
import {ClosedEyeIcon, OpenEyeIcon, TargetIcon, TrashIcon} from 'ui/components/Icons';
import {Button} from '~components/ui/Buttons';
import {Spacer} from '~components/ui/Utils';
import {useWhiteboard} from '~core/hooks/useWhiteboard';
import {shallow} from 'zustand/shallow';
import {PreviewLayer} from '~components/Layer';
import {Sidebar} from '~components/ui/Sidebar';
import {layerSelector, layersSelector} from '~core/selectors';

export const LayersSidebar = () => {
	const app = useWhiteboard();
	const layerIds = app.useStore(state =>
		Object.values(layersSelector(state))
			.sort((a, b) => (b.zIndex ?? Infinity) - (a.zIndex ?? Infinity))
			.map(layer => layer.id)
	, shallow);
	function handleLayerReorder(layers: string[]) {
		const newLayers = Object.fromEntries(layers.map((layer, index, {length}) => [layer, {zIndex: length - index}]));
		app.patchDocument({
			layers: newLayers,
		});
	}

	if (layerIds.length === 0) {
		return null;
	}

	return (
		<Sidebar title='Layers'>
			<Reorder.Group
				axis='y'
				values={layerIds}
				onReorder={handleLayerReorder}
				className='flex w-full flex-col space-y-1 overflow-y-auto'
				layoutScroll
			>
				{layerIds.map(layerId => (
					<Reorder.Item key={layerId} value={layerId}
						className='flex w-full items-center space-x-2 rounded-lg bg-gray-200/50 p-1 backdrop-blur hover:bg-gray-200 dark:bg-gray-800/50 dark:hover:bg-gray-800'>
						<LayerItem layerId={layerId}/>
					</Reorder.Item>
				))}
			</Reorder.Group>
		</Sidebar>
	);
};

const LayerItem = memo(({layerId}: {layerId: string}) => {
	const app = useWhiteboard();
	const layer = app.useStore(layerSelector(layerId));
	function handleLayerVisibilityChange() {
		app.patchDocument({
			layers: {
				[layer.id]: {
					visible: !layer.visible,
				},
			},
		}, 'set_layer_visibility');
	}

	function handleLayerDelete() {
		app.removeLayer(layer.id);
	}

	function handleTargetLayer() {
		//
	}

	return (
		<>
			<PreviewLayer
				layer={layer}
				className='h-8 w-8 shrink-0 rounded-lg border border-gray-300 bg-gray-100/50 p-0.5 shadow-sm dark:border-gray-600 dark:bg-gray-800/50'
			/>
			<span
				className='overflow-hidden text-ellipsis whitespace-nowrap text-sm dark:text-gray-200'
				title={layer.id}
			>
				{layer.type}
			</span>
			<Spacer />
			<Button
				aria-label='Target layer'
				onClick={handleTargetLayer}
			>
				<TargetIcon/>
			</Button>
			<Button
				aria-label='Toggle layer visibility'
				active={layer.visible}
				activeSlot={<OpenEyeIcon/>}
				inactiveSlot={<ClosedEyeIcon/>}
				onClick={handleLayerVisibilityChange}
			/>
			<Button
				aria-label='Delete layer'
				onClick={handleLayerDelete}
				className='text-red-900 dark:text-red-500'
			>
				<TrashIcon/>
			</Button>
		</>
	);
});

LayerItem.displayName = 'LayerItem';