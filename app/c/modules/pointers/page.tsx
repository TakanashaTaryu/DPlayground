import Link from 'next/link';

export default function Pointers() {
	return (
		<>
			<h1 className='text-2xl font-bold mb-5'>Pointers</h1>
			<p>
				Pointer dalam bahasa C adalah variabel yang
				menyimpan alamat memori dari variabel lain.
				Mereka sangat berguna untuk manipulasi data
				tingkat rendah dan manajemen memori.
			</p>

			<p className='mt-4'>Contoh penggunaan pointer:</p>
			<pre className='mt-4 p-4 bg-gray-100 rounded'>
				<code className='text-black'>
					{`
#include <stdio.h>

int main() {
  int number = 100;
  int *ptr = &number;

  printf("Value of number: %d\\n", number);
  printf("Address of number: %p\\n", (void*)&number);
  printf("Pointer pointing to: %p\\n", (void*)ptr);
  printf("Value pointed by pointer: %d\\n", *ptr);

  return 0;
}
          `}
				</code>
			</pre>

			<div className='mt-10 flex space-x-4 items-center justify-start'>
				<Link href='/c/modules/file-handling'>
					<button className='flex items-center gap-2 text-lime-600 border border-lime-600 px-8 py-1 rounded-full'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							className='size-5 fill-lime-600'>
							<path
								fillRule='evenodd'
								d='M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z'
								clipRule='evenodd'
							/>
						</svg>
						File Handling
					</button>
				</Link>
			</div>
		</>
	);
}
