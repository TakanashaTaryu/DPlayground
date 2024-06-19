import Link from "next/link";
import Image from "next/image";

const CSideNav = () => {
  return (
    <div className="flex-col">
      <div className="w-64 p-0 bg-white px-3 py-3 items-center flex flex-col">
        <Link href="/">
          <Image
            src="/d-playground-logo.svg"
            alt="Logo"
            width={200}
            height={200}
          />
        </Link>
      </div>
      <aside className="w-64 h-screen bg-gray-800 text-white p-5 flex flex-col">
        <div className="mb-4">
          <span className="text-2xl font-semibold">C Course</span>
        </div>
        {/* Navigation */}
        <nav className="flex-grow">
          <ul className="space-y-4">
            <li>
              <Link
                href="/c/modules/hello-world"
                className="block p-2 rounded hover:bg-gray-700 bg-gray-600"
              >
                Halo Dunia
              </Link>
            </li>
            <li>
              <Link
                href="/c/modules/data-types"
                className="block p-2 rounded hover:bg-gray-700 bg-gray-600"
              >
                Tipe Data
              </Link>
            </li>
            <li>
              <Link
                href="/c/modules/if-else"
                className="block p-2 rounded hover:bg-gray-700 bg-gray-600"
              >
                Percabangan
              </Link>
            </li>
            {/* Additional Navigation Items */}
            <li>
              <Link
                href="/c/modules/while-for-loops"
                className="block p-2 rounded hover:bg-gray-700 bg-gray-600"
              >
                Perulangan
              </Link>
            </li>
            <li>
              <Link
                href="/c/modules/functions-procedures"
                className="block p-2 rounded hover:bg-gray-700 bg-gray-600"
              >
                Fungsi dan Prosedur
              </Link>
            </li>
            <li>
              <Link
                href="/c/modules/arrays"
                className="block p-2 rounded hover:bg-gray-700 bg-gray-600"
              >
                Array
              </Link>
            </li>
            <li>
              <Link
                href="/c/modules/searching"
                className="block p-2 rounded hover:bg-gray-700 bg-gray-600"
              >
                Pencarian
              </Link>
            </li>
            <li>
              <Link
                href="/c/modules/recursive-functions"
                className="block p-2 rounded hover:bg-gray-700 bg-gray-600"
              >
                Algoritma Rekursif
              </Link>
            </li>
            <li>
              <Link
                href="/c/modules/file-handling"
                className="block p-2 rounded hover:bg-gray-700 bg-gray-600"
              >
                File Handling
              </Link>
            </li>
            <li>
              <Link
                href="/c/modules/pointers"
                className="block p-2 rounded hover:bg-gray-700 bg-gray-600"
              >
                Pointer
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default CSideNav;
