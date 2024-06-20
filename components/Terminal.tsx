import React, { useState } from 'react';
import CEditorConsole from './CEditorConsole';

interface TerminalProps {
	className?: string;
	value: string;
	onChange: (newValue: string) => void;
}

const Terminal: React.FC<TerminalProps> = ({
	className = '',
	value,
	onChange,
}) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleEnterKeyPress = (
		e: React.KeyboardEvent<HTMLInputElement>
	) => {
		if (e.key === 'Enter') {
			processCommand(inputValue.trim());
			setInputValue(''); // Clear input after processing
		}
	};

	const processCommand = (command: string) => {
		appendOutput(`Command not recognized: ${command}`);
	};

	const appendOutput = (text: string) => {
		onChange(value + text + '\n');
	};

	return (
		<div className={`flex flex-col h-full ${className}`}>
			<div className='flex-1 bg-[#1e1e1e] p-4 overflow-y-auto'>
				<pre className='text-white whitespace-pre-wrap'>
					{value}
				</pre>
			</div>
			<div className='flex items-center h-[8vh] bg-[#1e1e1e] p-2'>
				<span className='text-white mr-2'>&gt;</span>
				<input
					type='text'
					value={inputValue}
					onChange={handleInputChange}
					onKeyPress={handleEnterKeyPress}
					autoFocus
					className='flex-1 px-2 py-1 bg-[#1e1e1e] border-b border-b-lime-600 text-white focus:outline-none'
				/>
			</div>
		</div>
	);
};

export default Terminal;
