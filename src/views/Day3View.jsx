import CounterToggle from "../components/day-3/CounterToggle";
import ObjectStateExample from "../components/day-3/ObjectStateExample";
import ArrayStateExample from "../components/day-3/ArrayStateExample";

export default function Day3View() {
  return (
    <main className="p-6 space-y-6">
      <CounterToggle />
      <ObjectStateExample />
      <ArrayStateExample />
    </main>
  )
};
