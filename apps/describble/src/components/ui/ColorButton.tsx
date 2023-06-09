import React from 'react';
import {clsx} from 'clsx';

type ColorButtonProps = {
	selected: boolean;
	color: string;
	onClick: (color: string) => void;
};

export const ColorButton = ({
	color,
	onClick,
	selected,
	...props
}: ColorButtonProps & React.ComponentProps<'button'>) => (
	<button
		type='button'
		className={clsx(
			'rounded-full border border-black/20 bg-gray-200 p-3 transition-all',
			'hover:scale-110',
			'active:scale-90',
			selected && 'ring-2 ring-black/20 ring-offset-2',
		)}
		style={{backgroundColor: color}}
		onClick={() => {
			onClick(color);
		}}
		{...props}
	/>
);
