import {useCamera, useWhiteboardContext, whiteboardStore} from '../components/WhiteboardContext';
import {type TouchEvent, useRef} from 'react';
import {useEvents} from './useEvents';

export const useTouchZoom = () => {
	const {canvasRef, currentTool} = useWhiteboardContext();
	const {camera, setCamera} = useCamera();
	const initialDistance = useRef(0);
	const initialCurrentTool = useRef(currentTool);
	const lastPosition = useRef<{x: number; y: number} | null>(null);

	useEvents(canvasRef, {
		touchmove(e: TouchEvent) {
			if (e.touches.length === 2) {
				const currentX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
				const currentY = (e.touches[0].clientY + e.touches[1].clientY) / 2;

				let {x} = camera;
				let {y} = camera;

				if (lastPosition.current) {
					x += currentX - lastPosition.current.x;
					y += currentY - lastPosition.current.y;
				}

				const dx = e.touches[0].clientX - e.touches[1].clientX;
				const dy = e.touches[0].clientY - e.touches[1].clientY;
				const distance = Math.hypot(dx, dy);

				const scaleFactor = distance / initialDistance.current;
				const newScale = Math.max(0.1, Math.min(10, camera.scale * scaleFactor));

				x = currentX - ((currentX - x) * newScale / camera.scale);
				y = currentY - ((currentY - y) * newScale / camera.scale);

				setCamera({x, y, scale: newScale});

				initialDistance.current = distance;
				lastPosition.current = {x: currentX, y: currentY};
			}
		},
		touchstart(e: TouchEvent) {
			if (e.touches.length === 2) {
				lastPosition.current = {
					x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
					y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
				};

				const dx = e.touches[0].clientX - e.touches[1].clientX;
				const dy = e.touches[0].clientY - e.touches[1].clientY;
				initialDistance.current = Math.hypot(dx, dy);

				if (currentTool !== null) {
					initialCurrentTool.current = currentTool;
					whiteboardStore.setState({currentTool: null});
				}
			}
		},
		touchend(e: TouchEvent) {
			if (e.touches.length < 2 && currentTool === null) {
				whiteboardStore.setState({currentTool: initialCurrentTool.current});
			}

			lastPosition.current = null;
		},
	});
};