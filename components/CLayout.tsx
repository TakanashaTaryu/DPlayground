// components/CLayout.tsx
'use client';
import CSideNav from '@/components/CSideNav';
import CEditorConsole from '@/components/CEditorConsole';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import CSideNavClosed from './CSideNavClosed';

interface CLayoutProps {
	children: React.ReactNode;
}

const variants = {
	open: { opacity: 1, x: 0 },
	closed: { opacity: 0, x: '-100%' },
};

const CLayout: React.FC<CLayoutProps> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='flex h-screen bg-white dark:bg-[#1e1e1e]'>
			{/* Sidebar */}
			<div
				className='absolute'
				style={{
					pointerEvents: isOpen ? 'auto' : 'none',
				}}
				onMouseLeave={() =>
					setIsOpen((isOpen) => false)
				}>
				<motion.nav
					animate={isOpen ? 'open' : 'closed'}
					variants={variants}>
					<CSideNav />
				</motion.nav>
			</div>
			<div
				className='absolute'
				onMouseEnter={() =>
					setIsOpen((isOpen) => true)
				}>
				<motion.nav
					animate={isOpen ? 'closed' : 'open'}
					variants={variants}>
					<CSideNavClosed />
				</motion.nav>
			</div>
			{/* Main Content */}
			<div className='invisible w-auto group-hover:w-92'>
				<CSideNavClosed />
			</div>
			<div className='bg-white dark:bg-[#1e1e1e] dark:text-white text-black flex'>
				<main className='p-6'>{children}</main>

				{/* Editor and Console */}
				<CEditorConsole isVisible={true} />
			</div>
		</div>
	);
};

export default CLayout;
