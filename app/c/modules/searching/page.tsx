import Link from "next/link";

export default function Searching() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-5">Pencarian</h1>
      <p>
        Pencarian adalah proses menemukan elemen tertentu dalam sebuah array atau
        struktur data lainnya. Salah satu algoritma pencarian yang paling sederhana
        adalah pencarian linear.
      </p>

      <p className="mt-4">
        Contoh pencarian linear dalam array:
      </p>
      <pre className="mt-4 p-4 bg-gray-100 rounded">
        <code className="text-black">
          {`
#include <stdio.h>

int linearSearch(int arr[], int size, int key) {
  for (int i = 0; i < size; i++) {
    if (arr[i] == key) {
      return i;
    }
  }
  return -1;
}

int main() {
  int numbers[5] = {10, 20, 30, 40, 50};
  int key = 30;
  int index = linearSearch(numbers, 5, key);

  if (index != -1) {
    printf("Element found at index %d\\n", index);
  } else {
    printf("Element not found\\n");
  }

  return 0;
}
          `}
        </code>
      </pre>

      <div className="mt-10 flex space-x-4">
        <Link href="/c/modules/arrays">
          <button className="p-2 bg-gray-500 text-white rounded">Sebelumnya</button>
        </Link>
        <Link href="/c/modules/recursive-functions">
          <button className="p-2 bg-blue-500 text-white rounded">Selanjutnya</button>
        </Link>
      </div>
    </>
  );
}
