import Link from "next/link";

export default function RecursiveFunctions() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-5">Algoritma Rekursif</h1>
      <p>
        Rekursi adalah teknik pemrograman di mana sebuah fungsi memanggil dirinya
        sendiri. Ini sering digunakan untuk memecahkan masalah yang dapat
        dipecah menjadi sub-masalah yang lebih kecil dengan struktur yang sama.
      </p>

      <p className="mt-4">
        Contoh sederhana dari fungsi rekursif adalah fungsi untuk menghitung
        faktorial dari sebuah angka:
      </p>
      <pre className="mt-4 p-4 bg-gray-100 rounded">
        <code className="text-black">
          {`
#include <stdio.h>

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
}
          `}
        </code>
      </pre>

      <div className="mt-10 flex space-x-4">
      <Link href="/c/modules/searching">
          <button className="p-2 bg-gray-500 text-white rounded">Sebelumnya</button>
        </Link>
        <Link href="/c/modules/file-handling">
          <button className="p-2 bg-blue-500 text-white rounded">Selanjutnya</button>
        </Link>
      </div>
    </>
  );
}
