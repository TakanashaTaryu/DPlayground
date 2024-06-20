import Link from 'next/link';

export default function FileHandling() {
	return (
		<>
			<h1 className='text-2xl font-bold mb-5'>
				File Handling
			</h1>
			<p>
				Pemrosesan file di C memungkinkan kita untuk
				membaca dari dan menulis ke file di sistem. Ini
				dilakukan menggunakan fungsi-fungsi standar
				seperti
				<code> fopen</code>, <code>fscanf</code>,{' '}
				<code>fprintf</code>, dan <code>fclose</code>.
			</p>

			<p className='mt-4'>
				Contoh sederhana membaca dan menulis ke file:
			</p>
			<pre className='mt-4 p-4 bg-gray-100 rounded'>
				<code className='text-black'>
					{`
#include <stdio.h>

int main() {
  FILE *file = fopen("example.txt", "w");
  if (file == NULL) {
    printf("Error opening file!\\n");
    return 1;
  }

  fprintf(file, "Hello, file!\\n");
  fclose(file);

  file = fopen("example.txt", "r");
  char line[100];
  if (fgets(line, sizeof(line), file)) {
    printf("%s", line);
  }
  fclose(file);

  return 0;
}
          `}
				</code>
			</pre>

			<div className='mt-10 flex space-x-4 items-center justify-between'>
				<Link href='/c/modules/recursive-functions'>
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
						Algoritma Rekursif
					</button>
				</Link>
				<Link href='/c/modules/pointers'>
					<button className='flex items-center gap-2 text-lime-600 border border-lime-600 px-8 py-1 rounded-full'>
						Pointer{' '}
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
