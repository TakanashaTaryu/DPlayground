import Link from 'next/link';

export default function Arrays() {
	return (
		<>
			<h1 className='text-2xl font-bold mb-5'>Array</h1>
			<p>
				Array dalam bahasa C adalah struktur data yang
				menyimpan sejumlah elemen dengan tipe data yang
				sama. Elemen-elemen ini dapat diakses
				menggunakan indeks. Array sangat berguna untuk
				menyimpan dan mengelola data yang berurutan.
			</p>

			<p className='mt-4'>
				Contoh deklarasi dan penggunaan array:
			</p>
			<pre className='mt-4 p-4 bg-gray-100 rounded'>
				<code className='text-black'>
					{`
#include <stdio.h>

int main() {
  int numbers[5] = {1, 2, 3, 4, 5};

  for (int i = 0; i < 5; i++) {
    printf("Element %d: %d\\n", i, numbers[i]);
  }

  return 0;
}
          `}
				</code>
			</pre>

			<div className='mt-10 flex space-x-4 items-center justify-between'>
				<Link href='/c/modules/functions-procedures'>
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
						Fungsi dan Prosedur
					</button>
				</Link>
				<Link href='/c/modules/searching'>
					<button className='flex items-center gap-2 text-lime-600 border border-lime-600 px-8 py-1 rounded-full'>
						Pencarian{' '}
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							className='size-5 fill-lime-600'>
							<path
								fillRule='evenodd'
								d='M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z'
								clipRule='evenodd'
							/>
						</svg>
					</button>
				</Link>
			</div>
		</>
	);
}
