import PostsFetcher from "../components/day-5-use-effect/PostsFetcher";
import EffectLogger from "../components/day-5-use-effect/EffectLogger";

export default function Day5View() {
  return(
    <main className="container mx-auto max-w-3xl px-4 py-10 space-y-10">
      <header>
        <h1 className="text-2xl font-bold">Day 5 - use Effect (Lifecycle)</h1>
        <p className="text-neutral-600">
          Examples: fetching data with cleanup, effect with deps, and logging lifecycle.
        </p>
      </header>

      <section className="rounded-lg border p-4">
        <PostsFetcher/>
      </section>

      <section className="rounded-lg border p-4">
        <EffectLogger/>
      </section>
    </main>
  )
};
