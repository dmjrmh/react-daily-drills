import { useEffect, useState, useRef } from "react";

export default function SearchBar({
	onSearch,
	defaultQuery = "",
	debounceMs = 0, // set 300 for live search
}) {
	const [query, setQuery] = useState(defaultQuery);
	const debounceRef = useRef(null);

	const handleChange = (e) => {
		setQuery(e.target.value);

		// live search (optional)
		if (debounceMs > 0) {
			if (debounceRef.current) clearTimeout(debounceRef.current);
			debounceRef.current = setTimeout(() => {
				onSearch?.(e.target.value);
			}, debounceMs);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSearch?.(query);
	};

	useEffect(() => {
		return () => {
			if (debounceRef.current) clearTimeout(debounceRef.current);
		};
	}, []);

	return (
		<form onSubmit={handleSubmit} className="flex items-stretch gap-2">
			<div className="flex-1 relative">
				<input
					type="search"
					value={query}
					onChange={handleChange}
					placeholder="Input keywords"
					aria-label="Search bar"
					className="w-full rounded-xl border border-neutral-200/70 bg-white px-4 py-2 outline-none ring-0 focus:border-emerald-400/60 shadow-sm text-neutral-700"
				/>
			</div>

			<button
				type="submit"
				className="rounded-xl border border-emerald-500/30 bg-emerald-500/90 px-4 py-2 text-white hover:bg-emerald-500"
			>
				Search
			</button>
		</form>
	);
}
