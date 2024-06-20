// components/CEditorConsole.tsx
'use client';
import { useState, useRef, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import Script from 'next/script';
import Terminal from './Terminal';
import { cp } from 'fs';

interface CEditorConsoleProps {
	isVisible: boolean;
}

const cprog = `
#include <stdio.h>
int main() {
   // printf() displays the string inside quotation
   printf("Hello, World!\\n");
   return 0;
}
`;

const CEditorConsole: React.FC<CEditorConsoleProps> = ({
	isVisible: initialVisibility,
}) => {
	const [isScriptLoaded, setIsScriptLoaded] = useState(false);
	const [picocjs, setPicocjs] = useState<any>(null);
	const [output, setOutput] = useState<string>(''); // State to hold the output
	const [isVisible, setIsVisible] = useState(initialVisibility);
	const [editorWidth, setEditorWidth] = useState(50); // Percentage of the width
	const containerRef = useRef<HTMLDivElement>(null);
	const editorRef = useRef<any>(null);

	function handleEditorDidMount(editor: any, _: any) {
		editorRef.current = editor;
	}

	useEffect(() => {
		if (isScriptLoaded) {
			const loadedPicocjs = (window as any)['picocjs'];
			if (loadedPicocjs) {
				setPicocjs(loadedPicocjs);
				console.log(
					'PicoC JS library is loaded:',
					loadedPicocjs
				);
			}
		}
	}, [isScriptLoaded]);

	const toggleEditorVisibility = () => {
		setIsVisible(!isVisible);
	};

	const handleMouseDown = (e: React.MouseEvent) => {
		e.preventDefault();
		const startX = e.clientX;
		const startWidth = editorWidth;

		const handleMouseMove = (event: MouseEvent) => {
			if (containerRef.current) {
				const newWidth =
					startWidth -
					((event.clientX - startX) /
						window.innerWidth) *
						100;
				setEditorWidth(
					Math.min(Math.max(newWidth, 20), 80)
				); // Clamp the width between 20% and 80%
			}
		};

		const handleMouseUp = () => {
			document.removeEventListener(
				'mousemove',
				handleMouseMove
			);
			document.removeEventListener('mouseup', handleMouseUp);
		};

		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', handleMouseUp);
	};

	const runCode = () => {
		console.log('Running code...');
		if (editorRef.current) {
			if (picocjs) {
				// Clear previous output
				// setOutput("");

				// Run the C program and capture the output
				picocjs.runC(
					editorRef.current.getValue(),
					(output: string) => {
						setOutput(
							(prevOutput) =>
								prevOutput +
								output +
								'\n'
						);
					}
				);
			} else {
				console.error('PicoC is not loaded yet');
				window.location.reload();
			}
		} else {
			console.error('Editor is not initialized yet.');
		}
	};

	return (
		<div
			className='relative h-full flex-shrink-0'
			style={{ width: `${editorWidth}%` }}
			ref={containerRef}>
			<Script
				src='https://unpkg.com/picoc-js@1.0.12/dist/bundle.umd.js'
				onLoad={() => setIsScriptLoaded(true)}
			/>
			<div
				className={`transition-all duration-300 h-[92vh] ${
					isVisible ? 'block' : 'hidden'
				}`}>
				{/* Resizer Handle on the Left */}
				<div
					className='absolute top-0 left-0 bottom-0 w-1 bg-black/50 cursor-ew-resize z-10'
					onMouseDown={handleMouseDown}
				/>
				<div className='flex flex-col h-screen relative pl-1'>
					<Editor
						className='h-[60vh]'
						defaultLanguage='c'
						defaultValue={cprog}
						onMount={handleEditorDidMount}
						theme='vs-dark'
					/>
					<div className='flex w-full h-full bg-[#1e1e1e]'>
						<Terminal
							className={`w-full`}
							value={output}
							onChange={setOutput}
						/>
						<div className='flex flex-col justify-end'>
							<button
								onClick={
									runCode
								}
								className={`bg-[#1e1e1e] h-[5vh] items-center p-4 pt-1 text-white flex gap-2`}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									className='size-5'>
									<path
										fillRule='evenodd'
										d='M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z'
										clipRule='evenodd'
									/>
								</svg>
								Run
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CEditorConsole;
