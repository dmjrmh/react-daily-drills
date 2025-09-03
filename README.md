# Daily React + Next.js Practice (21 Days)

Learn React → Next.js gradually until you build a CRUD application with a database.
Goal: 21 days of consistency, daily progress + small, meaningful Pull Requests.

## 🎯 Objectives

- Master JSX, Components, Props, State, Events, and Hooks.
- Understand Next.js (Application Router, SSR/SSG/CSR, API Routes).
- Build a CRUD Final Project (Next.js + Prisma + SQLite/Postgres).
- Practice clean and measurable commit and PR habits.

## 🌿 Branching & PR Strategy

- `main` → stable / weekly milestone
- `development` → aggregate of daily PRs
- `day-x` → daily work (e.g., `day-5-useeffect`)

Daily workflow:

```bash
git checkout -b day-1-jsx
# coding...
git add .
git commit -m "feat: basic JSX & components"
git push -u origin day-1-jsx
# open PR from day-1-jsx → development
```

## 📚 Daily Learnings

### Day 1 — JSX & Basic Components

- Learned the basics of **JSX** syntax and the rule of single return elements.
- Practiced using **fragments** (`<>...</>`) to wrap multiple elements.
- Created three components (`Header`, `Card`, `Footer`) and rendered them inside `App.jsx`.
- Output: simple UI with header, two cards, and a footer.

### Day 2 — Props & Component Reusability

- ✅ Learned how props work in React
- ✅ Built `Greeting` component with props (`name`)
- ✅ Built reusable `Card` component with props (`title`, `description`, `image`)
- ✅ Linked them into `Day2View` for practice

## Day 3 — State with useState

### Goals

- Understand primitive state vs object state in React.
- Update state **immutably** (never mutate directly).
- Split commits by experiment (one commit per component).

### What I Built

- **CounterToggle** — primitive `number` + show/hide toggle.
- **ObjectStateExample** — object state (`profile`) updated immutably.
- _(Optional)_ **ArrayStateExample** — immutable updates on arrays (map/filter).

### Key Notes

- Never mutate state directly:
  - ❌ `state.count++`
  - ✅ `setState(prev => prev + 1)`
- For **objects**:
  - ❌ `profile.city = '…'`
  - ✅ `setProfile(prev => ({ ...prev, city: '…' }))`
- For **nested** fields:
  - ✅ `setUser(prev => ({ ...prev, stats: { ...prev.stats, score: prev.stats.score + 1 } }))`

### PR Instructions

Create a PR with **separate commits** per experiment:

1. `feat(day-3): add CounterToggle (primitive state)`
2. `feat(day-3): add ObjectStateExample (immutable object updates)`
3. `chore(day-3): update App and README`

Include screenshots in the PR.

## 📘 Day 4 — Event Handling

### Objectives
- Understand basic events in React (`onClick`, `onChange`, `onSubmit`)
- Prevent form reloads with `event.preventDefault()`
- Create a small form component: **SearchBar** (controlled input)
- Explain the event flow in the PR description

### Lessons Learned
- **onClick** → immediate action (e.g., alert, open modal)
- **onChange** → update the state of an input (controlled component)
- **onSubmit** + `preventDefault()` → prevent form reloads
- **useRef** → store a value between renders without triggering a rerender (e.g., `setTimeout` ID)
- **useMemo** → store the result of a calculation (e.g., a filter list) to prevent recalculation
- **Optional Chaining `?.()`** → Call the function only if it exists

### Created Components
- `SearchBar` → input + **Search** button, controlled input with `onSearch` callback
- Filtering a list of mock items based on a `query`

### Code Example
```jsx
<form onSubmit={handleSubmit}>
	<input
		type="search"
		value={query}
		onChange={handleChange}
		placeholder="Search..."
	/>
	<button type="submit">Search</button>
</form>
```

## Day 5 — useEffect (Lifecycle) & Fetch API

### Goals

- Understand when to use `useEffect` for side effects.
- Practice dependencies array (`[]`, `[deps]`) and cleanup.
- Fetch data from `JSONPlaceholder` with `AbortController`.

### What I built

- `PostsFetcher.jsx`: fetches `/posts?_limit={n}`; shows loading/error; cancels in-flight requests on unmount or when `limit` changes.
- `EffectLogger.jsx`: logs effect calls to the console for:
- no-deps (runs after every render),
- deps `[count]` (runs only when `count` changes),
- cleanup on unmount (clears an interval).

### Key Notes

- Do not do heavy work in an effect **without** a dependency array.
- Always add a cleanup when you start subscriptions/timers or perform cancellable tasks.
- Use `AbortController` to cancel fetch when the component unmounts.

### How to run

```bash
npm install
npm run dev
```

## Day 6 — Conditional & List Rendering

### Goals
- Learn to render lists with `.map()` and use stable keys.
- Practice conditional rendering using ternary (`? :`) and short-circuit (`&&`).
- Understand why using array index as a key is an anti-pattern.

### Components
- `Day6List.jsx`  
  Example of rendering list of users with stable keys (`id`).
  - Shows online status using **short-circuit rendering**.
  - Shows message with **ternary operator** depending on list length.

### Example Code
```jsx
export default function Day6List() {
  const users = [
    { id: 1, name: "Alice", online: true },
    { id: 2, name: "Bob", online: false },
    { id: 3, name: "Charlie", online: true },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Day 6 — Conditional & List Rendering</h2>
      <ul className="list-disc pl-5 space-y-1">
        {users.map((user) => (
          <li key={user.id} className="flex items-center gap-2">
            <span>{user.name}</span>
            {/* short-circuit: only show if online */}
            {user.online && <span className="text-green-500">● Online</span>}
          </li>
        ))}
      </ul>

      <div className="mt-4">
        {/* ternary operator */}
        {users.length > 0 ? (
          <p className="text-blue-600">We have {users.length} users</p>
        ) : (
          <p className="text-red-600">No users found</p>
        )}
      </div>
    </div>
  );
}
```

// ❌ DO NOT USE INDEX AS KEY
```
<ul>
  {users.map((user, index) => (
    <li key={index}>{user.name}</li>
  ))}
</ul>
```