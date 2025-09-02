import { useEffect, useState } from "react";

export default function PostsFetcher() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [limit, setLimit] = useState(10);

	useEffect(() => {
		const controller = new AbortController();
		const { signal } = controller;

		async function load() {
			try {
				setLoading(true);
				setError("");
				const response = await fetch(
					`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
          { signal }
				);
        if (!response.ok) throw new Error (`HTTP ${response.status}`);
        const data = await response.json()
        setPosts(data)
			} catch (err) {
        if (err.name !== 'AbortError') setError(err.message || "Unknown Error");
      } finally {
        setLoading(false)
      }
		}

    load()

    // cleanup: cancel request if component unmounts / limit changes quickly
    return () => controller.abort();
	}, [limit]);

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <h3 className="font-semibold">Posts (Limit: {limit})</h3>
        <button className="rounded border px-2 py-1 text-sm" onClick={() => setLimit((n) => (n >= 20 ? 5 : n + 5))}>
          Change Limit
        </button>
      </div>

      {loading && <p className="text-sm">Now Loading...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      <ul className="list-disc p-6">
        {posts.map((post) => (
          <li key={post.id} className="text-sm text-left">
            <span className="font-medium">{post.id}.</span> {post.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
