import { useState } from "react";

export default function CounterToggle() {
	const [count, setCount] = useState(0);
	const [visible, setVisible] = useState(true);

	return (
		<div className="p-6 text-center border rounded-xl shadow w-full max-w-sm mx-auto">
			<h2 className="text-lg font-semibold-mb-3">
				Counter + Toggle (Primitive)
			</h2>
			<p className="text-3xl font-bold mb-4">{count}</p>
			<div className="flex-gap-2 justify-center mb-6">
				<button
					onClick={() => setCount((count) => count - 1)}
					className="px-3 py-2 mr-2 rounded-lg bg-neutrall-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600"
				>
					Decrease
				</button>
				<button
					onClick={() => setCount((count) => count + 1)}
					className="px-3 py-2 mr-2 rounded-lg bg-neutrall-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600"
				>
					Increase
				</button>
				<button
					onClick={() => setCount(0)}
					className="px-3 py-2 rounded-lg bg-neutrall-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600"
				>
					Reset
				</button>
			</div>

			<button
				onClick={() => setVisible((visible) => !visible)}
				className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 mb-3"
			>
				{visible ? "hide" : "show"} Message
			</button>

			{visible && (
				<p className="text-sm text-neutral-600 dark:text-neutral-300">
					Count is <span className="font-semibold">{count}</span> - state is a
					**primitive** number.
				</p>
			)}
		</div>
	);
}
