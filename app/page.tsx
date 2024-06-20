'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
	return (
		<div className='bg-gradient-to-tr from-lime-600 to-lime-700 flex flex-col items-center justify-center h-screen'>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.3,
					ease: [0, 0.71, 0.2, 1.01],
					scale: {
						type: 'spring',
						damping: 5,
						stiffness: 100,
						restDelta: 0.001,
					},
				}}>
				<h2 className='text-4xl font-bold mb-2'>
					Welcome to
				</h2>
				<motion.div
					whileHover={{
						scale: 1.2,
						rotate: -5,
					}}
					whileTap={{ scale: 0.9 }}
					transition={{
						type: 'spring',
						stiffness: 400,
						damping: 17,
					}}>
					<Image
						src={
							'/d-playground-logo-white.svg'
						}
						alt="D'Playground Logo"
						width={400}
						height={400}
					/>
				</motion.div>
				<h2 className='text-3xl font-semibold mb-8 mt-4'>
					Choose your{' '}
					<span className='bg-green-600 px-2 py-1 rounded'>
						journey
					</span>
				</h2>
			</motion.div>
			<div className='flex space-x-8'>
				<motion.div
					whileHover={{
						scale: 1.2,
						rotate: 20,
					}}
					whileTap={{ scale: 0.9 }}
					initial={{
						opacity: 0,
						scale: 0.5,
					}}
					animate={{
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 0.5,
						ease: [0, 0.71, 0.2, 1.01],
						scale: {
							type: 'spring',
							damping: 17,
							stiffness: 400,
							restDelta: 0.001,
						},
					}}>
					<Link
						href='/c/modules/hello-world'
						className='flex flex-col items-center space-y-2 transition-all hover:scale-105 duration-1000 hover:animate-none'>
						<Image
							src='/c-logo.png'
							alt='C Logo'
							width={400}
							height={400}
						/>
					</Link>
				</motion.div>
				<motion.div
					whileHover={{
						scale: 1.2,
						rotate: 15,
					}}
					whileTap={{ scale: 0.9 }}
					initial={{
						opacity: 0,
						scale: 0.5,
					}}
					animate={{
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 0.5,
						ease: [0, 0.71, 0.2, 1.01],
						scale: {
							type: 'spring',
							damping: 17,
							stiffness: 400,
							restDelta: 0.001,
						},
					}}>
					<Link
						href='/c/modules/hello-world'
						className='flex flex-col items-center space-y-2 transition-all hover:scale-105 duration-1000 hover:animate-none'>
						<Image
							src='/python-logo.png'
							alt='Python Logo'
							width={400}
							height={400}
						/>
					</Link>
				</motion.div>
				{/* <Link
          href="https://archlinux.org/"
          className="flex flex-col items-center space-y-2 transition-transform transform hover:scale-105"
        >
          <Image
            src="/ArchLinux.png"
            alt="Arch Linux Logo"
            width={400}
            height={400}
          />
        </Link> */}
			</div>
		</div>
	);
}
