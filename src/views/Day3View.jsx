import CounterToggle from "../components/day-3-use-state/CounterToggle";
import ObjectStateExample from "../components/day-3-use-state/ObjectStateExample";
import ArrayStateExample from "../components/day-3-use-state/ArrayStateExample";

export default function Day3View() {
  return (
    <main className="p-6 space-y-6">
      <CounterToggle />
      <ObjectStateExample />
      <ArrayStateExample />
    </main>
  )
};
