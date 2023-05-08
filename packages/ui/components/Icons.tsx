import React, {type SVGProps} from 'react';

export const PathIcon = (props: SVGProps<SVGSVGElement>) => (<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}><path fill='currentColor' d='m18.85 10.39l1.06-1.06c.78-.78.78-2.05 0-2.83L18.5 5.09c-.78-.78-2.05-.78-2.83 0l-1.06 1.06l4.24 4.24zm-5.66-2.83l-9.05 9.05a.5.5 0 0 0-.14.35v3.54c0 .28.22.5.5.5h3.54c.13 0 .26-.05.35-.15l9.05-9.05l-4.25-4.24zM19 17.5c0 2.19-2.54 3.5-5 3.5c-.55 0-1-.45-1-1s.45-1 1-1c1.54 0 3-.73 3-1.5c0-.47-.48-.87-1.23-1.2l1.48-1.48c1.07.63 1.75 1.47 1.75 2.68zM4.58 13.35C3.61 12.79 3 12.06 3 11c0-1.8 1.89-2.63 3.56-3.36C7.59 7.18 9 6.56 9 6c0-.41-.78-1-2-1c-1.26 0-1.8.61-1.83.64c-.35.41-.98.46-1.4.12a.992.992 0 0 1-.15-1.38C3.73 4.24 4.76 3 7 3s4 1.32 4 3c0 1.87-1.93 2.72-3.64 3.47C6.42 9.88 5 10.5 5 11c0 .31.43.6 1.07.86l-1.49 1.49z'/></svg>);

export const RectangleIcon = (props: SVGProps<SVGSVGElement>) => (<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}><path fill='currentColor' d='M4 6h16v12H4z' opacity='.3'/><path fill='currentColor' d='M2 4v16h20V4H2zm18 14H4V6h16v12z'/></svg>);

export const CircleIcon = (props: SVGProps<SVGSVGElement>) => (<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 48 48' {...props}><mask id='ipTRound0'><circle cx='24' cy='24' r='20' fill='#555' stroke='#fff' strokeWidth='4'/></mask><path fill='currentColor' d='M0 0h48v48H0z' mask='url(#ipTRound0)'/></svg>);

export const ImageIcon = (props: SVGProps<SVGSVGElement>) => (<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}><path fill='currentColor' d='M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z'/></svg>);

export const MoveIcon = (props: SVGProps<SVGSVGElement>) => (<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}><path fill='currentColor' d='M13 6v5h5V7.75L22.25 12L18 16.25V13h-5v5h3.25L12 22.25L7.75 18H11v-5H6v3.25L1.75 12L6 7.75V11h5V6H7.75L12 1.75L16.25 6H13Z'/></svg>);

export const SelectIcon = (props: SVGProps<SVGSVGElement>) => (<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}><path fill='currentColor' d='M15.15 21.375q-.575.275-1.15.063t-.85-.788l-3-6.45l-2.325 3.25q-.425.6-1.125.375t-.7-.95V4.05q0-.625.563-.9t1.062.125l10.1 7.95q.575.425.338 1.1T17.1 13h-4.2l2.975 6.375q.275.575.063 1.15t-.788.85Z'/></svg>);

export const RedoIcon = (props: SVGProps<SVGSVGElement>) => (<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}><path fill='currentColor' d='M8 19q-.425 0-.713-.288Q7 18.425 7 18t.287-.712Q7.575 17 8 17h6.1q1.575 0 2.737-1Q18 15 18 13.5T16.837 11q-1.162-1-2.737-1H7.8l1.9 1.9q.275.275.275.7q0 .425-.275.7q-.275.275-.7.275q-.425 0-.7-.275L4.7 9.7q-.15-.15-.213-.325Q4.425 9.2 4.425 9t.062-.375Q4.55 8.45 4.7 8.3l3.6-3.6q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7L7.8 8h6.3q2.425 0 4.163 1.575Q20 11.15 20 13.5q0 2.35-1.737 3.925Q16.525 19 14.1 19Z'/></svg>);

export const UndoIcon = (props: SVGProps<SVGSVGElement>) => (<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}><path fill='currentColor' d='M9.9 19q-2.425 0-4.162-1.575Q4 15.85 4 13.5q0-2.35 1.738-3.925Q7.475 8 9.9 8h6.3l-1.9-1.9q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l3.6 3.6q.15.15.213.325q.062.175.062.375t-.062.375q-.063.175-.213.325l-3.6 3.6q-.275.275-.7.275q-.425 0-.7-.275q-.275-.275-.275-.7q0-.425.275-.7l1.9-1.9H9.9q-1.575 0-2.737 1Q6 12 6 13.5T7.163 16q1.162 1 2.737 1H16q.425 0 .712.288q.288.287.288.712t-.288.712Q16.425 19 16 19Z'/></svg>);

export const TrashIcon = (props: SVGProps<SVGSVGElement>) => (<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}><path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6'></path></svg>);

