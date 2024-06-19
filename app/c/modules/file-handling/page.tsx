import Link from "next/link";

export default function FileHandling() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-5">File Handling</h1>
      <p>
        Pemrosesan file di C memungkinkan kita untuk membaca dari dan menulis
        ke file di sistem. Ini dilakukan menggunakan fungsi-fungsi standar seperti
        <code> fopen</code>, <code>fscanf</code>, <code>fprintf</code>, dan <code>fclose</code>.
      </p>

      <p className="mt-4">
        Contoh sederhana membaca dan menulis ke file:
      </p>
      <pre className="mt-4 p-4 bg-gray-100 rounded">
        <code className="text-black">
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

      <div className="mt-10 flex space-x-4">
      <Link href="/c/modules/recursive-functions">
          <button className="p-2 bg-gray-500 text-white rounded">Sebelumnya</button>
        </Link>
        <Link href="/c/modules/pointers">
          <button className="p-2 bg-blue-500 text-white rounded">Selanjutnya</button>
        </Link>
      </div>
    </>
  );
}
