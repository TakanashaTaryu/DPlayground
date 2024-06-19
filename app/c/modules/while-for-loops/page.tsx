import Link from "next/link";

export default function WhileForLoops() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-5">Perulangan</h1>
      <p>
        Perulangan (atau looping) adalah cara untuk menjalankan blok kode berulang kali. Bahasa C
        menyediakan beberapa jenis loop seperti `for`, `while`, dan `do-while`.
      </p>

      <p className="mt-4">
        Contoh penggunaan loop `for` dan `while`:
      </p>
      <pre className="mt-4 p-4 bg-gray-100 rounded">
        <code className="text-black">
          {`
#include <stdio.h>

int main() {
  // Looping menggunakan for
  for (int i = 0; i < 5; i++) {
    printf("for loop iteration %d\\n", i);
  }

  // Looping menggunakan while
  int j = 0;
  while (j < 5) {
    printf("while loop iteration %d\\n", j);
    j++;
  }

  return 0;
}
          `}
        </code>
      </pre>

      <div className="mt-10 flex space-x-4">
        <Link href="/c/modules/if-else">
          <button className="p-2 bg-gray-500 text-white rounded">Sebelumnya</button>
        </Link>
        <Link href="/c/modules/functions-procedures">
          <button className="p-2 bg-blue-500 text-white rounded">Selanjutnya</button>
        </Link>
      </div>
    </>
  );
}
