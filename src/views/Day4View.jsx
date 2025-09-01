import { useMemo, useState } from "react";
import SearchBar from "../components/day-4-event-handling/SearchBar";

const MOCK_ITEMS = [
	"Puthu Ayu",
	"Klepon",
	"Getuk",
	"PHP",
	"Laravel",
	"React.js",
	"Express.js",
	"Next.js",
	"Tailwind CSS",
];

export default function Day4View() {
	const [query, setQuery] = useState("");

	const filteredItems = useMemo(() => {
		const q = query.trim().toLowerCase();
		if (!q) return MOCK_ITEMS;
		return MOCK_ITEMS.filter((item) => item.toLowerCase().includes(q));
	}, [query]);

	const handleSearch = (q) => {
		setQuery(q);
		console.log("[onSearch] query: ", q);
	};

	return (
		<main className="mx-auto max-w-4xl p-6 space-y-6">
			<h1 className="text-2xl font-bold">Day 4 - Event Handling</h1>

			<SearchBar onSearch={handleSearch} debounceMs={0} />

			<div className="rounded-xl border border-neutral-200/70 bg-white/70 p-4">
				<p className="mb-2 text-sm text-neutral-600">
					Result for: <strong>{query || "-"}</strong>
				</p>
				<ul className="list-disc pl-5 space-y-1">
					{filteredItems.map((v) => (
						<li key={v}>{v}</li>
					))}
				</ul>
			</div>

      <button onClick={() => alert("onClick works !")} className="rounded-lg border px-3 py-2 hover:bg-neutral-50">
        Example Simple onClick
      </button>
		</main>
	);
}
