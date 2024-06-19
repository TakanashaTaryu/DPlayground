// components/CEditorConsole.tsx
"use client";
import { useState, useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";
import Script from "next/script";
import Terminal from "./Terminal";
import { cp } from "fs";

interface CEditorConsoleProps {
  isVisible: boolean;
}

const cprog = `
#include <stdio.h>
int main() {
   // printf() displays the string inside quotation
   printf("Hello, World!\\n");
   return 0;
}
`;

const CEditorConsole: React.FC<CEditorConsoleProps> = ({
  isVisible: initialVisibility,
}) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [picocjs, setPicocjs] = useState<any>(null);
  const [output, setOutput] = useState<string>(""); // State to hold the output
  const [isVisible, setIsVisible] = useState(initialVisibility);
  const [editorWidth, setEditorWidth] = useState(50); // Percentage of the width
  const containerRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<any>(null);

  function handleEditorDidMount(editor: any, _: any) {
    editorRef.current = editor;
  }

  useEffect(() => {
    if (isScriptLoaded) {
      const loadedPicocjs = (window as any)["picocjs"];
      if (loadedPicocjs) {
        setPicocjs(loadedPicocjs);
        console.log("PicoC JS library is loaded:", loadedPicocjs);
      }
    }
  }, [isScriptLoaded]);

  const toggleEditorVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = editorWidth;

    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const newWidth =
          startWidth - ((event.clientX - startX) / window.innerWidth) * 100;
        setEditorWidth(Math.min(Math.max(newWidth, 20), 80)); // Clamp the width between 20% and 80%
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const runCode = () => {
    console.log("Running code...");
    if (editorRef.current) {
      if (picocjs) {
        // Clear previous output
        // setOutput("");

        // Run the C program and capture the output
        picocjs.runC(editorRef.current.getValue(), (output: string) => {
          setOutput((prevOutput) => prevOutput + output + "\n");
        });
      } else {
        console.error("PicoC is not loaded yet");
        window.location.reload();
      }
    } else {
      console.error("Editor is not initialized yet.");
    }
  };

  return (
    <div
      className="relative h-full flex-shrink-0"
      style={{ width: `${editorWidth}%` }}
      ref={containerRef}
    >
      <Script
        src="https://unpkg.com/picoc-js@1.0.12/dist/bundle.umd.js"
        onLoad={() => setIsScriptLoaded(true)}
      />
      {/* Buttons (Show/Hide, Clear, and Run) */}
      <div
        className={`flex justify-end h-14 ${isVisible ? "bg-gray-800 " : ""}`}
      >
        <button
          onClick={runCode}
          className={`bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mr-2 mt-2 mb-2 transition-all duration-300 ${
            isVisible ? "block" : "hidden"
          }`}
        >
          Run
        </button>
        <button
          onClick={toggleEditorVisibility}
          className="hover:bg-gray-700 bg-gray-600 text-white px-4 py-2 rounded mr-6 mt-2 mb-2"
        >
          {isVisible ? "Hide Editor" : "Show Editor"}
        </button>
      </div>

      <div
        className={`transition-all duration-300 ${
          isVisible ? "block" : "hidden"
        }`}
      >
        {/* Resizer Handle on the Left */}
        <div
          className="absolute top-0 left-0 bottom-0 w-1 bg-gray-400 cursor-ew-resize z-10"
          onMouseDown={handleMouseDown}
        />
        <div className="flex flex-col h-full relative pl-1">
          <Editor
            height="calc(60vh - 3.5rem)"
            defaultLanguage="c"
            defaultValue={cprog}
            onMount={handleEditorDidMount}
            theme="vs-dark"
          />
          <div className="flex-1 overflow-auto h-16">
            {/* <textarea
              className="w-full border border-gray-300 shadow-sm bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={output}
              rows={10}
            ></textarea> */}
            <Terminal
              className={`w-full border h-[40vh] border-gray-300 shadow-sm bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={output}
              onChange={setOutput}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEditorConsole;
