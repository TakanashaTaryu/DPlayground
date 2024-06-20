import Link from 'next/link';
import Image from 'next/image';

const CSideNav = () => {
	return (
		<div className='flex-col'>
			<div className='w-64 h-[8vh] justify-center p-0 bg-white/95 backdrop-blur-sm px-3 py-3 items-center flex flex-col'>
				<Link href='/'>
					<Image
						src='/d-playground-logo.svg'
						alt='Logo'
						width={200}
						height={200}
					/>
				</Link>
			</div>
			<aside className='w-64 h-[92vh] bg-gradient-to-b from-lime-600/95 to-lime-700/95 backdrop-blur-sm text-white p-5 flex flex-col '>
				<div className='mb-4'>
					<span className='text-2xl font-semibold'>
						C Course
					</span>
				</div>
				{/* Navigation */}
				<div className='flex flex-col items-start justify-start h-full gap-1'>
					<Link
						href='/c/modules/hello-world'
						className='w-full py-1 px-4 rounded-full hover:font-bold transition-all'>
						Halo Dunia
					</Link>

					<Link
						href='/c/modules/data-types'
						className='w-full py-1 px-4 rounded-full hover:font-bold transition-all'>
						Tipe Data
					</Link>

					<Link
						href='/c/modules/if-else'
						className='w-full py-1 px-4 rounded-full hover:font-bold transition-all'>
						Percabangan
					</Link>
					{/* Additional Navigation Items */}

					<Link
						href='/c/modules/while-for-loops'
						className='w-full py-1 px-4 rounded-full hover:font-bold transition-all'>
						Perulangan
					</Link>

					<Link
						href='/c/modules/functions-procedures'
						className='w-full py-1 px-4 rounded-full hover:font-bold transition-all'>
						Fungsi dan Prosedur
					</Link>

					<Link
						href='/c/modules/arrays'
						className='w-full py-1 px-4 rounded-full hover:font-bold transition-all'>
						Array
					</Link>

					<Link
						href='/c/modules/searching'
						className='w-full py-1 px-4 rounded-full hover:font-bold transition-all'>
						Pencarian
					</Link>

					<Link
						href='/c/modules/recursive-functions'
						className='w-full py-1 px-4 rounded-full hover:font-bold transition-all'>
						Algoritma Rekursif
					</Link>

					<Link
						href='/c/modules/file-handling'
						className='w-full py-1 px-4 rounded-full hover:font-bold transition-all'>
						File Handling
					</Link>

					<Link
						href='/c/modules/pointers'
						className='w-full py-1 px-4 rounded-full hover:font-bold transition-all'>
						Pointer
					</Link>
				</div>
				<p className='text-center w-full py-1 px-4 rounded-full hover:font-bold transition-all text-sm'>
					Daskom Laboratory 2024
				</p>
			</aside>
		</div>
	);
};

export default CSideNav;
