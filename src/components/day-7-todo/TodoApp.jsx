import { useEffect, useState } from "react";

const STORAGE_KEY = "Day_7_Todos";

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
}

function safeParse(value, fallback) {
  try {
    const x = JSON.parse(value)
    return Array.isArray(x) ? x : fallback;
  } catch {
    return fallback;
  }
}

export default function TodoApp() {
  const [todos, setTodos] = useState(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    return safeParse(raw, []);
  });
  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos]);

  function addTodo(e){
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    setTodos((prev) => [
      {id: uid(), text: value, done: false, createdAt: Date.now() },
      ...prev,
    ]);
    setText("");
  }

  function toggleTodo(id) {
    setTodos((prev) => 
    prev.map((t) => (t.id === id ? {...t, done: !t.done} : t))
  );
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div className="mx-auto max-w-lg p-6">
      <h1 className="text-xl font-bold mb-4">Day 7 - Mini To Do</h1>
      <form onSubmit={addTodo} className="flex gap-2 mb-4">
        <input 
          className="flex-1 border rounded px-4 py-2"
          placeholder="Add a new task ..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text" 
        />
        <button type="submit" className="rounded px-4 py-2 bg-black text-white">Add</button>
      </form>

      {todos.length === 0 ? (
        <p className="text-sm text-gray-500">No tasks yet. Add one above!</p>
      ) : (
        <ul className="space-y-2">
          {todos.map(t => (
            <li key={t.id} className="flex items-center justify-between border rounded px-4 py-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={t.done} onChange={() => toggleTodo(t.id)} />
                <span className={t.done ? "line-through text-gray-500" : ""}>{t.text}</span>
              </label>
              <button onClick={() => deleteTodo(t.id)} className="text-sm underline">Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
};
