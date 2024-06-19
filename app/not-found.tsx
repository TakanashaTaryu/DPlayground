import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center p-5 rounded shadow-lg">
        <Image
          src="/NotFound.png"
          alt="Not Found"
          width={400}
          height={400}
          className="mx-auto mb-6"
        />
        {/* <h2 className="text-3xl font-bold mb-4">Not Found</h2> */}
        <p className="text-lg mb-6">Could not find the requested resource</p>
        <Link href="/">
          <span className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 cursor-pointer font-bold">
            Return Home
          </span>
        </Link>
      </div>
    </div>
  );
}
