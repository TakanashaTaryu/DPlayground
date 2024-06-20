import Link from 'next/link';

export default function HelloWorld() {
	return (
		<>
			<h1 className='text-2xl font-bold mb-5'>Hello World</h1>
			<p>
				Bahasa C adalah bahasa pemrograman yang populer
				digunakan untuk membangun aplikasi sistem dan
				aplikasi desktop. C ditandai dengan kecepatan
				eksekusi tinggi dan kontrol yang mendetail
				terhadap hardware.
			</p>

			<p className='mt-4'>
				Di dalam bahasa C, penggunaan{' '}
				<code>#include &lt;stdio.h&gt;</code>
				memungkinkan kita untuk menggunakan fungsi
				standar seperti <code>printf()</code>
				yang digunakan untuk mencetak teks ke layar
				console.
			</p>

			<p className='mt-4'>
				Fungsi <code>int main()</code> adalah titik
				masuk utama dari setiap program C. Di dalam
				fungsi <code>main()</code>, kita menuliskan kode
				yang akan dieksekusi saat program dijalankan.
				Setelah menyelesaikan tugasnya,{' '}
				<code>return 0;</code>
				digunakan untuk mengindikasikan bahwa program
				telah selesai dengan sukses.
			</p>

			<div className='mt-10 flex space-x-4 items-center justify-end'>
				<Link href='/c/modules/data-types'>
					<button className='flex items-center gap-2 text-lime-600 border border-lime-600 px-8 py-1 rounded-full'>
						Tipe Data{' '}
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
