import Link from 'next/link';

export default function RecursiveFunctions() {
	return (
		<>
			<h1 className='text-2xl font-bold mb-5'>
				Algoritma Rekursif
			</h1>
			<p>
				Rekursi adalah teknik pemrograman di mana sebuah
				fungsi memanggil dirinya sendiri. Ini sering
				digunakan untuk memecahkan masalah yang dapat
				dipecah menjadi sub-masalah yang lebih kecil
				dengan struktur yang sama.
			</p>

			<p className='mt-4'>
				Contoh sederhana dari fungsi rekursif adalah
				fungsi untuk menghitung faktorial dari sebuah
				angka:
			</p>
			<pre className='mt-4 p-4 bg-gray-100 dark:bg-black/50 rounded'>
				<code className='text-black dark:text-white'>
					{`#include <stdio.h>

int factorial(int n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

int main() {
  int number = 5;
  printf("Factorial of %d is %d\\n", number, factorial(number));
  return 0;
}`}
				</code>
			</pre>

			<div className='mt-10 flex space-x-4 items-center justify-between'>
				<Link href='/c/modules/searching'>
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
						Pencarian
					</button>
				</Link>
				<Link href='/c/modules/file-handling'>
					<button className='flex items-center gap-2 text-lime-600 border border-lime-600 px-8 py-1 rounded-full'>
						File Handling{' '}
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
