'use client'
import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [picocjs, setPicocjs] = useState<any>(null);
  const [cProgram, setCProgram] = useState<string>(""); // State to hold the C program input
  const [output, setOutput] = useState<string>(""); // State to hold the output

  // Effect to log window object and set picocjs after script is loaded
  useEffect(() => {
    if (isScriptLoaded) {
      const loadedPicocjs = (window as any)['picocjs'];
      if (loadedPicocjs) {
        setPicocjs(loadedPicocjs);
        console.log("picocjs library is loaded:", loadedPicocjs);
      }
    }
  }, [isScriptLoaded]);

  // Handler to run picocjs function on button click
  const handleButtonClick = () => {
    if (picocjs) {
      // Clear previous output
      setOutput("");

      // Run the C program and capture the output
      picocjs.runC(cProgram, (output: string) => {
        setOutput(prevOutput => prevOutput + output + "\n");
      });
    } else {
      console.error("PicoC is not loaded yet");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-b from-[rgb(var(--background-start-rgb))] to-[rgb(var(--background-end-rgb))]">
      {/* Load the script */}
      <Script
        src="https://unpkg.com/picoc-js@1.0.12/dist/bundle.umd.js"
        onLoad={() => setIsScriptLoaded(true)}
      />
      <div className="w-full max-w-3xl space-y-6">
        {/* Text area for input C program */}
        <textarea
          value={cProgram}
          onChange={(e) => setCProgram(e.target.value)}
          placeholder="Enter your C program here..."
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white"
          rows={10}
        ></textarea>

        {/* Button to run the C program */}
        <button
          onClick={handleButtonClick}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          disabled={!isScriptLoaded}
        >
          Run C Program
        </button>

        {/* Text area for output */}
        <textarea
          value={output}
          readOnly
          placeholder="Output will appear here..."
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={10}
        ></textarea>
      </div>
    </main>
  );
}
