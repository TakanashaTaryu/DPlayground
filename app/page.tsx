// app/page.js

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-bold mb-2">Welcome to</h2>
      <Image src={"/d-playground-logo-white.svg"} alt="D'Playground Logo" width={400} height={400} />
      <h2 className="text-3xl font-semibold mb-8 mt-4">
        Choose your{" "}
        <span className="bg-green-600 px-2 py-1 rounded">
          journey
        </span>
      </h2>
      <div className="flex space-x-8">
        <Link
          href="/c/modules/hello-world"
          className="flex flex-col items-center space-y-2 transition-transform transform hover:scale-105"
        >
          <Image src="/c-logo.png" alt="C Logo" width={400} height={400} />
        </Link>
        <Link
          href="https://www.python.org"
          className="flex flex-col items-center space-y-2 transition-transform transform hover:scale-105"
        >
          <Image
            src="/python-logo.png"
            alt="Python Logo"
            width={400}
            height={400}
          />
        </Link>
        {/* <Link
          href="https://archlinux.org/"
          className="flex flex-col items-center space-y-2 transition-transform transform hover:scale-105"
        >
          <Image
            src="/ArchLinux.png"
            alt="Arch Linux Logo"
            width={400}
            height={400}
          />
        </Link> */}
      </div>
    </div>
  );
}
