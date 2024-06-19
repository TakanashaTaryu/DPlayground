"use client";
import Link from "next/link";
import { SetStateAction, useState } from "react";

const pertanyaan = [
  {
    pertanyaan: "Tipe data apa yang digunakan untuk nilai bilangan bulat?",
    jawaban: "int",
  },
  {
    pertanyaan:
      "Tipe data apa yang digunakan untuk bilangan pecahan dengan presisi tunggal?",
    jawaban: "float",
  },
  {
    pertanyaan: "Tipe data apa yang digunakan untuk menyimpan satu karakter?",
    jawaban: "char",
  },
  {
    pertanyaan:
      "Tipe data apa yang digunakan untuk bilangan pecahan dengan presisi ganda?",
    jawaban: "double",
  },
  {
    pertanyaan:
      "Tipe data apa yang digunakan untuk merepresentasikan nilai kebenaran?",
    jawaban: "bool",
  },
];

const DataTypes = () => {
  const [answers, setAnswers] = useState<string[]>(
    Array(pertanyaan.length).fill("")
  );
  const [messages, setMessages] = useState<string[]>(
    Array(pertanyaan.length).fill("")
  );
  const [messageStyles, setMessageStyles] = useState<string[]>(
    Array(pertanyaan.length).fill("")
  );
  const [isQuestionsVisible, setQuestionsVisible] = useState(false);

  const handleChangeAnswer =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newAnswers = [...answers];
      newAnswers[index] = e.target.value;
      setAnswers(newAnswers);
    };

  const checkAnswer = (index: number) => () => {
    if (
      answers[index].trim().toLowerCase() ===
      pertanyaan[index].jawaban.toLowerCase()
    ) {
      const newMessages = [...messages];
      newMessages[index] = "Benar!";
      setMessages(newMessages);

      const newMessageStyles = [...messageStyles];
      newMessageStyles[index] = "text-green-600";
      setMessageStyles(newMessageStyles);
    } else {
      const newMessages = [...messages];
      newMessages[index] = "Coba lagi.";
      setMessages(newMessages);

      const newMessageStyles = [...messageStyles];
      newMessageStyles[index] = "text-red-600";
      setMessageStyles(newMessageStyles);
    }
  };
  const toggleQuestions = () => {
    setQuestionsVisible(!isQuestionsVisible);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-5">Tipe Data dalam C</h1>
      <p>
        Dalam bahasa C, tipe data digunakan untuk menentukan jenis nilai yang
        dapat disimpan dalam variabel, seperti bilangan bulat, bilangan pecahan,
        karakter, dan lain-lain.
      </p>

      <ul className="mt-5 mb-6 list-disc pl-6">
        <li className="mb-3">
          <code>int</code>: Digunakan untuk menyimpan bilangan bulat, seperti
          -1, 0, 1, 100, dst.
        </li>
        <li className="mb-3">
          <code>float</code>: Menyimpan bilangan pecahan (floating-point) dengan
          presisi tunggal, seperti 3.14, 0.5, -2.71828, dst.
        </li>
        <li className="mb-3">
          <code>char</code>: Menggambarkan satu karakter atau simbol, seperti
          &apos;A&apos;, &apos;!&apos;, &apos;@&apos;, dst. Disimpan dalam satu byte memori.
        </li>
        <li className="mb-3">
          <code>double</code>: Tipe data untuk bilangan pecahan dengan presisi
          ganda, seperti 3.14159, 0.0001, -1234.5678, dst.
        </li>
        <li className="mb-3">
          <code>bool</code>: Merepresentasikan nilai kebenaran, hanya memiliki
          dua nilai: true atau false.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-3">Kuis</h2>
      <button
        onClick={toggleQuestions}
        className="mt-1 bg-blue-500 rounded text-sm py-1 px-1"
      >
        {isQuestionsVisible ? "- Hide" : "+ Show"}
      </button>
      <div className={isQuestionsVisible ? "block" : "hidden"}>
        {pertanyaan.map((item, index) => (
          <div key={index} className="mb-4">
            <p>{item.pertanyaan}</p>
            <input
              type="text"
              value={answers[index]}
              onChange={handleChangeAnswer(index)}
              className="mt-2 p-2 border border-gray-300 rounded text-black"
            />
            <button
              onClick={checkAnswer(index)}
              className="mt-2 ml-2 p-2 bg-green-500 text-white rounded"
            >
              Submit
            </button>
            {messages[index] && (
              <div className={`mt-2 ${messageStyles[index]}`}>
                {messages[index]}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-10 flex space-x-4">
        <Link
          href="/c/modules/hello-world"
          className="p-2 bg-gray-500 text-white rounded"
        >
          Sebelumnya
        </Link>
        <Link
          href="/c/modules/if-else"
          className="p-2 bg-blue-500 text-white rounded"
        >
          Selanjutnya
        </Link>
      </div>
    </>
  );
};

export default DataTypes;
