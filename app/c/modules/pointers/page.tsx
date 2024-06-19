import Link from "next/link";

export default function Pointers() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-5">Pointers</h1>
      <p>
        Pointer dalam bahasa C adalah variabel yang menyimpan alamat memori dari
        variabel lain. Mereka sangat berguna untuk manipulasi data tingkat rendah
        dan manajemen memori.
      </p>

      <p className="mt-4">
        Contoh penggunaan pointer:
      </p>
      <pre className="mt-4 p-4 bg-gray-100 rounded">
        <code className="text-black">
          {`
#include <stdio.h>

int main() {
  int number = 100;
  int *ptr = &number;

  printf("Value of number: %d\\n", number);
  printf("Address of number: %p\\n", (void*)&number);
  printf("Pointer pointing to: %p\\n", (void*)ptr);
  printf("Value pointed by pointer: %d\\n", *ptr);

  return 0;
}
          `}
        </code>
      </pre>

      <div className="mt-10 flex space-x-4">
      <Link href="/c/modules/file-handling">
          <button className="p-2 bg-gray-500 text-white rounded">Sebelumnya</button>
        </Link>
        <Link href="/">
          <button className="p-2 bg-blue-500 text-white rounded">Selesai</button>
        </Link>
      </div>
    </>
  );
}
