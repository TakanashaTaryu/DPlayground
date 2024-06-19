import Link from "next/link";

export default function HelloWorld() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-5">Hello World</h1>
      <p>
        Bahasa C adalah bahasa pemrograman yang populer digunakan untuk
        membangun aplikasi sistem dan aplikasi desktop. C ditandai dengan
        kecepatan eksekusi tinggi dan kontrol yang mendetail terhadap hardware.
      </p>

      <p className="mt-4">
        Di dalam bahasa C, penggunaan <code>#include &lt;stdio.h&gt;</code> 
        memungkinkan kita untuk menggunakan fungsi standar seperti <code>printf()</code> 
        yang digunakan untuk mencetak teks ke layar console.
      </p>

      <p className="mt-4">
        Fungsi <code>int main()</code> adalah titik masuk utama dari setiap program C.
        Di dalam fungsi <code>main()</code>, kita menuliskan kode yang akan dieksekusi
        saat program dijalankan. Setelah menyelesaikan tugasnya, <code>return 0;</code> 
        digunakan untuk mengindikasikan bahwa program telah selesai dengan sukses.
      </p>

      <div className="mt-10 flex space-x-4">
        <Link href="/c/modules/data-types">
          <button className="p-2 bg-blue-500 text-white rounded">Selanjutnya</button>
        </Link>
      </div>
    </>
  );
}
