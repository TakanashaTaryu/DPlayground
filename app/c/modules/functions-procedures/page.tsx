import Link from "next/link";

export default function FunctionsProcedures() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-5">Fungsi dan Prosedur</h1>
      <p>
        Fungsi dalam bahasa C adalah blok kode yang dapat dipanggil dari bagian
        lain dari program untuk menjalankan tugas tertentu. Ini membantu dalam
        modularisasi kode dan menghindari pengulangan.
      </p>

      <p className="mt-4">
        Contoh deklarasi dan penggunaan fungsi:
      </p>
      <pre className="mt-4 p-4 bg-gray-100 rounded">
        <code className="text-black">
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

      <div className="mt-10 flex space-x-4">
      <Link href="/c/modules/while-for-loops">
          <button className="p-2 bg-gray-500 text-white rounded">Sebelumnya</button>
        </Link>
        <Link href="/c/modules/arrays">
          <button className="p-2 bg-blue-500 text-white rounded">Selanjutnya</button>
        </Link>
      </div>
    </>
  );
}
