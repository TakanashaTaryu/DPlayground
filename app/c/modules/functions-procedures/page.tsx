import Link from 'next/link';

export default function FunctionsProcedures() {
	return (
		<>
			<h1 className='text-2xl font-bold mb-5'>
				Fungsi dan Prosedur
			</h1>
			<p>
				Fungsi dalam bahasa C adalah blok kode yang
				dapat dipanggil dari bagian lain dari program
				untuk menjalankan tugas tertentu. Ini membantu
				dalam modularisasi kode dan menghindari
				pengulangan.
			</p>

			<p className='mt-4'>
				Contoh deklarasi dan penggunaan fungsi:
			</p>
			<pre className='mt-4 p-4 bg-gray-100 rounded'>
				<code className='text-black'>
					{`
#include <stdio.h>

void sayHello() {
  printf("Hello, World!\\n");
}

int add(int a, int b) {
  return a + b;
}

int main() {
  sayHello();
  int result = add(10, 20);
  printf("Sum: %d\\n", result);
  return 0;
}
          `}
				</code>
			</pre>

			<div className='mt-10 flex space-x-4 items-center justify-between'>
				<Link href='/c/modules/while-for-loops'>
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
						Perulangan
					</button>
				</Link>
				<Link href='/c/modules/arrays'>
					<button className='flex items-center gap-2 text-lime-600 border border-lime-600 px-8 py-1 rounded-full'>
						Array{' '}
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
