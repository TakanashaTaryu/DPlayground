import Link from 'next/link';
import Image from 'next/image';

const CSideNavClosed = () => {
	return (
		<div className='flex-col'>
			<div className='w-16 h-[8vh] justify-center bg-white px-3 py-3 items-center flex flex-col'>
				<Link href='/'>
					<Image
						src='/icon.png'
						alt='Logo'
						width={200}
						height={200}
					/>
				</Link>
			</div>
			<aside className='w-16 h-[92vh] bg-lime-600 justify-between text-white p-5 flex flex-col'>
				<p className='text-sm animate-bounce'>
					&gt;&gt;
				</p>
				<p className='[writing-mode:vertical-lr] text-sm'>
					Daskom Laboratory 2024
				</p>
			</aside>
		</div>
	);
};

export default CSideNavClosed;
