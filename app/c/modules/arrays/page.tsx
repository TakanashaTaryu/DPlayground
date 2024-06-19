import Link from "next/link";

export default function Arrays() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-5">Array</h1>
      <p>
        Array dalam bahasa C adalah struktur data yang menyimpan sejumlah elemen
        dengan tipe data yang sama. Elemen-elemen ini dapat diakses menggunakan
        indeks. Array sangat berguna untuk menyimpan dan mengelola data yang
        berurutan.
      </p>

      <p className="mt-4">
        Contoh deklarasi dan penggunaan array:
      </p>
      <pre className="mt-4 p-4 bg-gray-100 rounded">
        <code className="text-black">
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

      <div className="mt-10 flex space-x-4">
      <Link href="/c/modules/functions-procedures">
          <button className="p-2 bg-gray-500 text-white rounded">Sebelumnya</button>
        </Link>
        <Link href="/c/modules/searching">
          <button className="p-2 bg-blue-500 text-white rounded">Selanjutnya</button>
        </Link>
      </div>
    </>
  );
}
