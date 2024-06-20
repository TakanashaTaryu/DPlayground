'use client';
import Link from 'next/link';
import { SetStateAction, useState } from 'react';
import { motion } from 'framer-motion';

const pertanyaan = [
	{
		pertanyaan: 'Tipe data apa yang digunakan untuk nilai bilangan bulat?',
		jawaban: 'int',
	},
	{
		pertanyaan: 'Tipe data apa yang digunakan untuk bilangan pecahan dengan presisi tunggal?',
		jawaban: 'float',
	},
	{
		pertanyaan: 'Tipe data apa yang digunakan untuk menyimpan satu karakter?',
		jawaban: 'char',
	},
	{
		pertanyaan: 'Tipe data apa yang digunakan untuk bilangan pecahan dengan presisi ganda?',
		jawaban: 'double',
	},
	{
		pertanyaan: 'Tipe data apa yang digunakan untuk merepresentasikan nilai kebenaran?',
		jawaban: 'bool',
	},
];

const wrongIcon = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		className='size-5 fill-red-600'>
		<path
			fillRule='evenodd'
			d='M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z'
			clipRule='evenodd'
		/>
	</svg>
);

const rightIcon = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		className='size-5 animate-bounce fill-lime-600'>
		<path
			fillRule='evenodd'
			d='M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z'
			clipRule='evenodd'
		/>
	</svg>
);

const DataTypes = () => {
	const [answers, setAnswers] = useState<string[]>(
		Array(pertanyaan.length).fill('')
	);
	const [isQuestionsVisible, setQuestionsVisible] = useState(false);
	const [messages, setMessages] = useState<number[]>([0]);
	const handleChangeAnswer =
		(index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
			const newAnswers = [...answers];
			newAnswers[index] = e.target.value;
			console.log(newAnswers[index]);
			setAnswers(newAnswers);
			if (
				newAnswers[index].trim().toLowerCase() ===
				pertanyaan[index].jawaban.toLowerCase()
			) {
				const newMessages = [...messages];
				newMessages[index] = 1;
				setMessages(newMessages);
			} else {
				const newMessages = [...messages];
				newMessages[index] = 0;
				setMessages(newMessages);
			}
		};
	const toggleQuestions = () => {
		setQuestionsVisible(!isQuestionsVisible);
	};

	return (
		<>
			<h1 className='text-2xl font-bold mb-5'>
				Tipe Data dalam C
			</h1>
			<p>
				Dalam bahasa C, tipe data digunakan untuk
				menentukan jenis nilai yang dapat disimpan dalam
				variabel, seperti bilangan bulat, bilangan
				pecahan, karakter, dan lain-lain.
			</p>

			<ul className='mt-5 mb-6 list-disc pl-6'>
				<li className='mb-3'>
					<code>int</code>: Digunakan untuk
					menyimpan bilangan bulat, seperti -1, 0,
					1, 100, dst.
				</li>
				<li className='mb-3'>
					<code>float</code>: Menyimpan bilangan
					pecahan (floating-point) dengan presisi
					tunggal, seperti 3.14, 0.5, -2.71828,
					dst.
				</li>
				<li className='mb-3'>
					<code>char</code>: Menggambarkan satu
					karakter atau simbol, seperti
					&apos;A&apos;, &apos;!&apos;,
					&apos;@&apos;, dst. Disimpan dalam satu
					byte memori.
				</li>
				<li className='mb-3'>
					<code>double</code>: Tipe data untuk
					bilangan pecahan dengan presisi ganda,
					seperti 3.14159, 0.0001, -1234.5678,
					dst.
				</li>
				<li className='mb-3'>
					<code>bool</code>: Merepresentasikan
					nilai kebenaran, hanya memiliki dua
					nilai: true atau false.
				</li>
			</ul>
			<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				transition={{
					type: 'spring',
					stiffness: 400,
					damping: 17,
				}}
				onClick={toggleQuestions}
				className='flex items-center justify-start bg-lime-600 text-white rounded-full px-4 py-1 gap-2 mb-4'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
					className={
						isQuestionsVisible
							? 'size-4 rotate-90 transition-transform duration-300'
							: 'size-4 rotate-0 transition-transform duration-300'
					}>
					<path
						fillRule='evenodd'
						d='M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z'
						clipRule='evenodd'
					/>
				</svg>
				<h2>Ikuti Kuis</h2>
			</motion.button>
			<div
				className={
					isQuestionsVisible ? 'block' : 'hidden'
				}>
				{pertanyaan.map((item, index) => (
					<div key={index} className='mb-4'>
						<p>{item.pertanyaan}</p>
						<div className='flex'>
							<input
								type='text'
								value={
									answers[
										index
									]
								}
								placeholder='Tulis Jawaban'
								onChange={handleChangeAnswer(
									index
								)}
								className={
									messages[
										index
									]
										? 'mt-2 p-2 border-b w-full border-b-lime-600 rounded text-lime-600 font-bold'
										: `mt-2 p-2 border-b w-full border-b-lime-600 rounded text-black font-bold`
								}
								disabled={
									messages[
										index
									]
										? true
										: false
								}
							/>
							<p className='mt-2 ml-2 p-2 text-lime-600 rounded'>
								{messages[index]
									? rightIcon
									: wrongIcon}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className='mt-10 flex space-x-4 items-center justify-between'>
				<Link
					href='/c/modules/hello-world'
					className='flex items-center gap-2 text-lime-600 border border-lime-600 px-8 py-1 rounded-full'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						className='size-5 fill-lime-600'>
						<path
							fillRule='evenodd'
							d='M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z'
							clipRule='evenodd'
						/>
					</svg>
					Halo Dunia
				</Link>
				<Link
					href='/c/modules/if-else'
					className='flex items-center gap-2 text-lime-600 border border-lime-600 px-8 py-1 rounded-full'>
					Percabangan{' '}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						className='size-5 fill-lime-600'>
						<path
							fillRule='evenodd'
							d='M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z'
							clipRule='evenodd'
						/>
					</svg>
				</Link>
			</div>
		</>
	);
};

export default DataTypes;