export const WASMIcon = (props: SVGProps<SVGSVGElement>) => (<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32' {...props}><path fill='#654ff0' d='M19.153 2.35v.15a3.2 3.2 0 1 1-6.4 0v-.15H2v27.919h27.919V2.35Z'/><path fill='#fff' d='M8.485 17.4h1.85l1.265 6.723h.023L13.14 17.4h1.731l1.371 6.81h.027l1.44-6.81h1.815l-2.358 9.885h-1.837l-1.36-6.728h-.036l-1.456 6.728h-1.87Zm13.124 0h2.917l2.9 9.885h-1.911l-.63-2.2h-3.323l-.486 2.2h-1.859Zm1.11 2.437l-.807 3.627h2.512l-.924-3.632Z'/></svg>);

export const TargetIcon = (props: SVGProps<SVGSVGElement>) => (<svg xmlns='http://www.w3.org/2000/svg' width='1rem' height='1rem' viewBox='0 0 24 24' {...props}><circle cx='12' cy='12' r='3' fill='currentColor'/><path fill='currentColor' d='M13 4.069V2h-2v2.069A8.008 8.008 0 0 0 4.069 11H2v2h2.069A8.007 8.007 0 0 0 11 19.931V22h2v-2.069A8.007 8.007 0 0 0 19.931 13H22v-2h-2.069A8.008 8.008 0 0 0 13 4.069zM12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6s6 2.691 6 6s-2.691 6-6 6z'/></svg>);

export const OpenEyeIcon = (props: SVGProps<SVGSVGElement>) => (<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}><path fill='currentColor' d='M1.182 12C2.122 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9c-.94 5.12-5.427 9-10.819 9c-5.392 0-9.878-3.88-10.818-9ZM12 17a5 5 0 1 0 0-10a5 5 0 0 0 0 10Zm0-2a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z'/></svg>);

export const ClosedEyeIcon = (props: SVGProps<SVGSVGElement>) => (<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}><path fill='currentColor' d='M4.52 5.935L1.394 2.808l1.414-1.414l19.799 19.798l-1.414 1.415l-3.31-3.31A10.949 10.949 0 0 1 12 21c-5.392 0-9.878-3.88-10.818-9A10.982 10.982 0 0 1 4.52 5.935Zm10.238 10.237l-1.464-1.464a3 3 0 0 1-4.001-4.001L7.829 9.243a5 5 0 0 0 6.929 6.929ZM7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.947 10.947 0 0 1-2.012 4.593l-3.86-3.86a5 5 0 0 0-5.68-5.68L7.975 3.76Z'/></svg>);

export const LayersIcon = (props: SVGProps<SVGSVGElement>) => (<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 512 512' {...props}><path fill='currentColor' d='M256 256c-13.47 0-26.94-2.39-37.44-7.17l-148-67.49C63.79 178.26 48 169.25 48 152.24s15.79-26 22.58-29.12l149.28-68.07c20.57-9.4 51.61-9.4 72.19 0l149.37 68.07c6.79 3.09 22.58 12.1 22.58 29.12s-15.79 26-22.58 29.11l-148 67.48C282.94 253.61 269.47 256 256 256Zm176.76-100.86Z'></path><path fill='currentColor' d='M441.36 226.81L426.27 220l-38.77 17.74l-94 43c-10.5 4.8-24 7.19-37.44 7.19s-26.93-2.39-37.42-7.19l-94.07-43L85.79 220l-15.22 6.84C63.79 229.93 48 239 48 256s15.79 26.08 22.56 29.17l148 67.63C229 357.6 242.49 360 256 360s26.94-2.4 37.44-7.19l147.87-67.61c6.81-3.09 22.69-12.11 22.69-29.2s-15.77-26.07-22.64-29.19Z'></path><path fill='currentColor' d='m441.36 330.8l-15.09-6.8l-38.77 17.73l-94 42.95c-10.5 4.78-24 7.18-37.44 7.18s-26.93-2.39-37.42-7.18l-94.07-43L85.79 324l-15.22 6.84C63.79 333.93 48 343 48 360s15.79 26.07 22.56 29.15l148 67.59C229 461.52 242.54 464 256 464s26.88-2.48 37.38-7.27l147.92-67.57c6.82-3.08 22.7-12.1 22.7-29.16s-15.77-26.07-22.64-29.2Z'></path></svg>);

export const HandIcon = (props: SVGProps<SVGSVGElement>) => (<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 256 256' {...props}><path fill='currentColor' d='M216 64v90.93c0 46.2-36.85 84.55-83 85.06a83.71 83.71 0 0 1-60.4-24.59C50.79 192.33 26.15 136 26.15 136a16 16 0 0 1 6.53-22.23c7.66-4 17.1-.84 21.4 6.62l21 36.44a6.09 6.09 0 0 0 6 3.09h.12a8.19 8.19 0 0 0 6.8-8.18V48a16 16 0 0 1 16.77-16c8.61.4 15.23 7.82 15.23 16.43V112a8 8 0 0 0 8.53 8a8.17 8.17 0 0 0 7.47-8.25V32a16 16 0 0 1 16.77-16c8.61.4 15.23 7.82 15.23 16.43V120a8 8 0 0 0 8.53 8a8.17 8.17 0 0 0 7.47-8.25v-55.3c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 216 64Z'/></svg>);
