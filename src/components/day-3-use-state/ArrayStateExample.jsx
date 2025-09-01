import { useState } from "react";

let seed = 1;
const newTag = () => `tag-${seed++}`;

export default function ArrayStateExample() {
	const [tags, setTags] = useState([
		{ id: 1, label: "react", active: true },
		{ id: 2, label: "tailwind", active: false },
		{ id: 3, label: "javascript", active: true },
	]);

	const add = () =>
		setTags((prev) => [
			...prev,
			{ id: Date.now(), label: newTag(), active: false },
		]);

	const toggle = (id) =>
		setTags((prev) =>
			prev.map((tag) => (tag.id === id ? { ...tag, active: !tag.active } : tag))
		);

	const removeInactive = () =>
		setTags((prev) => prev.filter((tag) => tag.active));

	return (
		<div className="p-6 text-center border rounded-xl shadow w-full max-w-sm mx-auto">
			<h2 className="text-lg font-semibold mb-3">Array State (Immutable)</h2>

			<ul className="mb-4 space-y-2">
				{tags.map((tag) => (
					<li
						className="flex items-center justify-between text-sm"
						key={tag.id}
					>
						<span className={tag.active ? "font-medium" : "opacity-60"}>
							#{tag.label}
						</span>
						<button
							onClick={() => toggle(tag.id)}
							className="px-2 py-1 rounded bg-neutral-200 hover::bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600"
						>
							{tag.active ? "Deactivate" : "Activate"}
						</button>
					</li>
				))}
			</ul>

			<div className="flex gap-2 justify-center">
				<button
					onClick={add}
					className="px-3 py-2 rounded-lg bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover-bg-neutral-600"
				>
					Add Tag
				</button>
				<button
					onClick={removeInactive}
					className="px-3 py-2 rounded-lg bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover-bg-neutral-600"
				>
					Keep Active Only
				</button>
			</div>
		</div>
	);
}
