import Link from "next/link";

export default function IfElse() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-5">Percabangan</h1>
      <p>
        Dalam bahasa C, percabangan digunakan untuk menjalankan
        blok kode berdasarkan kondisi tertentu. Struktur ini memungkinkan
        program untuk membuat keputusan dan mengeksekusi jalur yang berbeda
        sesuai dengan hasil dari kondisi tersebut.
      </p>

      <p className="mt-4">
        Contoh sederhana:
      </p>
      <pre className="mt-4 p-4 bg-gray-100 rounded">
        <code className="text-black">
          {`
#include <stdio.h>

int main() {
  int number = 10;

  if (number > 0) {
    printf("Number is positive.\\n");
  } else {
    printf("Number is not positive.\\n");
  }

  return 0;
}
          `}
        </code>
      </pre>

      <div className="mt-10 flex space-x-4">
      <Link href="/c/modules/data-types">
          <button className="p-2 bg-gray-500 text-white rounded">Sebelumnya</button>
        </Link>
        <Link href="/c/modules/while-for-loops">
          <button className="p-2 bg-blue-500 text-white rounded">Selanjutnya</button>
        </Link>
      </div>
    </>
  );
}
