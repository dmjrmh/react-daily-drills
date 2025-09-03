export default function Day6View() {
	const users = [
		{ id: 1, name: "Alice", online: true },
		{ id: 2, name: "Bob", online: true },
		{ id: 3, name: "Cato", online: true },
		{ id: 4, name: "Darius", online: false },
		{ id: 5, name: "Elaen", online: false },
		{ id: 6, name: "Fiona", online: false },
		{ id: 7, name: "Gerrard", online: true },
	];

	return (
		<div className="p-4">
			<h2 className="text-2xl font-bold mb-4">
				Day 6 — Conditional & List Rendering
			</h2>

			{/* ✅ List rendering with stable key */}
			<ul className="list-disc pl-6 space-y-1">
				{users.map((user) => (
					<li key={user.id} className="flex items-center gap-2">
						<span>{user.name}</span>
						{/* ✅ short-circuit rendering */} 
            {/* short - circuit contains : && / || */}
						{/* {user.online && <span className="text-green-600">● Online</span>} */}
            {/* if using ternary */}
            {user.online ? (
              <span className="text-green-600">● Online</span>
            ) : (
              <span className="text-red-600">● Offline</span>
            )}
					</li>
				))}
			</ul>

			{/* ✅ Conditional with ternary */}

			<div className="mt-4">
				{users.length > 0 ? (
					<p className="text-blue-600">We have {users.length} users</p>
				) : (
					<p className="text-red-600">No users found</p>
				)}
			</div>

			{/* ❌ Anti-pattern example */}
			<div className="mt-6 border-t pt-4">
				<h3 className="font-semibold mb-2">
					Anti-pattern Example (Don't do this)
				</h3>
				<ul className="list-disc pl-6 space-y-1 text-left">
					{users.map((user, index) => (
						<li key={index}>{user.name}</li>
					))}
				</ul>
				<p className="text-sm text-red-500 mt-1">
					⚠ Using index as key may cause UI bugs when list changes
				</p>
			</div>
		</div>
	);
}
