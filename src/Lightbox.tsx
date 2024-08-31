import * as React from 'react';
import { ReactNode, useState } from "react";
import { Close } from './close';
import './index.css';

interface LightboxProps {
	children: ReactNode;
}

export function Lightbox({ children }: LightboxProps) {
	const [showLightbox, setShowLightbox] = useState(true);
	const closeLightbox = () => {
		setShowLightbox(false);
	};

	return (
		<>
			{showLightbox && (
				<div
					role="lightbox"
					aria-hidden="true"
					className="fixed inset-0 z-99 flex items-center justify-center bg-black/60"
				>
					<dialog className="w-fit flex items-center justify-center p-8 rounded-md relative bg-white">
						<div
							className="absolute -top-2 -right-2 text-white bg-black rounded-full p-1 flex items-center justify-center cursor-pointer"
							aria-label="close lightbox"
							onClick={() => closeLightbox()}
						>
							<Close />
						</div>
						<div className="flex flex-col items-start justify-start max-w-2xl max-h-[350px] overflow-y-auto">
							{children}
						</div>
					</dialog>
				</div>
			)}
		</>
	);
}
