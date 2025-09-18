import TodoApp from "../components/day-7-todo/TodoApp";

export default function Day7View() {
	return (
		<main className="container mx-auto max-w-3xl px-4 py-10 space-y-10">
			<section className="rounded-lg border p-4">
				<TodoApp />
			</section>
		</main>
	);
}
