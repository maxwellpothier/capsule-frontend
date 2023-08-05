"use client";
import {useState} from "react";
import axios from "axios";

export default function Home() {
	const [contentText, setContentText] = useState("");

	const handleClick = async () => {
		setContentText("Loading...");
		try {
			const data = await axios.get("http://localhost:3001/headlines");
			setContentText(data.data.result);
		} catch (e) {
			setContentText("Error fetching data");
		}
	};
	return (
		<div className="w-screen h-screen">
			<div className="text-center mt-[100px]">
				<h1 className="font-mono text-[48px] mb-8">Capsule AI</h1>
				<button
					onClick={handleClick}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out mb-10">
					Get an update
				</button>
				<p>{contentText}</p>
			</div>
		</div>
	);
}
