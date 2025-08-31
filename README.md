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
