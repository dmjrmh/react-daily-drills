import { useState } from "react";

export default function ObjectStateExample() {
	const [profile, setProfile] = useState({
		name: "Georgesky",
		city: "New York",
		stats: { score: 0, level: 1 },
	});

	const updateCity = () =>
		setProfile((prev) => ({
			...prev,
			city: prev.city === "New York" ? "Los Angeles" : "New York",
		}));

	const levelUp = () =>
		setProfile((prev) => ({
			...prev,
			stats: { ...prev.stats, level: prev.stats.level + 1 },
		}));

	const addScore = (point) =>
		setProfile((prev) => ({
			...prev,
			stats: { ...prev.stats, score: prev.stats.score + point },
		}));

	const rename = () =>
		setProfile((prev) => ({
			...prev,
			name: prev.name === "Georgesky" ? "Skyline" : "Georgesky",
		}));

	return (
		<div className="p-6 text-center border rounded-xl shadow w-full max-w-sm mx-auto">
			<h2 className="text-lg font-semibold mb-3">
				Object State (Immutable Updates)
			</h2>
			<div className="mb-4 text-left text-sm space-y-1">
				<div>
					<span className="font-medium">Name:</span> {profile.name}
				</div>
				<div>
					<span className="font-medium">City:</span> {profile.city}
				</div>
				<div>
					<span className="font-medium">Level:</span> {profile.stats.level}
				</div>
				<div>
					<span className="font-medium">Score:</span> {profile.stats.score}
				</div>
			</div>

			<div className="flex flex-wrap gap-2 justify-center">
				<button
					onClick={rename}
					className="px-3 py-2 rounded-lg bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600"
				>
					Toggle Name
				</button>
				<button
					onClick={updateCity}
					className="px-3 py-2 rounded-lg bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600"
				>
					Toggle City
				</button>
				<button
					onClick={levelUp}
					className="px-3 py-2 rounded-lg bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600"
				>
					Level Up
				</button>
				<button
					onClick={() => addScore(5)}
					className="px-3 py-2 rounded-lg bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600"
				>
					+5 Score
				</button>
				<button
					onClick={() =>
						setProfile({
							name: "Georgesky",
							city: "New York",
							stats: { score: 0, level: 1 },
						})
					}
					className="px-3 py-2 rounded-lg bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600"
				>
					Reset
				</button>
			</div>

			<p className="mt-4 text-xs text-neutral-500">
				Uses object spreading:{" "}
				<code>{`setProfile(prev => ({...prev, field:newValue}))`}</code>
			</p>
		</div>
	);
}
