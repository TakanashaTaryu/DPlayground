import React, { useState } from "react";

interface TerminalProps {
  className?: string;
  value: string;
  onChange: (newValue: string) => void;
}

const Terminal: React.FC<TerminalProps> = ({
  className = "",
  value,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      processCommand(inputValue.trim());
      setInputValue(""); // Clear input after processing
    }
  };

  const processCommand = (command: string) => {
    appendOutput(`Command not recognized: ${command}`);
  };

  const appendOutput = (text: string) => {
    onChange(value + text + "\n");
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex-1 bg-gray-800 p-4 overflow-y-auto">
        <pre className="text-gray-300 whitespace-pre-wrap">{value}</pre>
      </div>
      <div className="flex items-center bg-gray-900 p-2">
        <span className="text-gray-300 mr-2">$</span>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleEnterKeyPress}
          autoFocus
          className="flex-1 px-2 py-1 bg-gray-700 text-gray-300 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Terminal;
